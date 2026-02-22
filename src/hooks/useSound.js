import { useCallback } from 'react';

export const useSound = () => {
    const playSound = useCallback((type) => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const audioCtx = new AudioContext();
            const gainNode = audioCtx.createGain();
            gainNode.connect(audioCtx.destination);

            if (type === 'correct') {
                // Duolingo-style rising two-tone
                const osc1 = audioCtx.createOscillator();
                const osc2 = audioCtx.createOscillator();

                osc1.type = 'sine';
                osc2.type = 'sine';

                osc1.connect(gainNode);
                osc2.connect(gainNode);

                const now = audioCtx.currentTime;

                // First note
                osc1.frequency.setValueAtTime(523.25, now); // C5
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.2, now + 0.05);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.1);

                // Second note (rising)
                osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5

                // Harmonic addition
                osc2.frequency.setValueAtTime(1046.50, now + 0.1); // C6
                gainNode.gain.linearRampToValueAtTime(0.2, now + 0.15);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.4);

                osc1.start(now);
                osc2.start(now + 0.1);

                osc1.stop(now + 0.4);
                osc2.stop(now + 0.4);
            } else if (type === 'wrong') {
                // Low, descending buzz
                const osc = audioCtx.createOscillator();
                osc.type = 'triangle';
                osc.connect(gainNode);

                const now = audioCtx.currentTime;
                osc.frequency.setValueAtTime(146.83, now); // D3
                osc.frequency.linearRampToValueAtTime(73.42, now + 0.3); // D2

                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.2, now + 0.05);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.4);

                osc.start(now);
                osc.stop(now + 0.4);
            } else if (type === 'click') {
                const osc = audioCtx.createOscillator();
                osc.type = 'sine';
                osc.connect(gainNode);

                const now = audioCtx.currentTime;
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01);
                gainNode.gain.linearRampToValueAtTime(0, now + 0.05);

                osc.start(now);
                osc.stop(now + 0.05);
            }
        } catch (e) {
            console.error("Sound error:", e);
        }
    }, []);

    return { playSound };
};
