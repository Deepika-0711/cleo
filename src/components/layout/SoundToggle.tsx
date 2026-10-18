import React from 'react';
import { useSound } from '../../design-system/useSound';
import { useTheme } from '../../design-system/useTheme';

interface SoundToggleProps {
  className?: string;
  compact?: boolean;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ className = '', compact = false }) => {
  const { soundEnabled, toggleSound, isSupported } = useSound();
  const { isMoonlight } = useTheme();

  if (!isSupported) {
    return null; // Graceful degradation if Web Audio is unavailable
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={soundEnabled}
      aria-label={
        soundEnabled
          ? 'Sound is on. Press to mute gentle chimes'
          : 'Sound is muted. Press to enable gentle seashell chimes'
      }
      onClick={toggleSound}
      className={`group relative inline-flex items-center justify-center gap-1.5 p-1.5 min-w-[40px] min-h-[40px] rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 ${
        soundEnabled
          ? isMoonlight
            ? 'bg-midnight-900 border border-seaglass-400/50 shadow-[0_0_12px_rgba(91,181,162,0.35)] ring-1 ring-seaglass-400/40 text-seaglass-200'
            : 'bg-sand-100 border border-coral-400/50 shadow-[0_0_10px_rgba(244,139,118,0.3)] ring-1 ring-coral-400/30 text-coral-600'
          : isMoonlight
          ? 'bg-midnight-950/80 border border-midnight-700/80 hover:border-midnight-600 text-seaglass-300/60 hover:text-seaglass-200'
          : 'bg-sand-200/60 border border-sand-300/80 hover:border-sand-400 text-teal-800/60 hover:text-teal-900'
      } ${className}`}
      title={
        soundEnabled
          ? 'Sound Chimes: On • Gentle magical chimes active'
          : 'Sound Chimes: Off • Click to enable gentle magical chimes'
      }
    >
      {/* Seashell Music-Box Pearl Charm Icon */}
      <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-transform group-hover:scale-105">
        {soundEnabled ? (
          <>
            {/* Ambient Pearl Glow Ring */}
            <span
              className={`absolute inset-0 rounded-full blur-[3px] opacity-70 animate-pulse ${
                isMoonlight ? 'bg-seaglass-400' : 'bg-coral-400'
              }`}
              aria-hidden="true"
            />

            {/* Glowing Pearl Base */}
            <span
              className={`relative z-10 w-full h-full rounded-full flex items-center justify-center shadow-sm ${
                isMoonlight
                  ? 'bg-gradient-to-tr from-seaglass-600 to-seaglass-300 text-teal-950'
                  : 'bg-gradient-to-tr from-coral-500 via-coral-400 to-amber-200 text-white'
              }`}
            >
              {/* Active Sound Charm SVG (Pearl shell with chime ripples) */}
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Bell chime / shell speaker cone */}
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.3" />
                {/* Radiating chime wave 1 */}
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                {/* Radiating chime wave 2 */}
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" className="hidden sm:inline" />
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
            {/* Muted Chime Icon with delicate slash */}
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
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.1" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          </span>
        )}
      </span>

      {/* Label for desktop */}
      {!compact && (
        <span
          className={`hidden xl:inline-block pr-1 font-hand text-xs font-semibold tracking-wide transition-colors ${
            soundEnabled
              ? isMoonlight
                ? 'text-seaglass-200'
                : 'text-coral-600'
              : isMoonlight
              ? 'text-seaglass-300/60'
              : 'text-teal-700/70'
          }`}
        >
          {soundEnabled ? 'Chimes On' : 'Chimes Off'}
        </span>
      )}
    </button>
  );
};
