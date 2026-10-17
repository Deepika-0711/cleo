import React from 'react';

interface DecorativeStarProps {
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Handcrafted 4-point storybook star motif with gentle curve flares
 */
export const DecorativeStar: React.FC<DecorativeStarProps> = ({
  className = '',
  size = 18,
  color = 'currentColor',
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
        fill={color}
      />
    </svg>
  );
};

export const StarCluster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative inline-flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <DecorativeStar
        size={14}
        className="animate-star-shimmer text-coral-400"
        style={{ animationDelay: '0s' }}
      />
      <DecorativeStar
        size={22}
        className="animate-star-shimmer text-teal-600"
        style={{ animationDelay: '0.8s' }}
      />
      <DecorativeStar
        size={10}
        className="animate-star-shimmer text-seaglass-500"
        style={{ animationDelay: '1.6s' }}
      />
    </div>
  );
};
