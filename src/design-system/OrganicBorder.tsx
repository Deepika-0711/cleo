import React from 'react';
import { DecorativeStar } from './DecorativeStars';
import { ShellIcon } from './ShellIcon';

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  flipped?: boolean;
}

/**
 * Organic wave divider representing the gentle tide wash
 */
export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = '#FAF7EE',
  className = '',
  flipped = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flipped ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full h-8 sm:h-12 md:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

/**
 * Delicate horizontal storybook flourish with center shell motif
 */
export const StorybookFlourish: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
      <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-teal-800/25 to-teal-800/40" />
      <DecorativeStar size={10} color="#5BB5A2" />
      <ShellIcon variant="scallop" size={20} color="#0C5A60" accentColor="#5BB5A2" />
      <DecorativeStar size={10} color="#F48B76" />
      <div className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-teal-800/25 to-teal-800/40" />
    </div>
  );
};
