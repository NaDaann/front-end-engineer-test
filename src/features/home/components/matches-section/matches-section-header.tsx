'use client';

import { TrendingUp } from 'lucide-react';
import { MatchesSectionHeaderProps } from './types';
import { MATCHES_SECTION_DEFAULTS, MATCHES_SECTION_STYLES } from './config';

export function MatchesSectionHeader({ 
    title = MATCHES_SECTION_DEFAULTS.title,
    showStatus = MATCHES_SECTION_DEFAULTS.showStatus,
    statusText = MATCHES_SECTION_DEFAULTS.statusText,
}: MatchesSectionHeaderProps) {
    return (
        <div className={MATCHES_SECTION_STYLES.header.wrapper}>
            <h2 className={MATCHES_SECTION_STYLES.header.title}>{title}</h2>
            {showStatus && (
                <div className={MATCHES_SECTION_STYLES.header.status.wrapper}>
                    <TrendingUp className={MATCHES_SECTION_STYLES.header.status.icon} />
                    <span className={MATCHES_SECTION_STYLES.header.status.text}>
                        {statusText}
                    </span>
                </div>
            )}
        </div>
    );
}
