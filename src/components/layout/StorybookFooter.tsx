import React from 'react';
import { DecorativeStar, StarCluster } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import { useTheme } from '../../design-system/useTheme';

const CURRENT_YEAR = 2026;

export const StorybookFooter: React.FC = () => {
  const { isMoonlight } = useTheme();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      aria-label="The Last Page of Cleo’s Story"
      className={`relative pt-20 sm:pt-28 pb-16 overflow-hidden transition-colors duration-700 border-t ${
        isMoonlight
          ? 'bg-gradient-to-b from-[#09101E] via-[#0B1322] to-[#070C16] border-midnight-800 text-ivory-50'
          : 'bg-gradient-to-b from-[#FFF9F0] via-[#FAF7EE] to-[#F5EFEB] border-sand-300/80 text-teal-900'
      }`}
    >
      {/* Sunset Golden-Hour or Moonlit Starlight Ambient Atmosphere Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[350px] rounded-full blur-3xl pointer-events-none opacity-45 transition-all duration-700"
        style={{
          background: isMoonlight
            ? 'radial-gradient(circle at 50% 0%, rgba(91, 181, 162, 0.35) 0%, rgba(20, 32, 60, 0.5) 60%, transparent 80%)'
            : 'radial-gradient(circle at 50% 0%, rgba(244, 139, 118, 0.35) 0%, rgba(254, 215, 170, 0.25) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Constellations in Footer Sky */}
      <div className="absolute top-8 left-8 sm:left-16 pointer-events-none opacity-70 hidden sm:block" aria-hidden="true">
        <StarCluster />
      </div>
      <div className="absolute top-10 right-8 sm:right-16 pointer-events-none opacity-75 hidden sm:block" aria-hidden="true">
        <DecorativeStar size={20} color={isMoonlight ? '#80DEEA' : '#F48B76'} className="animate-star-shimmer" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* STORYBOOK SEAL / KEEPSAKE MEDALLION */}
        <div className="inline-flex flex-col items-center justify-center mb-8">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 p-1.5 flex items-center justify-center shadow-storybook transition-all duration-500 hover:scale-105 ${
              isMoonlight
                ? 'bg-midnight-900/90 border-seaglass-400/40 shadow-night'
                : 'bg-white border-sand-300 shadow-storybook-hover'
            }`}
          >
            <div
              className={`w-full h-full rounded-full border flex items-center justify-center animate-float-gentle ${
                isMoonlight
                  ? 'bg-midnight-950 border-midnight-700'
                  : 'bg-sand-50 border-sand-200'
              }`}
            >
              <ShellIcon
                variant="nautilus"
                size={34}
                color={isMoonlight ? '#5BB5A2' : '#0C5A60'}
                accentColor="#F48B76"
              />
            </div>
          </div>

          {/* Miniature pearl divider */}
          <div className="flex items-center gap-2 mt-4 text-xs font-mono uppercase tracking-[0.2em] opacity-75">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
            <span>THE LAST PAGE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
          </div>
        </div>

        {/* CLOSING STORYBOOK LINE */}
        <blockquote className="mb-4">
          <p
            className={`font-display font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] max-w-3xl mx-auto transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-900'
            }`}
          >
            &ldquo;Every little shell holds a whole universe.&rdquo;
          </p>
        </blockquote>

        {/* CLEO'S SIGN-OFF */}
        <div className="mb-8">
          <p
            className={`font-hand text-2xl sm:text-3xl transition-colors ${
              isMoonlight ? 'text-coral-400' : 'text-coral-600'
            }`}
          >
            With wonder, Cleo ♡
          </p>
        </div>

        {/* STORYBOOK FLOURISH DIVIDER */}
        <StorybookFlourish className="my-6 max-w-xs mx-auto" />

        {/* PROJECT NOTE */}
        <p
          className={`font-body text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed transition-colors ${
            isMoonlight ? 'text-seaglass-100/80' : 'text-teal-800/85'
          }`}
        >
          Made with curiosity, a little ocean magic, and lots of imagination.
        </p>

        {/* TASTEFUL 'BACK TO THE BEGINNING' SMOOTH SCROLL LINK */}
        <div className="mb-14">
          <a
            href="#hero"
            onClick={scrollToTop}
            aria-label="Back to the beginning of Cleo's storybook"
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide border shadow-sm transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
              isMoonlight
                ? 'bg-midnight-900/90 text-seaglass-200 border-midnight-700 hover:bg-midnight-800 hover:border-seaglass-400 shadow-night'
                : 'bg-white/95 text-teal-900 border-sand-300 hover:bg-white hover:border-teal-600 shadow-storybook'
            }`}
          >
            <ShellIcon
              variant="scallop"
              size={16}
              color={isMoonlight ? '#5BB5A2' : '#0C5A60'}
              accentColor="#F48B76"
            />
            <span>Back to the beginning</span>
            <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5">
              &uarr;
            </span>
          </a>
        </div>

        {/* BOTTOM METADATA & MINIMAL LEGAL ATTRIBUTION BAR */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body transition-colors ${
            isMoonlight
              ? 'border-midnight-800/80 text-seaglass-300/70'
              : 'border-sand-300/60 text-teal-800/70'
          }`}
        >
          <p>&copy; {CURRENT_YEAR} Cleo &mdash; The Girl Who Collects Worlds. All storybook rights reserved.</p>
          <p className="text-[11px] opacity-80 text-center sm:text-right">
            Typefaces: Fraunces, Plus Jakarta Sans, &amp; Caveat (SIL OFL) &bull; React &amp; Vite (MIT) &bull; Custom vector SVG art &amp; procedural Web Audio
          </p>
        </div>
      </div>
    </footer>
  );
};
