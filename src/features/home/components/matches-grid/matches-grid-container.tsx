'use client';

import { motion } from 'framer-motion';
import { MatchesGridContainerProps } from './types';
import { MATCHES_GRID_CONFIG } from './config';

export function MatchesGridContainer({ 
    containerVariants, 
    children 
}: MatchesGridContainerProps) {
    const { grid } = MATCHES_GRID_CONFIG;
    const gridClassName = `grid ${grid.gap} ${grid.columns.tablet} ${grid.columns.desktop}`;

    return (
        <motion.div
            variants={containerVariants}
            className={gridClassName}
        >
            {children}
        </motion.div>
    );
}
