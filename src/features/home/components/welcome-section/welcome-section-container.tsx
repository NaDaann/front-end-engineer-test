'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { WelcomeSectionContainerProps } from './types';
import { WELCOME_SECTION_STYLES } from './config';

export function WelcomeSectionContainer({ children, variants }: WelcomeSectionContainerProps) {
    return (
        <motion.div variants={variants}>
            <Card className={WELCOME_SECTION_STYLES.container}>
                {children}
            </Card>
        </motion.div>
    );
}
