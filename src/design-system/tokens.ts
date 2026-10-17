import type { CharacterSheet, ColorSwatch, NavigationItem, ShellWorldMetadata, TypographySpec } from '../types';

/**
 * Design System Color Palette
 * Requirements:
 * - Warm ivory, ocean teal, sea-glass green, soft coral, and sandy beige.
 * - Deep midnight blue for night scenes.
 */
export const COLOR_PALETTE: ColorSwatch[] = [
  {
    name: 'Warm Ivory (Canvas)',
    token: 'var(--color-ivory-100)',
    hex: '#FAF7EE',
    description: 'Foundational storybook paper surface, soft and easy on the eyes.',
    category: 'ivory',
  },
  {
    name: 'Ivory Sunbeam',
    token: 'var(--color-ivory-50)',
    hex: '#FDFBF7',
    description: 'Bright card highlights and subtle illuminated page edges.',
    category: 'ivory',
  },
  {
    name: 'Ocean Teal (Deep)',
    token: 'var(--color-teal-800)',
    hex: '#0C5A60',
    description: 'Primary text color, deep sea depths, and authoritative titles.',
    category: 'teal',
  },
  {
    name: 'Ocean Teal (Midtone)',
    token: 'var(--color-teal-600)',
    hex: '#167D7F',
    description: 'Active elements, borders, and ocean wave strokes.',
    category: 'teal',
  },
  {
    name: 'Sea-Glass Green',
    token: 'var(--color-seaglass-500)',
    hex: '#5BB5A2',
    description: 'Ethereal washed sea-glass tumbled by gentle waves.',
    category: 'seaglass',
  },
  {
    name: 'Sea-Glass Foam',
    token: 'var(--color-seaglass-100)',
    hex: '#EAF7F4',
    description: 'Translucent backdrops, badges, and soft highlights.',
    category: 'seaglass',
  },
  {
    name: 'Soft Coral',
    token: 'var(--color-coral-500)',
    hex: '#F48B76',
    description: 'Warm living coral, whimsical badges, and interactive focal points.',
    category: 'coral',
  },
  {
    name: 'Coral Blush',
    token: 'var(--color-coral-100)',
    hex: '#FDECE8',
    description: 'Gentle collector tags and warm tinted cards.',
    category: 'coral',
  },
  {
    name: 'Sandy Beige (Dune)',
    token: 'var(--color-sand-300)',
    hex: '#DFCEB7',
    description: 'Cozy shoreline sand, tactile borders, and vintage parchment tones.',
    category: 'sand',
  },
  {
    name: 'Sandy Driftwood',
    token: 'var(--color-sand-400)',
    hex: '#C7B299',
    description: 'Subtle outlines and weathered shoreline accents.',
    category: 'sand',
  },
  {
    name: 'Deep Midnight Blue',
    token: 'var(--color-midnight-950)',
    hex: '#0B1124',
    description: 'Starlit nocturnal beach backdrop and cosmic shell interiors.',
    category: 'midnight',
  },
  {
    name: 'Midnight Harbor',
    token: 'var(--color-midnight-800)',
    hex: '#1A2542',
    description: 'Contrast panels and night scene overlays.',
    category: 'midnight',
  },
];

/**
 * Typography Specifications
 */
export const TYPOGRAPHY_SPECS: TypographySpec[] = [
  {
    role: 'display',
    fontFamily: 'Fraunces',
    sampleText: 'The Girl Who Collects Worlds',
    weightRange: '400 - 700 Soft Optical Serif',
    purpose: 'Hero titles, chapter headers, storybook headings with playful organic curves.',
  },
  {
    role: 'body',
    fontFamily: 'Plus Jakarta Sans',
    sampleText: 'Every shell resting on the shore holds a whisper of a distant star.',
    weightRange: '400, 500, 600 Clean Sans',
    purpose: 'Story narration, descriptions, character details with crisp legibility.',
  },
  {
    role: 'handwritten',
    fontFamily: 'Caveat',
    sampleText: 'Cleo’s Field Journal — Beach Mile 4.2',
    weightRange: '500, 700 Organic Script',
    purpose: 'Margin annotations, collector labels, intimate personal thoughts.',
  },
];

/**
 * Planned Portfolio Sections (Single-Page Interactive Architecture)
 */
export const PLANNED_SECTIONS: NavigationItem[] = [
  {
    id: 'hero',
    label: 'The Shoreline',
    description: 'Meet Cleo walking along the enchanted beach at the boundary of sea and sky.',
  },
  {
    id: 'collection',
    label: 'The Shell Collection',
    description: 'Three interactive shells containing self-contained miniature universes.',
  },
  {
    id: 'journey',
    label: 'Story Journey',
    description: 'Visual chronicles of Cleo’s discoveries across tides and seasons.',
  },
  {
    id: 'about',
    label: 'About Cleo',
    description: 'Cleo’s living shell diary exploring her heart, origin, and curiosities.',
  },
  {
    id: 'footer',
    label: 'The Horizon',
    description: 'Colophon, artistic credits, and a gentle parting seashell keepsake.',
  },
];

/**
 * Cleo Character Dossier Blueprint (Required 5-field character sheet)
 */
export const CLEO_CHARACTER_DOSSIER: CharacterSheet = {
  name: 'Cleo of the Whispering Sands',
  calling: 'Custodian of Miniature Horizons & Shell Botanist',
  origin: 'A tide-carved cottage where the ocean sings in lullabies',
  treasuredItem: 'A brass pocket magnifying glass with sea-glass optics',
  corePhilosophy: 'No world is too small to carry an infinite sky.',
  traits: ['Quietly Observant', 'Gentle-Hearted', 'Star-Seeker', 'Collector of Lost Echoes'],
};

/**
 * The Three Miniature Worlds Concept Contract
 */
export const MINIATURE_WORLDS_BLUEPRINT: ShellWorldMetadata[] = [
  {
    id: 'underwater',
    title: 'The Sunken Coral Kingdom',
    subtitle: 'Nautilus of Cerulean Currents',
    shellType: 'Spiral Nautilus',
    primaryColor: '#0C5A60',
    accentColor: '#5BB5A2',
    ambientDescription: 'Luminescent jelly-lanterns illuminating kelp cathedrals and coral domes.',
  },
  {
    id: 'cloud',
    title: 'The Floating Cloud Village',
    subtitle: 'Conch of Whistling Zephyrs',
    shellType: 'Spired Whelk',
    primaryColor: '#167D7F',
    accentColor: '#FF9E8A',
    ambientDescription: 'Windmill-rigged skyships moored to pastel cumulonimbus islands.',
  },
  {
    id: 'dinosaur',
    title: 'The Miniature Dinosaur Garden',
    subtitle: 'Scallop of Ancient Flora',
    shellType: 'Fan Scallop',
    primaryColor: '#388273',
    accentColor: '#DFCEB7',
    ambientDescription: 'Mossy prehistoric ferns where gentlest pocket-sized sauropods graze.',
  },
];
