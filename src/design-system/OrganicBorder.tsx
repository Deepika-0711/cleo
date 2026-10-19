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
 * Elegant Princess Fairytale Storybook Section Divider
 * Uses tiny luminous pearls, fine champagne-gold hairline rules, and a delicate central shell motif
 */
export const PrincessFairytaleDivider: React.FC<{
  className?: string;
  variant?: 'pearl' | 'shell' | 'star';
}> = ({ className = '', variant = 'shell' }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 sm:gap-3 py-6 sm:py-8 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Hairline Champagne-Gold Rule */}
      <div className="h-px w-16 sm:w-28 md:w-36 bg-gradient-to-r from-transparent via-[#D4BA88]/60 to-[#D4BA88]" />

      {/* Outer Pearl Stud */}
      <span className="w-1.5 h-1.5 rounded-full bg-white border border-[#D4BA88] shadow-[0_0_4px_rgba(255,255,255,0.8)]" />

      {/* Decorative Star Glint */}
      <DecorativeStar size={8} color="#D4BA88" />

      {/* Inner Pearl Stud */}
      <span className="w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />

      {/* Central Motif */}
      <div className="relative mx-1 flex items-center justify-center">
        {/* Soft background glow */}
        <span className="absolute inset-0 rounded-full blur-xs bg-coral-200/40" />

        {variant === 'shell' ? (
          <div className="relative p-1 rounded-full bg-white/90 border border-[#D4BA88]/70 shadow-xs">
            <ShellIcon variant="scallop" size={17} color="#0C5A60" accentColor="#D4BA88" />
          </div>
        ) : variant === 'pearl' ? (
          <div className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-[#FFF2E6] via-white to-[#FCEBE7] border border-[#D4BA88] shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_2px_#FFF]" />
          </div>
        ) : (
          <div className="relative p-1">
            <DecorativeStar size={14} color="#D4BA88" />
          </div>
        )}
      </div>

      {/* Inner Pearl Stud */}
      <span className="w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />

      {/* Decorative Star Glint */}
      <DecorativeStar size={8} color="#D4BA88" />

      {/* Outer Pearl Stud */}
      <span className="w-1.5 h-1.5 rounded-full bg-white border border-[#D4BA88] shadow-[0_0_4px_rgba(255,255,255,0.8)]" />

      {/* Right Hairline Champagne-Gold Rule */}
      <div className="h-px w-16 sm:w-28 md:w-36 bg-gradient-to-l from-transparent via-[#D4BA88]/60 to-[#D4BA88]" />
    </div>
  );
};

/**
 * Backward-compatible StorybookFlourish using PrincessFairytaleDivider styling
 */
export const StorybookFlourish: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <PrincessFairytaleDivider className={className} variant="shell" />;
};
