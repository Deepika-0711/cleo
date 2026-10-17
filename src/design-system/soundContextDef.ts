import { createContext } from 'react';

export interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  isSupported: boolean;
  playWorldOpenSound: () => void;
  playEasterEggSound: () => void;
  playCleoGreetingSound: () => void;
}

export const SoundContext = createContext<SoundContextType | undefined>(undefined);
