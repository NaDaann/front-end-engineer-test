'use client';

import { motion } from 'framer-motion';
import { OnboardingContainerProps } from './types';

export function OnboardingContainer({ children }: OnboardingContainerProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full max-w-2xl relative"
            >
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                            'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                            'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-xl -z-10"
                />
                
                {children}
            </motion.div>
        </div>
    );
}
