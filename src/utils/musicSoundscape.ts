/**
 * Cleo's Enchanted Soundscape — Procedural Web Audio API Ambient Music Synthesizer.
 *
 * Musical Concept:
 * A slow, soothing, fairytale-inspired seaside instrumental featuring:
 * - Soft music-box / celesta tones with gentle exponential decay and pearlescent harmonics.
 * - Warm ambient seaside pads (filtered sines & warm low harmonics) simulating distant ocean tide swells.
 * - An evolving 16-measure D Lydian / Pentatonic lullaby (~76 seconds loop) that loops seamlessly.
 * - Low master volume, gentle 2.2s fade-in and 1.2s fade-out, zero external dependencies, no copyrighted recordings.
 */

import { getAudioContext, isWebAudioSupported } from './audioChimes';

interface NoteEvent {
  timeInBeats: number; // In quarter-note beats from start of 16-measure cycle (0 - 64)
  freq: number;
  durationBeats: number;
  velocity: number; // 0.0 - 1.0 relative note loudness
  type?: 'musicbox' | 'piano' | 'sparkle';
}

interface ChordEvent {
  timeInBeats: number;
  rootFreq: number;
  frequencies: number[];
  durationBeats: number;
}

// Frequencies (Hz) for D Major / B Minor fairytale scale
const N = {
  // Low Bass Roots
  D2: 73.42,
  G2: 98.0,
  B2: 123.47,
  A2: 110.0,

  // Warm Pad Harmony
  D3: 146.83,
  F3s: 185.0,
  G3: 196.0,
  A3: 220.0,
  B3: 246.94,
  C4s: 277.18,
  D4: 293.66,
  E4: 329.63,
  F4s: 369.99,
  G4: 392.0,
  A4: 440.0,

  // Music-Box Celesta Register
  B4: 493.88,
  C5s: 554.37,
  D5: 587.33,
  E5: 659.25,
  F5s: 739.99,
  G5: 783.99,
  A5: 880.0,
  B5: 987.77,
  C6s: 1108.73,
  D6: 1174.66,
};

// 16-measure harmonic progression (4 beats per measure = 64 beats total)
const CHORD_PROGRESSION: ChordEvent[] = [
  // Measures 1-4: Dmaj9 (The Golden Shore)
  { timeInBeats: 0, rootFreq: N.D2, frequencies: [N.D3, N.A3, N.F4s, N.C4s], durationBeats: 16 },
  // Measures 5-8: Gmaj7 (The Whispering Waves)
  { timeInBeats: 16, rootFreq: N.G2, frequencies: [N.G3, N.D4, N.B3, N.F4s], durationBeats: 16 },
  // Measures 9-12: Bm9 (The Miniature Worlds)
  { timeInBeats: 32, rootFreq: N.B2, frequencies: [N.B3, N.F4s, N.D4, N.A4], durationBeats: 16 },
  // Measures 13-16: Asus4 -> A7add9 (The Endless Horizon & Lullaby Return)
  { timeInBeats: 48, rootFreq: N.A2, frequencies: [N.A3, N.E4, N.D4, N.C4s], durationBeats: 16 },
];

