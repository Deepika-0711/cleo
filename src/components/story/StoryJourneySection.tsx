import React, { useState } from 'react';
import cleoBeachPainting from '../../assets/cleo_3d.jpg';
import cleoCharacterImg from '../../assets/cleo-hero-transparent.png';
import palaceBeachImg from '../../assets/seashell-palace.jpg';
import { Badge } from '../../design-system/Badge';

import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import { useTheme } from '../../design-system/useTheme';
import cloudVillageImg from '../../assets/cloud-village.jpg';
import dinosaurGardenImg from '../../assets/dinosaur-garden.jpg';
import pearlKingdomImg from '../../assets/pearl-kingdom.jpg';

export const StoryJourneySection: React.FC = () => {
  const { isMoonlight } = useTheme();
  const [activeMiniWorld, setActiveMiniWorld] = useState<'pearl' | 'cloud' | 'dino'>('pearl');

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isMoonlight ? '#09111E' : '#FAF7EE' }}
    >
      {/* Subtle organic paper grain & water caustics overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply transition-opacity duration-700"
        style={{
          backgroundImage: isMoonlight
            ? 'radial-gradient(circle at 10% 20%, rgba(91, 181, 162, 0.25) 0%, transparent 40%), radial-gradient(circle at 90% 70%, rgba(36, 58, 92, 0.45) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(13, 25, 45, 0.6) 0%, transparent 70%)'
            : 'radial-gradient(circle at 10% 20%, rgba(212, 186, 136, 0.35) 0%, transparent 40%), radial-gradient(circle at 90% 70%, rgba(140, 189, 181, 0.25) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(217, 190, 145, 0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Luxury Fairytale Journal Editorial Style */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          {/* Eyebrow Label with delicate pearl dividers */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.24em] font-medium transition-colors ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Chapter II &bull; Cleo&apos;s Field Journal
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
          </div>

          <h2
            id="journey-heading"
            className={`font-display italic font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.18] mb-4 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-950'
            }`}
          >
            A Story Written by the Sea
          </h2>

          <p
            className={`font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto transition-colors ${
              isMoonlight ? 'text-seaglass-100/80' : 'text-teal-800/85'
            }`}
          >
            Turn the pages of Cleo&apos;s seaside journal. Each tidal morning brings a quiet whisper,
            a gentle finding, and an infinity folded inside calcium and pearl.
          </p>

          <StorybookFlourish className="mt-6 mb-2" />
        </div>

        {/* -------------------------------------------------------------
            MOMENT 1: THE QUIET SHORE
            Cinematic golden-hour beach scene with Cleo discovering shells
        ------------------------------------------------------------- */}
        <div className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Cinematic Fairytale Plate with Corner Pearls */}
            <div className="lg:col-span-6 relative group w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
              {/* Outer Deckle Frame with Sand/Champagne Borders */}
              <div
                className="relative rounded-[28px] sm:rounded-[36px] p-3 sm:p-4 border shadow-storybook-hover transition-transform duration-700 group-hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#D9BE91',
                }}
              >
                {/* Decorative Miniature Corner Pearls */}
                <span className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-[#FFF9F0] border border-[#D9BE91] shadow-sm z-20" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FFF9F0] border border-[#D9BE91] shadow-sm z-20" />
                <span className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-[#FFF9F0] border border-[#D9BE91] shadow-sm z-20" />
                <span className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FFF9F0] border border-[#D9BE91] shadow-sm z-20" />

                {/* Primary Image Container: 3:4 portrait matching Cleo's original painting */}
                <div className="relative aspect-[3/4] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#FAF7EE] shadow-inner">
                  <img
                    src={cleoBeachPainting}
                    alt="Storybook portrait of Cleo on the beach wearing her ocean floral shell crown, long chestnut curls, and vintage cream dress while holding a glowing seashell"
                    className="w-full h-full object-cover object-top origin-top transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />

                  {/* Warm sunrise golden-hour gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-40"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(247, 200, 168, 0.3) 0%, rgba(242, 213, 205, 0.15) 60%, rgba(140, 189, 181, 0.25) 100%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Archival Postmark Stamp in corner (placed at bottom to give her crown complete breathing space) */}
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#254747] bg-[#FFF9F0]/90 backdrop-blur-md border border-[#D9BE91]/80 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8CBDB5]" />
                      <span>Plate I &bull; Pebble Cove &bull; 06:14 AM</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating ambient fairy star */}
              <div className="absolute -bottom-3 -right-3 z-30 pointer-events-none">
                <DecorativeStar size={20} color="#D9BE91" className="animate-star-shimmer" />
              </div>
            </div>

            {/* Right: Editorial Narrative Typography */}
            <div className="lg:col-span-6 text-left lg:pl-6 space-y-5">
              <div className="flex items-center gap-2">
                <Badge variant="coral" isCollectorStamp className="border-[#F2D5CD]">
                  Moment 01 &bull; Low Tide
                </Badge>
                <span className="font-hand text-xs text-[#8CBDB5] font-semibold">
                  Dawn on the Shore
                </span>
              </div>

              <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-[#254747] tracking-tight leading-tight">
                The Quiet Shore
              </h3>

              <div className="h-0.5 w-16 bg-[#D9BE91]/60" />

              <p className="font-body text-base text-[#254747]/90 leading-relaxed">
                Before the morning gulls take flight, Cleo walks the narrow line where the tide forgets its secrets.
                Her footprints form a quiet rhythm upon wet golden sand, beside small driftwoods and tangled kelp.
              </p>

              <p className="font-body text-sm sm:text-base text-[#254747]/80 leading-relaxed">
                In every tide pool, miniature shells lie half-buried in cool sea-glass sand—waiting patiently
                for someone gentle enough to pause, brush away the salt, and listen.
              </p>

              {/* Cleo's Personal Journal Margin Note */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F0] border border-[#D9BE91]/60 shadow-sm relative">
                <div className="flex items-start gap-2.5">
                  <span className="font-hand text-xl text-[#F48B76] leading-none">&ldquo;</span>
                  <p className="font-hand text-base sm:text-lg text-[#254747] leading-snug">
                    The sand is cool underfoot, and the morning waves sing in a slow, three-beat waltz today.
                  </p>
                </div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#8CBDB5] text-right mt-2 font-semibold">
                  &mdash; Cleo&apos;s Field Log
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            MOMENT 2: A LITTLE GLOW
            Intimate story discovery spread redesigned as a compact, intentional storybook feature
        ------------------------------------------------------------- */}
        <div className="mb-24 sm:mb-32">
          <div
            className={`max-w-4xl mx-auto rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border shadow-storybook relative overflow-hidden transition-colors ${
              isMoonlight
                ? 'bg-[#0E172A] border-[#2A4365]'
                : 'bg-[#FFFDF9] border-[#D4BA88]/60'
            }`}
          >
            {/* Subtle warm sunset inner glow */}
            <div
              className="absolute -top-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                background: isMoonlight
                  ? 'radial-gradient(circle, rgba(91, 181, 162, 0.4) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(247, 200, 168, 0.7) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              {/* Header with Moment Badge and Folio Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-[#D4BA88]/30">
                <div className="flex items-center gap-2.5">
                  <Badge variant="teal" isCollectorStamp className="border-[#8CBDB5]">
                    Moment 02 &bull; The Discovery
                  </Badge>
                  <span className="font-hand text-sm text-[#D4BA88] font-semibold">
                    A Gentle Spark
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4BA88] font-semibold">
                  Chapter II &bull; Folio 02
                </span>
              </div>

              {/* Title & Introduction */}
              <div>
                <h3
                  className={`font-display font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-3 ${
                    isMoonlight ? 'text-ivory-50' : 'text-[#254747]'
                  }`}
                >
                  A Little Glow
                </h3>
                <div className="h-0.5 w-16 bg-[#F2D5CD]" />
              </div>

              {/* Narrative Content in 2 balanced editorial columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                <p
                  className={`font-body text-sm sm:text-base leading-relaxed ${
                    isMoonlight ? 'text-seaglass-100/90' : 'text-[#254747]/90'
                  }`}
                >
                  It was not like ordinary seashells. When Cleo gently cradled the spiral nautilus in both hands,
                  a warm rose-gold iridescence pulsed through its fluted chambers, casting soft amber reflections across her palms.
                </p>

                <p
                  className={`font-body text-sm sm:text-base leading-relaxed ${
                    isMoonlight ? 'text-seaglass-100/85' : 'text-[#254747]/85'
                  }`}
                >
                  Tiny luminous pearls hovered like suspended stars. When she drew it close to her ear,
                  she didn&apos;t hear the roar of the tide—she heard sweet melodies echoing from another sky.
                </p>
              </div>

              {/* Fairytale Folio Observation Note */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border shadow-xs transition-colors ${
                  isMoonlight
                    ? 'bg-[#132238] border-[#2A4365]'
                    : 'bg-[#FAF7EE] border-[#D4BA88]/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2 pb-1.5 border-b border-[#D4BA88]/30">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4BA88] font-semibold">
                      Cleo&apos;s Field Note &bull; Acoustic Discovery
                    </span>
                    <DecorativeStar size={11} color="#D4BA88" />
                  </div>
                  <span className="text-[#DE6B54] font-semibold text-[10px] uppercase tracking-wider">
                    &bull; Whispering Chamber
                  </span>
                </div>
                <p
                  className={`font-hand text-base sm:text-lg leading-relaxed ${
                    isMoonlight ? 'text-ivory-100' : 'text-teal-950'
                  }`}
                >
                  &ldquo;If you hold it against your cheek, it hums at the exact temperature of a sleeping star.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            MOMENT 3: WORLDS WITHIN
            Three immersive illustrated fairytale worlds emerging from a shell
        ------------------------------------------------------------- */}
        <div className="mb-24 sm:mb-32">
          <div
            className={`rounded-[28px] sm:rounded-[44px] p-5 sm:p-10 lg:p-12 border shadow-storybook relative overflow-hidden transition-colors ${
              isMoonlight
                ? 'bg-[#0E172A] border-[#2A4365]'
                : 'bg-[#FFFFFF] border-[#8CBDB5]'
            }`}
          >
            {/* Soft decorative background tint */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 50% 20%, rgba(140, 189, 181, 0.4) 0%, rgba(247, 200, 168, 0.3) 50%, transparent 80%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center mb-8 sm:mb-12">
              <Badge variant="seaglass" isCollectorStamp className="border-[#8CBDB5] mb-3">
                Moment 03 &bull; The Three Horizons
              </Badge>
              <h3
                className={`font-display font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-3 ${
                  isMoonlight ? 'text-ivory-50' : 'text-[#254747]'
                }`}
              >
                Worlds Within
              </h3>
              <p
                className={`font-body text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
                  isMoonlight ? 'text-seaglass-100/85' : 'text-[#254747]/85'
                }`}
              >
                As Cleo tipped the shell toward the sunlight, three miniature universes unfolded into view—each
                self-contained, living, and breathing with its own sky.
              </p>
            </div>

            {/* Three Illustrated Fairytale World Pages */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-8">
              {/* World Card 1: Pearl Kingdom */}
              <div
                onClick={() => setActiveMiniWorld('pearl')}
                className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-500 cursor-pointer text-left flex flex-col justify-between overflow-hidden ${
                  activeMiniWorld === 'pearl'
                    ? isMoonlight
                      ? 'bg-[#132238] border-seaglass-400 shadow-night ring-2 ring-seaglass-400/40'
                      : 'bg-[#FFFDF9] border-[#0C5A60] shadow-storybook ring-2 ring-[#8CBDB5]/50'
                    : isMoonlight
                      ? 'bg-[#0A1220]/80 border-[#1E3048] hover:border-seaglass-400/60 shadow-sm'
                      : 'bg-[#FFFDF9] border-[#D9BE91]/50 hover:border-teal-700/50 shadow-xs hover:shadow-storybook'
                } hover:-translate-y-1`}
              >
                {/* Upper Half: Generously Sized Illustration */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF7EE] border-b border-[#D4BA88]/30">
                  <img
                    src={pearlKingdomImg}
                    alt="Underwater Pearl Kingdom shell palace with luminous towers, coral gardens, and glowing pearls"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle storybook gradient vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  {/* Horizon Badge pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55D1C5]" />
                    <span>Horizon I &bull; Depths</span>
                  </div>
                </div>

                {/* Lower Half: Title, Description & Small Distinctive Detail */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4
                      className={`font-display font-medium text-xl sm:text-2xl mb-2 transition-colors ${
                        isMoonlight
                          ? 'text-ivory-50 group-hover:text-seaglass-300'
                          : 'text-[#254747] group-hover:text-teal-700'
                      }`}
                    >
                      The Pearl Kingdom
                    </h4>
                    <p
                      className={`font-body text-xs sm:text-sm leading-relaxed ${
                        isMoonlight ? 'text-seaglass-100/80' : 'text-[#254747]/80'
                      }`}
                    >
                      A sunken realm where luminous coral towers support pearlescent arches and friendly fairy fish glide through turquoise waters.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#8CBDB5]/20 flex items-center justify-between text-[11px] font-hand text-[#0C5A60] dark:text-seaglass-300">
                    <span>&ldquo;Home to Barnaby the courier crab&rdquo;</span>
                    <span className="text-[10px] font-mono text-[#D4BA88] uppercase tracking-wider font-semibold">Folio 01</span>
                  </div>
                </div>
              </div>

              {/* World Card 2: Cloud Village */}
              <div
                onClick={() => setActiveMiniWorld('cloud')}
                className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-500 cursor-pointer text-left flex flex-col justify-between overflow-hidden ${
                  activeMiniWorld === 'cloud'
                    ? isMoonlight
                      ? 'bg-[#132238] border-[#C5B4E3] shadow-night ring-2 ring-[#C5B4E3]/40'
                      : 'bg-[#FFFDF9] border-[#7A5B9C] shadow-storybook ring-2 ring-[#C5B4E3]/50'
                    : isMoonlight
                      ? 'bg-[#0A1220]/80 border-[#1E3048] hover:border-[#C5B4E3]/60 shadow-sm'
                      : 'bg-[#FFFDF9] border-[#D9BE91]/50 hover:border-[#7A5B9C]/50 shadow-xs hover:shadow-storybook'
                } hover:-translate-y-1`}
              >
                {/* Upper Half: Generously Sized Illustration */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF7EE] border-b border-[#D4BA88]/30">
                  <img
                    src={cloudVillageImg}
                    alt="Dreamy Cloud Village floating sky islands with pastel cottages, fluffy clouds, bridges, and lanterns"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle storybook gradient vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  {/* Horizon Badge pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B4E3]" />
                    <span>Horizon II &bull; Zephyr</span>
                  </div>
                </div>

                {/* Lower Half: Title, Description & Small Distinctive Detail */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4
                      className={`font-display font-medium text-xl sm:text-2xl mb-2 transition-colors ${
                        isMoonlight
                          ? 'text-ivory-50 group-hover:text-[#D5C6F0]'
                          : 'text-[#254747] group-hover:text-[#583F72]'
                      }`}
                    >
                      The Cloud Village
                    </h4>
                    <p
                      className={`font-body text-xs sm:text-sm leading-relaxed ${
                        isMoonlight ? 'text-seaglass-100/80' : 'text-[#254747]/80'
                      }`}
                    >
                      Airborne meadow islands connected by wooden bridges, where pastel cottages and windmills churn gentle breezes into sweet sky blossom mist.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#C5B4E3]/30 flex items-center justify-between text-[11px] font-hand text-[#583F72] dark:text-[#D5C6F0]">
                    <span>&ldquo;Windmills spinning sea-silk mist&rdquo;</span>
                    <span className="text-[10px] font-mono text-[#D4BA88] uppercase tracking-wider font-semibold">Folio 02</span>
                  </div>
                </div>
              </div>

              {/* World Card 3: Dinosaur Garden */}
              <div
                onClick={() => setActiveMiniWorld('dino')}
                className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-500 cursor-pointer text-left flex flex-col justify-between overflow-hidden ${
                  activeMiniWorld === 'dino'
                    ? isMoonlight
                      ? 'bg-[#132238] border-[#7BB89A] shadow-night ring-2 ring-[#7BB89A]/40'
                      : 'bg-[#FFFDF9] border-[#386B52] shadow-storybook ring-2 ring-[#7BB89A]/50'
                    : isMoonlight
                      ? 'bg-[#0A1220]/80 border-[#1E3048] hover:border-[#7BB89A]/60 shadow-sm'
                      : 'bg-[#FFFDF9] border-[#D9BE91]/50 hover:border-[#386B52]/50 shadow-xs hover:shadow-storybook'
                } hover:-translate-y-1`}
              >
                {/* Upper Half: Generously Sized Illustration */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF7EE] border-b border-[#D4BA88]/30">
                  <img
                    src={dinosaurGardenImg}
                    alt="Lush Dinosaur Garden conservatory with friendly baby sauropod, baby triceratops, waterfalls, and tropical flora"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle storybook gradient vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  {/* Horizon Badge pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7BB89A]" />
                    <span>Horizon III &bull; Haven</span>
                  </div>
                </div>

                {/* Lower Half: Title, Description & Small Distinctive Detail */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4
                      className={`font-display font-medium text-xl sm:text-2xl mb-2 transition-colors ${
                        isMoonlight
                          ? 'text-ivory-50 group-hover:text-[#99D4B5]'
                          : 'text-[#254747] group-hover:text-[#386B52]'
                      }`}
                    >
                      The Dinosaur Garden
                    </h4>
                    <p
                      className={`font-body text-xs sm:text-sm leading-relaxed ${
                        isMoonlight ? 'text-seaglass-100/80' : 'text-[#254747]/80'
                      }`}
                    >
                      A sunlit prehistoric conservatory where gentle baby dinosaurs graze beside crystal waterfalls and sparkling streams.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#7BB89A]/30 flex items-center justify-between text-[11px] font-hand text-[#386B52] dark:text-[#99D4B5]">
                    <span>&ldquo;Pip balancing buttercup garlands&rdquo;</span>
                    <span className="text-[10px] font-mono text-[#D4BA88] uppercase tracking-wider font-semibold">Folio 03</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Poetic synthesis caption */}
            <div className="relative z-10 max-w-lg mx-auto text-center pt-4 border-t border-[#D9BE91]/40">
              <p className="font-hand text-sm sm:text-base text-[#254747]/90 dark:text-seaglass-100/90 leading-snug">
                &ldquo;One held an ocean under the ocean. One held windmills in lavender sky.
                And one hid gentle giants who only ate buttercups. All smaller than a teacup.&rdquo;
              </p>
            </div>
          </div>
        </div>


        {/* -------------------------------------------------------------
            MOMENT 4: BEYOND THE HORIZON
            Wide panoramic composition of Cleo looking toward the distant sea
        ------------------------------------------------------------- */}
        <div className="relative">
          <div
            className="rounded-[28px] sm:rounded-[48px] p-4 sm:p-10 lg:p-12 border shadow-storybook-hover overflow-hidden relative"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#D9BE91',
            }}
          >
            {/* Wide Panoramic Sunset Artwork Frame */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[20px] sm:rounded-[36px] overflow-hidden bg-[#FAF7EE] mb-6 sm:mb-8">
              <img
                src={palaceBeachImg}
                alt="Panoramic view of the beach at sunset with the seashell palace, tranquil turquoise water, and golden sky stretching toward the horizon"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Pale sunset peach & warm champagne gradient film */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60"
                style={{
                  background:
                    'linear-gradient(to top, rgba(247, 200, 168, 0.5) 0%, rgba(242, 213, 205, 0.3) 50%, rgba(37, 71, 71, 0.3) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Cleo in the Foreground looking out toward the sea */}
              <div className="absolute bottom-2 left-4 sm:left-14 md:left-20 z-20 flex items-end">
                <img
                  src={cleoCharacterImg}
                  alt="Cleo standing at the water's edge looking out toward the distant sea with her collecting bag"
                  className="w-20 sm:w-36 md:w-44 h-auto object-contain filter drop-shadow(0 6px 16px rgba(37, 71, 71, 0.3))"
                />
              </div>

              {/* Panoramic Horizon Label */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-mono uppercase tracking-widest text-[#254747] bg-[#FFF9F0]/90 backdrop-blur-md border border-[#D9BE91] shadow-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F48B76] animate-pulse" />
                  <span>Plate IV &bull; The Endless Horizon</span>
                </span>
              </div>
            </div>

            {/* Narrative Finale Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              <div className="lg:col-span-8 text-left space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="sand" isCollectorStamp className="border-[#D9BE91]">
                    Moment 04 &bull; The Continuous Journey
                  </Badge>
                  <span className="font-hand text-xs text-[#8CBDB5] font-semibold">
                    Toward Tomorrow
                  </span>
                </div>

                <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#254747] tracking-tight">
                  The Tide That Never Ends
                </h3>

                <p className="font-body text-sm sm:text-base text-[#254747]/85 leading-relaxed">
                  The shoreline stretches into quiet infinity, and tomorrow the waves will wash ashore brand new worlds.
                  Cleo adjusts her woven shell basket, smiles at the lilac-pink sunset, and walks onward along the edge of sea and sky.
                </p>
              </div>

              {/* Concluding Journal Wax Seal */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-2xl bg-[#FFF9F0] border border-[#D9BE91]/60 text-center">
                <div className="w-12 h-12 rounded-full bg-[#F2D5CD] border-2 border-[#D9BE91] flex items-center justify-center shadow-inner mb-2 animate-float-gentle">
                  <ShellIcon variant="scallop" size={24} color="#254747" accentColor="#D9BE91" />
                </div>
                <span className="font-hand text-base text-[#254747] font-bold block">
                  &ldquo;To collect a world is to keep its memory safe.&rdquo;
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8CBDB5] mt-1">
                  Official Seal of Cleo &bull; 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Flourish */}
        <StorybookFlourish className="mt-16 sm:mt-20 mb-0" />
      </div>
    </section>
  );
};
