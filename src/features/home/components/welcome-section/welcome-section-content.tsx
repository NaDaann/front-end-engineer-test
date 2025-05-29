'use client';

import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import { WelcomeSectionContentProps } from './types';
import { WELCOME_SECTION_DEFAULTS, WELCOME_SECTION_STYLES } from './config';

export function WelcomeSectionContent({ 
    onTutorialClick,
    buttonText = WELCOME_SECTION_DEFAULTS.buttonText,
    showTutorialButton = WELCOME_SECTION_DEFAULTS.showTutorialButton,
}: WelcomeSectionContentProps) {
    if (!showTutorialButton) {
        return null;
    }

    return (
        <CardContent className={WELCOME_SECTION_STYLES.content.wrapper}>
            <Button
                variant="secondary"
                onClick={onTutorialClick}
                className={WELCOME_SECTION_STYLES.content.button}
            >
                <HelpCircle className={WELCOME_SECTION_STYLES.content.icon} />
                <span>{buttonText}</span>
            </Button>
        </CardContent>
    );
}