// Melodic storybook phrasing (music box & soft piano tones)
const MELODY_EVENTS: NoteEvent[] = [
  // Phrase 1 (Measures 1-4): Soft sunrise opening
  { timeInBeats: 1, freq: N.F5s, durationBeats: 2.5, velocity: 0.65, type: 'musicbox' },
  { timeInBeats: 3.5, freq: N.A5, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 6, freq: N.D5, durationBeats: 3, velocity: 0.7, type: 'piano' },
  { timeInBeats: 8, freq: N.C6s, durationBeats: 2, velocity: 0.5, type: 'sparkle' },
  { timeInBeats: 9.5, freq: N.E5, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 12, freq: N.F5s, durationBeats: 3, velocity: 0.65, type: 'musicbox' },
  { timeInBeats: 14, freq: N.D5, durationBeats: 2, velocity: 0.55, type: 'piano' },

  // Phrase 2 (Measures 5-8): Whispering tide swells
  { timeInBeats: 17, freq: N.B4, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 19, freq: N.D5, durationBeats: 2, velocity: 0.65, type: 'musicbox' },
  { timeInBeats: 21.5, freq: N.F5s, durationBeats: 2.5, velocity: 0.7, type: 'musicbox' },
  { timeInBeats: 24, freq: N.G5, durationBeats: 2.5, velocity: 0.55, type: 'musicbox' },
  { timeInBeats: 26.5, freq: N.F5s, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 28.5, freq: N.D5, durationBeats: 3, velocity: 0.65, type: 'piano' },
  { timeInBeats: 31, freq: N.B5, durationBeats: 2, velocity: 0.45, type: 'sparkle' },

  // Phrase 3 (Measures 9-12): Miniature universes & discovery
  { timeInBeats: 33, freq: N.C5s, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 35, freq: N.D5, durationBeats: 2.5, velocity: 0.65, type: 'musicbox' },
  { timeInBeats: 38, freq: N.F5s, durationBeats: 2, velocity: 0.7, type: 'musicbox' },
  { timeInBeats: 40.5, freq: N.E5, durationBeats: 2, velocity: 0.55, type: 'musicbox' },
  { timeInBeats: 42.5, freq: N.C5s, durationBeats: 2.5, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 44.5, freq: N.B4, durationBeats: 3, velocity: 0.65, type: 'piano' },
  { timeInBeats: 46.5, freq: N.F5s, durationBeats: 2, velocity: 0.45, type: 'sparkle' },

  // Phrase 4 (Measures 13-16): Twilight horizon & sweet return
  { timeInBeats: 49, freq: N.A4, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 51, freq: N.B4, durationBeats: 2, velocity: 0.65, type: 'musicbox' },
  { timeInBeats: 53.5, freq: N.C5s, durationBeats: 2.5, velocity: 0.65, type: 'musicbox' },
  { timeInBeats: 56, freq: N.E5, durationBeats: 2, velocity: 0.6, type: 'musicbox' },
  { timeInBeats: 58.5, freq: N.F5s, durationBeats: 3, velocity: 0.7, type: 'musicbox' },
  { timeInBeats: 61, freq: N.D5, durationBeats: 3.5, velocity: 0.65, type: 'piano' },
  { timeInBeats: 62.5, freq: N.D6, durationBeats: 2.5, velocity: 0.45, type: 'sparkle' },
];

class SoundscapeSynthesizer {
  private isRunning = false;
  private masterGain: GainNode | null = null;
  private padGain: GainNode | null = null;
  private padFilter: BiquadFilterNode | null = null;
  private currentPadOscillators: OscillatorNode[] = [];
  private schedulerIntervalId: number | null = null;

  // Tempo configuration: 52 BPM (1.1538 seconds per beat), 16 measures * 4 beats = 64 beats
  private readonly secondsPerBeat = 60 / 52;
  private readonly loopDurationSeconds = 64 * (60 / 52); // ~73.8 seconds

  private cycleStartTime = 0;
  private scheduledNotesSet = new Set<string>();
  private scheduledChordsSet = new Set<string>();

  // Target master volume (~0.075, keeping music dreamy, quiet, and unobtrusive)
  private readonly baseVolume = 0.075;

  public isPlaying(): boolean {
    return this.isRunning;
  }

