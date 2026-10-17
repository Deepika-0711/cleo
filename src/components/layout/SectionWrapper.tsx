import React from 'react';
import { WaveDivider } from '../../design-system/OrganicBorder';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  tag?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  showTopWave?: boolean;
  showBottomWave?: boolean;
  waveColor?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  tag,
  children,
  className = '',
  bgColor = 'transparent',
  showTopWave = false,
  showBottomWave = false,
  waveColor = '#FAF7EE',
}) => {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`relative scroll-mt-20 py-16 sm:py-20 lg:py-24 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {showTopWave && (
        <div className="absolute top-0 left-0 right-0 -translate-y-full">
          <WaveDivider fillColor={waveColor} />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || tag) && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            {tag && (
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-coral-600 bg-coral-100/80 px-3 py-1 rounded-full mb-3">
                {tag}
              </span>
            )}
            {title && (
              <h2
                id={`${id}-heading`}
                className="font-display text-3xl sm:text-4xl lg:text-5xl text-teal-800 tracking-tight mb-3"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-base sm:text-lg text-teal-700/80 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>

      {showBottomWave && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-full">
          <WaveDivider fillColor={waveColor} flipped />
        </div>
      )}
    </section>
  );
};
