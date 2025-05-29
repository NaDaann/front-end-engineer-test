'use client';

import type { OddListItemMarketInfoProps } from './types';
import { LIST_ITEM_GRID_LAYOUT } from './config';

export function OddListItemMarketInfo({ odd }: OddListItemMarketInfoProps) {
    return (
        <div className={LIST_ITEM_GRID_LAYOUT.marketInfo}>
            <p className="text-sm font-medium text-gray-900 mb-1">{odd.market}</p>
            <p className="text-sm text-gray-600 mb-1">{odd.selection}</p>
            <p className="text-xs text-gray-500">{odd.bookmaker}</p>
        </div>
    );
}
