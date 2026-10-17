import React, { useCallback, useState } from 'react';
import {
  getAudioContext,
  isWebAudioSupported,
  playCleoGreetingChime,
  playEasterEggChime,
  playShellWorldChime,
  playSoundToggleOnChime,
} from '../utils/audioChimes';
import { SoundContext } from './soundContextDef';

const SOUND_STORAGE_KEY = 'cleo_sound_enabled';

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Never autoplay: strictly starts disabled by default unless user explicitly turned it on in previous session
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(SOUND_STORAGE_KEY);
        return stored === 'true';
      } catch {
        return false;
      }
    }
    return false;
  });

  const isSupported = isWebAudioSupported();

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const nextState = !prev;
      try {
        localStorage.setItem(SOUND_STORAGE_KEY, String(nextState));
      } catch {
        // Handle storage quota/sandbox limitations
      }

      // If user enabled sound, initialize AudioContext on this explicit gesture and play a soft feedback chime
      if (nextState) {
        const ctx = getAudioContext();
        if (ctx) {
          playSoundToggleOnChime();
        }
      }

      return nextState;
    });
  }, []);

  const playWorldOpenSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      playShellWorldChime();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled]);

  const playEasterEggSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      playEasterEggChime();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled]);

  const playCleoGreetingSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      playCleoGreetingChime();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled]);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        isSupported,
        playWorldOpenSound,
        playEasterEggSound,
        playCleoGreetingSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};
