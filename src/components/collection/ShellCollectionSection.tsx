import React, { useState } from 'react';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { useSound } from '../../design-system/useSound';
import { useTheme } from '../../design-system/useTheme';
import pearlKingdomImg from '../../assets/pearl-kingdom.jpg';
import cloudVillageImg from '../../assets/cloud-village.jpg';
import dinosaurGardenImg from '../../assets/dinosaur-garden.jpg';
import { WorldModal } from './WorldModal';
import type { WorldDetailData } from './WorldModal';

const THREE_WORLDS_DATA: WorldDetailData[] = [
  {
    id: 'pearl-kingdom',
    name: 'The Pearl Kingdom',
    tagline: 'Sunken Coral Cathedrals & Luminescent Depths',
    shellType: 'Spiral Nautilus',
    shellVariant: 'nautilus',
    image: pearlKingdomImg,
    imageAlt:
      'Luminous underwater Pearl Kingdom shell palace with iridescent spiraled towers, glowing floating pearls, vibrant coral gardens, and friendly sea creatures in turquoise water',
    objectPosition: 'center',
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
    image: cloudVillageImg,
    imageAlt:
      'Dreamy Cloud Village floating sky islands with pastel cottages, fluffy pink clouds, winding wooden bridges, magical glowing lanterns, and whimsical windmills',
    objectPosition: 'center',
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
    image: dinosaurGardenImg,
    imageAlt:
      'Enchanted prehistoric Dinosaur Garden conservatory with friendly baby sauropod and baby triceratops, sparkling waterfalls, crystal streams, and lush tropical flora bathed in golden sunlight',
    objectPosition: 'center',
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
      className="relative scroll-mt-20 py-20 sm:py-28 transition-colors duration-700 overflow-hidden"
      style={{
        backgroundColor: isMoonlight ? '#09111E' : '#FAF7EE',
        color: isMoonlight ? '#FDFAF5' : '#0C5A60',
      }}
    >
      {/* Ambient soft background shoreline glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: isMoonlight
            ? 'radial-gradient(circle, rgba(91, 181, 162, 0.3) 0%, rgba(17, 26, 56, 0.5) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(212, 186, 136, 0.45) 0%, rgba(244, 139, 118, 0.15) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Whimsical Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.24em] font-medium transition-colors ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Chapter I &bull; Miniature Horizons
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
          </div>

          <h2
            id="collection-heading"
            className={`font-display italic font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-teal-950'
            }`}
          >
            A Little Shell, A Whole New World
          </h2>

          <p
            className={`font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-3 transition-colors ${
              isMoonlight ? 'text-seaglass-100/85' : 'text-teal-800/85'
            }`}
          >
            Cleo&apos;s collection is full of tiny places waiting to be discovered.
            Hold any shell to your ear to hear the universe singing inside.
          </p>

          <p
            className={`font-hand text-base sm:text-lg max-w-lg mx-auto transition-colors ${
              isMoonlight ? 'text-[#D4BA88]' : 'text-[#DE6B54]'
            }`}
          >
            &ldquo;Each shell on this beach sailed thousands of miles to bring us an entire miniature horizon.&rdquo;
          </p>

          <StorybookFlourish className="mt-6 mb-2" />
        </div>

        {/* The Three Collectible Shell Treasures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          {THREE_WORLDS_DATA.map((world, index) => {
            return (
              <div
                key={world.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] transition-all duration-500 border cursor-pointer focus-within:ring-2 focus-within:ring-coral-400 focus-within:ring-offset-2 ${
                  isMoonlight
                    ? 'bg-[#0E172A]/90 border-[#2A4365] hover:border-seaglass-400 shadow-night hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]'
                    : 'bg-[#FFFFFF] border-[#D4BA88]/50 hover:border-teal-700/50 shadow-storybook hover:shadow-storybook-hover'
                } hover:-translate-y-2`}
                onClick={() => handleSelectWorld(world)}
              >
                {/* Storybook Corner Pearl Accents */}
                <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
                <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
                <span className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />

                {/* Pedestal Header */}
                <div
                  className={`flex items-center justify-between mb-4 pb-3 border-b ${
                    isMoonlight ? 'border-midnight-700/70' : 'border-[#D4BA88]/30'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                      isMoonlight ? 'text-seaglass-300' : 'text-[#D4BA88]'
                    }`}
                  >
                    Curiosity 0{index + 1}
                  </span>
                  <span
                    className={`text-[11px] font-hand px-2.5 py-0.5 rounded-full border ${
                      isMoonlight
                        ? 'bg-midnight-950 text-seaglass-200 border-midnight-700'
                        : 'bg-[#FAF7EE] text-teal-800 border-[#D4BA88]/50'
                    }`}
                  >
                    {world.shellType}
                  </span>
                </div>

                {/* Miniature World Fairytale Artwork & Elegant Storybook Frame */}
                <div className="relative py-2 my-auto flex flex-col items-center justify-center w-full">
                  <div
                    className={`relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 shadow-sm group-hover:shadow-md ${
                      isMoonlight
                        ? 'border-[#2A4365] group-hover:border-seaglass-400/70 bg-[#070D18]'
                        : 'border-[#D4BA88]/50 group-hover:border-teal-700/60 bg-[#FAF7EE]'
                    }`}
                  >
                    <img
                      src={world.image}
                      alt={world.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      style={{ objectPosition: world.objectPosition || 'center' }}
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Storybook lighting vignette */}
                    <div
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                      aria-hidden="true"
                    />

                    {/* Shimmer star accent on hover */}
                    <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <DecorativeStar size={13} color="#FFFFFF" className="drop-shadow-xs animate-star-shimmer" />
                    </div>

                    {/* Shell Variant pill in corner */}
                    <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 py-0.5 px-2.5 bg-black/50 backdrop-blur-md rounded-full border border-white/25 text-white text-[10px] font-hand font-medium shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
                      <span>{world.shellType}</span>
                    </div>
                  </div>

                  {/* Tactile Sand Shadow underneath framed artwork */}
                  <div
                    className="w-36 sm:w-48 h-2.5 rounded-full blur-sm opacity-25 mt-2.5 transition-transform duration-500 group-hover:scale-95"
                    style={{
                      background: 'radial-gradient(circle, #0C5A60 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Name & Short Description */}
                <div className="text-center pt-4">
                  <h3
                    className={`font-display font-medium text-xl sm:text-2xl mb-2 transition-colors ${
                      isMoonlight
                        ? 'text-ivory-50 group-hover:text-seaglass-300'
                        : 'text-teal-950 group-hover:text-teal-700'
                    }`}
                  >
                    {world.name}
                  </h3>

                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 transition-colors ${
                      isMoonlight ? 'text-seaglass-100/80' : 'text-teal-800/85'
                    }`}
                  >
                    {world.atmosphericDescription}
                  </p>

                  {/* Refined Storybook Call-to-Action */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectWorld(world);
                    }}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold tracking-wider transition-all border shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer ${
                      isMoonlight
                        ? 'bg-midnight-950 text-seaglass-100 border-[#2A4365] group-hover:bg-[#132238] group-hover:border-[#5BB5A2]'
                        : 'bg-[#FAF7EE] text-teal-900 border-[#D4BA88]/60 group-hover:bg-white group-hover:border-teal-700'
                    }`}
                    aria-haspopup="dialog"
                    aria-label={`Peer inside ${world.name}`}
                  >
                    <span>Peer Inside the Shell</span>
                    <span aria-hidden="true" className="text-[#D4BA88] transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient bottom coastal flourish note */}
        <div className="mt-14 sm:mt-16 text-center">
          <p
            className={`font-hand text-sm sm:text-base transition-colors ${
              isMoonlight ? 'text-seaglass-300' : 'text-teal-700/75'
            }`}
          >
            Touch any seashell to unveil its miniature painted landscape &bull;
          </p>
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
