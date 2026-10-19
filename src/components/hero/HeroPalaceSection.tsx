import React, { useState } from 'react';
import palaceImage from '../../assets/seashell-palace.jpg';
import { BubbleCluster } from '../../design-system/DecorativeBubbles';
import { DecorativeStar, StarCluster } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import { useTheme } from '../../design-system/useTheme';
import { CleoNoticesYou } from './CleoNoticesYou';
import { SecretShellEasterEgg } from './SecretShellEasterEgg';

interface PalaceHotspot {
  id: string;
  name: string;
  tagline: string;
  description: string;
  top: string;
  left: string;
  shellVariant: 'nautilus' | 'scallop' | 'conch';
}

const PALACE_HOTSPOTS: PalaceHotspot[] = [
  {
    id: 'spire',
    name: 'The Celestial Pearl Spire',
    tagline: 'Crown of the Palace',
    description:
      'A spiraling conch tower rising into the clouds, topped by an ancient luminous pearl that catches the dying rays of the golden sunset.',
    top: '11%',
    left: '50%',
    shellVariant: 'conch',
  },
  {
    id: 'portico',
    name: 'The Grand Scallop Portico',
    tagline: 'The Palace Entrance',
    description:
      'Oversized iridescent fan scallops frame the arched entryway, flanked by twin pearl balustrades and staircase steps swept clean by the tide.',
    top: '64%',
    left: '50%',
    shellVariant: 'scallop',
  },
  {
    id: 'windows',
    name: 'Sea-Glass Stained Windows',
    tagline: 'Bioluminescent Chambers',
    description:
      'Tiered towers with soft turquoise domes and glowing amber sea-glass windows, illuminated from within by captured sunbeams.',
    top: '46%',
    left: '34%',
    shellVariant: 'nautilus',
  },
  {
    id: 'tide',
    name: 'The Crystal Tide Pool',
    tagline: 'Tranquil Lagoon Waters',
    description:
      'Shallow, glass-clear turquoise waters gently lapping the base of the palace, reflecting the peach-and-gold evening sky and scattered pink starfish.',
    top: '84%',
    left: '30%',
    shellVariant: 'scallop',
  },
];

