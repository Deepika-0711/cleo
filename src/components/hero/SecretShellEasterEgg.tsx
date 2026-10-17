import React, { useEffect, useRef, useState } from 'react';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { useSound } from '../../design-system/useSound';

interface SecretShellEasterEggProps {
  isMoonlight: boolean;
}

export const SecretShellEasterEgg: React.FC<SecretShellEasterEggProps> = ({ isMoonlight }) => {
  const { playEasterEggSound } = useSound();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    playEasterEggSound();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Auto focus close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* THE SECRET GLOWING SHELL IN THE SAND */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-5 sm:left-10 z-20 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle Tooltip on Hover / Focus */}
        <div
          role="tooltip"
          className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] font-hand font-semibold whitespace-nowrap shadow-md border pointer-events-none transition-all duration-300 ${
            isHovered
              ? 'opacity-100 -translate-y-1'
              : 'opacity-0 translate-y-1'
          } ${
            isMoonlight
              ? 'bg-midnight-950/90 text-seaglass-200 border-midnight-700'
              : 'bg-white/95 text-teal-900 border-sand-300'
          }`}
        >
          A curious glimmer in the sand...
        </div>

        {/* Interactive Shell Button */}
        <button
          type="button"
          onClick={handleOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpen();
            }
          }}
          aria-label="Secret Easter Egg: A tiny glowing golden shell half-buried in the sand. Press Enter to discover its secret"
          aria-haspopup="dialog"
          className="relative block p-1.5 rounded-full transition-transform duration-300 hover:scale-125 focus:outline-none focus-visible:ring-4 focus-visible:ring-coral-400 cursor-pointer"
        >
          {/* Ambient Golden Glow Aura */}
          <span
            className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${
              isHovered ? 'opacity-90 scale-125' : 'opacity-40 animate-pulse'
            }`}
            style={{
              background: isMoonlight
                ? 'radial-gradient(circle, rgba(255, 242, 117, 0.7) 0%, rgba(91, 181, 162, 0.4) 60%, transparent 80%)'
                : 'radial-gradient(circle, rgba(255, 215, 0, 0.75) 0%, rgba(244, 139, 118, 0.5) 60%, transparent 80%)',
            }}
            aria-hidden="true"
          />

          {/* Golden Glint / Periodic Star Twinkle Clue */}
          <span
            className="absolute -top-1 -right-1 pointer-events-none z-10 animate-star-shimmer"
            aria-hidden="true"
          >
            <DecorativeStar size={11} color={isMoonlight ? '#FFF59D' : '#FFB300'} />
          </span>

          {/* Handcrafted Golden Conch Illustration half-buried in sand */}
          <svg
            className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md transition-transform duration-300 group-hover:rotate-6"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sand bedding underneath shell */}
            <ellipse
              cx="18"
              cy="28"
              rx="14"
              ry="4"
              fill={isMoonlight ? '#111A38' : '#D9BE91'}
              fillOpacity={isMoonlight ? 0.6 : 0.45}
            />
            {/* Shell outer spiral body */}
            <path
              d="M10 24C8 18 12 9 19 8C26 7 29 12 28 17C27 22 23 25 18 26C14 27 11 25.5 10 24Z"
              fill="url(#easterEggGoldGrad)"
              stroke={isMoonlight ? '#FFE57F' : '#E0A96D'}
              strokeWidth="1.2"
            />
            {/* Inner Spiral chambers */}
            <path
              d="M14 20C13 16 15 11 19 11C23 11 25 14 24 17C23 20 20 22 17 22"
              stroke="#FFF9C4"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M16 17C16 15 17 13 19 13C21 13 22 15 21 16.5"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Iridescent Pearl Core */}
            <circle cx="18" cy="15" r="2.2" fill="#FFFFFF" fillOpacity="0.95" />
            <circle cx="17.4" cy="14.4" r="0.8" fill="#FFFDE7" />

            {/* Gradients */}
            <defs>
              <linearGradient id="easterEggGoldGrad" x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF9C4" />
                <stop offset="35%" stopColor="#FFD54F" />
                <stop offset="70%" stopColor="#FFA726" />
                <stop offset="100%" stopColor="#F57C00" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>

      {/* DISCOVERY SECRET SCENE MODAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="secret-shell-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/60 backdrop-blur-sm animate-fadeIn"
          onClick={handleClose}
        >
          {/* Card Container */}
          <div
            className={`relative max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all duration-300 transform scale-100 ${
              isMoonlight
                ? 'bg-midnight-950 border-midnight-700 text-ivory-50 shadow-night'
                : 'bg-gradient-to-b from-ivory-50 to-sand-50 border-sand-300 text-teal-900 shadow-storybook-hover'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Pearls and Sparkles Animation in Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" aria-hidden="true">
              {/* Floating Pearl 1 */}
              <div
                className="absolute top-6 left-8 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_#FFF] animate-float-gentle opacity-80"
                style={{ animationDelay: '0.2s' }}
              />
              {/* Floating Pearl 2 */}
              <div
                className="absolute bottom-8 right-10 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-200 to-white shadow-[0_0_10px_#FFE082] animate-float-gentle opacity-85"
                style={{ animationDelay: '0.7s' }}
              />
              {/* Floating Pearl 3 */}
              <div
                className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-seaglass-200 shadow-sm animate-float-gentle opacity-70"
                style={{ animationDelay: '1.2s' }}
              />
              {/* Twinkling Stars */}
              <div className="absolute top-8 right-14 animate-star-shimmer">
                <DecorativeStar size={16} color="#FFD54F" />
              </div>
              <div className="absolute bottom-12 left-12 animate-star-shimmer" style={{ animationDelay: '0.5s' }}>
                <DecorativeStar size={12} color="#81D4FA" />
              </div>
            </div>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 mb-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coral-100 text-coral-700 border border-coral-200">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-500 animate-ping" />
                <span>Secret Discovery</span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close secret story note"
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold opacity-60 hover:opacity-100 hover:bg-sand-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
              >
                &times;
              </button>
            </div>

            {/* Glowing Golden Shell Focal Artwork */}
            <div className="flex flex-col items-center justify-center text-center my-4 relative z-10">
              <div className="relative mb-4">
                {/* Radiant Backdrop Halo */}
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full blur-xl opacity-60 animate-pulse"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(244, 139, 118, 0.4) 60%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Central Glowing Conch Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-100 via-white to-amber-50 border-2 border-amber-300 shadow-lg flex items-center justify-center animate-float-gentle">
                    <svg className="w-12 h-12" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M10 24C8 18 12 9 19 8C26 7 29 12 28 17C27 22 23 25 18 26C14 27 11 25.5 10 24Z"
                        fill="url(#modalGoldGrad)"
                        stroke="#D4A017"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M14 20C13 16 15 11 19 11C23 11 25 14 24 17C23 20 20 22 17 22"
                        stroke="#FFF9C4"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <circle cx="18" cy="15" r="3" fill="#FFFFFF" />
                      <circle cx="17.2" cy="14.2" r="1" fill="#FFFDE7" />
                      <defs>
                        <linearGradient id="modalGoldGrad" x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF9C4" />
                          <stop offset="40%" stopColor="#FFD54F" />
                          <stop offset="100%" stopColor="#FF9800" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title & Lore */}
              <h3 id="secret-shell-title" className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-1">
                The Sunlit Spiral
              </h3>
              <p className="font-hand text-sm sm:text-base text-coral-600 font-semibold mb-4">
                Cleo's Very First Finding &bull; Beach Mile 0.0
              </p>

              {/* Cleo's Secret Message */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border text-left mb-5 transition-colors ${
                  isMoonlight
                    ? 'bg-midnight-900/90 border-midnight-700 text-ivory-100'
                    : 'bg-white/95 border-sand-300 text-teal-900 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-coral-600">
                    Whisper from Cleo
                  </span>
                </div>
                <blockquote className="font-hand text-lg sm:text-xl text-teal-900 leading-snug">
                  &ldquo;Psst... every world starts with a little wonder. I&apos;m glad you found me!&rdquo;
                </blockquote>
                <p className="font-body text-xs text-teal-800/80 leading-relaxed mt-2.5 pt-2.5 border-t border-sand-300/40">
                  Before Cleo knew that whole sunken kingdoms and floating windmills slept inside seashells,
                  she found this tiny golden conch in the sand. She left it right here as a quiet reminder
                  for anyone with the heart to look closely.
                </p>
              </div>

              {/* Close / Keep Wondering Button */}
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-800 text-ivory-50 hover:bg-teal-700 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
              >
                Keep Exploring Shoreline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
