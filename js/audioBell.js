/**
 * The Lay Dharma Household Mārga
 * Pure Web Audio API Tibetan Singing Bowl & Mindfulness Bell Synthesizer
 * Produces authentic harmonic meditation chimes with exponential acoustic decay.
 */

class MindfulnessBellSynthesizer {
  constructor() {
    this.audioCtx = null;
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Strike the sacred meditation bowl
   * @param {number} baseFreq - Base fundamental frequency in Hz (default: 432 Hz)
   * @param {number} duration - Sound decay duration in seconds (default: 5.5s)
   */
  strike(baseFreq = 432, duration = 5.5) {
    const ctx = this.getAudioContext();
    if (!ctx) {
      console.warn("Web Audio API not supported in this browser.");
      return;
    }

    const now = ctx.currentTime;

    // Master Gain node
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.7, now + 0.015);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    masterGain.connect(ctx.destination);

    // Overtones replicating hand-hammered Tibetan bronze alloy:
    // Fundamental + 2.76x, 5.40x, and 8.93x non-integer resonant partials
    const partials = [
      { ratio: 1.00, gain: 0.50, detune: 0 },
      { ratio: 2.76, gain: 0.28, detune: 4 },
      { ratio: 5.40, gain: 0.15, detune: -6 },
      { ratio: 8.93, gain: 0.07, detune: 2 }
    ];

    partials.forEach(p => {
      const osc = ctx.createOscillator();
      const pGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * p.ratio, now);
      osc.detune.setValueAtTime(p.detune, now);

      pGain.gain.setValueAtTime(p.gain, now);
      // Higher harmonics decay faster
      const harmonicDecay = duration / (1 + (p.ratio * 0.35));
      pGain.gain.exponentialRampToValueAtTime(0.0001, now + harmonicDecay);

      osc.connect(pGain);
      pGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }
}

export const mindfulnessBell = new MindfulnessBellSynthesizer();
