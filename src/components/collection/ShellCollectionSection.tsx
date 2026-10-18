import React, { useState } from 'react';
import { Badge } from '../../design-system/Badge';
import { BubbleCluster } from '../../design-system/DecorativeBubbles';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { useSound } from '../../design-system/useSound';
import { useTheme } from '../../design-system/useTheme';
import {
  CloudVillageShellVessel,
  DinosaurGardenShellVessel,
  PearlKingdomShellVessel,
} from './ShellVesselIllustrations';
import { WorldModal } from './WorldModal';
import type { WorldDetailData } from './WorldModal';

const THREE_WORLDS_DATA: WorldDetailData[] = [
  {
    id: 'pearl-kingdom',
    name: 'The Pearl Kingdom',
    tagline: 'Sunken Coral Cathedrals & Luminescent Depths',
    shellType: 'Spiral Nautilus',
    shellVariant: 'nautilus',
    paletteColors: ['#146B7C', '#55D1C5', '#FFFFFF', '#FF9E8A'],
    atmosphericDescription:
      'Below the whispering surface lies a sunken kingdom where crystal turquoise currents weave through coral towers. Bioluminescent kelp illuminates pearlescent arches, and giant floating pearls drift like gentle lanterns through the tranquil depths.',
    playfulDetail: {
      title: 'The Courier Hermit Crab',
      badge: 'Playful Secret',
      content:
        'A tiny spotted hermit crab named Barnaby delivers miniature scrolled invitations between coral palaces, proudly wearing a polished clam shell two sizes too large for his head.',
    },
    miniatureHighlights: [
      'Glowing Coral Cathedrals & Spired Minarets',
      'Floating Bioluminescent Pearls Drifting Upward',
      'Schools of Swimming Golden & Turquoise Fairy Fish',
      'Emerald Kelp Ribbons & Sea Anemone Lanterns',
    ],
  },
  {
    id: 'cloud-village',
    name: 'The Cloud Village',
    tagline: 'Floating Sky Islands & Pastel Windmills',
    shellType: 'Spired Whelk Conch',
    shellVariant: 'conch',
    paletteColors: ['#8DB6E8', '#C7B2E4', '#FFEED6', '#F7C6B8'],
    atmosphericDescription:
      'High above the ocean winds, nestled among golden-peach sunset clouds, rests a peaceful village of floating islands. Pastel cottages with lavender chimneys are connected by arched rope bridges, while gentle breezes carry the scent of sky blossoms.',
    playfulDetail: {
      title: 'Windmill Cloud Bakeries',
      badge: 'Playful Secret',
      content:
        'Every afternoon at teatime, the rooftop windmill spins sea-breeze mist into fluffy lavender cotton candy, which friendly sky birds deliver in tiny woven reed baskets.',
    },
    miniatureHighlights: [
      'Airborne Suspended Meadow Islands',
      'Arched Rope & Timber Sky Bridges',
      'Windmill Tower with Sea-Silk Breeze Sails',
      'Fluffy Cumulonimbus Meadows & Floating Petals',
    ],
  },
  {
    id: 'dinosaur-garden',
    name: 'The Dinosaur Garden',
    tagline: 'Prehistoric Conservatory & Adorable Baby Giants',
    shellType: 'Fan Scallop Shell',
    shellVariant: 'scallop',
    paletteColors: ['#69B98E', '#FDF6D8', '#F48B76', '#DFCEB7'],
    atmosphericDescription:
      'Inside this warm fluted scallop unfolds a sun-drenched prehistoric conservatory where gentle baby dinosaurs graze among giant tropical ferns. Sparkling streams cascade over smooth river stones, and warm sunbeams filter through emerald jungle canopies.',
    playfulDetail: {
      title: 'Pip the Flower-Crown Sauropod',
      badge: 'Playful Secret',
      content:
        'A cheerful baby sauropod named Pip wades through the crystal brook each morning to nibble sweet watercress, balancing a wobbly garland of buttercup blossoms between his gentle horns.',
    },
    miniatureHighlights: [
      'Playful Baby Sauropod & Little Triceratops',
      'Sparkling Crystal Brook & Smooth Stepping Stones',
      'Giant Prehistoric Tropical Monsteras & Fiddleheads',
      'Warm Canopy Sunbeams & Golden Pollen Fireflies',
    ],
  },
];

