import React from 'react';

interface StoryCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'storybook' | 'sand' | 'midnight' | 'seaglass';
  isOrganicBorder?: boolean;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  children,
  className = '',
  variant = 'storybook',
  isOrganicBorder = false,
}) => {
  const variantStyles = {
    storybook: 'bg-[#FDFAF5] text-teal-800 border-teal-800/10 shadow-storybook',
    sand: 'bg-sand-50 text-teal-800 border-sand-300 shadow-storybook',
    midnight: 'bg-midnight-900 text-ivory-100 border-midnight-700 shadow-night',
    seaglass: 'bg-seaglass-50 text-teal-900 border-seaglass-200 shadow-storybook',
  };

  const borderClass = isOrganicBorder
    ? 'border-handcrafted rounded-3xl'
    : 'rounded-2xl sm:rounded-3xl';

  return (
    <div
      className={`relative p-6 sm:p-8 transition-all duration-300 border ${borderClass} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
