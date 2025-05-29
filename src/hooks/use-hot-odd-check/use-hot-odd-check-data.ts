'use client';

import { useApi } from '../use-api';
import type { HotOddCheckResponse, UseHotOddCheckOptions } from './types';
import { useHotOddCheckQueryParams } from './use-hot-odd-check-query-params';

export function useHotOddCheckData(oddId: string, options: UseHotOddCheckOptions = {}) {
    const { enabled = true } = options;
    const params = useHotOddCheckQueryParams(options);

    return useApi<HotOddCheckResponse['data']>(`/hot-odds/${oddId}`, {
        enabled: enabled && !!oddId,
        params,
    });
}
