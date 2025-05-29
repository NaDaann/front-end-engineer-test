'use client';

import { useCallback, useMemo } from 'react';
import { Sport } from '@/types';
import type { UseSportsOrderOptions, UseSportsOrderReturn } from './types';
import { useSportsOrderData } from './use-sports-order-data';
import { getSortedSports, extractSportsOrder, hasCustomOrder } from './use-sports-order-utils';

export function useSportsOrder(
    initialSports: Sport[],
    options: UseSportsOrderOptions = {},
): UseSportsOrderReturn {
    const { enabled = true } = options;
    const { storedOrder, setStoredOrder } = useSportsOrderData(options);

    const reorderSports = useCallback(
        (newSports: Sport[]) => {
            if (!enabled) return;

            const newOrder = extractSportsOrder(newSports);
            setStoredOrder(newOrder);
        },
        [enabled, setStoredOrder],
    );

    const resetOrder = useCallback(() => {
        if (!enabled) return;

        setStoredOrder([]);
    }, [enabled, setStoredOrder]);

    const orderedSports = useMemo(() => {
        if (!enabled) return initialSports;

        return getSortedSports(initialSports, storedOrder);
    }, [enabled, initialSports, storedOrder]);

    const hasOrder = useMemo(() => {
        return hasCustomOrder(storedOrder);
    }, [storedOrder]);

    return {
        sports: orderedSports,
        reorderSports,
        resetOrder,
        hasCustomOrder: hasOrder,
    };
}
