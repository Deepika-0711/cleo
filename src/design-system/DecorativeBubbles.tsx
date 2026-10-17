import React from 'react';

interface BubbleProps {
  size?: number;
  className?: string;
  delay?: string;
}

/**
 * Handcrafted translucent sea-glass bubble with delicate specular highlight
 */
export const DecorativeBubble: React.FC<BubbleProps> = ({
  size = 20,
  className = '',
  delay = '0s',
}) => {
  return (
    <div
      className={`relative rounded-full animate-bubble-drift ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: delay,
        background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(91, 181, 162, 0.25) 45%, rgba(12, 90, 96, 0.35) 90%)',
        boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.6), 0 2px 6px rgba(12, 90, 96, 0.1)',
        border: '0.75px solid rgba(255, 255, 255, 0.5)',
      }}
      aria-hidden="true"
    >
      {/* Specular pinpoint highlight */}
      <span
        className="absolute top-1 left-1 rounded-full bg-white opacity-80"
        style={{
          width: `${Math.max(3, size * 0.2)}px`,
          height: `${Math.max(3, size * 0.2)}px`,
        }}
      />
    </div>
  );
};

export const BubbleCluster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-end gap-2.5 ${className}`} aria-hidden="true">
      <DecorativeBubble size={14} delay="0s" />
      <DecorativeBubble size={24} delay="1.2s" />
      <DecorativeBubble size={18} delay="2.4s" />
    </div>
  );
};
