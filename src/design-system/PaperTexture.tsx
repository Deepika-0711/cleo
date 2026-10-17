import React from 'react';

/**
 * Subtle organic paper grain overlay component
 * Gives an artistic watercolor/parchment storybook feel without external images.
 */
export const PaperTexture: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.025] mix-blend-multiply"
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="storyPaperFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#storyPaperFilter)" />
      </svg>
    </div>
  );
};
