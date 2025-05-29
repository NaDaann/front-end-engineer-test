'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { AnimatePresence } from 'framer-motion';
import { OnboardingModalProps } from './types';
import { OnboardingOverlay } from './onboarding-overlay';
import { OnboardingContainer } from './onboarding-container';
import { OnboardingHeader } from './onboarding-header';
import { OnboardingContent } from './onboarding-content';
import { OnboardingProgress } from './onboarding-progress';
import { OnboardingNavigation } from './onboarding-navigation';
import { createOnboardingSteps } from './config';
import { useOnboardingNavigation } from './hooks';
import { useOnboardingProgress } from '../../hooks/use-onboarding-progress';

export function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const { getProgressPercentage } = useOnboardingProgress();
    
    const steps = createOnboardingSteps(getProgressPercentage);
    
    const {
        handleNext,
        handlePrevious,
        handleClose,
        handleStepJump
    } = useOnboardingNavigation(
        currentStep,
        setCurrentStep,
        steps.length,
        onComplete,
        onClose
    );

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) return;
            
            switch (event.key) {
                case 'ArrowRight':
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    handleNext();
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    handlePrevious();
                    break;
                case 'Escape':
                    event.preventDefault();
                    handleClose();
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                    const stepNumber = parseInt(event.key) - 1;
                    event.preventDefault();
                    handleStepJump(stepNumber);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleNext, handlePrevious, handleClose, handleStepJump]);

    if (!isOpen) return null;

    const currentStepData = steps[currentStep];

    return (
        <AnimatePresence>
            <OnboardingOverlay isOpen={isOpen} onClose={handleClose} />
            <OnboardingContainer>
                <Card className="relative bg-gray-900/95 border-gray-700/50 shadow-2xl backdrop-blur">
                    <OnboardingHeader
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        onClose={handleClose}
                    />
                    
                    <OnboardingContent step={currentStepData} />
                    
                    <OnboardingProgress
                        currentStep={currentStep}
                        totalSteps={steps.length}
                    />
                    
                    <OnboardingNavigation
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        step={currentStepData}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        onComplete={onComplete}
                    />
                </Card>
            </OnboardingContainer>
        </AnimatePresence>
    );
}
