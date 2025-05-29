import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useRelatedOddsMoreIndicatorClassName } from './hooks';
import { RELATED_ODDS_MORE_INDICATOR_CLASSES } from './config';
import type { RelatedOddsMoreIndicatorProps } from './types';

export function RelatedOddsMoreIndicator({
    additionalCount,
    className,
}: RelatedOddsMoreIndicatorProps) {
    const classes = useRelatedOddsMoreIndicatorClassName(className);

    if (additionalCount <= 0) return null;

    return (
        <div className={classes}>
            <Badge variant="secondary" className={RELATED_ODDS_MORE_INDICATOR_CLASSES.badge}>
                +{additionalCount} odds adicionais
            </Badge>
        </div>
    );
}
