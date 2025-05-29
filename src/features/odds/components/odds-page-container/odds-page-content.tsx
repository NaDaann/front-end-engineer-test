'use client';

import { OddsStats, OddsFilters, OddsGrid, EmptyState } from '../';
import type { OddsPageContentProps } from './types';
import { useOddsPageContentClassName } from './hooks';

export function OddsPageContent({
    accumulatedOdds,
    viewMode,
    filters,
    data,
    isLoading,
    isFilterLoading,
    hasNoResults,
    onFiltersChange,
    className,
}: OddsPageContentProps) {
    const contentClassName = useOddsPageContentClassName(className);

    return (
        <div className={contentClassName}>
            <OddsStats data={data} />

            <OddsFilters
                filters={filters}
                onFiltersChange={onFiltersChange}
                data={data}
                isFilterLoading={isFilterLoading}
            />

            {hasNoResults ? (
                <EmptyState />
            ) : (
                <OddsGrid
                    odds={accumulatedOdds}
                    viewMode={viewMode}
                    isLoading={isLoading && accumulatedOdds.length === 0}
                />
            )}
        </div>
    );
}
