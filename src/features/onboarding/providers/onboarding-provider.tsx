'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface OnboardingState {
    hasCompletedOnboarding: boolean;
    isOnboardingOpen: boolean;
    isCompleted: boolean;
    currentStep: number;
}

interface OnboardingContextType extends OnboardingState {
    startOnboarding: () => void;
    completeOnboarding: () => void;
    closeOnboarding: () => void;
    reopenOnboarding: () => void;
    nextStep: () => void;
    previousStep: () => void;
    goToStep: (step: number) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const ONBOARDING_STORAGE_KEY = 'daniel-gaming-onboarding-completed';

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();
    const [state, setState] = useState<OnboardingState>({
        hasCompletedOnboarding: false,
        isOnboardingOpen: false,
        isCompleted: false,
        currentStep: 0,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const completed = localStorage.getItem(ONBOARDING_STORAGE_KEY);
            const hasCompleted = completed === 'true';

            setState((prev) => ({
                ...prev,
                hasCompletedOnboarding: hasCompleted,
                isOnboardingOpen: !!session && !hasCompleted,
            }));
        }
    }, [session]);

    const startOnboarding = () => {
        setState((prev) => ({
            ...prev,
            isOnboardingOpen: true,
            currentStep: 0,
        }));
    };

    const completeOnboarding = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(ONBOARDING_STORAGE_KEY, 'true');
        }

        setState((prev) => ({
            ...prev,
            hasCompletedOnboarding: true,
            isOnboardingOpen: false,
            currentStep: 0,
        }));
    };

    const closeOnboarding = () => {
        setState((prev) => ({
            ...prev,
            isOnboardingOpen: false,
        }));
    };

    const reopenOnboarding = () => {
        setState((prev) => ({
            ...prev,
            isOnboardingOpen: true,
            currentStep: 0,
        }));
    };

    const nextStep = () => {
        setState((prev) => ({
            ...prev,
            currentStep: prev.currentStep + 1,
        }));
    };

    const previousStep = () => {
        setState((prev) => ({
            ...prev,
            currentStep: Math.max(prev.currentStep - 1, 0),
        }));
    };

    const goToStep = (step: number) => {
        setState((prev) => ({
            ...prev,
            currentStep: Math.max(0, step),
        }));
    };

    const value: OnboardingContextType = {
        ...state,
        startOnboarding,
        completeOnboarding,
        closeOnboarding,
        reopenOnboarding,
        nextStep,
        previousStep,
        goToStep,
    };

    return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (context === undefined) {
        throw new Error('useOnboarding must be used within an OnboardingProvider');
    }
    return context;
}
