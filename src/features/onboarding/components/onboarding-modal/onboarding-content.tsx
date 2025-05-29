'use client';

import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';
import { OnboardingContentProps } from './types';

export function OnboardingContent({ step }: OnboardingContentProps) {
    return (
        <CardContent className="space-y-6">
            <div className="space-y-2">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-white"
                >
                    {step.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400"
                >
                    {step.description}
                </motion.p>
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="min-h-[300px] flex items-center justify-center"
            >
                {step.content}
            </motion.div>
        </CardContent>
    );
}