  /**
   * Start soft, dreamy background soundscape with gentle fade-in
   */
  public start(): boolean {
    if (this.isRunning) return true;
    if (!isWebAudioSupported()) return false;

    const ctx = getAudioContext();
    if (!ctx) return false;

    try {
      this.isRunning = true;
      const now = ctx.currentTime;

      // Master output node for soundscape
      this.masterGain = ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, now);
      // Gentle 2.2-second fade-in
      this.masterGain.gain.linearRampToValueAtTime(this.baseVolume, now + 2.2);
      this.masterGain.connect(ctx.destination);

      // Warm ambient ocean pad filter & gain
      this.padFilter = ctx.createBiquadFilter();
      this.padFilter.type = 'lowpass';
      this.padFilter.frequency.setValueAtTime(480, now);
      this.padFilter.Q.setValueAtTime(0.7, now);

      this.padGain = ctx.createGain();
      this.padGain.gain.setValueAtTime(0.35, now);

      this.padFilter.connect(this.padGain);
      this.padGain.connect(this.masterGain);

      // Start scheduling clock
      this.cycleStartTime = now + 0.1;
      this.scheduledNotesSet.clear();
      this.scheduledChordsSet.clear();

      // Run lookahead scheduler every 80ms
      this.schedulerIntervalId = window.setInterval(() => {
        this.scheduleLookahead();
      }, 80);

      this.scheduleLookahead();
      return true;
    } catch {
      this.stop();
      return false;
    }
  }

  /**
   * Stop background soundscape immediately with gentle fade-out
   */
  public stop(): void {
    if (!this.isRunning) return;
    this.isRunning = false;

    if (this.schedulerIntervalId !== null) {
      clearInterval(this.schedulerIntervalId);
      this.schedulerIntervalId = null;
    }

    const ctx = getAudioContext();
    if (ctx && this.masterGain) {
      const now = ctx.currentTime;
      try {
        // Smooth 1.1s fade-out
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.1);
        setTimeout(() => {
          this.cleanupNodes();
        }, 1200);
      } catch {
        this.cleanupNodes();
      }
    } else {
      this.cleanupNodes();
    }
  }

  /**
   * Gentle ducking when an interactive chime plays (e.g. shell opening or Easter egg discovery)
   * Ensures interactive sounds sparkle crisply without acoustic clutter
   */
  public duck(targetVol = 0.03, durationMs = 1400): void {
    if (!this.isRunning || !this.masterGain) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(targetVol, now + 0.2);
      this.masterGain.gain.setValueAtTime(targetVol, now + durationMs / 1000);
      this.masterGain.gain.linearRampToValueAtTime(this.baseVolume, now + (durationMs + 600) / 1000);
    } catch {
      // Ignore
    }
  }

  private cleanupNodes(): void {
    this.currentPadOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Already stopped
      }
    });
    this.currentPadOscillators = [];

    if (this.padGain) {
      try {
        this.padGain.disconnect();
      } catch {
        // Disconnected
      }
      this.padGain = null;
    }

    if (this.padFilter) {
      try {
        this.padFilter.disconnect();
      } catch {
        // Disconnected
      }
      this.padFilter = null;
    }

    if (this.masterGain) {
      try {
        this.masterGain.disconnect();
      } catch {
        // Disconnected
      }
      this.masterGain = null;
    }

    this.scheduledNotesSet.clear();
    this.scheduledChordsSet.clear();
  }

  /**
   * High-precision lookahead scheduler.
   * Schedules events up to 1.5 seconds in advance of ctx.currentTime to prevent any stuttering or drift.
   */
  private scheduleLookahead(): void {
    const ctx = getAudioContext();
    if (!ctx || !this.isRunning || !this.masterGain) return;

    const currentTime = ctx.currentTime;
    const lookaheadHorizon = currentTime + 1.5;

    // Check which cycle loop we are currently in
    const elapsedSinceStart = Math.max(0, currentTime - this.cycleStartTime);
    const currentLoopIndex = Math.floor(elapsedSinceStart / this.loopDurationSeconds);

    // Schedule current cycle loop and next cycle loop if close to horizon
    [currentLoopIndex, currentLoopIndex + 1].forEach((loopIdx) => {
      const loopTimeOffset = this.cycleStartTime + loopIdx * this.loopDurationSeconds;

      // 1. Schedule Chords (Warm Pad Harmony)
      CHORD_PROGRESSION.forEach((chord, chordIdx) => {
        const chordKey = `${loopIdx}-chord-${chordIdx}`;
        const chordStartTime = loopTimeOffset + chord.timeInBeats * this.secondsPerBeat;

        if (chordStartTime >= currentTime - 0.2 && chordStartTime <= lookaheadHorizon) {
          if (!this.scheduledChordsSet.has(chordKey)) {
            this.scheduledChordsSet.add(chordKey);
            this.playWarmPadChord(chord, chordStartTime);
          }
        }
      });

      // 2. Schedule Melody Notes (Music-Box / Celesta / Soft Piano)
      MELODY_EVENTS.forEach((note, noteIdx) => {
        const noteKey = `${loopIdx}-note-${noteIdx}`;
        const noteStartTime = loopTimeOffset + note.timeInBeats * this.secondsPerBeat;

        if (noteStartTime >= currentTime - 0.1 && noteStartTime <= lookaheadHorizon) {
          if (!this.scheduledNotesSet.has(noteKey)) {
            this.scheduledNotesSet.add(noteKey);
            this.playMusicBoxNote(note, noteStartTime);
          }
        }
      });
    });

    // Prune scheduled set memory periodically
    if (this.scheduledNotesSet.size > 200) {
      this.scheduledNotesSet.clear();
      this.scheduledChordsSet.clear();
    }
  }

  /**
   * Play an ambient warm ocean pad chord with gentle swelling wave dynamics
   */
  private playWarmPadChord(chord: ChordEvent, startTime: number): void {
    const ctx = getAudioContext();
    if (!ctx || !this.padFilter) return;

    const chordDurationSeconds = chord.durationBeats * this.secondsPerBeat;
    const stopTime = startTime + chordDurationSeconds + 1.5; // Soft natural ring-out overlap

    // Play Root + 2 Harmony Voices
    const freqs = [chord.rootFreq, ...chord.frequencies.slice(0, 2)];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      // Triangle + Sine combination for silky-soft warmth
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      // Subtle warm chorus detuning (+/- 2.5 cents)
      if (idx > 0) {
        osc.detune.setValueAtTime((idx % 2 === 0 ? 1 : -1) * 2.8, startTime);
      }

      const voiceGain = ctx.createGain();
      voiceGain.gain.setValueAtTime(0.0001, startTime);
      // Gentle swell attack (2.5 seconds, like a slow incoming wave)
      voiceGain.gain.linearRampToValueAtTime(0.12, startTime + 2.5);
      // Gentle decay at end of measure
      voiceGain.gain.setValueAtTime(0.12, stopTime - 2.0);
      voiceGain.gain.linearRampToValueAtTime(0.0001, stopTime);

      osc.connect(voiceGain);
      if (this.padFilter) {
        voiceGain.connect(this.padFilter);
      }

      osc.start(startTime);
      osc.stop(stopTime);

      this.currentPadOscillators.push(osc);

      osc.onended = () => {
        try {
          osc.disconnect();
          voiceGain.disconnect();
          const i = this.currentPadOscillators.indexOf(osc);
          if (i > -1) this.currentPadOscillators.splice(i, 1);
        } catch {
          // Cleaned
        }
      };
    });
  }

  /**
   * Play a delicate music-box celesta or soft piano bell note
   */
  private playMusicBoxNote(note: NoteEvent, startTime: number): void {
    const ctx = getAudioContext();
    if (!ctx || !this.masterGain) return;

    const durationSeconds = note.durationBeats * this.secondsPerBeat * 1.5;
    const stopTime = startTime + durationSeconds;

    // 1. Primary fundamental oscillator
    const osc = ctx.createOscillator();
    osc.type = note.type === 'piano' ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(note.freq, startTime);

    // 2. High harmonic chime overtone for fairy music-box twinkle
    const harmonicOsc = ctx.createOscillator();
    harmonicOsc.type = 'sine';
    harmonicOsc.frequency.setValueAtTime(note.freq * 2, startTime);

    // Note envelope
    const noteGain = ctx.createGain();
    const peakVolume = note.velocity * 0.16;

    noteGain.gain.setValueAtTime(0.0001, startTime);
    // 12ms soft hammer attack
    noteGain.gain.linearRampToValueAtTime(peakVolume, startTime + 0.012);
    // Dreamy exponential music-box ring decay
    noteGain.gain.exponentialRampToValueAtTime(0.0001, stopTime);

    // Harmonic overtone envelope (sparkling transient that fades quicker)
    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.0001, startTime);
    harmonicGain.gain.linearRampToValueAtTime(peakVolume * 0.22, startTime + 0.008);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, startTime + durationSeconds * 0.55);

    // Connect voices
    osc.connect(noteGain);
    harmonicOsc.connect(harmonicGain);

    noteGain.connect(this.masterGain);
    harmonicGain.connect(this.masterGain);

    osc.start(startTime);
    harmonicOsc.start(startTime);

    osc.stop(stopTime);
    harmonicOsc.stop(stopTime);

    osc.onended = () => {
      try {
        osc.disconnect();
        harmonicOsc.disconnect();
        noteGain.disconnect();
        harmonicGain.disconnect();
      } catch {
        // Disconnected
      }
    };
  }
}

// Singleton background music soundscape instance
export const enchantedSoundscape = new SoundscapeSynthesizer();
