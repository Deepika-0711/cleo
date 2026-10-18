import React from 'react';
import { useTheme } from '../../design-system/useTheme';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', compact = false }) => {
  const { toggleThemeMode, isMoonlight } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isMoonlight}
      aria-label={`Switch to ${isMoonlight ? 'Sunshine' : 'Moonlight'} mode (Currently: ${
        isMoonlight ? 'Moonlight' : 'Sunshine'
      } mode)`}
      onClick={toggleThemeMode}
      className={`group relative inline-flex items-center justify-center gap-1.5 p-1 min-h-[40px] min-w-[56px] rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 ${
        isMoonlight
          ? 'bg-midnight-900 border border-midnight-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] ring-1 ring-seaglass-400/30'
          : 'bg-sand-200/80 border border-sand-300 shadow-[inset_0_2px_4px_rgba(12,90,96,0.08)] ring-1 ring-coral-300/40'
      } ${className}`}
      title={
        isMoonlight
          ? 'Switch to Sunshine Mode (Golden-hour beach)'
          : 'Switch to Moonlight Mode (Starry ocean night)'
      }
    >
      {/* Visual pill container holding Sun and Moon icons */}
      <span className="relative z-10 flex items-center justify-between w-full h-full px-1">
        {/* Sun Icon */}
        <span
          className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
            !isMoonlight
              ? 'bg-gradient-to-tr from-coral-400 via-amber-300 to-amber-200 text-teal-950 shadow-md scale-105'
              : 'text-seaglass-200/50 hover:text-seaglass-100 opacity-60'
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.25" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </span>

        {/* Moon Icon */}
        <span
          className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
            isMoonlight
              ? 'bg-gradient-to-tr from-midnight-700 via-seaglass-600 to-seaglass-400 text-ivory-50 shadow-md scale-105'
              : 'text-teal-700/50 hover:text-teal-800 opacity-60'
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-rotate-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="currentColor"
              fillOpacity="0.25"
            />
            {/* Tiny starlight sparkle next to moon */}
            <circle cx="19" cy="5" r="1" fill="currentColor" />
          </svg>
        </span>
      </span>

      {/* Label for compact/desktop indicator */}
      {!compact && (
        <span
          className={`hidden lg:inline-block pr-2 font-hand text-xs font-semibold tracking-wide transition-colors ${
            isMoonlight ? 'text-seaglass-200' : 'text-teal-800'
          }`}
        >
          {isMoonlight ? 'Moonlight' : 'Sunshine'}
        </span>
      )}
    </button>
  );
};
