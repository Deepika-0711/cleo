import React, { useState } from 'react';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { ShellIcon } from '../../design-system/ShellIcon';
import { useTheme } from '../../design-system/useTheme';
import { PLANNED_SECTIONS } from '../../design-system/tokens';
import { SoundToggle } from './SoundToggle';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMoonlight } = useTheme();

  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-teal-800 text-ivory-50 rounded-lg shadow-lg font-medium text-sm focus:outline-none focus:ring-2 focus:ring-coral-400"
      >
        Skip to main story content
      </a>

      <header
        className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-500 border-b ${
          isMoonlight
            ? 'bg-midnight-950/90 border-midnight-800 text-ivory-50 shadow-night'
            : 'bg-ivory-100/90 border-teal-800/10 text-teal-800'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand & Storybook Title */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 rounded-lg p-1"
          >
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-transform group-hover:scale-105 ${
                isMoonlight
                  ? 'bg-midnight-900 border-midnight-700 shadow-sm'
                  : 'bg-sand-200/70 border-sand-400/40'
              }`}
            >
              <ShellIcon
                variant="scallop"
                size={22}
                color={isMoonlight ? '#5BB5A2' : '#0C5A60'}
                accentColor="#F48B76"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-display font-bold text-xl sm:text-2xl tracking-tight transition-colors ${
                    isMoonlight ? 'text-ivory-50' : 'text-teal-800'
                  }`}
                >
                  Cleo
                </span>
                <DecorativeStar
                  size={11}
                  color={isMoonlight ? '#FFF275' : '#F48B76'}
                  className="animate-star-shimmer"
                />
              </div>
              <p
                className={`font-hand text-sm sm:text-base leading-none transition-colors ${
                  isMoonlight ? 'text-seaglass-300' : 'text-teal-600'
                }`}
              >
                The Girl Who Collects Worlds
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <nav aria-label="Story chapters and sections" className="flex items-center gap-1 lg:gap-2">
              {PLANNED_SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`px-3 py-1.5 rounded-full text-sm font-body font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                    isMoonlight
                      ? 'text-seaglass-100 hover:text-white hover:bg-midnight-800/80'
                      : 'text-teal-800/80 hover:text-teal-900 hover:bg-sand-200/50'
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className="h-5 w-[1px] bg-sand-400/40 mx-1" aria-hidden="true" />

            {/* Subtle Magical Sound Chime Charm Toggle */}
            <SoundToggle />

            {/* Sunshine / Moonlight Mode Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls: Sound Toggle + Theme Toggle + Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-1.5">
            <SoundToggle compact />
            <ThemeToggle compact />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                isMoonlight
                  ? 'text-seaglass-200 hover:bg-midnight-800'
                  : 'text-teal-800 hover:bg-sand-200/60'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-t px-4 pt-3 pb-5 space-y-2 transition-colors ${
              isMoonlight
                ? 'bg-midnight-950 border-midnight-800 text-ivory-50'
                : 'bg-ivory-100 border-teal-800/10 text-teal-800'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-sand-300/40">
              <span className="text-xs font-hand text-coral-600 font-semibold">Sound & Light Controls</span>
              <div className="flex items-center gap-2">
                <SoundToggle />
                <ThemeToggle />
              </div>
            </div>
            {PLANNED_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isMoonlight
                    ? 'text-seaglass-100 hover:bg-midnight-850'
                    : 'text-teal-800 hover:bg-sand-200/60'
                }`}
              >
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
