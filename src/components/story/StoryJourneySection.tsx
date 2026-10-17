import React, { useState } from 'react';
import cleoBeachPainting from '../../assets/cleo_3d.jpg';
import cleoCharacterImg from '../../assets/cleo-hero-transparent.png';
import palaceBeachImg from '../../assets/seashell-palace.jpg';
import { Badge } from '../../design-system/Badge';
import { DecorativeBubble } from '../../design-system/DecorativeBubbles';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import { useTheme } from '../../design-system/useTheme';
import {
  CloudVillageShellVessel,
  DinosaurGardenShellVessel,
  PearlKingdomShellVessel,
} from '../collection/ShellVesselIllustrations';

export const StoryJourneySection: React.FC = () => {
  const { isMoonlight } = useTheme();
  const [activeMiniWorld, setActiveMiniWorld] = useState<'pearl' | 'cloud' | 'dino'>('pearl');

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 lg:py-32 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isMoonlight ? '#0B1320' : '#FFF9F0' }} // Warm pearl ivory or deep nocturnal ink
    >
      {/* Subtle organic paper grain & water caustics overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-700"
        style={{
          backgroundImage: isMoonlight
            ? 'radial-gradient(circle at 10% 20%, rgba(91, 181, 162, 0.25) 0%, transparent 40%), radial-gradient(circle at 90% 70%, rgba(36, 58, 92, 0.45) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(13, 25, 45, 0.6) 0%, transparent 70%)'
            : 'radial-gradient(circle at 10% 20%, rgba(242, 213, 205, 0.45) 0%, transparent 40%), radial-gradient(circle at 90% 70%, rgba(140, 189, 181, 0.35) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(217, 190, 145, 0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Luxury Fairytale Journal Editorial Style */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          {/* Eyebrow Label with delicate pearl dividers */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 shadow-sm transition-colors ${
              isMoonlight
                ? 'bg-[#132238] border-[#2E4968]'
                : 'bg-[#F2D5CD]/40 border-[#D9BE91]/50'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8CBDB5]" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors ${
                isMoonlight ? 'text-[#80CBC4]' : 'text-[#254747]'
              }`}
            >
              CLEO&apos;S JOURNAL &bull; CHAPTER 01
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8CBDB5]" />
          </div>

          <h2
            id="journey-heading"
            className={`font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.18] mb-4 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-[#254747]'
            }`}
          >
            A Story Written by the Sea
          </h2>

          <p
            className={`font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto transition-colors ${
              isMoonlight ? 'text-seaglass-100/80' : 'text-[#254747]/80'
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
            Intimate close-up of a glowing seashell, pearls, and starlight
        ------------------------------------------------------------- */}
        <div className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Editorial Narrative Typography */}
            <div className="lg:col-span-5 text-left lg:order-1 order-2 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="teal" isCollectorStamp className="border-[#8CBDB5]">
                  Moment 02 &bull; The Discovery
                </Badge>
                <span className="font-hand text-xs text-[#D9BE91] font-semibold">
                  A Gentle Spark
                </span>
              </div>

              <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-[#254747] tracking-tight leading-tight">
                A Little Glow
              </h3>

              <div className="h-0.5 w-16 bg-[#F2D5CD]" />

              <p className="font-body text-sm sm:text-base text-[#254747]/85 leading-relaxed">
                It was not like ordinary seashells. When Cleo gently cradled the spiral nautilus in both hands,
                a warm rose-gold iridescence pulsed through its fluted chambers, casting soft amber reflections across her palms.
              </p>

              <p className="font-body text-sm text-[#254747]/80 leading-relaxed">
                Tiny luminous pearls hovered like suspended stars. When she drew it close to her ear,
                she didn&apos;t hear the roar of the tide—she heard sweet melodies echoing from another sky.
              </p>

              {/* Observation Tag */}
              <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#F2D5CD] shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-[#254747]/75 mb-1">
                  <span>SPECIMEN NO. 081 &bull; AURORA SHELL</span>
                  <span className="text-[#F48B76] font-semibold">&bull; Active Luminance</span>
                </div>
                <p className="font-hand text-sm sm:text-base text-[#254747]">
                  &ldquo;If you hold it against your cheek, it hums at the exact temperature of a sleeping star.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Intimate Illustrated Vignette with Glowing Shell Artwork */}
            <div className="lg:col-span-7 lg:order-2 order-1 relative group">
              <div
                className="relative rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 border shadow-storybook-hover overflow-hidden transition-transform duration-700 group-hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#F2D5CD',
                }}
              >
                {/* Radial Aurora Glow centered on shell */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-45"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(247, 200, 168, 0.7) 0%, rgba(242, 213, 205, 0.5) 40%, rgba(140, 189, 181, 0.2) 70%, transparent 95%)',
                  }}
                  aria-hidden="true"
                />

                {/* Floating ambient particles */}
                <div className="absolute top-6 left-8 pointer-events-none">
                  <DecorativeStar size={16} color="#F48B76" className="animate-star-shimmer" />
                </div>
                <div className="absolute bottom-8 right-10 pointer-events-none">
                  <DecorativeStar size={20} color="#8CBDB5" className="animate-star-shimmer" />
                </div>
                <div className="absolute top-1/2 left-6 pointer-events-none hidden sm:block">
                  <DecorativeBubble size={16} />
                </div>

                {/* Central Vignette: Cleo holding the Luminous Shell */}
                <div className="relative z-10 flex flex-col items-center justify-center py-6 sm:py-8">
                  {/* Glowing Shell Vessel in Foreground with Celestial Aura */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="absolute w-44 h-44 rounded-full blur-2xl opacity-60 animate-pulse"
                      style={{ backgroundColor: '#F7C8A8' }}
                      aria-hidden="true"
                    />
                    <PearlKingdomShellVessel size={200} className="relative z-10 animate-float-gentle" />

                    {/* Surrounding Tiny Floating Pearls */}
                    <span className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-white border border-[#D9BE91] shadow-md animate-bubble-drift" />
                    <span
                      className="absolute top-12 -right-2 w-5 h-5 rounded-full bg-[#FFF9F0] border border-[#8CBDB5] shadow-md animate-bubble-drift"
                      style={{ animationDelay: '1.2s' }}
                    />
                    <span
                      className="absolute bottom-4 left-4 w-3.5 h-3.5 rounded-full bg-[#F2D5CD] border border-white shadow-md animate-bubble-drift"
                      style={{ animationDelay: '2.4s' }}
                    />
                  </div>

                  <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#254747]/70">
                    The First Whisper &bull; Nautilus of the Outer Depths
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            MOMENT 3: WORLDS WITHIN
            Three miniature illustrated scenes emerging from a shell
        ------------------------------------------------------------- */}
        <div className="mb-24 sm:mb-32">
          <div
            className="rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-14 border shadow-storybook relative overflow-hidden"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#8CBDB5',
            }}
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

            <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
              <Badge variant="seaglass" isCollectorStamp className="border-[#8CBDB5] mb-3">
                Moment 03 &bull; The Three Horizons
              </Badge>
              <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-[#254747] tracking-tight leading-tight mb-3">
                Worlds Within
              </h3>
              <p className="font-body text-sm sm:text-base text-[#254747]/85 max-w-xl mx-auto leading-relaxed">
                As Cleo tipped the shell toward the sunlight, three miniature universes unfolded into view—each
                self-contained, living, and breathing with its own sky.
              </p>
            </div>

            {/* Three Miniature Illustrated Windows Emerging on Arched Ribbons */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-8">
              {/* World Window 1: Pearl Kingdom */}
              <div
                onClick={() => setActiveMiniWorld('pearl')}
                className={`group relative p-5 rounded-3xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                  activeMiniWorld === 'pearl'
                    ? 'bg-[#EAF7F4] border-[#8CBDB5] shadow-storybook scale-[1.02]'
                    : 'bg-[#FFF9F0]/70 border-[#D9BE91]/40 hover:border-[#8CBDB5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#0C5A60] font-semibold">
                      Horizon I &bull; Depths
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#5BB5A2]" />
                  </div>

                  <div className="w-24 h-24 mx-auto my-2 flex items-center justify-center transition-transform group-hover:scale-110">
                    <PearlKingdomShellVessel size={90} />
                  </div>

                  <h4 className="font-display font-bold text-lg text-[#254747] text-center mb-2">
                    The Pearl Kingdom
                  </h4>
                  <p className="font-body text-xs text-[#254747]/80 leading-relaxed text-center">
                    A sunken realm where coral towers support bioluminescent kelp domes and fairy fish swim in rings.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#8CBDB5]/20 text-[11px] font-hand text-center text-[#0C5A60]">
                  &ldquo;Home to Barnaby the courier crab&rdquo;
                </div>
              </div>

              {/* World Window 2: Cloud Village */}
              <div
                onClick={() => setActiveMiniWorld('cloud')}
                className={`group relative p-5 rounded-3xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                  activeMiniWorld === 'cloud'
                    ? 'bg-[#F2EDF8] border-[#C5B4E3] shadow-storybook scale-[1.02]'
                    : 'bg-[#FFF9F0]/70 border-[#D9BE91]/40 hover:border-[#C5B4E3]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#583F72] font-semibold">
                      Horizon II &bull; Zephyr
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#C5B4E3]" />
                  </div>

                  <div className="w-24 h-24 mx-auto my-2 flex items-center justify-center transition-transform group-hover:scale-110">
                    <CloudVillageShellVessel size={90} />
                  </div>

                  <h4 className="font-display font-bold text-lg text-[#254747] text-center mb-2">
                    The Cloud Village
                  </h4>
                  <p className="font-body text-xs text-[#254747]/80 leading-relaxed text-center">
                    Airborne meadow islands connected by rope bridges, where windmills churn evening breeze into cotton candy.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C5B4E3]/30 text-[11px] font-hand text-center text-[#583F72]">
                  &ldquo;Rooftop windmills spinning sea-silk&rdquo;
                </div>
              </div>

              {/* World Window 3: Dinosaur Garden */}
              <div
                onClick={() => setActiveMiniWorld('dino')}
                className={`group relative p-5 rounded-3xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                  activeMiniWorld === 'dino'
                    ? 'bg-[#F2F8ED] border-[#7BB89A] shadow-storybook scale-[1.02]'
                    : 'bg-[#FFF9F0]/70 border-[#D9BE91]/40 hover:border-[#7BB89A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#386B52] font-semibold">
                      Horizon III &bull; Haven
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#7BB89A]" />
                  </div>

                  <div className="w-24 h-24 mx-auto my-2 flex items-center justify-center transition-transform group-hover:scale-110">
                    <DinosaurGardenShellVessel size={90} />
                  </div>

                  <h4 className="font-display font-bold text-lg text-[#254747] text-center mb-2">
                    The Dinosaur Garden
                  </h4>
                  <p className="font-body text-xs text-[#254747]/80 leading-relaxed text-center">
                    A prehistoric sunlit garden where gentle baby sauropods graze on watercress beside crystal brooks.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#7BB89A]/30 text-[11px] font-hand text-center text-[#386B52]">
                  &ldquo;Pip balancing buttercup garlands&rdquo;
                </div>
              </div>
            </div>

            {/* Poetic synthesis caption */}
            <div className="relative z-10 max-w-lg mx-auto text-center pt-4 border-t border-[#D9BE91]/40">
              <p className="font-hand text-sm sm:text-base text-[#254747]/90 leading-snug">
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
            className="rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-12 border shadow-storybook-hover overflow-hidden relative"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#D9BE91',
            }}
          >
            {/* Wide Panoramic Sunset Artwork Frame */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] sm:rounded-[36px] overflow-hidden bg-[#FAF7EE] mb-8">
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
              <div className="absolute bottom-2 left-6 sm:left-14 md:left-20 z-20 flex items-end">
                <img
                  src={cleoCharacterImg}
                  alt="Cleo standing at the water's edge looking out toward the distant sea with her collecting bag"
                  className="w-24 sm:w-36 md:w-44 h-auto object-contain filter drop-shadow(0 6px 16px rgba(37, 71, 71, 0.3))"
                />
              </div>

              {/* Panoramic Horizon Label */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#254747] bg-[#FFF9F0]/90 backdrop-blur-md border border-[#D9BE91] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F48B76] animate-pulse" />
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
