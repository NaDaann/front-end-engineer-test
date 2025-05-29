import React from 'react';
import { RelatedOddsLayout } from './related-odds-layout';
import { RelatedOddsHeader } from './related-odds-header';
import { RelatedOddsContent } from './related-odds-content';
import { RelatedOddsFooter } from './related-odds-footer';
import { RelatedOddsError } from './related-odds-error';
import { RelatedOddsEmpty } from './related-odds-empty';
import { useRelatedOddsData } from './hooks';
import { RELATED_ODDS_DEFAULTS } from './config';
import type { RelatedOddsDisplayProps } from './types';

export function RelatedOddsDisplay({
    oddId,
    maxItems = RELATED_ODDS_DEFAULTS.maxItems,
    className,
}: RelatedOddsDisplayProps) {
    const { data, loading, error, refetch } = useRelatedOddsData({ oddId, maxItems });

    if (error) {
        return <RelatedOddsError error={error} onRetry={refetch} className={className} />;
    }

    if (!data || data.relatedOdds.length === 0) {
        return <RelatedOddsEmpty className={className} />;
    }

    const { relatedOdds } = data;

    return (
        <RelatedOddsLayout className={className}>
            <RelatedOddsHeader count={relatedOdds.length} />

            <RelatedOddsContent relatedOdds={relatedOdds} maxItems={maxItems} loading={loading} />

            <RelatedOddsFooter totalCount={relatedOdds.length} onRefresh={refetch} />
        </RelatedOddsLayout>
    );
}
