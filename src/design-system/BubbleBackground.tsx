import React, { useMemo } from 'react';
import { useTheme } from './useTheme';

type BubbleColor = 'pearl' | 'aqua' | 'blush' | 'iridescent';

interface BubbleConfig {
  id: number;
  size: number;
  left: number; // percentage across screen 0-100
  duration: number; // rise duration in seconds (8.5-18s)
  delay: number; // negative/positive delay in seconds
  wobbleDist: number; // horizontal sway in px (6-22px)
  wobbleDuration: number; // sway duration in seconds (2.2-4.5s)
  opacity: number; // target opacity (0.50-0.78)
  color: BubbleColor;
}

interface SparkleConfig {
  id: number;
  size: number; // 9-14px
  top: number; // percentage down the screen
  left: number; // percentage across screen
  duration: number; // twinkle duration (3.2-5.5s)
  delay: number; // staggered delays
  color: 'gold' | 'pearl' | 'blush';
  opacity: number;
}

// Curated 30 magical bubbles: mostly 4-12px with a few 14-18px
const BUBBLE_CONFIGS: BubbleConfig[] = [
  { id: 1, size: 6, left: 3, duration: 11.5, delay: -2.4, wobbleDist: 10, wobbleDuration: 2.8, opacity: 0.68, color: 'pearl' },
  { id: 2, size: 10, left: 7, duration: 14.2, delay: -8.1, wobbleDist: 14, wobbleDuration: 3.4, opacity: 0.65, color: 'aqua' },
  { id: 3, size: 5, left: 11, duration: 9.8, delay: -4.5, wobbleDist: 8, wobbleDuration: 2.5, opacity: 0.6, color: 'blush' },
  { id: 4, size: 15, left: 15, duration: 16.5, delay: -12.3, wobbleDist: 18, wobbleDuration: 4.2, opacity: 0.75, color: 'iridescent' },
  { id: 5, size: 8, left: 19, duration: 12.0, delay: -1.2, wobbleDist: 12, wobbleDuration: 3.1, opacity: 0.65, color: 'pearl' },
  { id: 6, size: 4, left: 23, duration: 8.8, delay: -6.7, wobbleDist: 7, wobbleDuration: 2.3, opacity: 0.55, color: 'aqua' },
  { id: 7, size: 11, left: 27, duration: 13.5, delay: -10.4, wobbleDist: 15, wobbleDuration: 3.6, opacity: 0.7, color: 'blush' },
  { id: 8, size: 7, left: 31, duration: 10.4, delay: -3.8, wobbleDist: 9, wobbleDuration: 2.9, opacity: 0.6, color: 'pearl' },
  { id: 9, size: 17, left: 35, duration: 17.8, delay: -14.2, wobbleDist: 20, wobbleDuration: 4.5, opacity: 0.78, color: 'iridescent' },
  { id: 10, size: 6, left: 39, duration: 11.0, delay: -5.1, wobbleDist: 11, wobbleDuration: 2.7, opacity: 0.65, color: 'aqua' },
  { id: 11, size: 9, left: 43, duration: 13.0, delay: -9.5, wobbleDist: 13, wobbleDuration: 3.3, opacity: 0.7, color: 'pearl' },
  { id: 12, size: 5, left: 47, duration: 9.2, delay: -0.8, wobbleDist: 8, wobbleDuration: 2.4, opacity: 0.6, color: 'blush' },
  { id: 13, size: 12, left: 51, duration: 15.0, delay: -7.6, wobbleDist: 16, wobbleDuration: 3.8, opacity: 0.72, color: 'iridescent' },
  { id: 14, size: 7, left: 55, duration: 10.8, delay: -11.9, wobbleDist: 10, wobbleDuration: 2.6, opacity: 0.62, color: 'pearl' },
  { id: 15, size: 14, left: 59, duration: 16.0, delay: -3.2, wobbleDist: 17, wobbleDuration: 4.0, opacity: 0.74, color: 'aqua' },
  { id: 16, size: 4, left: 63, duration: 8.5, delay: -8.9, wobbleDist: 6, wobbleDuration: 2.2, opacity: 0.55, color: 'blush' },
  { id: 17, size: 8, left: 67, duration: 12.4, delay: -1.7, wobbleDist: 12, wobbleDuration: 3.0, opacity: 0.66, color: 'pearl' },
  { id: 18, size: 10, left: 71, duration: 13.8, delay: -13.1, wobbleDist: 14, wobbleDuration: 3.5, opacity: 0.7, color: 'iridescent' },
  { id: 19, size: 6, left: 75, duration: 11.2, delay: -4.1, wobbleDist: 9, wobbleDuration: 2.8, opacity: 0.6, color: 'aqua' },
  { id: 20, size: 18, left: 79, duration: 18.0, delay: -10.0, wobbleDist: 22, wobbleDuration: 4.6, opacity: 0.78, color: 'pearl' },
  { id: 21, size: 5, left: 83, duration: 9.5, delay: -6.2, wobbleDist: 8, wobbleDuration: 2.5, opacity: 0.58, color: 'blush' },
  { id: 22, size: 11, left: 87, duration: 14.6, delay: -2.9, wobbleDist: 15, wobbleDuration: 3.7, opacity: 0.7, color: 'iridescent' },
  { id: 23, size: 7, left: 91, duration: 10.6, delay: -11.0, wobbleDist: 10, wobbleDuration: 2.7, opacity: 0.64, color: 'aqua' },
  { id: 24, size: 9, left: 95, duration: 12.8, delay: -7.0, wobbleDist: 13, wobbleDuration: 3.2, opacity: 0.68, color: 'pearl' },
  { id: 25, size: 6, left: 13, duration: 10.9, delay: -14.8, wobbleDist: 9, wobbleDuration: 2.9, opacity: 0.62, color: 'pearl' },
  { id: 26, size: 8, left: 37, duration: 12.2, delay: -2.1, wobbleDist: 11, wobbleDuration: 3.1, opacity: 0.66, color: 'blush' },
  { id: 27, size: 12, left: 61, duration: 15.2, delay: -6.0, wobbleDist: 15, wobbleDuration: 3.9, opacity: 0.72, color: 'aqua' },
  { id: 28, size: 5, left: 81, duration: 9.0, delay: -12.7, wobbleDist: 7, wobbleDuration: 2.3, opacity: 0.58, color: 'pearl' },
  { id: 29, size: 7, left: 29, duration: 11.8, delay: -8.4, wobbleDist: 10, wobbleDuration: 3.0, opacity: 0.65, color: 'iridescent' },
  { id: 30, size: 10, left: 69, duration: 13.9, delay: -0.5, wobbleDist: 13, wobbleDuration: 3.4, opacity: 0.7, color: 'blush' },
];

