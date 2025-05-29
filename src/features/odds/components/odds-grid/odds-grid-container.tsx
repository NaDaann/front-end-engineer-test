'use client';

import { motion } from 'framer-motion';
import type { OddsGridContainerProps } from './types';
import { useOddsGridLayoutClassName, useOddsGridAnimationVariants } from './hooks';

export function OddsGridContainer({ viewMode, children, className }: OddsGridContainerProps) {
    const layoutClassName = useOddsGridLayoutClassName(viewMode, className);
    const { container: containerVariants } = useOddsGridAnimationVariants();

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={layoutClassName}
        >
            {children}
        </motion.div>
    );
}
