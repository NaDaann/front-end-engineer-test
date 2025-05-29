'use client';

import { useApi } from '../use-api';
import type { RelatedOddsResponse, RelatedOddsFilters, UseRelatedOddsOptions } from './types';
import { useRelatedOddsQueryParams } from './use-related-odds-query-params';

export function useRelatedOddsData(
    oddId: string | null,
    filters?: RelatedOddsFilters,
    options: UseRelatedOddsOptions = {},
) {
    const { enabled = true } = options;
    const params = useRelatedOddsQueryParams(filters);
    
    const isEnabled = enabled && !!oddId;

    return useApi<RelatedOddsResponse>(`/odds/${oddId}/related`, {
        enabled: isEnabled,
        params,
    });
}
