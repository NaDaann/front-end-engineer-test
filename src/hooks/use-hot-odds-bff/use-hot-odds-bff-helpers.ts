import { useMemo, useCallback } from 'react';
import type { HotOddsData } from './types';

export function useHotOddsBFFHelpers(data: HotOddsData | null | undefined) {
    const isHot = useCallback(
        (oddsValue: number): boolean => {
            if (!data) return false;
            return oddsValue >= data.threshold;
        },
        [data],
    );

    const getHotOddsIds = useMemo(() => {
        if (!data) return new Set<string>();
        return new Set(data.hotOdds.map((odd) => odd.id));
    }, [data]);

    const isHotOddById = useCallback(
        (oddId: string): boolean => {
            return getHotOddsIds.has(oddId);
        },
        [getHotOddsIds],
    );

    return {
        isHot,
        getHotOddsIds,
        isHotOddById,
    };
}
