'use client';

import type { UseHotOddCheckOptions, UseHotOddCheckReturn } from './types';
import { useHotOddCheckData } from './use-hot-odd-check-data';

export function useHotOddCheck(
    oddId: string,
    options: UseHotOddCheckOptions = {},
): UseHotOddCheckReturn {
    const { data, loading: isLoading, error, refetch } = useHotOddCheckData(oddId, options);

    return {
        isHot: data?.odd.isHot ?? false,
        threshold: data?.threshold ?? 2.0,

        oddData: data?.odd ?? null,
        stats: data?.stats ?? null,
        metadata: data?.metadata ?? null,

        isLoading,
        error,

        refetch,
    } as const;
}
