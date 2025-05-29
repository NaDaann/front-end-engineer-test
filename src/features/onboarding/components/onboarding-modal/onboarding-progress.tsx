'use client';

import { motion } from 'framer-motion';
import { OnboardingProgressProps } from './types';

export function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="px-6 pb-2">
            <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-400">Progresso</span>
                <span className="text-emerald-400 font-medium">
                    {Math.round(progressPercentage)}%
                </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-green-600 to-purple-700 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}
