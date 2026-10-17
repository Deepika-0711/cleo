import React from 'react';

export type ShellVariant = 'nautilus' | 'scallop' | 'conch';

interface ShellIconProps {
  variant?: ShellVariant;
  size?: number;
  className?: string;
  color?: string;
  accentColor?: string;
}

/**
 * Handcrafted original SVG illustrations of shells
 * Original geometric curves, clean linework, no copyrighted shapes.
 */
export const ShellIcon: React.FC<ShellIconProps> = ({
  variant = 'scallop',
  size = 32,
  className = '',
  color = '#0C5A60',
  accentColor = '#5BB5A2',
}) => {
  if (variant === 'nautilus') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-hidden="true"
      >
        {/* Outer logarithmic curve */}
        <path
          d="M24 6C14.059 6 6 14.059 6 24C6 33.941 14.059 42 24 42C33.941 42 42 33.941 42 24C42 16.5 36.5 10.5 29 10.5C22.5 10.5 17.5 15.5 17.5 22C17.5 27.5 21.5 31.5 26.5 31.5C30.5 31.5 33.5 28.5 33.5 24.5C33.5 21.5 31 19.5 28 19.5"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Chamber rib lines */}
        <path
          d="M24 6C27 12 29 17 29 24.5"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M36 12C34 18 31 22 26.5 24.5"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M42 24C36 25 31 25.5 26.5 28.5"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="28" cy="22" r="2" fill={accentColor} />
      </svg>
    );
  }

  if (variant === 'conch') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-hidden="true"
      >
        {/* Conch spire and body */}
        <path
          d="M24 4L28 12L34 16L38 26L32 38L24 44L16 38L10 26L14 16L20 12L24 4Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Inner spiral ridges */}
        <path
          d="M20 12C24 14 28 14 28 12"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M14 16C22 19 30 19 34 16"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M10 26C20 30 28 30 38 26"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M16 38C22 40 26 40 32 38"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="24" cy="26" r="2.5" fill={color} />
      </svg>
    );
  }

  // Default: Fan Scallop
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Scallop fan contour */}
      <path
        d="M24 8C33 8 41 15 41 26C41 33 36 38 30 40H18C12 38 7 33 7 26C7 15 15 8 24 8Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Fan ribs radiating from the hinge base */}
      <path d="M24 40V10" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 40L14 14" stroke={accentColor} strokeWidth="1.75" strokeLinecap="round" />
      <path d="M24 40L34 14" stroke={accentColor} strokeWidth="1.75" strokeLinecap="round" />
      <path d="M24 40L8 23" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 40L40 23" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
      {/* Base hinge shelf */}
      <path d="M16 40H32" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};
