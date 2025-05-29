'use client';

import { useCallback } from 'react';

interface OnboardingEffects {
    playStepSound: () => void;
    playSuccessSound: () => void;
    playClickSound: () => void;
    vibrate: (pattern?: number | number[]) => void;
}

export function useOnboardingEffects(): OnboardingEffects {
    const playStepSound = useCallback(() => {
        // Create a subtle step sound using Web Audio API
        try {
            const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
            if (!AudioContextClass) return;
            
            const audioContext = new AudioContextClass();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch {
            // Fallback: silent operation if Web Audio API is not supported
            console.debug('Audio not supported');
        }
    }, []);

    const playSuccessSound = useCallback(() => {
        try {
            const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
            if (!AudioContextClass) return;
            
            const audioContext = new AudioContextClass();
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Success chord
            oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
            
            oscillator1.start(audioContext.currentTime);
            oscillator2.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.3);
            oscillator2.stop(audioContext.currentTime + 0.3);
        } catch {
            console.debug('Audio not supported');
        }
    }, []);

    const playClickSound = useCallback(() => {
        try {
            const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
            if (!AudioContextClass) return;
            
            const audioContext = new AudioContextClass();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
        } catch {
            console.debug('Audio not supported');
        }
    }, []);

    const vibrate = useCallback((pattern: number | number[] = 50) => {
        if ('vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    }, []);

    return {
        playStepSound,
        playSuccessSound,
        playClickSound,
        vibrate,
    };
}
