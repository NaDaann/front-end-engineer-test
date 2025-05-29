'use client';

import { useApi } from '../use-api';
import type { OddsData, UseOddsFilters, UseOddsOptions } from './types';
import { useOddsQueryParams } from './use-odds-query-params';

export function useOddsData(filters: UseOddsFilters = {}, options: UseOddsOptions = {}) {
    const { enabled = true } = options;
    const params = useOddsQueryParams(filters);

    return useApi<OddsData>('/odds/all', {
        enabled,
        params,
    });
}
