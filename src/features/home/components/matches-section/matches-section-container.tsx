'use client';

import { motion } from 'framer-motion';
import { MatchesSectionContainerProps } from './types';
import { MATCHES_SECTION_STYLES } from './config';

export function MatchesSectionContainer({ children, variants }: MatchesSectionContainerProps) {
    return (
        <motion.div variants={variants} className={MATCHES_SECTION_STYLES.container}>
            {children}
        </motion.div>
    );
}