export const ShellCollectionSection: React.FC = () => {
  const { isMoonlight } = useTheme();
  const { playWorldOpenSound } = useSound();
  const [activeWorld, setActiveWorld] = useState<WorldDetailData | null>(null);

  const handleSelectWorld = (world: WorldDetailData) => {
    playWorldOpenSound();
    setActiveWorld(world);
  };

  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className={`relative scroll-mt-20 py-16 sm:py-24 transition-colors duration-700 overflow-hidden border-t ${
        isMoonlight
          ? 'bg-gradient-to-b from-[#0B1124] via-[#0E1830] to-[#0B1124] border-midnight-800 text-ivory-50'
          : 'bg-gradient-to-b from-ivory-100 via-sand-100/60 to-ivory-100 border-sand-300/70 text-teal-900'
      }`}
    >
      {/* Ambient background shoreline glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
        style={{
          background: isMoonlight
            ? 'radial-gradient(circle, rgba(91, 181, 162, 0.35) 0%, rgba(17, 26, 56, 0.6) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(91, 181, 162, 0.4) 0%, rgba(244, 139, 118, 0.2) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Narrative Lead */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant={isMoonlight ? 'midnight' : 'coral'} isCollectorStamp>
              Interactive Shell Worlds
            </Badge>
            <span
              className={`font-hand text-xs sm:text-sm ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Hold a shell to your ear
            </span>
          </div>

          <h2
            id="collection-heading"
            className={`font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-900'
            }`}
          >
            A Little Shell, A Whole New World
          </h2>

          <p
            className={`font-body text-base sm:text-lg leading-relaxed transition-colors ${
              isMoonlight ? 'text-seaglass-100/85' : 'text-teal-800/85'
            }`}
          >
            Cleo's collection is full of tiny places waiting to be discovered.
          </p>

          <p
            className={`font-hand text-sm sm:text-base mt-2 max-w-lg mx-auto transition-colors ${
              isMoonlight ? 'text-seaglass-200/80' : 'text-teal-700/75'
            }`}
          >
            &ldquo;Each shell on this beach sailed thousands of miles to bring us an entire miniature horizon.&rdquo;
          </p>

          <StorybookFlourish className="mt-6 mb-2" />
        </div>

        {/* The Three Collectible Shell Treasures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          {THREE_WORLDS_DATA.map((world, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <div
                key={world.id}
                className={`group relative flex flex-col justify-between p-5 sm:p-8 rounded-[28px] sm:rounded-[38px] transition-all duration-500 border cursor-pointer focus-within:ring-2 focus-within:ring-coral-400 focus-within:ring-offset-2 ${
                  isMoonlight
                    ? 'bg-midnight-900/90 border-midnight-700/80 hover:border-seaglass-400 shadow-night hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]'
                    : 'bg-[#FDFAF5] border-sand-300 hover:border-teal-600/40 shadow-storybook hover:shadow-storybook-hover'
                } hover:-translate-y-2`}
                onClick={() => handleSelectWorld(world)}
              >
                {/* Collectible Pedestal Top Header */}
                <div
                  className={`flex items-center justify-between mb-4 pb-3 border-b ${
                    isMoonlight ? 'border-midnight-700/70' : 'border-sand-300/50'
                  }`}
                >
                  <span
                    className={`font-hand text-xs font-semibold tracking-wide ${
                      isMoonlight ? 'text-seaglass-300' : 'text-teal-700'
                    }`}
                  >
                    World 0{index + 1}
                  </span>
                  <Badge variant={isFirst ? 'teal' : isSecond ? 'coral' : 'seaglass'}>
                    {world.shellType}
                  </Badge>
                </div>

                {/* Shell Illustration & Ambient Portal Aura */}
                <div className="relative py-4 my-auto flex flex-col items-center justify-center">
                  {/* Floating animation wrapper */}
                  <div
                    className="relative transition-transform duration-500 group-hover:scale-110 animate-float-gentle"
                    style={{ animationDelay: `${index * 0.8}s` }}
                  >
                    {world.id === 'pearl-kingdom' && (
                      <PearlKingdomShellVessel size={170} />
                    )}
                    {world.id === 'cloud-village' && (
                      <CloudVillageShellVessel size={170} />
                    )}
                    {world.id === 'dinosaur-garden' && (
                      <DinosaurGardenShellVessel size={170} />
                    )}

                    {/* Shimmer star accent on hover */}
                    <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <DecorativeStar size={14} color="#FFF275" className="animate-star-shimmer" />
                    </div>
                  </div>

                  {/* Tactile Sand Shadow underneath shell */}
                  <div
                    className="w-28 sm:w-36 h-3 rounded-full blur-sm opacity-30 mt-2 transition-transform duration-500 group-hover:scale-90"
                    style={{
                      background: isFirst
                        ? 'radial-gradient(circle, #0C5A60 0%, transparent 70%)'
                        : isSecond
                        ? 'radial-gradient(circle, #8DB6E8 0%, transparent 70%)'
                        : 'radial-gradient(circle, #386B52 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Name & Short Description */}
                <div className="text-center pt-5">
                  <h3
                    className={`font-display font-bold text-xl sm:text-2xl mb-2 transition-colors ${
                      isMoonlight
                        ? 'text-ivory-50 group-hover:text-seaglass-300'
                        : 'text-teal-900 group-hover:text-teal-700'
                    }`}
                  >
                    {world.name}
                  </h3>

                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 transition-colors ${
                      isMoonlight ? 'text-seaglass-100/80' : 'text-teal-800/80'
                    }`}
                  >
                    {world.atmosphericDescription}
                  </p>

                  {/* Interactive Button / Trigger */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectWorld(world);
                    }}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                      isMoonlight
                        ? 'bg-midnight-950 text-seaglass-100 border-midnight-700 group-hover:bg-teal-700 group-hover:text-ivory-50'
                        : 'bg-sand-200/80 text-teal-900 group-hover:bg-teal-800 group-hover:text-ivory-50 border-sand-300'
                    }`}
                    aria-haspopup="dialog"
                    aria-label={`Discover ${world.name}`}
                  >
                    <span>Discover World</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient bottom coastal detail */}
        <div className="mt-14 sm:mt-16 text-center">
          <div
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-sm text-xs transition-colors ${
              isMoonlight
                ? 'bg-midnight-900/80 border-midnight-700 text-seaglass-200'
                : 'bg-white/70 border-sand-300 text-teal-800/80'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-seaglass-500 animate-pulse" />
            <span>Click any seashell to open its immersive environment view</span>
            <BubbleCluster className="scale-75 hidden sm:flex" />
          </div>
        </div>
      </div>

      {/* Immersive World Detail Modal Dialog */}
      <WorldModal
        world={activeWorld}
        isOpen={activeWorld !== null}
        onClose={() => setActiveWorld(null)}
      />
    </section>
  );
};
