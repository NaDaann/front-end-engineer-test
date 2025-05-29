'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { MatchCardHotEffectsProps } from './types';
import { FLOATING_FLAMES_CONFIG } from './config';

export function MatchCardHotEffects({ isHot }: MatchCardHotEffectsProps) {
    if (!isHot) return null;

    return (
        <>
            {FLOATING_FLAMES_CONFIG.map((flame, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [...flame.animate.y],
                        x: [...flame.animate.x],
                        rotate: [...flame.animate.rotate],
                        opacity: [...flame.animate.opacity],
                    }}
                    transition={flame.transition}
                    className={flame.className}
                >
                    <Flame className={`${flame.size} ${flame.color}`} />
                </motion.div>
            ))}
        </>
    );
}
