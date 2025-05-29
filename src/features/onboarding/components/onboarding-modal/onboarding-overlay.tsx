'use client';

import { motion } from 'framer-motion';
import { OnboardingOverlayProps } from './types';

export function OnboardingOverlay({ isOpen, onClose }: OnboardingOverlayProps) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
        />
    );
}
