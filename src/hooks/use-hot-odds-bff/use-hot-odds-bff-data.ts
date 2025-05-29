'use client';

import { useApi } from '../use-api';
import type { HotOddsResponse, UseHotOddsBFFOptions } from './types';
import { useHotOddsBFFQueryParams } from './use-hot-odds-bff-query-params';

export function useHotOddsBFFData(options: UseHotOddsBFFOptions = {}) {
    const { enabled = true } = options;
    const params = useHotOddsBFFQueryParams(options);

    return useApi<HotOddsResponse['data']>('/hot-odds', {
        enabled,
        params,
    });
}
