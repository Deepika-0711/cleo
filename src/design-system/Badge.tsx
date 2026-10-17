import React from 'react';

export type BadgeVariant = 'ivory' | 'teal' | 'seaglass' | 'coral' | 'sand' | 'midnight';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  isCollectorStamp?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'seaglass',
  className = '',
  isCollectorStamp = false,
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    ivory: 'bg-ivory-50 text-teal-800 border-sand-300',
    teal: 'bg-teal-50 text-teal-900 border-teal-300',
    seaglass: 'bg-seaglass-100 text-teal-800 border-seaglass-300',
    coral: 'bg-coral-100 text-coral-600 border-coral-300',
    sand: 'bg-sand-100 text-teal-800 border-sand-300',
    midnight: 'bg-midnight-900 text-seaglass-300 border-midnight-700',
  };

  const stampStyles = isCollectorStamp
    ? 'border-dashed border-2 px-3.5 py-1 text-xs tracking-wider uppercase font-semibold font-body'
    : 'border px-3 py-0.5 text-xs font-medium font-body rounded-full';

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-colors ${stampStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
