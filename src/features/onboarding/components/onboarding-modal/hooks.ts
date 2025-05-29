import { useState, useCallback } from 'react';
import { useOnboardingEffects } from '../../hooks/use-onboarding-effects';
import { useOnboardingProgress } from '../../hooks/use-onboarding-progress';

export function useOnboardingNavigation(
    currentStep: number,
    setCurrentStep: (step: number) => void,
    stepsLength: number,
    onComplete: () => void,
    onClose: () => void
) {
    const [stepStartTime, setStepStartTime] = useState(Date.now());
    
    const { playStepSound, playSuccessSound, playClickSound, vibrate } = useOnboardingEffects();
    const { 
        markStepCompleted, 
        recordStepTime, 
        markCompleted 
    } = useOnboardingProgress();

    const handleNext = useCallback(() => {
        const timeSpent = Date.now() - stepStartTime;
        recordStepTime(currentStep, timeSpent);
        markStepCompleted(currentStep);
        
        playClickSound();
        vibrate(50);
        
        if (currentStep < stepsLength - 1) {
            setCurrentStep(currentStep + 1);
            setStepStartTime(Date.now());
            playStepSound();
        } else {
            markCompleted();
            playSuccessSound();
            vibrate([100, 50, 100]);
            onComplete();
        }
    }, [currentStep, stepStartTime, stepsLength, setCurrentStep, onComplete, recordStepTime, markStepCompleted, markCompleted, playClickSound, playStepSound, playSuccessSound, vibrate]);

    const handlePrevious = useCallback(() => {
        if (currentStep > 0) {
            playClickSound();
            vibrate(30);
            setCurrentStep(currentStep - 1);
            setStepStartTime(Date.now());
        }
    }, [currentStep, setCurrentStep, playClickSound, vibrate]);

    const handleClose = useCallback(() => {
        const timeSpent = Date.now() - stepStartTime;
        recordStepTime(currentStep, timeSpent);
        
        playClickSound();
        onClose();
    }, [currentStep, stepStartTime, recordStepTime, playClickSound, onClose]);

    const handleStepJump = useCallback((stepNumber: number) => {
        if (stepNumber >= 0 && stepNumber < stepsLength) {
            playClickSound();
            setCurrentStep(stepNumber);
            setStepStartTime(Date.now());
        }
    }, [stepsLength, setCurrentStep, playClickSound]);

    return {
        handleNext,
        handlePrevious,
        handleClose,
        handleStepJump,
        stepStartTime,
        setStepStartTime
    };
}
