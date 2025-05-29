'use client';

import { useMemo, useState, useCallback } from 'react';
import type {
    UseHotOddsBFFOptions,
    UseIsHotOddBFFReturn,
    UseCustomHotOddsBFFReturn,
    HotOddsResponse,
    HotOddsData,
} from './types';
import { useHotOddsBFF } from './use-hot-odds-bff-main';

export function useIsHotOddBFF(
    oddsValue: number,
    options: Omit<UseHotOddsBFFOptions, 'enabled'> = {},
): UseIsHotOddBFFReturn {
    const { threshold, isHot, isLoading, error } = useHotOddsBFF({
        ...options,
        enabled: true,
    });

    const isHotValue = useMemo(() => {
        return isHot(oddsValue);
    }, [isHot, oddsValue]);

    return {
        isHot: isHotValue,
        threshold,
        isLoading,
        error,
    } as const;
}

export function useCustomHotOddsBFF(): UseCustomHotOddsBFFReturn {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const calculateHotOdds = useCallback(
        async (
            odds: number[] | Array<{ odds: number }>,
            percentile: number = 0.15,
        ): Promise<HotOddsData> => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('/api/hot-odds', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        odds,
                        percentile,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result: HotOddsResponse = await response.json();

                if (result.success && result.data) {
                    return result.data;
                } else {
                    throw new Error(result.error?.message || 'Failed to calculate hot odds');
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                setError(errorMessage);
                throw err;
            } finally {
                setIsLoading(false);
            }
        },
        [],
    );

    return {
        calculateHotOdds,
        isLoading,
        error,
    } as const;
}
