'use client';

import { motion } from 'framer-motion';
import { MatchCard } from '@/features/odds/components/match-card';
import { MatchesGridItemProps } from './types';

export function MatchesGridItem({ match, itemVariants }: MatchesGridItemProps) {
    return (
        <motion.div key={match.id} variants={itemVariants}>
            <MatchCard match={match} />
        </motion.div>
    );
}
