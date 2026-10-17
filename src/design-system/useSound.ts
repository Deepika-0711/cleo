import { useContext } from 'react';
import { SoundContext } from './soundContextDef';
import type { SoundContextType } from './soundContextDef';

export const useSound = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
