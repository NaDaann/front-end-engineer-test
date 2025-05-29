'use client';

import { CardHeader, CardTitle } from '@/components/ui/card';
import { getUserFirstName } from '@/lib/utils';
import { WelcomeSectionHeaderProps } from './types';
import { WELCOME_SECTION_DEFAULTS, WELCOME_SECTION_STYLES } from './config';

export function WelcomeSectionHeader({ 
    userName,
    title = WELCOME_SECTION_DEFAULTS.title,
    subtitle = WELCOME_SECTION_DEFAULTS.subtitle,
}: WelcomeSectionHeaderProps) {
    const displayTitle = userName 
        ? `${title}, ${getUserFirstName(userName)}! 👋`
        : `${title}! 👋`;

    return (
        <CardHeader>
            <CardTitle className={WELCOME_SECTION_STYLES.header.title}>
                {displayTitle}
            </CardTitle>
            <p className={WELCOME_SECTION_STYLES.header.subtitle}>
                {subtitle}
            </p>
        </CardHeader>
    );
}
