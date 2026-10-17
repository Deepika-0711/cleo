/**
 * Web Audio API synthesizer for Cleo's tiny magical chimes.
 * Generates delicate, seashell music-box and pearl chimes purely in code.
 * No external audio files or third-party dependencies.
 */

// Singleton AudioContext created only on explicit user interaction
let sharedAudioCtx: AudioContext | null = null;

export const isWebAudioSupported = (): boolean => {
  return typeof window !== 'undefined' && Boolean(window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext);
};

export const getAudioContext = (): AudioContext | null => {
  if (!isWebAudioSupported()) return null;

  if (!sharedAudioCtx) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      sharedAudioCtx = new AudioContextClass();
    } catch {
      return null;
    }
  }

  // Resume suspended context if needed
  if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }

  return sharedAudioCtx;
};

interface ChimeNote {
  freq: number;
  delayMs: number;
  durationMs: number;
  gain: number;
  type?: OscillatorType;
}

/**
 * Play a sequence of gentle bell/celesta tones with smooth exponential decay.
 */
const playToneSequence = (notes: ChimeNote[], masterVolume = 0.12) => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(masterVolume, now);
  masterGain.connect(ctx.destination);

  notes.forEach((note) => {
    const startTime = now + note.delayMs / 1000;
    const stopTime = startTime + note.durationMs / 1000;

    // Primary bell tone
    const osc = ctx.createOscillator();
    osc.type = note.type || 'sine';
    osc.frequency.setValueAtTime(note.freq, startTime);

    // Harmonic sparkle overtone for pearlescent timbre
    const harmonicOsc = ctx.createOscillator();
    harmonicOsc.type = 'sine';
    harmonicOsc.frequency.setValueAtTime(note.freq * 2, startTime);

    // Note envelope
    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(note.gain, startTime + 0.015); // soft 15ms attack
    noteGain.gain.exponentialRampToValueAtTime(0.0001, stopTime); // smooth ringing decay

    // Harmonic gain (subtle sparkle)
    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.0001, startTime);
    harmonicGain.gain.linearRampToValueAtTime(note.gain * 0.22, startTime + 0.01);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, startTime + (note.durationMs * 0.6) / 1000);

    // Wire up
    osc.connect(noteGain);
    harmonicOsc.connect(harmonicGain);

    noteGain.connect(masterGain);
    harmonicGain.connect(masterGain);

    osc.start(startTime);
    harmonicOsc.start(startTime);

    osc.stop(stopTime);
    harmonicOsc.stop(stopTime);

    // Clean up
    osc.onended = () => {
      osc.disconnect();
      harmonicOsc.disconnect();
      noteGain.disconnect();
      harmonicGain.disconnect();
    };
  });

  // Disconnect master gain after total sequence finishes
  const maxDelay = Math.max(...notes.map((n) => n.delayMs + n.durationMs));
  setTimeout(() => {
    masterGain.disconnect();
  }, maxDelay + 200);
};

/**
 * 1. Shell-World Opening Chime:
 * A dreamy, ascending celestial arpeggio (F#5, A#5, C#6, F#6) resembling a vintage seashell music box.
 */
export const playShellWorldChime = () => {
  const notes: ChimeNote[] = [
    { freq: 739.99, delayMs: 0, durationMs: 700, gain: 0.18 }, // F#5
    { freq: 932.33, delayMs: 80, durationMs: 750, gain: 0.17 }, // A#5
    { freq: 1108.73, delayMs: 160, durationMs: 800, gain: 0.16 }, // C#6
    { freq: 1479.98, delayMs: 240, durationMs: 950, gain: 0.14 }, // F#6
  ];
  playToneSequence(notes, 0.13);
};

/**
 * 2. Secret Easter Egg Discovery Chime:
 * An enchanting golden chime with shimmering pentatonic cascade (G5, B5, D6, G6, B6),
 * evoking finding a glowing pearl in the tide sand.
 */
export const playEasterEggChime = () => {
  const notes: ChimeNote[] = [
    { freq: 783.99, delayMs: 0, durationMs: 650, gain: 0.16 }, // G5
    { freq: 987.77, delayMs: 70, durationMs: 700, gain: 0.16 }, // B5
    { freq: 1174.66, delayMs: 140, durationMs: 750, gain: 0.15 }, // D6
    { freq: 1567.98, delayMs: 210, durationMs: 850, gain: 0.14 }, // G6
    { freq: 1975.53, delayMs: 280, durationMs: 1100, gain: 0.12 }, // B6
  ];
  playToneSequence(notes, 0.14);
};

/**
 * 3. Cleo Greeting / Notice Chime:
 * A friendly, very brief two-note warm harmonic chime (A5 -> E6).
 */
export const playCleoGreetingChime = () => {
  const notes: ChimeNote[] = [
    { freq: 880.0, delayMs: 0, durationMs: 500, gain: 0.14 }, // A5
    { freq: 1318.51, delayMs: 90, durationMs: 700, gain: 0.12 }, // E6
  ];
  playToneSequence(notes, 0.11);
};

/**
 * 4. Sound Enabled Confirmation Chime:
 * A subtle, reassuring single high bell chime when enabling sound.
 */
export const playSoundToggleOnChime = () => {
  const notes: ChimeNote[] = [
    { freq: 1046.5, delayMs: 0, durationMs: 400, gain: 0.12 }, // C6
    { freq: 1567.98, delayMs: 60, durationMs: 550, gain: 0.11 }, // G6
  ];
  playToneSequence(notes, 0.1);
};
