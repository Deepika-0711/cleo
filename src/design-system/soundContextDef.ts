import { createContext } from 'react';

export interface SoundContextType {
  // Interactive Chimes
  soundEnabled: boolean;
  toggleSound: () => void;
  isSupported: boolean;
  playWorldOpenSound: () => void;
  playEasterEggSound: () => void;
  playCleoGreetingSound: () => void;

  // Background Music Soundscape
  musicEnabled: boolean;
  toggleMusic: () => void;
  setMusicEnabled: (enabled: boolean) => void;
}

export const SoundContext = createContext<SoundContextType | undefined>(undefined);