export const HeroPalaceSection: React.FC = () => {
  const { isMoonlight, toggleThemeMode } = useTheme();
  const [selectedHotspot, setSelectedHotspot] = useState<PalaceHotspot | null>(null);

  return (
    <section
      id="hero"
      aria-label="Enchanted Beach, Seashell Palace, and Cleo Character Hero"
      className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: 'transparent',
        color: isMoonlight ? '#FDFAF5' : '#0C5A60',
      }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-700"
        style={{
          background: isMoonlight
            ? 'radial-gradient(circle, rgba(91, 181, 162, 0.25) 0%, rgba(17, 26, 56, 0.6) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(253, 236, 232, 0.3) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Narrative Header & Lead */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Poetic Chapter Eyebrow with Pearl Studs & Star Glints */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
            <DecorativeStar size={8} color="#D4BA88" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.24em] font-medium transition-colors ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Prologue &bull; An Enchanted Shoreline
            </span>
            <DecorativeStar size={8} color="#D4BA88" />
            <span className="w-1.5 h-1.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
          </div>

          {/* Main Storybook Title */}
          <h1
            className={`font-display italic font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] mb-4 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-950'
            }`}
          >
            Cleo &mdash; The Girl Who Collects Worlds
          </h1>

          {/* Descriptive narrative lead */}
          <p
            className={`font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-6 transition-colors ${
              isMoonlight ? 'text-seaglass-100/80' : 'text-teal-800/85'
            }`}
          >
            Step onto Cleo’s sun-drenched beach, where crystal-clear turquoise waters gently cradle
            a grand palace fashioned entirely from pearlescent shells, living coral, and glowing sea-glass.
          </p>

          {/* Functional Editorial Navigation Actions - Princess Fairytale Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-2">
            <a
              href="#collection"
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 active:scale-[0.98] ${
                isMoonlight
                  ? 'bg-gradient-to-r from-[#172544] via-[#1E3054] to-[#172544] text-ivory-50 border-[#D4BA88]/60 shadow-night hover:border-[#80DEEA] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(91,181,162,0.3)]'
                  : 'bg-gradient-to-r from-[#FFF0EC] via-[#FFF7F2] to-[#FDF0EB] text-teal-950 border-[#E2A79B]/80 shadow-[0_4px_16px_rgba(226,167,155,0.28),0_2px_6px_rgba(212,186,136,0.15)] hover:border-[#DE6B54] hover:shadow-[0_8px_24px_rgba(226,167,155,0.42)] hover:-translate-y-0.5'
              }`}
            >
              <ShellIcon variant="nautilus" size={17} color={isMoonlight ? '#FAF7EE' : '#0C5A60'} accentColor="#D4BA88" />
              <span>Explore the Shell Worlds</span>
              <span aria-hidden="true" className="text-[#D4BA88]">&rarr;</span>
            </a>

            <a
              href="#journey"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 active:scale-[0.98] ${
                isMoonlight
                  ? 'bg-midnight-900/90 text-seaglass-200 border-midnight-700 hover:bg-midnight-800 hover:border-[#D4BA88]/60 hover:-translate-y-0.5 shadow-sm'
                  : 'bg-[#FFFDF9]/95 text-teal-900 border-[#D4BA88]/65 hover:bg-white hover:border-[#D4BA88] hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_20px_rgba(212,186,136,0.25)]'
              }`}
            >
              <DecorativeStar size={11} color="#D4BA88" />
              <span>Read Cleo’s Story</span>
            </a>

            <a
              href="#about"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 active:scale-[0.98] ${
                isMoonlight
                  ? 'text-seaglass-300 border-transparent hover:border-midnight-700 hover:bg-midnight-900/60 hover:text-white'
                  : 'text-teal-800/80 border-transparent hover:border-[#E2A79B]/50 hover:bg-white/70 hover:text-teal-950 hover:-translate-y-0.5'
              }`}
            >
              <span>Character Profile</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Central Seashell Palace & Beach Composition with Cleo in the Foreground */}
        <div className="relative mx-auto max-w-5xl">
          {/* Storybook Illuminated Plate Frame with Delicate Gilded Borders */}
          <div
            className={`relative rounded-3xl sm:rounded-4xl overflow-hidden border p-2 sm:p-3 transition-all duration-700 shadow-storybook-hover ${
              isMoonlight
                ? 'bg-midnight-900/90 border-[#2A4365] shadow-night'
                : 'bg-gradient-to-b from-white via-sand-50 to-[#F7F2E7] border-[#D4BA88]/50'
            }`}
          >
            {/* Corner pearl studs for authentic storybook bookplate framing */}
            <span className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-30" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-30" />
            <span className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-30" />
            <span className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-30" />

            {/* Aspect-Ratio Box preserving the full palace silhouette & Cleo on all screens */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] min-h-[260px] sm:min-h-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-sand-200">
              {/* Background Layer: Primary Palace & Beach Illustrated Scene */}
              <img
                src={palaceImage}
                alt="Majestic fantasy seashell palace standing centrally on an enchanted beach with crystal turquoise waters, golden sand, and a warm peach sunset"
                className={`w-full h-full object-cover sm:object-contain object-center transition-all duration-700 ${
                  isMoonlight
                    ? 'brightness-[0.78] contrast-[1.08] hue-rotate-[210deg] saturate-[1.25]'
                    : 'brightness-100 contrast-100'
                }`}
                loading="eager"
              />

              {/* Water Reflection & Sunburst Atmosphere Overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-opacity duration-700"
                style={{
                  background: isMoonlight
                    ? 'radial-gradient(circle at 50% 25%, rgba(91, 181, 162, 0.4) 0%, rgba(11, 17, 36, 0.8) 80%)'
                    : 'radial-gradient(circle at 50% 20%, rgba(255, 237, 213, 0.5) 0%, rgba(244, 139, 118, 0.15) 50%, transparent 80%)',
                }}
                aria-hidden="true"
              />

              {/* Gentle Tide Ripples Overlay at bottom water plane */}
              <div
                className="absolute bottom-0 inset-x-0 h-1/4 pointer-events-none opacity-40 bg-gradient-to-t from-teal-900/20 via-teal-500/10 to-transparent"
                aria-hidden="true"
              />

              {/* Atmospheric Floating Stars & Bubbles over beach */}
              <div className="absolute top-6 left-6 pointer-events-none opacity-75" aria-hidden="true">
                <StarCluster />
              </div>
              <div className="absolute top-12 right-8 pointer-events-none opacity-70" aria-hidden="true">
                <DecorativeStar size={20} color="#D4BA88" className="animate-star-shimmer" />
              </div>
              <div className="absolute bottom-8 left-8 pointer-events-none opacity-50 hidden sm:block" aria-hidden="true">
                <BubbleCluster />
              </div>

              {/* Palace Architectural Hotspots - Luminous Starlight Pearl Pins */}
              {PALACE_HOTSPOTS.map((hotspot) => {
                const isSelected = selectedHotspot?.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(isSelected ? null : hotspot)}
                    onMouseEnter={() => setSelectedHotspot(hotspot)}
                    aria-label={`Explore architectural curiosity: ${hotspot.name}`}
                    aria-expanded={isSelected}
                    style={{ top: hotspot.top, left: hotspot.left }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 z-10 cursor-pointer ${
                      isSelected
                        ? 'scale-125 bg-white shadow-lg ring-2 ring-[#D4BA88]'
                        : 'bg-white/90 hover:bg-white hover:scale-115 shadow-sm border border-[#D4BA88]/60'
                    }`}
                  >
                    {/* Breathing Starlight Halo */}
                    <span
                      className={`absolute -inset-1 rounded-full blur-xs transition-opacity animate-pearl-pulse ${
                        isSelected ? 'bg-[#D4BA88]/50 opacity-90' : 'bg-seaglass-300/40 opacity-40 group-hover:opacity-75'
                      }`}
                      aria-hidden="true"
                    />
                    <ShellIcon
                      variant={hotspot.shellVariant}
                      size={14}
                      color={isSelected ? '#0C5A60' : '#0C5A60'}
                      accentColor={isSelected ? '#D4BA88' : '#5BB5A2'}
                    />
                  </button>
                );
              })}

              {/* FEATURE 3: SECRET EASTER EGG — THE SPECIAL GLOWING SHELL */}
              <SecretShellEasterEgg isMoonlight={isMoonlight} />

              {/* FEATURE 1: CLEO NOTICES YOU — INTERACTIVE STORYBOOK CHARACTER */}
              <CleoNoticesYou isMoonlight={isMoonlight} />

              {/* FEATURE 2: SCENE ATMOSPHERE CELESTIAL CHARM (SUNSHINE VS MOONLIGHT) */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleThemeMode}
                  className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border shadow-sm transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                    isMoonlight
                      ? 'bg-midnight-950/85 text-seaglass-200 border-midnight-700 hover:bg-midnight-900'
                      : 'bg-ivory-50/90 text-teal-900 border-[#D4BA88]/60 hover:bg-white'
                  }`}
                  aria-pressed={isMoonlight}
                  aria-label={`Toggle atmosphere: Currently in ${isMoonlight ? 'Moonlight' : 'Sunshine'} mode`}
                  title="Toggle between Sunshine golden-hour and Moonlight starlight atmosphere"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isMoonlight ? 'bg-seaglass-400 animate-pulse' : 'bg-[#D4BA88]'
                    }`}
                  />
                  <span className="hidden sm:inline font-body text-[11px] tracking-wide">
                    {isMoonlight ? 'Moonlight Atmosphere' : 'Sunshine Atmosphere'}
                  </span>
                  <span className="text-[11px] font-hand text-coral-600 sm:hidden">
                    {isMoonlight ? 'Moon' : 'Sun'}
                  </span>
                </button>
              </div>
            </div>

            {/* Selected Hotspot Storybook Lore Footnote */}
            <div
              className={`mt-2 p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                isMoonlight
                  ? 'bg-midnight-950/90 border-midnight-800 text-ivory-100'
                  : 'bg-white/95 border-[#D4BA88]/50 text-teal-900'
              }`}
            >
              {selectedHotspot ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border ${
                        isMoonlight
                          ? 'bg-midnight-900 border-midnight-700'
                          : 'bg-sand-100 border-[#D4BA88]/50'
                      }`}
                    >
                      <ShellIcon
                        variant={selectedHotspot.shellVariant}
                        size={18}
                        color={isMoonlight ? '#5BB5A2' : '#0C5A60'}
                        accentColor="#D4BA88"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-medium text-base sm:text-lg leading-tight">
                          {selectedHotspot.name}
                        </h4>
                        <span className="text-xs font-hand text-[#D4BA88] font-semibold">
                          &bull; {selectedHotspot.tagline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm opacity-85 leading-relaxed font-body mt-0.5 max-w-2xl">
                        {selectedHotspot.description}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedHotspot(null)}
                    className="text-xs uppercase tracking-wider font-semibold opacity-60 hover:opacity-100 underline self-end sm:self-center cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm opacity-85 font-body py-0.5 px-1">
                  <span className="flex items-center gap-2">
                    <DecorativeStar size={11} color="#D4BA88" />
                    <span>
                      <strong>The Seashell Palace at Golden Hour:</strong> Luminous conch spires, fluted scallop gates, and tranquil turquoise tidal pools.
                    </span>
                  </span>
                  <span className="text-xs font-hand text-[#D4BA88] font-semibold self-start sm:self-center">
                    Touch Cleo to greet her &bull; Tap pearl markers to explore
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Storybook flourish transition */}
        <StorybookFlourish className="mt-14 mb-0" />
      </div>
    </section>
  );
};
