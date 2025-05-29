'use client';

import { WelcomeSectionContainer } from './welcome-section-container';
import { WelcomeSectionHeader } from './welcome-section-header';
import { WelcomeSectionContent } from './welcome-section-content';
import { WelcomeSectionProps } from './types';

export function WelcomeSection({ userName, onTutorialClick, itemVariants }: WelcomeSectionProps) {
    return (
        <WelcomeSectionContainer variants={itemVariants}>
            <WelcomeSectionHeader userName={userName} />
            <WelcomeSectionContent onTutorialClick={onTutorialClick} />
        </WelcomeSectionContainer>
    );
}
