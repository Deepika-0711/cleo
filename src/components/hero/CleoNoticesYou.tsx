import React, { useCallback, useEffect, useRef, useState } from 'react';
import cleoCharacterImg from '../../assets/cleo-hero-transparent.png';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { useSound } from '../../design-system/useSound';

interface CleoNoticesYouProps {
  isMoonlight: boolean;
}

const CLEO_SPEECH_LINES = [
  'Did you find a special shell?',
  "I wonder what's inside this one...",
  'Listen closely... you can hear tiny waves inside!',
  'Look at that soft light dancing on the water today.',
  "Every grain of sand has a story if you're patient.",
  'Are you collecting worlds with me?',
  "I think there's a secret hidden somewhere in the sand...",
  'The ocean always leaves the prettiest treasures behind.',
];

export const CleoNoticesYou: React.FC<CleoNoticesYouProps> = ({ isMoonlight }) => {
  const { playCleoGreetingSound } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [isCurious, setIsCurious] = useState(false);
  const [speechBubbleOpen, setSpeechBubbleOpen] = useState(false);
  const [speechText, setSpeechText] = useState(CLEO_SPEECH_LINES[0]);
  const lineIndexRef = useRef(0);
  const curiousTimeoutRef = useRef<number | null>(null);
  const bubbleTimeoutRef = useRef<number | null>(null);

  // FEATURE 1: Mouse pointer tracking on desktop
  useEffect(() => {
    // Check user preference for reduced motion
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
        const cleoCenterX = rect.left + rect.width * 0.5;
        const cleoEyesY = rect.top + rect.height * 0.26; // Approx eye height in figure

        const dx = (e.clientX - cleoCenterX) / (window.innerWidth * 0.5);
        const dy = (e.clientY - cleoEyesY) / (window.innerHeight * 0.5);

        // Clamp to [-1, 1] range
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

  // Trigger curious reaction & gentle head tilt
  const triggerCuriousReaction = useCallback(() => {
    // Reset previous timer
    if (curiousTimeoutRef.current) {
      window.clearTimeout(curiousTimeoutRef.current);
    }
    if (bubbleTimeoutRef.current) {
      window.clearTimeout(bubbleTimeoutRef.current);
    }

    setIsCurious(true);
    playCleoGreetingSound();

    // Pick next non-repeating line
    const nextIndex = (lineIndexRef.current + 1) % CLEO_SPEECH_LINES.length;
    lineIndexRef.current = nextIndex;
    setSpeechText(CLEO_SPEECH_LINES[nextIndex]);
    setSpeechBubbleOpen(true);

    // Head tilt duration
    curiousTimeoutRef.current = window.setTimeout(() => {
      setIsCurious(false);
    }, 1600);

    // Auto dismiss speech bubble after 6.5s if not closed manually
    bubbleTimeoutRef.current = window.setTimeout(() => {
      setSpeechBubbleOpen(false);
    }, 6500);
  }, [playCleoGreetingSound]);

  // Click near Cleo listener on desktop
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cleoCenterX = rect.left + rect.width * 0.5;
      const cleoCenterY = rect.top + rect.height * 0.5;

      const dist = Math.hypot(e.clientX - cleoCenterX, e.clientY - cleoCenterY);
      // If clicked near her (within 280px) but outside her direct element
      if (dist < 280 && !containerRef.current.contains(e.target as Node)) {
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
      {/* Interactive Speech Bubble from Cleo */}
      {speechBubbleOpen && (
        <div
          role="status"
          aria-live="polite"
          className={`absolute -top-28 sm:-top-32 right-0 sm:-right-4 w-52 sm:w-64 p-3 rounded-2xl shadow-storybook border text-left z-30 animate-float-gentle transition-colors duration-300 ${
            isMoonlight
              ? 'bg-midnight-950/95 border-midnight-700 text-ivory-100 shadow-night'
              : 'bg-white/95 border-sand-300 text-teal-900 shadow-storybook-hover'
          }`}
        >
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-coral-600 font-body flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-400 animate-pulse" />
              <span>Cleo Whispers</span>
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSpeechBubbleOpen(false);
              }}
              className="text-xs opacity-50 hover:opacity-100 px-1 py-0.5 rounded transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-coral-400"
              aria-label="Close Cleo's message"
            >
              &times;
            </button>
          </div>
          <p className="font-hand text-xs sm:text-sm text-teal-800 leading-snug">
            &ldquo;{speechText}&rdquo;
          </p>
          {/* Speech bubble tail pointer */}
          <div
            className={`absolute -bottom-2 right-12 w-3 h-3 rotate-45 border-r border-b ${
              isMoonlight
                ? 'bg-midnight-950 border-midnight-700'
                : 'bg-white border-sand-300'
            }`}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Cleo 3D Storybook Character Container */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Cleo — The Girl Who Collects Worlds. Press Enter or Space to greet her, or click to hear her thoughts"
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
        {/* Subtle magical shell glow aura */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
            isCurious ? 'opacity-85 scale-110' : 'opacity-35 group-hover:opacity-60'
          }`}
          style={{
            background: isMoonlight
              ? 'radial-gradient(circle, rgba(91, 181, 162, 0.6) 0%, rgba(13, 22, 45, 0.6) 60%, transparent 80%)'
              : 'radial-gradient(circle, rgba(254, 215, 170, 0.7) 0%, rgba(91, 181, 162, 0.4) 60%, transparent 80%)',
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

        {/* 3D Parallax & Head Tilt Wrapper */}
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{
            transform: isCurious
              ? 'perspective(750px) rotate(-6deg) scale(1.05) translateY(-4px)'
              : `perspective(750px) rotateY(${gaze.x * 5.5}deg) rotateX(${-gaze.y * 3}deg) translateX(${gaze.x * 3}px)`,
          }}
        >
          {/* Main 3D Storybook Character Image */}
          <img
            src={cleoCharacterImg}
            alt="Cleo — Adorable 3D storybook girl with voluminous chestnut curls, ocean seashell crown, and vintage cream lace dress"
            className={`relative z-10 w-32 sm:w-44 md:w-56 lg:w-64 h-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              isMoonlight
                ? 'brightness-[0.88] contrast-[1.05] hue-rotate-[195deg]'
                : 'brightness-100 contrast-100'
            }`}
            style={{
              filter: isMoonlight
                ? 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.6))'
                : 'drop-shadow(0 8px 20px rgba(12, 90, 96, 0.22))',
            }}
          />

          {/* EYE MOVEMENT OVERLAY: Subtly follows mouse pointer across desktop */}
          <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
            {/* Left Eye Gaze Gleam */}
            <div
              className="absolute w-2 h-2 rounded-full transition-transform duration-75 ease-out"
              style={{
                top: '25.2%',
                left: '45.8%',
                transform: `translate(${gaze.x * 3.2}px, ${gaze.y * 2.2}px)`,
              }}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_2px_#FFF]" />
            </div>

            {/* Right Eye Gaze Gleam */}
            <div
              className="absolute w-2 h-2 rounded-full transition-transform duration-75 ease-out"
              style={{
                top: '25.4%',
                left: '53.6%',
                transform: `translate(${gaze.x * 3.2}px, ${gaze.y * 2.2}px)`,
              }}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_2px_#FFF]" />
            </div>

            {/* Rosy Cheek Curious Glow (intensifies on curious expression) */}
            <div
              className={`absolute top-[28%] left-[42%] w-3 h-2 rounded-full bg-coral-400/35 blur-[2px] transition-opacity duration-300 ${
                isCurious ? 'opacity-90 scale-125' : 'opacity-25'
              }`}
            />
            <div
              className={`absolute top-[28.2%] left-[56%] w-3 h-2 rounded-full bg-coral-400/35 blur-[2px] transition-opacity duration-300 ${
                isCurious ? 'opacity-90 scale-125' : 'opacity-25'
              }`}
            />
          </div>

          {/* Starlight Shimmer at her Shell Tiara */}
          <div
            className={`absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none z-20 transition-transform ${
              isCurious ? 'scale-125' : 'scale-100'
            }`}
          >
            <DecorativeStar
              size={14}
              color={isMoonlight ? '#80DEEA' : '#FFF275'}
              className="animate-star-shimmer"
            />
          </div>
        </div>

        {/* Character Interaction Pill */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide backdrop-blur-md border shadow-md transition-all group-hover:scale-105 ${
              isMoonlight
                ? 'bg-midnight-950/90 text-seaglass-200 border-midnight-700'
                : 'bg-white/90 text-teal-900 border-sand-300'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isCurious ? 'bg-amber-400 scale-125' : 'bg-coral-400 animate-pulse'
              }`}
            />
            <span>{isCurious ? 'Cleo Notices You!' : 'Meet Cleo'}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
