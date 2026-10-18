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
      <div className="h-px w-20 sm:w-36 bg-gradient-to-r from-transparent via-[#D4BA88]/45 to-transparent" />
      <DecorativeStar size={9} color="#D4BA88" />
      <ShellIcon variant="scallop" size={18} color="#D4BA88" accentColor="#5BB5A2" />
      <DecorativeStar size={9} color="#D4BA88" />
      <div className="h-px w-20 sm:w-36 bg-gradient-to-l from-transparent via-[#D4BA88]/45 to-transparent" />
    </div>
  );
};
