import React, { useState } from 'react';
import palaceImage from '../../assets/seashell-palace.jpg';
import { Badge } from '../../design-system/Badge';
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
        backgroundColor: isMoonlight ? '#0B1124' : '#FAF7EE',
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
          {/* Chapter / Location Stamp */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge
              variant={isMoonlight ? 'midnight' : 'coral'}
              isCollectorStamp
              className="shadow-sm"
            >
              Beach Mile 0.0 &bull; The Enchanted Shoreline
            </Badge>
            <span
              className={`font-hand text-xs sm:text-sm tracking-wide ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Where every shell holds a universe
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] mb-4 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-900'
            }`}
          >
            Cleo &mdash; The Girl Who Collects Worlds
          </h1>

          {/* Descriptive narrative lead */}
          <p
            className={`font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6 transition-colors ${
              isMoonlight ? 'text-seaglass-100/80' : 'text-teal-800/85'
            }`}
          >
            Step onto Cleo’s sun-drenched beach, where crystal-clear turquoise waters gently cradle
            a grand palace fashioned entirely from pearlescent shells, living coral, and glowing sea-glass.
          </p>

          {/* Functional Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-3">
            <a
              href="#collection"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-teal-800 text-ivory-50 hover:bg-teal-700 active:scale-[0.98] transition-all shadow-storybook hover:shadow-storybook-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2"
            >
              <ShellIcon variant="nautilus" size={18} color="#FAF7EE" accentColor="#5BB5A2" />
              <span>Explore Shell Worlds</span>
            </a>

            <a
              href="#journey"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all border shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                isMoonlight
                  ? 'bg-midnight-900 text-ivory-100 border-midnight-700 hover:bg-midnight-850'
                  : 'bg-white/90 text-teal-900 border-sand-300 hover:bg-white hover:border-teal-600'
              }`}
            >
              <DecorativeStar size={14} color="#F48B76" />
              <span>Read Cleo’s Story</span>
            </a>

            <a
              href="#about"
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                isMoonlight
                  ? 'bg-midnight-950 text-seaglass-300 border-midnight-700 hover:border-seaglass-400'
                  : 'bg-sand-100 text-teal-800 border-sand-300 hover:bg-sand-200'
              }`}
            >
              <span>Character Sheet</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Central Seashell Palace & Beach Composition with Cleo in the Foreground */}
        <div className="relative mx-auto max-w-5xl">
          {/* Storybook Outer Frame with Delicate Double Borders and Ambient Shadows */}
          <div
            className={`relative rounded-3xl sm:rounded-4xl overflow-hidden border p-2 sm:p-3 transition-all duration-700 shadow-storybook-hover ${
              isMoonlight
                ? 'bg-midnight-900/90 border-midnight-700 shadow-night'
                : 'bg-gradient-to-b from-white via-sand-50 to-sand-100 border-sand-300'
            }`}
          >
            {/* Aspect-Ratio Box preserving the full palace silhouette & Cleo on all screens */}
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-sand-200">
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
              <div className="absolute top-6 left-6 pointer-events-none opacity-80" aria-hidden="true">
                <StarCluster />
              </div>
              <div className="absolute top-12 right-8 pointer-events-none opacity-75" aria-hidden="true">
                <DecorativeStar size={24} color="#F48B76" className="animate-star-shimmer" />
              </div>
              <div className="absolute bottom-8 left-8 pointer-events-none opacity-60 hidden sm:block" aria-hidden="true">
                <BubbleCluster />
              </div>

              {/* Palace Architectural Hotspots */}
              {PALACE_HOTSPOTS.map((hotspot) => {
                const isSelected = selectedHotspot?.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(isSelected ? null : hotspot)}
                    onMouseEnter={() => setSelectedHotspot(hotspot)}
                    aria-label={`Explore detail: ${hotspot.name}`}
                    aria-expanded={isSelected}
                    style={{ top: hotspot.top, left: hotspot.left }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-coral-400 z-10 ${
                      isSelected
                        ? 'scale-125 ring-4 ring-coral-400 bg-white shadow-lg'
                        : 'bg-white/85 hover:bg-white hover:scale-110 shadow-md ring-2 ring-teal-800/20'
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full animate-ping opacity-35 ${
                        isSelected ? 'bg-coral-400' : 'bg-teal-500'
                      }`}
                      aria-hidden="true"
                    />
                    <ShellIcon
                      variant={hotspot.shellVariant}
                      size={16}
                      color={isSelected ? '#F48B76' : '#0C5A60'}
                      accentColor={isSelected ? '#0C5A60' : '#5BB5A2'}
                    />
                  </button>
                );
              })}

              {/* FEATURE 3: SECRET EASTER EGG — THE SPECIAL GLOWING SHELL */}
              <SecretShellEasterEgg isMoonlight={isMoonlight} />

              {/* FEATURE 1: CLEO NOTICES YOU — INTERACTIVE STORYBOOK CHARACTER */}
              <CleoNoticesYou isMoonlight={isMoonlight} />

              {/* FEATURE 2: SCENE ATMOSPHERE TOGGLE BADGE (SUNSHINE VS MOONLIGHT) */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2">

                <button
                  type="button"
                  onClick={toggleThemeMode}
                  className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border shadow-md transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                    isMoonlight
                      ? 'bg-midnight-950/85 text-seaglass-200 border-midnight-700 hover:bg-midnight-900'
                      : 'bg-ivory-50/90 text-teal-900 border-sand-300 hover:bg-white'
                  }`}
                  aria-pressed={isMoonlight}
                  aria-label={`Toggle theme: Currently in ${isMoonlight ? 'Moonlight' : 'Sunshine'} mode`}
                  title="Toggle between Sunshine golden-hour and Moonlight starlight atmosphere"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isMoonlight ? 'bg-seaglass-400 animate-pulse' : 'bg-coral-400'
                    }`}
                  />
                  <span className="hidden sm:inline">
                    {isMoonlight ? 'Moonlight Mode' : 'Sunshine Mode'}
                  </span>
                  <span className="text-[11px] font-hand text-coral-600 sm:hidden">
                    {isMoonlight ? 'Moon' : 'Sun'}
                  </span>
                </button>
              </div>

              {/* Mobile / Screen-reader hint */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 pointer-events-none">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-md border shadow-sm ${
                    isMoonlight
                      ? 'bg-midnight-950/75 text-seaglass-300 border-midnight-700'
                      : 'bg-white/80 text-teal-800 border-sand-300'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-400 animate-ping" />
                  <span className="hidden sm:inline">Cleo &bull; Beach &bull; Palace &bull; Touch or click</span>
                  <span className="sm:hidden">Tap Cleo or beach</span>
                </span>
              </div>
            </div>

            {/* Selected Hotspot Storybook Lore Banner */}
            <div
              className={`mt-2 p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                isMoonlight
                  ? 'bg-midnight-950/90 border-midnight-800 text-ivory-100'
                  : 'bg-white/95 border-sand-300 text-teal-900'
              }`}
            >
              {selectedHotspot ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border ${
                        isMoonlight
                          ? 'bg-midnight-900 border-midnight-700'
                          : 'bg-sand-100 border-sand-300'
                      }`}
                    >
                      <ShellIcon
                        variant={selectedHotspot.shellVariant}
                        size={20}
                        color={isMoonlight ? '#5BB5A2' : '#0C5A60'}
                        accentColor="#F48B76"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-base sm:text-lg leading-tight">
                          {selectedHotspot.name}
                        </h4>
                        <span className="text-xs font-hand text-coral-500 font-semibold">
                          &bull; {selectedHotspot.tagline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-body mt-0.5">
                        {selectedHotspot.description}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedHotspot(null)}
                    className="text-xs uppercase tracking-wider font-semibold opacity-60 hover:opacity-100 underline self-end sm:self-center"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm opacity-80 font-body py-0.5 px-1">
                  <span className="flex items-center gap-2">
                    <DecorativeStar size={12} color="#5BB5A2" />
                    <span>
                      <strong>Cleo on the Enchanted Beach:</strong> Standing before her central seashell palace with
                      cream lace dress and seashell tiara, listening to the gentle turquoise tide.
                    </span>
                  </span>
                  <span className="text-xs font-hand text-coral-600 font-semibold self-start sm:self-center">
                    Tap Cleo to greet her &bull; Search the sand for secrets
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Storybook flourish transition */}
        <StorybookFlourish className="mt-12 mb-0" />
      </div>
    </section>
  );
};
