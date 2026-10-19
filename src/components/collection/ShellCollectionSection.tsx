import React, { useState } from 'react';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { useSound } from '../../design-system/useSound';
import { useTheme } from '../../design-system/useTheme';
import pearlKingdomImg from '../../assets/pearl-kingdom.jpg';
import cloudVillageImg from '../../assets/cloud-village.jpg';
import dinosaurGardenImg from '../../assets/dinosaur-garden.jpg';
import pearlKingdomSceneImg from '../../assets/pearl-kingdom-scene.jpg';
import cloudVillageSceneImg from '../../assets/cloud-village-scene.jpg';
import dinosaurGardenSceneImg from '../../assets/dinosaur-garden-scene.jpg';
import { WorldModal } from './WorldModal';
import type { WorldDetailData } from './WorldModal';

const THREE_WORLDS_DATA: WorldDetailData[] = [
  {
    id: 'pearl-kingdom',
    name: 'Pearl Kingdom',
    tagline: 'A hidden underwater palace where kindness makes the magic glow.',
    shellType: 'Spiral Nautilus',
    shellVariant: 'nautilus',
    image: pearlKingdomImg,
    cardImage: pearlKingdomSceneImg,
    imageAlt:
      'Luminous underwater Pearl Kingdom shell palace with iridescent spiraled towers, glowing floating pearls, vibrant coral gardens, and friendly sea creatures in turquoise water',
    objectPosition: 'center',
    paletteColors: ['#146B7C', '#55D1C5', '#FFFFFF', '#FF9E8A', '#A3DED2'],
    atmosphericDescription:
      'Below the whispering surface lies a sunken kingdom where crystal turquoise currents weave through coral towers. Bioluminescent kelp illuminates pearlescent arches, and giant floating pearls drift like gentle lanterns through the tranquil depths.',
    fairytaleTitle: 'The Little Pearl That Remembered the Moon',
    chapterBadge: 'Chapter I • An Underwater Fairytale',
    openingLine:
      'Deep beneath the turquoise sea, where moonlight filters through the waves like ribbons of spun silver, stood a quiet palace made of shimmering shells.',
    storyParagraphs: [
      'Deep beneath the turquoise sea stood a grand palace sculpted from shimmering shells and spiraled nacre. Its towers caught the gentlest ripples of the ocean, yet inside its grandest archway, darkness lingered. A little pearl named Lumi had lost the moonlight that once made her glow. Without her soft luminescence, the sunken towers felt cold and lonely.',
      'While exploring the outer reef, Cleo noticed a faint silver whisper echoing between two blossoming coral flowers. Kneeling on the soft sea sand, she found Lumi trembling quietly. “Don’t be afraid, little one,” Cleo whispered softly, cradling the cool pearl in her hands. “Every light the sea has ever loved is still remembered. Let us take you home.”',
      'Their journey through the deep ocean was guided by gentle friends. A shy seahorse named Barnaby emerged from the kelp to show them secret coral pathways. A school of friendly ribbon-fish twirled ahead, lighting dark trenches with golden fins. When currents grew fierce, Shelly, an ancient and gentle sea turtle, carried them safely upon her mossy shell straight toward the palace gates.',
      'As Cleo lifted Lumi high above the shell towers, the ocean currents cleared. A radiant pillar of midnight moonlight filtered through the turquoise water, embracing Lumi like an old friend. Remembering the kindness of everyone who had helped her, Lumi’s heart ignited with breathtaking, opalescent light. The entire Pearl Kingdom shimmered with wonder once again.',
    ],
    characters: [
      {
        name: 'Lumi',
        role: 'The Little Pearl',
        badge: 'Lost Luminescence',
        description: 'A delicate moon-pearl whose inner glow returns only when met with selfless kindness.',
      },
      {
        name: 'Barnaby',
        role: 'The Shy Seahorse',
        badge: 'Reef Pathfinder',
        description: 'Timid but fiercely loyal; knows every hidden passage between the coral towers.',
      },
      {
        name: 'Coralie & Friends',
        role: 'The Fairy Ribbon-Fish',
        badge: 'Lantern Swimmers',
        description: 'A joyful school that weaves glittering trails of golden phosphorescence through dark caverns.',
      },
      {
        name: 'Shelly',
        role: 'Gentle Sea Turtle',
        badge: 'Ancient Elder',
        description: 'Patient guardian of the deep trenches whose mossy shell carries travelers safely home.',
      },
    ],
    closingMoral:
      'True radiance is never lost—it only waits for kindness to guide it back to the light.',
    cleoNote:
      'Whenever you press this nautilus to your ear, remember that even the smallest pearl holds the memory of the moon.',
    theme: {
      accentHex: '#55D1C5',
      borderHex: '#146B7C',
      bgTint: '#F2FAF9',
      headerGradient: 'linear-gradient(135deg, rgba(20, 107, 124, 0.95), rgba(85, 209, 197, 0.85))',
      moralCardBg: '#EAF7F5',
      moralBorder: '#55D1C5',
      badgeBg: 'rgba(20, 107, 124, 0.1)',
      badgeText: '#0C5A60',
      tagColor: '#55D1C5',
      ambientGlow: 'radial-gradient(circle, rgba(85, 209, 197, 0.28) 0%, transparent 70%)',
    },
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
    name: 'Cloud Village',
    tagline: 'A floating village where dreams turn into little stars.',
    shellType: 'Spired Whelk Conch',
    shellVariant: 'conch',
    image: cloudVillageImg,
    cardImage: cloudVillageSceneImg,
    imageAlt:
      'Dreamy Cloud Village floating sky islands with pastel cottages, fluffy pink clouds, winding wooden bridges, magical glowing lanterns, and whimsical windmills',
    objectPosition: 'center',
    paletteColors: ['#8DB6E8', '#C7B2E4', '#FFEED6', '#F7C6B8', '#F9D5E5'],
    atmosphericDescription:
      'High above the ocean winds, nestled among golden-peach sunset clouds, rests a peaceful village of floating islands. Pastel cottages with lavender chimneys are connected by arched rope bridges, while gentle breezes carry the scent of sky blossoms.',
    fairytaleTitle: 'The Village That Forgot How to Dream',
    chapterBadge: 'Chapter II • A Sky-Kingdom Fairytale',
    openingLine:
      'Above the clouds lived a tiny village where fluffy cottages floated between rainbow bridges, and a small cloud wondered if he could ever shine.',
    storyParagraphs: [
      'Above the clouds lived a tiny village where fluffy cottages floated like downy feathers between arched rainbow bridges. In this sky haven, a small, fluffy cloud named Puff watched the twilight sky with a longing sigh. Puff dreamed of shining with the brilliant sparkle of the stars, but believed that being a simple, ordinary cloud meant having no magic of its own.',
      'When Cleo climbed the winding spiral staircase of the spired conch, she discovered Puff curled beside a quiet chimney, misting sorrowful little dew drops onto the cobblestones. “Why are you crying, little cloud?” Cleo asked softly, drying a tear of rain from Puff’s fluffy cheek. Puff sniffled, “The stars are so dazzling and grand, but I am just a plain puff of vapor that drifts wherever the wind blows.”',
      'Cleo smiled and invited Puff to stroll through the village square. Near the village windmill, an elderly baker named Zephyr was struggling with a heavy tray of warm sky-berry pastries across a breezy ramp. Puff hurried over and puffed a soft, cushiony breeze to steady the baker’s footing. The grateful baker laughed with delight. In that exact instant, a miraculous golden spark crackled inside Puff’s misty center—and a miniature star floated up into the twilight sky!',
      'Cleo and Puff spent the twilight bringing happiness across the village—cushioning baby sky-sparrows taking their first flights, cooling tired windmill workers, and cheering lonely dreamers. With every act of joy, dozens of new stars blossomed from Puff’s fluffy edges. Soon, the entire village was illuminated by thousands of little stars, and Puff realized that sharing joy is the most special magic of all.',
    ],
    characters: [
      {
        name: 'Puff',
        role: 'The Dreamer Cloud',
        badge: 'Sweet Cloud Heart',
        description: 'Fluffy and sweet-faced; learned that kindness produces more starlight than the night sky itself.',
      },
      {
        name: 'Zephyr',
        role: 'The Windmill Baker',
        badge: 'Cloud Confectioner',
        description: 'Spins sweet lavender mist into melt-in-your-mouth sky-berry pastries for weary travelers.',
      },
      {
        name: 'The Rainbow Sparrows',
        role: 'Bridge Keepers',
        badge: 'Sky Songbirds',
        description: 'Chirp cheerful harmonies while guiding floating footbridges across the sunset clouds.',
      },
      {
        name: 'Cleo',
        role: 'The Shoreline Dreamer',
        badge: 'Sky Visitor',
        description: 'Helped Puff discover that happiness creates an endless galaxy of miniature stars.',
      },
    ],
    closingMoral:
      'You do not need to be born a star to illuminate the night; bringing happiness to others creates all the light the sky will ever need.',
    cleoNote:
      'Whenever you press this whelk shell to your ear, you can hear the soft chiming of Puff’s little stars laughing above the clouds.',
    theme: {
      accentHex: '#C7B2E4',
      borderHex: '#8A6FB8',
      bgTint: '#FAF6FD',
      headerGradient: 'linear-gradient(135deg, rgba(138, 111, 184, 0.95), rgba(247, 198, 184, 0.9))',
      moralCardBg: '#F5EEFC',
      moralBorder: '#C7B2E4',
      badgeBg: 'rgba(138, 111, 184, 0.12)',
      badgeText: '#593B88',
      tagColor: '#F7C6B8',
      ambientGlow: 'radial-gradient(circle, rgba(199, 178, 228, 0.32) 0%, transparent 70%)',
    },
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
    tagline: 'A garden where little giants learn that kindness helps everything grow.',
    shellType: 'Fan Scallop Shell',
    shellVariant: 'scallop',
    image: dinosaurGardenImg,
    cardImage: dinosaurGardenSceneImg,
    imageAlt:
      'Enchanted prehistoric Dinosaur Garden conservatory with friendly baby sauropod and baby triceratops, sparkling waterfalls, crystal streams, and lush tropical flora bathed in golden sunlight',
    objectPosition: 'center',
    paletteColors: ['#69B98E', '#FDF6D8', '#F48B76', '#DFCEB7', '#A8E3DC'],
    atmosphericDescription:
      'Inside this warm fluted scallop unfolds a sun-drenched prehistoric conservatory where gentle baby dinosaurs graze among giant tropical ferns. Sparkling streams cascade over smooth river stones, and warm sunbeams filter through emerald jungle canopies.',
    fairytaleTitle: 'The Garden Where Little Giants Bloom',
    chapterBadge: 'Chapter III • A Prehistoric Fairytale',
    openingLine:
      'Hidden behind a waterfall was a garden where flowers grew as tall as trees, and tiny dinosaurs cared for magical seeds with gentle hearts.',
    storyParagraphs: [
      'Hidden behind a sparkling waterfall was an enchanted garden where flowers grew as tall as trees and tiny dinosaurs cared for magical seeds. Yet beside the singing stream, a baby dinosaur named Pip was afraid to plant the very last seed because it had never grown anything before, and he feared he would disappoint his friends.',
      'Cleo discovered Pip hiding behind a giant monstera leaf, clutching the glowing seed close to his chest. “What if nothing sprouts, Cleo?” Pip asked softly with wide, worried eyes. Cleo knelt in the warm moss and smiled gently. “A seed only needs three things, Pip: rich earth, cool water, and the kindness of someone who believes in it. Let’s plant it together.”',
      'Together, Cleo and Pip dug a cozy hollow beside the sparkling stream. A gentle long-necked dinosaur named Willow bowed down to shelter the little patch from the afternoon heat. Bramble, a playful little triceratops, carefully nudged cool brook water into the soil with a shiny clam shell, while Flit, a tiny flying dinosaur with dragonfly wings, dusted the bed with golden flower pollen.',
      'With patience and kindness, Pip tended the soil each morning. Soon, a vibrant green stalk reached for the sky, unfurling a colossal blossom of glowing rainbow petals that filled the air with sweet honey perfume. The entire prehistoric valley burst into vibrant colors, and Pip realized that patience, love, and good friends can help even the smallest seed bloom into paradise.',
    ],
    characters: [
      {
        name: 'Pip',
        role: 'The Baby Sauropod',
        badge: 'The Little Gardener',
        description: 'Timid little giant who learned that gentle patience and love can make the earth bloom.',
      },
      {
        name: 'Bramble',
        role: 'The Playful Triceratops',
        badge: 'Stream Splasher',
        description: 'Loves nudging cool river water to thirsty sprouts and wearing daisy garlands on his horns.',
      },
      {
        name: 'Flit',
        role: 'The Tiny Flying Dinosaur',
        badge: 'Canopy Pollinator',
        description: 'Whirls through sunbeams like a hummingbird, dusting rare seeds with golden sun pollen.',
      },
      {
        name: 'Willow',
        role: 'The Long-Neck Matriarch',
        badge: 'Gentle Canopy',
        description: 'Towering elder whose arched neck forms a living arbor of protective shade for seedlings.',
      },
    ],
    closingMoral:
      'The greatest wonders do not bloom in haste; with patience, kindness, and good friends, even the smallest seed can grow into a colorful paradise.',
    cleoNote:
      'Inside this scallop shell, the air still smells like sun-warmed ferns and sweet rain beside Pip’s blossoming garden.',
    theme: {
      accentHex: '#69B98E',
      borderHex: '#2E7D52',
      bgTint: '#F4FAF6',
      headerGradient: 'linear-gradient(135deg, rgba(46, 125, 82, 0.95), rgba(244, 139, 118, 0.88))',
      moralCardBg: '#EDF7F1',
      moralBorder: '#69B98E',
      badgeBg: 'rgba(46, 125, 82, 0.12)',
      badgeText: '#1B5E38',
      tagColor: '#69B98E',
      ambientGlow: 'radial-gradient(circle, rgba(105, 185, 142, 0.28) 0%, transparent 70%)',
    },
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
    try {
      playWorldOpenSound();
    } catch {
      // Non-blocking fallback for environments without audio
    }
    setActiveWorld(world);
  };

  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 transition-colors duration-700 overflow-hidden"
      style={{
        backgroundColor: 'transparent',
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
            <span className="w-1.5 h-1.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
            <DecorativeStar size={8} color="#D4BA88" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.24em] font-medium transition-colors ${
                isMoonlight ? 'text-seaglass-300' : 'text-teal-700/80'
              }`}
            >
              Chapter I &bull; Miniature Horizons
            </span>
            <DecorativeStar size={8} color="#D4BA88" />
            <span className="w-1.5 h-1.5 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {THREE_WORLDS_DATA.map((world, index) => {
            const isPearl = world.id === 'pearl-kingdom';
            const isCloud = world.id === 'cloud-village';
            const isDino = world.id === 'dinosaur-garden';

            // Distinctive world pastel card tints, borders & hover glows
            const cardBgStyle = isMoonlight
              ? isPearl
                ? 'bg-gradient-to-b from-[#0B1828] via-[#091522] to-[#070F1A] border-[#224462] hover:border-[#55D1C5] hover:shadow-[0_18px_42px_rgba(85,209,197,0.32)]'
                : isCloud
                  ? 'bg-gradient-to-b from-[#151128] via-[#100D22] to-[#0A0818] border-[#3B2B5C] hover:border-[#C7B2E4] hover:shadow-[0_18px_42px_rgba(199,178,228,0.32)]'
                  : 'bg-gradient-to-b from-[#0E1E18] via-[#0A1612] to-[#070F0D] border-[#254C3A] hover:border-[#69B98E] hover:shadow-[0_18px_42px_rgba(105,185,142,0.32)]'
              : isPearl
                ? 'bg-gradient-to-b from-[#FFFFFF] via-[#F3FAFA] to-[#FFF6F4] border-[#D4BA88]/65 hover:border-[#55D1C5] hover:shadow-[0_18px_42px_rgba(85,209,197,0.22),0_4px_16px_rgba(255,225,230,0.3)]'
                : isCloud
                  ? 'bg-gradient-to-b from-[#FFFFFF] via-[#FAF6FD] to-[#FFF6F3] border-[#D4BA88]/65 hover:border-[#8A6FB8] hover:shadow-[0_18px_42px_rgba(199,178,228,0.28),0_4px_16px_rgba(247,198,184,0.25)]'
                  : 'bg-gradient-to-b from-[#FFFFFF] via-[#F4FAF6] to-[#FFF9F3] border-[#D4BA88]/65 hover:border-[#2E7D52] hover:shadow-[0_18px_42px_rgba(105,185,142,0.24),0_4px_16px_rgba(244,139,118,0.24)]';

            const bookVolumeLabel =
              index === 0
                ? 'Vol. I • Sunken Realm'
                : index === 1
                  ? 'Vol. II • Sky Haven'
                  : 'Vol. III • Garden Giants';

            const companionSummary = isPearl
              ? 'Lumi • Barnaby • Shelly'
              : isCloud
                ? 'Puff • Zephyr • Sparrows'
                : 'Pip • Bramble • Willow';

            // Distinctive frame effects
            const frameAnimClass = isPearl
              ? 'animate-pearl-glow'
              : 'animate-dreamy-float';

            const frameBorderColor = isPearl
              ? isMoonlight ? 'border-[#55D1C5]/40 group-hover:border-[#55D1C5]' : 'border-[#55D1C5]/55 group-hover:border-[#146B7C]'
              : isCloud
                ? isMoonlight ? 'border-[#C7B2E4]/40 group-hover:border-[#C7B2E4]' : 'border-[#C7B2E4]/65 group-hover:border-[#8A6FB8]'
                : isMoonlight ? 'border-[#69B98E]/40 group-hover:border-[#69B98E]' : 'border-[#69B98E]/65 group-hover:border-[#2E7D52]';

            const titleHoverClass = isPearl
              ? isMoonlight ? 'group-hover:text-[#55D1C5]' : 'group-hover:text-[#146B7C]'
              : isCloud
                ? isMoonlight ? 'group-hover:text-[#C7B2E4]' : 'group-hover:text-[#6D4F99]'
                : isMoonlight ? 'group-hover:text-[#69B98E]' : 'group-hover:text-[#25633F]';

            const underlineAccentColor = isPearl
              ? 'via-[#55D1C5]'
              : isCloud
                ? 'via-[#C7B2E4]'
                : 'via-[#69B98E]';

            return (
              <div
                key={world.id}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`Enter fairytale: ${world.fairytaleTitle} in ${world.name}`}
                className={`group relative flex flex-col justify-between p-5 sm:p-7 rounded-[32px] sm:rounded-[38px] transition-all duration-500 border cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-within:ring-2 focus-within:ring-coral-400 shadow-storybook hover:shadow-storybook-hover hover:-translate-y-2 hover:scale-[1.01] ${cardBgStyle}`}
                onClick={() => handleSelectWorld(world)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectWorld(world);
                  }
                }}
              >
                {/* Storybook Corner Pearl Accents */}
                <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
                <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />
                <span className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs" />

                {/* Top Folio Header Bar */}
                <div
                  className={`flex items-center justify-between mb-4 pb-2.5 border-b ${
                    isMoonlight ? 'border-white/10' : 'border-[#D4BA88]/35'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: world.theme.accentHex }}
                    />
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                        isMoonlight ? 'text-seaglass-300' : 'text-[#D4BA88]'
                      }`}
                    >
                      {bookVolumeLabel}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] sm:text-[11px] font-hand px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                      isMoonlight
                        ? 'bg-midnight-950 text-seaglass-200 border-white/15'
                        : 'bg-white text-teal-850 border-[#D4BA88]/50 shadow-xs'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
                    <span>{world.shellType}</span>
                  </span>
                </div>

                {/* Large Prominent Arched Fairytale Illustration with Precious Frame & World Personality Motion */}
                <div className="relative w-full my-auto flex flex-col items-center">
                  {/* Decorative Arch Keystone Pearl */}
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
                  </span>

                  <div
                    className={`relative w-full aspect-[10/16] rounded-t-[32px] sm:rounded-t-[40px] rounded-b-2xl overflow-hidden border-2 transition-all duration-500 shadow-sm group-hover:shadow-md ${frameBorderColor} ${frameAnimClass} ${
                      isMoonlight ? 'bg-[#070D18]' : 'bg-[#FAF7EE]'
                    }`}
                  >
                    <img
                      src={world.cardImage || world.image}
                      alt={world.imageAlt}
                      draggable={false}
                      className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-104 group-hover:brightness-105 group-hover:contrast-[1.02] pointer-events-none"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Storybook lighting vignette - dims on hover to brighten illustration */}
                    <div
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-20 transition-opacity duration-500"
                      aria-hidden="true"
                    />

                    {/* Pearl Kingdom: Delicate Luminous Ring & Tiny Underwater Bubbles */}
                    {isPearl && (
                      <>
                        <div
                          className="absolute inset-0 rounded-t-[32px] sm:rounded-t-[40px] rounded-b-2xl pointer-events-none ring-1 ring-inset ring-white/60 shadow-[inset_0_0_16px_rgba(255,255,255,0.45)]"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 pointer-events-none overflow-hidden z-15" aria-hidden="true">
                          <span
                            className="absolute bottom-4 left-6 w-2 h-2 rounded-full bg-white/75 border border-[#A3DED2]/80 shadow-[0_0_4px_rgba(255,255,255,0.9)] animate-card-mini-bubble"
                            style={{ animationDelay: '0s' }}
                          />
                          <span
                            className="absolute bottom-8 left-12 w-2.5 h-2.5 rounded-full bg-white/65 border border-[#55D1C5]/70 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-card-mini-bubble"
                            style={{ animationDelay: '1.8s' }}
                          />
                          <span
                            className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-white/80 border border-[#FFB3A3]/70 shadow-[0_0_4px_rgba(255,255,255,0.9)] animate-card-mini-bubble"
                            style={{ animationDelay: '3.4s' }}
                          />
                        </div>
                      </>
                    )}

                    {/* Cloud Village: Dreamy Lavender Aura & Subtle Star Glints */}
                    {isCloud && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden z-15" aria-hidden="true">
                        <div className="absolute top-10 right-8 animate-cloud-star-glint" style={{ animationDelay: '0s' }}>
                          <DecorativeStar size={12} color="#FFF5EF" className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                        </div>
                        <div className="absolute top-20 right-14 animate-cloud-star-glint" style={{ animationDelay: '2.3s' }}>
                          <DecorativeStar size={9} color="#D4BA88" className="drop-shadow-[0_0_4px_rgba(212,186,136,0.85)]" />
                        </div>
                        <div className="absolute top-16 left-8 animate-cloud-star-glint" style={{ animationDelay: '3.8s' }}>
                          <DecorativeStar size={10} color="#C7B2E4" className="drop-shadow-[0_0_5px_rgba(199,178,228,0.85)]" />
                        </div>
                      </div>
                    )}

                    {/* Dinosaur Garden: Botanical Warmth & Restrained Flower / Sparkle Details */}
                    {isDino && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden z-15" aria-hidden="true">
                        <div className="absolute bottom-12 right-7 animate-garden-spore flex items-center justify-center" style={{ animationDelay: '0s' }}>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FDF6D8]/85 border border-[#F48B76]/70 shadow-[0_0_6px_rgba(244,139,118,0.7)] flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-[#F48B76]" />
                          </span>
                        </div>
                        <div className="absolute bottom-20 right-14 animate-garden-spore" style={{ animationDelay: '2s' }}>
                          <DecorativeStar size={8} color="#69B98E" className="drop-shadow-[0_0_5px_rgba(105,185,142,0.8)]" />
                        </div>
                        <div className="absolute bottom-16 left-9 animate-garden-spore" style={{ animationDelay: '3.6s' }}>
                          <DecorativeStar size={9} color="#D4BA88" className="drop-shadow-[0_0_4px_rgba(212,186,136,0.8)]" />
                        </div>
                      </div>
                    )}

                    {/* Starlight shimmer accent on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <DecorativeStar size={14} color="#FFFFFF" className="drop-shadow-xs animate-star-shimmer" />
                    </div>

                    {/* Atmospheric World Pill in Top Corner */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 py-0.5 px-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-mono tracking-wider uppercase shadow-xs">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pearl-pulse"
                        style={{ backgroundColor: world.theme.accentHex }}
                      />
                      <span>Chapter 0{index + 1}</span>
                    </div>

                    {/* Companions Badge in Bottom Corner */}
                    <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between py-1 px-3 bg-black/65 backdrop-blur-md rounded-xl border border-white/20 text-white text-[10px] font-hand shadow-xs">
                      <span className="text-[#D4BA88] font-mono text-[9px] uppercase tracking-wider">
                        Companions:
                      </span>
                      <span className="truncate">{companionSummary}</span>
                    </div>
                  </div>

                  {/* Tactile Sand Shadow underneath framed artwork */}
                  <div
                    className="w-40 sm:w-52 h-2.5 rounded-full blur-sm opacity-20 mt-3 transition-transform duration-500 group-hover:scale-95"
                    style={{
                      background: 'radial-gradient(circle, #0C5A60 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Name, Plaque Quote & Story CTA */}
                <div className="text-center pt-4 space-y-2.5">
                  <div>
                    <h3
                      className={`font-display italic font-normal text-2xl sm:text-[26px] leading-tight mb-1 transition-colors ${
                        isMoonlight ? 'text-ivory-50' : 'text-teal-950'
                      } ${titleHoverClass}`}
                    >
                      {world.name}
                    </h3>

                    {/* Delicate Title Underline Highlight on Hover */}
                    <div
                      className={`w-12 h-0.5 mx-auto rounded-full bg-gradient-to-r from-transparent ${underlineAccentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      aria-hidden="true"
                    />

                    <p
                      className={`font-hand text-sm sm:text-base italic transition-colors mt-1 ${
                        isMoonlight ? 'text-[#D4BA88]' : 'text-teal-700'
                      }`}
                    >
                      &ldquo;{world.fairytaleTitle}&rdquo;
                    </p>
                  </div>

                  {/* Fairytale Plaque Quote Box */}
                  <div
                    className={`p-3 rounded-2xl border text-center transition-colors ${
                      isMoonlight
                        ? 'bg-midnight-950/70 border-white/10 text-seaglass-100/90'
                        : 'bg-white/90 border-[#D4BA88]/40 text-teal-900/90 shadow-xs'
                    }`}
                  >
                    <p className="font-body text-xs sm:text-[13px] leading-relaxed italic">
                      &ldquo;{world.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Storybook Invitation CTA Button */}
                  <div className="pt-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4BA88] font-semibold block mb-1.5">
                      A Fairytale Awaits
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectWorld(world);
                      }}
                      className={`w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 rounded-full text-xs font-semibold tracking-wider transition-all border shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer active:scale-[0.98] ${
                        isMoonlight
                          ? 'bg-midnight-950 text-seaglass-100 border-white/20 group-hover:bg-[#132238] group-hover:border-[#5BB5A2] group-hover:shadow-[0_8px_24px_rgba(91,181,162,0.35)] group-hover:-translate-y-0.5'
                          : 'bg-gradient-to-r from-[#FFFDF9] via-[#FAF5F2] to-[#FFFDF9] text-teal-950 border-[#D4BA88]/80 group-hover:bg-white group-hover:border-[#E2A79B] group-hover:shadow-[0_8px_24px_rgba(226,167,155,0.32)] group-hover:-translate-y-0.5'
                      }`}
                      aria-haspopup="dialog"
                      aria-label={`Enter fairytale: ${world.fairytaleTitle} in ${world.name}`}
                    >
                      <DecorativeStar size={11} color={isMoonlight ? '#80DEEA' : '#E2A79B'} />
                      <span>Enter this world</span>
                      <span
                        aria-hidden="true"
                        className="text-[#D4BA88] transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        &rarr;
                      </span>
                    </button>
                  </div>
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
        key={activeWorld?.id || 'none'}
        world={activeWorld}
        isOpen={activeWorld !== null}
        onClose={() => setActiveWorld(null)}
      />
    </section>
  );
};
