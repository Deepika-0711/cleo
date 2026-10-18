import React, { useCallback, useEffect, useState } from 'react';
import {
  getAudioContext,
  isWebAudioSupported,
  playCleoGreetingChime,
  playEasterEggChime,
  playShellWorldChime,
  playSoundToggleOnChime,
} from '../utils/audioChimes';
import { enchantedSoundscape } from '../utils/musicSoundscape';
import { SoundContext } from './soundContextDef';

const SOUND_STORAGE_KEY = 'cleo_sound_enabled';

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Interactive Chimes: Never autoplay, starts disabled by default unless user turned it on
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

  // Background Music Soundscape: Always strictly OFF by default, never autoplay.
  // Requires explicit user interaction to start during the current session.
  const [musicEnabled, setMusicEnabledState] = useState<boolean>(false);

  const isSupported = isWebAudioSupported();

  // Toggle Interactive Sound Effects (Shell & Easter egg chimes)
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

  // Toggle Background Music Soundscape
  const toggleMusic = useCallback(() => {
    setMusicEnabledState((prev) => {
      const nextState = !prev;
      if (nextState) {
        const started = enchantedSoundscape.start();
        return started;
      } else {
        enchantedSoundscape.stop();
        return false;
      }
    });
  }, []);

  const setMusicEnabled = useCallback((enabled: boolean) => {
    setMusicEnabledState(enabled);
    if (enabled) {
      enchantedSoundscape.start();
    } else {
      enchantedSoundscape.stop();
    }
  }, []);

  // Clean up music on unmount
  useEffect(() => {
    return () => {
      enchantedSoundscape.stop();
    };
  }, []);

  const playWorldOpenSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      // Gently duck background music during chime if playing
      if (musicEnabled) {
        enchantedSoundscape.duck(0.025, 1400);
      }
      playShellWorldChime();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled, musicEnabled]);

  const playEasterEggSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      // Gently duck background music during secret discovery chime if playing
      if (musicEnabled) {
        enchantedSoundscape.duck(0.025, 1600);
      }
      playEasterEggChime();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled, musicEnabled]);

  const playCleoGreetingSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      if (musicEnabled) {
        enchantedSoundscape.duck(0.035, 1000);
      }
      playCleoGreetingChime();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled, musicEnabled]);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        isSupported,
        playWorldOpenSound,
        playEasterEggSound,
        playCleoGreetingSound,
        musicEnabled,
        toggleMusic,
        setMusicEnabled,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};