// Sparse, refined princess-like 4-point star glints and twinkles
const SPARKLE_CONFIGS: SparkleConfig[] = [
  { id: 1, size: 12, top: 12, left: 14, duration: 4.2, delay: -1.2, color: 'gold', opacity: 0.88 },
  { id: 2, size: 10, top: 20, left: 84, duration: 3.6, delay: -2.8, color: 'blush', opacity: 0.82 },
  { id: 3, size: 14, top: 32, left: 28, duration: 4.8, delay: -0.5, color: 'pearl', opacity: 0.92 },
  { id: 4, size: 9, top: 44, left: 91, duration: 3.8, delay: -3.1, color: 'gold', opacity: 0.8 },
  { id: 5, size: 11, top: 56, left: 8, duration: 4.4, delay: -1.9, color: 'blush', opacity: 0.85 },
  { id: 6, size: 13, top: 65, left: 75, duration: 4.0, delay: -2.4, color: 'gold', opacity: 0.9 },
  { id: 7, size: 10, top: 76, left: 21, duration: 3.5, delay: -0.9, color: 'pearl', opacity: 0.86 },
  { id: 8, size: 12, top: 86, left: 86, duration: 4.6, delay: -3.8, color: 'blush', opacity: 0.82 },
  { id: 9, size: 9, top: 18, left: 48, duration: 3.9, delay: -2.2, color: 'pearl', opacity: 0.78 },
  { id: 10, size: 12, top: 51, left: 38, duration: 4.5, delay: -1.5, color: 'gold', opacity: 0.85 },
  { id: 11, size: 10, top: 72, left: 59, duration: 3.7, delay: -3.3, color: 'blush', opacity: 0.82 },
  { id: 12, size: 11, top: 92, left: 45, duration: 4.2, delay: -0.7, color: 'gold', opacity: 0.86 },
];

