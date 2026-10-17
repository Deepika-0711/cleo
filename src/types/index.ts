/**
 * Core Data Models & Design System Types
 * "Cleo — The Girl Who Collects Worlds"
 */

export type SectionId = 'hero' | 'collection' | 'journey' | 'about' | 'footer';

export interface NavigationItem {
  id: SectionId;
  label: string;
  description: string;
  iconName?: string;
}

/**
 * Required 5-field character sheet for Cleo
 */
export interface CharacterSheet {
  name: string;
  calling: string;
  origin: string;
  treasuredItem: string;
  corePhilosophy: string;
  traits?: string[];
}

/**
 * Metadata contract for the three miniature universe shells
 */
export type WorldType = 'underwater' | 'cloud' | 'dinosaur';

export interface ShellWorldMetadata {
  id: WorldType;
  title: string;
  subtitle: string;
  shellType: string;
  primaryColor: string;
  accentColor: string;
  ambientDescription: string;
  isUnlocked?: boolean;
}

/**
 * Story Journey chapter definition
 */
export interface StoryChapter {
  chapter: number;
  title: string;
  location: string;
  excerpt: string;
  mood: 'daybreak' | 'afternoon-tide' | 'twilight' | 'starlight';
}

/**
 * Design System Token definitions
 */
export interface ColorSwatch {
  name: string;
  token: string;
  hex: string;
  description: string;
  category: 'ivory' | 'teal' | 'seaglass' | 'coral' | 'sand' | 'midnight';
}

export interface TypographySpec {
  role: 'display' | 'body' | 'handwritten' | 'code';
  fontFamily: string;
  sampleText: string;
  weightRange: string;
  purpose: string;
}
