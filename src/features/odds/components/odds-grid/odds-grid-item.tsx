'use client';

import { motion } from 'framer-motion';
import { OddCard } from '../odd-card';
import { OddListItem } from '../odd-list-item';
import type { OddsGridItemProps } from './types';
import { useOddsGridAnimationVariants } from './hooks';

export function OddsGridItem({ odd, viewMode, isHot }: OddsGridItemProps) {
    const { item: itemVariants } = useOddsGridAnimationVariants();

    return (
        <motion.div key={odd.id} variants={itemVariants} layout>
            {viewMode === 'grid' ? (
                <OddCard odd={odd} isHot={isHot} />
            ) : (
                <OddListItem odd={odd} isHot={isHot} />
            )}
        </motion.div>
    );
}
