import React from 'react';
import { RelatedOddCard } from './related-odd-card';
import { useRelatedOddsContentClassName } from './hooks';
import type { RelatedOddsGridProps } from './types';

export function RelatedOddsGrid({ relatedOdds, maxItems, className }: RelatedOddsGridProps) {
    return (
        <div className={useRelatedOddsContentClassName(className)}>
            {relatedOdds.slice(0, maxItems).map((relatedOdd, index) => (
                <RelatedOddCard key={relatedOdd.odd.id || index} relatedOdd={relatedOdd} />
            ))}
        </div>
    );
}
