'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OnboardingNavigationProps } from './types';

export function OnboardingNavigation({
    currentStep,
    totalSteps,
    step,
    onNext,
    onPrevious,
    onComplete,
}: OnboardingNavigationProps) {
    const isLastStep = currentStep === totalSteps - 1;
    const isFirstStep = currentStep === 0;

    const handleActionClick = () => {
        if (isLastStep) {
            onComplete();
        } else {
            onNext();
        }
    };

    return (
        <div className="flex items-center justify-between px-6 pb-6">
            <Button
                variant="outline"
                onClick={onPrevious}
                disabled={isFirstStep}
                className={`border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 ${
                    isFirstStep ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
            </Button>

            <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Use ←→ ou números para navegar</span>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                    onClick={handleActionClick}
                    className={`${
                        step.action?.highlight
                            ? 'bg-gradient-to-r from-green-600 to-green-800 hover:from-emerald-600 hover:to-green-600'
                            : 'bg-gray-700 hover:bg-gray-600'
                    } text-white shadow-lg`}
                >
                    {step.action?.label || 'Próximo'}
                    {!isLastStep && <ChevronRight className="w-4 h-4 ml-2" />}
                </Button>
            </motion.div>
        </div>
    );
}
