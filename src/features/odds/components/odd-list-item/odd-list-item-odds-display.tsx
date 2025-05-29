'use client';

import { formatDate, formatOdds } from '@/lib/utils';
import type { OddListItemOddsDisplayProps } from './types';
import { useOddListItemOddsClassName } from './hooks';
import { LIST_ITEM_GRID_LAYOUT } from './config';

export function OddListItemOddsDisplay({ odd, isHot }: OddListItemOddsDisplayProps) {
    const oddsClassName = useOddListItemOddsClassName(isHot);

    return (
        <div className={LIST_ITEM_GRID_LAYOUT.oddsDisplay}>
            <div className={oddsClassName}>{formatOdds(odd.odds)}</div>
            <p className="text-xs text-gray-500">Atualizado: {formatDate(odd.lastUpdated)}</p>
        </div>
    );
}
