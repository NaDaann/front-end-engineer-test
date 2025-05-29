'use client';

import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface OnboardingStats {
    startTime: number;
    stepTimes: number[];
    totalTime: number;
    completedSteps: number[];
    skipCount: number;
    restartCount: number;
}

interface OnboardingProgress {
    currentStep: number;
    isCompleted: boolean;
    stats: OnboardingStats;
    hasSeenBefore: boolean;
}

interface UseOnboardingProgressReturn {
    progress: OnboardingProgress;
    markStepCompleted: (stepId: number) => void;
    recordStepTime: (stepId: number, timeSpent: number) => void;
    markCompleted: () => void;
    resetProgress: () => void;
    incrementSkip: () => void;
    incrementRestart: () => void;
    getAverageStepTime: () => number;
    getProgressPercentage: () => number;
}

const INITIAL_STATS: OnboardingStats = {
    startTime: 0,
    stepTimes: [],
    totalTime: 0,
    completedSteps: [],
    skipCount: 0,
    restartCount: 0,
};

const INITIAL_PROGRESS: OnboardingProgress = {
    currentStep: 0,
    isCompleted: false,
    stats: INITIAL_STATS,
    hasSeenBefore: false,
};

export function useOnboardingProgress(): UseOnboardingProgressReturn {
    const { value: localProgress, setValue: setLocalProgress } =
        useLocalStorage<OnboardingProgress>('onboarding_progress', INITIAL_PROGRESS);

    const [progress, setProgress] = useState<OnboardingProgress>(localProgress);

    // Sync with localStorage
    useEffect(() => {
        setLocalProgress(progress);
    }, [progress, setLocalProgress]);

    const markStepCompleted = useCallback((stepId: number) => {
        setProgress((prev) => ({
            ...prev,
            currentStep: stepId,
            stats: {
                ...prev.stats,
                completedSteps: [...new Set([...prev.stats.completedSteps, stepId])],
            },
        }));
    }, []);

    const recordStepTime = useCallback((stepId: number, timeSpent: number) => {
        setProgress((prev) => {
            const newStepTimes = [...prev.stats.stepTimes];
            newStepTimes[stepId] = timeSpent;

            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    stepTimes: newStepTimes,
                },
            };
        });
    }, []);

    const markCompleted = useCallback(() => {
        const now = Date.now();
        setProgress((prev) => ({
            ...prev,
            isCompleted: true,
            hasSeenBefore: true,
            stats: {
                ...prev.stats,
                totalTime: prev.stats.startTime > 0 ? now - prev.stats.startTime : 0,
            },
        }));
    }, []);

    const resetProgress = useCallback(() => {
        const now = Date.now();
        setProgress({
            ...INITIAL_PROGRESS,
            hasSeenBefore: progress.hasSeenBefore,
            stats: {
                ...INITIAL_STATS,
                startTime: now,
                restartCount: progress.stats.restartCount + 1,
            },
        });
    }, [progress.hasSeenBefore, progress.stats.restartCount]);

    const incrementSkip = useCallback(() => {
        setProgress((prev) => ({
            ...prev,
            stats: {
                ...prev.stats,
                skipCount: prev.stats.skipCount + 1,
            },
        }));
    }, []);

    const incrementRestart = useCallback(() => {
        setProgress((prev) => ({
            ...prev,
            stats: {
                ...prev.stats,
                restartCount: prev.stats.restartCount + 1,
            },
        }));
    }, []);

    const getAverageStepTime = useCallback(() => {
        const validTimes = progress.stats.stepTimes.filter((time) => time > 0);
        if (validTimes.length === 0) return 0;
        return validTimes.reduce((sum, time) => sum + time, 0) / validTimes.length;
    }, [progress.stats.stepTimes]);

    const getProgressPercentage = useCallback(() => {
        const totalSteps = 8; // Total number of onboarding steps
        return (progress.stats.completedSteps.length / totalSteps) * 100;
    }, [progress.stats.completedSteps.length]);

    // Initialize start time on first load
    useEffect(() => {
        if (progress.stats.startTime === 0) {
            setProgress((prev) => ({
                ...prev,
                stats: {
                    ...prev.stats,
                    startTime: Date.now(),
                },
            }));
        }
    }, [progress.stats.startTime]);

    return {
        progress,
        markStepCompleted,
        recordStepTime,
        markCompleted,
        resetProgress,
        incrementSkip,
        incrementRestart,
        getAverageStepTime,
        getProgressPercentage,
    };
}
