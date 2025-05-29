import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useRelatedOddsHeaderClassName } from './hooks';
import { RELATED_ODDS_DEFAULTS, RELATED_ODDS_HEADER_CLASSES } from './config';
import type { RelatedOddsHeaderProps } from './types';

export function RelatedOddsHeader({
    title = RELATED_ODDS_DEFAULTS.title,
    count,
    className,
}: RelatedOddsHeaderProps) {
    return (
        <div className={useRelatedOddsHeaderClassName(className)}>
            <div className={RELATED_ODDS_HEADER_CLASSES.titleGroup}>
                <h3 className={RELATED_ODDS_HEADER_CLASSES.title}>{title}</h3>
                {count !== undefined && (
                    <Badge variant="secondary" className={RELATED_ODDS_HEADER_CLASSES.badge}>
                        {count}
                    </Badge>
                )}
            </div>
        </div>
    );
}
