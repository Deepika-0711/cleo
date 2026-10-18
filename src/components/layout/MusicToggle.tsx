import React from 'react';
import { useSound } from '../../design-system/useSound';
import { useTheme } from '../../design-system/useTheme';

interface MusicToggleProps {
  className?: string;
  compact?: boolean;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ className = '', compact = false }) => {
  const { musicEnabled, toggleMusic, isSupported } = useSound();
  const { isMoonlight } = useTheme();

  if (!isSupported) {
    return null; // Graceful degradation if Web Audio is unavailable
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={musicEnabled}
      aria-label={
        musicEnabled
          ? 'Dreamy background music is playing. Press to pause music'
          : 'Dreamy background music is off. Press to play gentle seaside melody'
      }
      onClick={toggleMusic}
      className={`group relative inline-flex items-center justify-center gap-1.5 p-1.5 min-w-[40px] min-h-[40px] rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 ${
        musicEnabled
          ? isMoonlight
            ? 'bg-midnight-900 border border-seaglass-400/60 shadow-[0_0_12px_rgba(91,181,162,0.4)] ring-1 ring-seaglass-400/50 text-seaglass-200'
            : 'bg-sand-100 border border-coral-400/60 shadow-[0_0_12px_rgba(244,139,118,0.35)] ring-1 ring-coral-400/40 text-coral-600'
          : isMoonlight
          ? 'bg-midnight-950/80 border border-midnight-700/80 hover:border-midnight-600 text-seaglass-300/60 hover:text-seaglass-200'
          : 'bg-sand-200/60 border border-sand-300/80 hover:border-sand-400 text-teal-800/60 hover:text-teal-900'
      } ${className}`}
      title={
        musicEnabled
          ? 'Enchanted Music: On • Soft storybook seaside melody playing'
          : 'Enchanted Music: Off • Click to play soft storybook melody'
      }
    >
      {/* Seashell Music-Box Pearl Charm Icon */}
      <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-transform group-hover:scale-105">
        {musicEnabled ? (
          <>
            {/* Ambient Pearl Glow Ring */}
            <span
              className={`absolute inset-0 rounded-full blur-[3px] opacity-75 animate-pulse ${
                isMoonlight ? 'bg-seaglass-400' : 'bg-coral-400'
              }`}
              aria-hidden="true"
            />

            {/* Glowing Pearl Base with Animated Note */}
            <span
              className={`relative z-10 w-full h-full rounded-full flex items-center justify-center shadow-sm ${
                isMoonlight
                  ? 'bg-gradient-to-tr from-seaglass-600 to-seaglass-300 text-teal-950'
                  : 'bg-gradient-to-tr from-coral-500 via-coral-400 to-amber-200 text-white'
              }`}
            >
              {/* Musical Eighth Notes SVG with gentle float animation */}
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-float-gentle"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.4" />
                <circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </span>
          </>
        ) : (
          <span
            className={`w-full h-full rounded-full flex items-center justify-center border transition-colors ${
              isMoonlight
                ? 'bg-midnight-900 border-midnight-700 text-seaglass-300/60'
                : 'bg-sand-100 border-sand-300 text-teal-700/60'
            }`}
          >
            {/* Muted Musical Note with delicate diagonal slash */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18V5l12-2v7" />
              <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.1" />
              <line x1="2" y1="2" x2="22" y2="22" strokeWidth="1.8" />
            </svg>
          </span>
        )}
      </span>

      {/* Label for desktop */}
      {!compact && (
        <span
          className={`hidden xl:inline-block pr-1 font-hand text-xs font-semibold tracking-wide transition-colors ${
            musicEnabled
              ? isMoonlight
                ? 'text-seaglass-200'
                : 'text-coral-600'
              : isMoonlight
              ? 'text-seaglass-300/60'
              : 'text-teal-700/70'
          }`}
        >
          {musicEnabled ? 'Music On' : 'Music Off'}
        </span>
      )}
    </button>
  );
};
