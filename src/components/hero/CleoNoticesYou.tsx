import React, { useCallback, useEffect, useRef, useState } from 'react';
import cleoCharacterImg from '../../assets/cleo-hero-transparent.png';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { useSound } from '../../design-system/useSound';

interface CleoNoticesYouProps {
  isMoonlight: boolean;
}

const CLEO_SPEECH_LINES = [
  'Oh, hello, little dreamer! ♡',
  'Shall we explore a new world?',
  'Psst… I found something magical!',
  'You make this little world brighter ✨',
  'Listen closely… you can hear tiny waves inside! 🐚',
  'Did you find a special shell today? ♡',
  'Every shell has an entire world inside.',
];

export const CleoNoticesYou: React.FC<CleoNoticesYouProps> = ({ isMoonlight }) => {
  const { playCleoGreetingSound } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle gaze tracking (tiny specular pupil gleam shift, max ~1.2px)
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [isCurious, setIsCurious] = useState(false);
  const [speechBubbleOpen, setSpeechBubbleOpen] = useState(false);
  const [speechText, setSpeechText] = useState(CLEO_SPEECH_LINES[0]);

  const lineIndexRef = useRef(0);
  const curiousTimeoutRef = useRef<number | null>(null);
  const bubbleTimeoutRef = useRef<number | null>(null);
  const lastInteractionTimeRef = useRef<number>(0);

  // FEATURE 1: Gentle, Natural Eye-Gaze Tracking on Desktop (Tiny gleam shift only)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const handlePointerMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rafId = null;
          return;
        }

        const rect = containerRef.current.getBoundingClientRect();
        const cleoEyesX = rect.left + rect.width * 0.5;
        const cleoEyesY = rect.top + rect.height * 0.26;

        // Normalized delta relative to screen center
        const dx = (e.clientX - cleoEyesX) / (window.innerWidth * 0.5);
        const dy = (e.clientY - cleoEyesY) / (window.innerHeight * 0.5);

        // Clamp to [-1, 1] range for tiny, natural sub-pixel gleam movement
        const clampedX = Math.max(-1, Math.min(1, dx));
        const clampedY = Math.max(-1, Math.min(1, dy));

        setGaze({ x: clampedX, y: clampedY });
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // FEATURE 2 & 3: Cute Visitor Reaction & Delicate Cream Speech Bubble
  const triggerCuriousReaction = useCallback(() => {
    const now = Date.now();
    // Cooldown debounce: prevent rapid repeated clicks within 2.5s
    if (now - lastInteractionTimeRef.current < 2500 && speechBubbleOpen) {
      return;
    }
    lastInteractionTimeRef.current = now;

    // Reset previous timers
    if (curiousTimeoutRef.current) {
      window.clearTimeout(curiousTimeoutRef.current);
    }
    if (bubbleTimeoutRef.current) {
      window.clearTimeout(bubbleTimeoutRef.current);
    }

    setIsCurious(true);
    playCleoGreetingSound();

    // Advance to next charming quote
    const nextIndex = (lineIndexRef.current + 1) % CLEO_SPEECH_LINES.length;
    lineIndexRef.current = nextIndex;
    setSpeechText(CLEO_SPEECH_LINES[nextIndex]);
    setSpeechBubbleOpen(true);

    // Sweet head tilt duration
    curiousTimeoutRef.current = window.setTimeout(() => {
      setIsCurious(false);
    }, 2200);

    // Auto-dismiss message smoothly after 5.5s
    bubbleTimeoutRef.current = window.setTimeout(() => {
      setSpeechBubbleOpen(false);
    }, 5500);
  }, [playCleoGreetingSound, speechBubbleOpen]);

  // Keyboard accessibility: Escape closes speech bubble
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && speechBubbleOpen) {
        setSpeechBubbleOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [speechBubbleOpen]);

  // Click near Cleo listener on desktop
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cleoCenterX = rect.left + rect.width * 0.5;
      const cleoCenterY = rect.top + rect.height * 0.5;

      const dist = Math.hypot(e.clientX - cleoCenterX, e.clientY - cleoCenterY);
      // Gentle proximity notice if clicking on beach sand near her
      if (dist < 220 && !containerRef.current.contains(e.target as Node)) {
        triggerCuriousReaction();
      }
    };

    window.addEventListener('click', handleDocumentClick);
    return () => window.removeEventListener('click', handleDocumentClick);
  }, [triggerCuriousReaction]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (curiousTimeoutRef.current) window.clearTimeout(curiousTimeoutRef.current);
      if (bubbleTimeoutRef.current) window.clearTimeout(bubbleTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 right-2 sm:right-6 md:right-10 lg:right-14 z-20 flex flex-col items-center pointer-events-auto select-none"
      style={{
        maxWidth: '38%',
      }}
    >
      {/* 3. CUTE VISITOR REACTION SPEECH BUBBLE: Delicate cream bubble with fine pink border */}
      <div
        role="status"
        aria-live="polite"
        className={`absolute bottom-[calc(100%+8px)] sm:bottom-[calc(100%+14px)] right-0 sm:-right-4 w-52 sm:w-68 max-w-[calc(100vw-3rem)] p-3 sm:p-4 rounded-2xl z-30 transition-all duration-300 ease-out ${
          speechBubbleOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        } ${
          isMoonlight
            ? 'bg-[#0C1527]/98 border border-[#F48B9E]/70 text-ivory-100 shadow-night'
            : 'bg-[#FFFDF7]/98 border border-[#F48B9E]/80 text-teal-950 shadow-[0_10px_30px_-6px_rgba(244,139,158,0.28),0_4px_12px_rgba(12,70,75,0.06)]'
        }`}
      >
        {/* Top Folio Header */}
        <div className="flex items-center justify-between gap-1 mb-2 pb-1.5 border-b border-[#F48B9E]/30">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold font-mono flex items-center gap-1.5 text-[#F48B9E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F48B9E] animate-pulse" />
            <span>Cleo Whispers ♡</span>
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSpeechBubbleOpen(false);
            }}
            className="w-5 h-5 flex items-center justify-center text-xs opacity-60 hover:opacity-100 rounded transition-opacity cursor-pointer text-[#F48B9E] hover:text-[#DE6B54] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F48B9E]"
            aria-label="Close Cleo's message"
          >
            &times;
          </button>
        </div>

        {/* Storybook Quote Text */}
        <p
          className={`font-hand text-base sm:text-lg leading-snug ${
            isMoonlight ? 'text-ivory-100' : 'text-teal-950'
          }`}
        >
          &ldquo;{speechText}&rdquo;
        </p>

        {/* Speech Bubble Pointer Tail (Cream with fine pink border) */}
        <div
          className={`absolute -bottom-2 right-10 sm:right-12 w-3.5 h-3.5 rotate-45 border-r border-b ${
            isMoonlight
              ? 'bg-[#0C1527] border-[#F48B9E]/70'
              : 'bg-[#FFFDF7] border-[#F48B9E]/80'
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Cleo 3D Storybook Character Interactive Button */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Cleo — The Girl Who Collects Worlds. Press Enter or Space to greet her, or click or tap to hear her thoughts"
        onClick={triggerCuriousReaction}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerCuriousReaction();
          }
        }}
        title="Meet Cleo — Click or tap to see her curious expression and hear her thoughts"
        className="group relative cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-coral-400 rounded-3xl p-1 transition-all"
      >
        {/* Ambient Magical Rosy Shell Glow Aura */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-700 pointer-events-none ${
            isCurious ? 'opacity-90 scale-115' : 'opacity-35 group-hover:opacity-65'
          }`}
          style={{
            background: isMoonlight
              ? 'radial-gradient(circle, rgba(244, 139, 158, 0.45) 0%, rgba(91, 181, 162, 0.35) 45%, transparent 75%)'
              : 'radial-gradient(circle, rgba(254, 215, 170, 0.75) 0%, rgba(244, 139, 158, 0.4) 50%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        {/* Character Ground Shadow on beach sand */}
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 sm:h-4 rounded-full blur-sm pointer-events-none opacity-40 transition-colors"
          style={{
            backgroundColor: isMoonlight ? '#050a16' : '#0C5A60',
          }}
          aria-hidden="true"
        />

        {/* 2. SWEET CHARACTER ANIMATIONS:
            - Gentle, relaxed floating motion (animate-cleo-float)
            - Cute head tilt on reaction / hover
        */}
        <div
          className="relative transition-transform duration-500 ease-out animate-cleo-float"
          style={{
            transform: isCurious
              ? 'translateY(-3px) rotate(-3.5deg) scale(1.025)'
              : 'translateY(0px) rotate(0deg)',
          }}
        >
          {/* Main 3D Storybook Character Image */}
          <img
            src={cleoCharacterImg}
            alt="Cleo — Adorable 3D storybook girl with voluminous chestnut curls, ocean seashell crown, and vintage cream lace dress"
            className={`relative z-10 w-28 sm:w-40 md:w-52 lg:w-60 max-h-[82%] h-auto object-contain transition-all duration-500 group-hover:scale-[1.03] ${
              isMoonlight
                ? 'brightness-[0.92] contrast-[1.04] hue-rotate-[195deg]'
                : 'brightness-100 contrast-100'
            }`}
            style={{
              filter: isMoonlight
                ? 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.6))'
                : 'drop-shadow(0 8px 20px rgba(12, 90, 96, 0.22))',
            }}
          />

          {/* 1. GENTLE EYE-FOLLOWING:
              Subtle specular light gleam shift (max 1.2px) over her pupil catchlights
              Natural, cute, zero facial distortion
          */}
          <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
            {/* Left Eye Gaze Gleam */}
            <div
              className="absolute w-2 h-2 rounded-full transition-transform duration-100 ease-out"
              style={{
                top: '25.3%',
                left: '45.7%',
                transform: `translate(${gaze.x * 1.2}px, ${gaze.y * 0.8}px)`,
              }}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-white/75 shadow-[0_0_2px_#FFF]" />
            </div>

            {/* Right Eye Gaze Gleam */}
            <div
              className="absolute w-2 h-2 rounded-full transition-transform duration-100 ease-out"
              style={{
                top: '25.5%',
                left: '53.5%',
                transform: `translate(${gaze.x * 1.2}px, ${gaze.y * 0.8}px)`,
              }}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-white/75 shadow-[0_0_2px_#FFF]" />
            </div>

            {/* Rosy Cheek Blush Glow (Gently warms up on curious smile) */}
            <div
              className={`absolute top-[28%] left-[42%] w-3 h-2 rounded-full bg-coral-400/40 blur-[2px] transition-all duration-500 ${
                isCurious ? 'opacity-90 scale-125' : 'opacity-30'
              }`}
            />
            <div
              className={`absolute top-[28.2%] left-[56%] w-3 h-2 rounded-full bg-coral-400/40 blur-[2px] transition-all duration-500 ${
                isCurious ? 'opacity-90 scale-125' : 'opacity-30'
              }`}
            />
          </div>

          {/* 2. OCCASIONAL TINY SPARKLES:
              - Near Cleo's flower / seashell crown
              - Near Cleo's dress / seashell bag
          */}
          {/* Sparkle 1: Center Shell Crown Crest */}
          <div
            className={`absolute top-[3%] left-[51%] -translate-x-1/2 pointer-events-none z-20 transition-transform duration-300 ${
              isCurious ? 'scale-125' : 'scale-100'
            }`}
          >
            <DecorativeStar
              size={13}
              color={isMoonlight ? '#80DEEA' : '#FFD54F'}
              className="animate-star-shimmer"
            />
          </div>

          {/* Sparkle 2: Crown Left Blossom */}
          <div
            className="absolute top-[8%] left-[28%] pointer-events-none z-20 animate-star-shimmer"
            style={{ animationDelay: '1.4s' }}
          >
            <DecorativeStar
              size={10}
              color={isMoonlight ? '#FFB8D2' : '#F48B9E'}
            />
          </div>

          {/* Sparkle 3: Bodice Seashell Accent */}
          <div
            className="absolute top-[50%] left-[53%] pointer-events-none z-20 animate-star-shimmer"
            style={{ animationDelay: '2.5s' }}
          >
            <DecorativeStar
              size={11}
              color={isMoonlight ? '#FFFFFF' : '#FAF7EE'}
            />
          </div>
        </div>

        {/* Character Interaction Pill Tag */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap pointer-events-none">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-hand font-semibold tracking-wide backdrop-blur-md border shadow-sm transition-all group-hover:scale-105 ${
              isMoonlight
                ? 'bg-midnight-950/90 text-seaglass-200 border-midnight-700'
                : 'bg-white/95 text-teal-950 border-[#F48B9E]/60'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-transform ${
                isCurious ? 'bg-[#F48B9E] scale-125 animate-pulse' : 'bg-coral-400'
              }`}
            />
            <span>{isCurious ? 'Cleo Smiles! ♡' : 'Cleo ♡'}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
