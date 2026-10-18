import React from 'react';
import cleoCharacterImg from '../../assets/cleo-hero-transparent.png';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { useTheme } from '../../design-system/useTheme';

export const LivingShellDiarySection: React.FC = () => {
  const { isMoonlight } = useTheme();

  return (
    <section
      id="about"
      aria-labelledby="meet-cleo-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isMoonlight ? '#09101E' : '#FAF7EE' }}
    >
      {/* Soft ambient water & paper gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-700"
        style={{
          backgroundImage: isMoonlight
            ? 'radial-gradient(circle at 15% 30%, rgba(91, 181, 162, 0.25) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(17, 26, 56, 0.6) 0%, transparent 60%)'
            : 'radial-gradient(circle at 15% 30%, rgba(140, 189, 181, 0.35) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(244, 139, 118, 0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.24em] font-medium transition-colors ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Chapter III &bull; Character Introduction
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
          </div>

          <h2
            id="meet-cleo-heading"
            className={`font-display italic font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-950'
            }`}
          >
            Meet Cleo
          </h2>
        </div>

        {/* Storybook Editorial Page: Artwork on Left, Introduction on Right */}
        <div
          className={`rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border shadow-storybook relative overflow-hidden transition-all duration-500 ${
            isMoonlight
              ? 'bg-gradient-to-b from-[#0F1C33] via-[#0D182B] to-[#0A1324] border-[#2A4365] text-ivory-50 shadow-night'
              : 'bg-gradient-to-b from-[#FFFDF9] via-[#FAF7EE] to-[#F5EFEB] border-[#D4BA88]/60 text-teal-950'
          }`}
        >
          {/* Four Corner Pearl Studs */}
          <span className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
          <span className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
          <span className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Cleo's Character Artwork in an Illustrated Picture Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className={`relative w-full max-w-[320px] sm:max-w-[360px] rounded-[28px] sm:rounded-[36px] p-6 border shadow-xs text-center transition-all duration-500 ${
                  isMoonlight
                    ? 'bg-[#132238]/80 border-[#2A4365]'
                    : 'bg-white/80 border-[#D4BA88]/50'
                }`}
              >
                {/* Soft ambient lighting wash behind character */}
                <div
                  className="absolute inset-0 rounded-[28px] sm:rounded-[36px] blur-2xl opacity-40 pointer-events-none"
                  style={{
                    background: isMoonlight
                      ? 'radial-gradient(circle, rgba(91, 181, 162, 0.45) 0%, rgba(17, 26, 56, 0.6) 60%, transparent 80%)'
                      : 'radial-gradient(circle, rgba(212, 186, 136, 0.65) 0%, rgba(244, 139, 118, 0.3) 60%, transparent 80%)',
                  }}
                  aria-hidden="true"
                />

                {/* Cleo Character Image */}
                <div className="relative z-10 flex items-center justify-center my-2">
                  <img
                    src={cleoCharacterImg}
                    alt="Storybook illustration of Cleo, a curious seaside adventurer with wavy chestnut curls, floral shell crown, and a vintage cream dress"
                    className="w-48 sm:w-56 h-auto object-contain filter drop-shadow(0 12px 24px rgba(12, 90, 96, 0.2)) animate-float-gentle"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Character Name & Caption */}
                <div className="relative z-10 pt-3 border-t border-[#D4BA88]/30">
                  <h3
                    className={`font-display italic font-normal text-2xl sm:text-3xl ${
                      isMoonlight ? 'text-ivory-50' : 'text-teal-950'
                    }`}
                  >
                    Cleo
                  </h3>
                  <p
                    className={`font-mono text-[10px] uppercase tracking-widest mt-0.5 ${
                      isMoonlight ? 'text-seaglass-300' : 'text-[#D4BA88]'
                    }`}
                  >
                    Seaside Adventurer &bull; Collector of Worlds
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Character Introduction Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Tagline Banner */}
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DE6B54]" />
                <span className="font-hand text-lg sm:text-xl text-[#DE6B54] font-semibold">
                  &ldquo;Small shells. Endless worlds.&rdquo;
                </span>
              </div>

              {/* Character Details in Storybook Layout */}
              <div className="space-y-3.5 sm:space-y-4">
                {/* Personality */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-colors ${
                    isMoonlight
                      ? 'bg-midnight-950/70 border-[#2A4365]'
                      : 'bg-white/70 border-[#D4BA88]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                        isMoonlight ? 'text-seaglass-300' : 'text-[#D4BA88]'
                      }`}
                    >
                      Personality
                    </span>
                    <DecorativeStar size={10} color="#D4BA88" />
                  </div>
                  <p
                    className={`font-body text-sm sm:text-base leading-relaxed ${
                      isMoonlight ? 'text-seaglass-100' : 'text-teal-950/90'
                    }`}
                  >
                    A curious, kind-hearted seaside adventurer with wavy chestnut curls, a shell-adorned
                    floral crown, and a little bag for collecting magical seashells.
                  </p>
                </div>

                {/* Her Magic */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-colors ${
                    isMoonlight
                      ? 'bg-midnight-950/70 border-[#2A4365]'
                      : 'bg-white/70 border-[#D4BA88]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                        isMoonlight ? 'text-seaglass-300' : 'text-[#D4BA88]'
                      }`}
                    >
                      Her Magic
                    </span>
                    <DecorativeStar size={10} color="#D4BA88" />
                  </div>
                  <p
                    className={`font-body text-sm sm:text-base leading-relaxed ${
                      isMoonlight ? 'text-seaglass-100' : 'text-teal-950/90'
                    }`}
                  >
                    She discovers seashells containing tiny, magical universes and listens to the living
                    rhythms hidden within their fluted chambers.
                  </p>
                </div>

                {/* Her Story */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-colors ${
                    isMoonlight
                      ? 'bg-midnight-950/70 border-[#2A4365]'
                      : 'bg-white/70 border-[#D4BA88]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                        isMoonlight ? 'text-seaglass-300' : 'text-[#D4BA88]'
                      }`}
                    >
                      Her Story
                    </span>
                    <DecorativeStar size={10} color="#D4BA88" />
                  </div>
                  <p
                    className={`font-body text-sm sm:text-base leading-relaxed ${
                      isMoonlight ? 'text-seaglass-100' : 'text-teal-950/90'
                    }`}
                  >
                    One glowing shell changed her quiet beach walks into journeys through extraordinary
                    worlds—turning ordinary shoreline strolls into a lifelong quest to collect tiny universes.
                  </p>
                </div>
              </div>

              {/* Storybook Marginalia Sign-off */}
              <div
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs ${
                  isMoonlight
                    ? 'bg-midnight-900/50 border-midnight-700/60 text-seaglass-200'
                    : 'bg-[#FAF7EE] border-[#D4BA88]/40 text-teal-900'
                }`}
              >
                <span className="font-hand text-sm sm:text-base italic text-[#DE6B54]">
                  &ldquo;Every little shell holds a whole universe.&rdquo;
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4BA88] font-semibold shrink-0">
                  Folio &bull; Cleo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Storybook flourish transition */}
        <StorybookFlourish className="mt-12 sm:mt-16 mb-0 opacity-75" />
      </div>
    </section>
  );
};