export const BubbleBackground: React.FC = () => {
  const { isMoonlight } = useTheme();

  // Helper styles for floating pearl bubbles based on Day / Night mode
  const bubbleStyles = useMemo(() => {
    return BUBBLE_CONFIGS.map((b) => {
      let bg: string;
      let shadowGlow: string;
      let border: string;

      if (isMoonlight) {
        switch (b.color) {
          case 'aqua':
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(185, 238, 230, 0.65) 28%, rgba(70, 165, 150, 0.35) 65%, rgba(15, 60, 65, 0.2) 100%)';
            border = '1px solid rgba(163, 222, 210, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.9), inset -1px -1px 2px rgba(91, 181, 162, 0.4), 0 0 8px rgba(91, 181, 162, 0.5)';
            break;
          case 'blush':
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 215, 235, 0.65) 28%, rgba(210, 160, 200, 0.35) 65%, rgba(90, 40, 75, 0.2) 100%)';
            border = '1px solid rgba(255, 185, 215, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.9), inset -1px -1px 2px rgba(244, 180, 200, 0.4), 0 0 8px rgba(244, 180, 200, 0.5)';
            break;
          case 'iridescent':
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(235, 220, 255, 0.65) 28%, rgba(175, 140, 215, 0.35) 65%, rgba(45, 20, 65, 0.2) 100%)';
            border = '1px solid rgba(215, 195, 245, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.9), inset -1px -1px 2px rgba(199, 178, 228, 0.4), 0 0 8px rgba(199, 178, 228, 0.5)';
            break;
          case 'pearl':
          default:
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(240, 248, 255, 0.6) 28%, rgba(163, 222, 210, 0.35) 65%, rgba(255, 255, 255, 0.15) 100%)';
            border = '1px solid rgba(230, 245, 255, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.9), inset -1px -1px 2px rgba(163, 222, 210, 0.4), 0 0 7px rgba(163, 222, 210, 0.45)';
            break;
        }
      } else {
        // Sunshine Golden Hour & Fairytale Lagoon
        switch (b.color) {
          case 'aqua':
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(215, 248, 245, 0.7) 25%, rgba(91, 181, 162, 0.35) 65%, rgba(255, 235, 245, 0.3) 100%)';
            border = '1px solid rgba(91, 181, 162, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.95), inset -1px -1px 2px rgba(91, 181, 162, 0.35), 0 0 7px rgba(91, 181, 162, 0.4)';
            break;
          case 'blush':
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 228, 238, 0.75) 25%, rgba(244, 139, 158, 0.35) 65%, rgba(255, 205, 220, 0.4) 100%)';
            border = '1px solid rgba(244, 139, 158, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.95), inset -1px -1px 2px rgba(244, 139, 158, 0.35), 0 0 7px rgba(244, 139, 158, 0.4)';
            break;
          case 'iridescent':
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 240, 250, 0.7) 25%, rgba(199, 178, 228, 0.35) 65%, rgba(200, 240, 245, 0.35) 100%)';
            border = '1px solid rgba(199, 178, 228, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.95), inset -1px -1px 2px rgba(199, 178, 228, 0.35), 0 0 7px rgba(199, 178, 228, 0.4)';
            break;
          case 'pearl':
          default:
            bg =
              'radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 252, 245, 0.7) 25%, rgba(212, 186, 136, 0.3) 65%, rgba(255, 240, 245, 0.35) 100%)';
            border = '1px solid rgba(212, 186, 136, 0.65)';
            shadowGlow =
              'inset 0 1px 2px rgba(255, 255, 255, 0.95), inset -1px -1px 2px rgba(212, 186, 136, 0.35), 0 0 6px rgba(212, 186, 136, 0.35)';
            break;
        }
      }

      return {
        ...b,
        bg,
        shadowGlow,
        border,
      };
    });
  }, [isMoonlight]);

  // Helper styles for sparse princess sparkles
  const sparkleStyles = useMemo(() => {
    return SPARKLE_CONFIGS.map((s) => {
      let fill: string;
      let glow: string;

      if (isMoonlight) {
        switch (s.color) {
          case 'gold':
            fill = '#E7D4B0';
            glow = 'rgba(212, 186, 136, 0.85)';
            break;
          case 'blush':
            fill = '#FFB8D2';
            glow = 'rgba(244, 180, 200, 0.85)';
            break;
          case 'pearl':
          default:
            fill = '#FFFFFF';
            glow = 'rgba(200, 235, 255, 0.9)';
            break;
        }
      } else {
        switch (s.color) {
          case 'gold':
            fill = '#D4BA88';
            glow = 'rgba(191, 159, 101, 0.75)';
            break;
          case 'blush':
            fill = '#F48B9E';
            glow = 'rgba(244, 139, 158, 0.75)';
            break;
          case 'pearl':
          default:
            fill = '#FAF7EE';
            glow = 'rgba(212, 186, 136, 0.7)';
            break;
        }
      }

      return {
        ...s,
        fill,
        glow,
      };
    });
  }, [isMoonlight]);

  return (
    <div
      className="magical-bubble-stream fixed inset-0 pointer-events-none overflow-hidden z-[2]"
      aria-hidden="true"
    >
      {/* 1. Floating Pearl Bubbles Layer */}
      {bubbleStyles.map((b) => (
        <div
          key={b.id}
          className="absolute pointer-events-none"
          style={
            {
              top: '100vh',
              left: `${b.left}%`,
              animation: `bubbleFloatUp ${b.duration}s linear infinite`,
              animationDelay: `${b.delay}s`,
              '--target-bubble-opacity': b.opacity,
            } as React.CSSProperties
          }
        >
          {/* Inner bubble with horizontal sway wobble, specular gleam, and delicate iridescence */}
          <div
            className="relative rounded-full pointer-events-none"
            style={
              {
                width: `${b.size}px`,
                height: `${b.size}px`,
                background: b.bg,
                border: b.border,
                boxShadow: b.shadowGlow,
                '--wobble-x': `${b.wobbleDist}px`,
                animation: `bubbleWobbleSway ${b.wobbleDuration}s ease-in-out infinite alternate`,
              } as React.CSSProperties
            }
          >
            {/* Specular Pinpoint Highlight */}
            <span
              className="absolute rounded-full bg-white opacity-95 pointer-events-none"
              style={{
                top: '20%',
                left: '22%',
                width: `${Math.max(1.5, b.size * 0.24)}px`,
                height: `${Math.max(1.5, b.size * 0.24)}px`,
                boxShadow: '0 0 2px rgba(255, 255, 255, 0.9)',
              }}
            />
          </div>
        </div>
      ))}

      {/* 2. Princess-like 4-Point Star Glints and Soft Twinkles Layer */}
      {sparkleStyles.map((s) => (
        <div
          key={`sparkle-${s.id}`}
          className="magical-sparkle-item absolute pointer-events-none flex items-center justify-center"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animation: `sparkleTwinkle ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
              '--sparkle-target-opacity': s.opacity,
            } as React.CSSProperties
          }
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full pointer-events-none overflow-visible"
            style={{
              color: s.fill,
              filter: `drop-shadow(0 0 4px ${s.glow})`,
            }}
          >
            {/* Delicate 4-point princess diamond star */}
            <path
              d="M12 0 C12 6.5 13 11 19 12 C13 13 12 17.5 12 24 C12 17.5 11 13 5 12 C11 11 12 6.5 12 0 Z"
              fill="currentColor"
            />
            {/* Diamond core glint */}
            <circle cx="12" cy="12" r="1.8" fill="#FFFFFF" opacity="0.95" />
          </svg>
        </div>
      ))}
    </div>
  );
};
