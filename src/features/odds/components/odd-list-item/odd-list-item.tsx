'use client';

import type { OddListItemProps } from './types';
import { ODD_LIST_ITEM_DEFAULTS, LIST_ITEM_GRID_LAYOUT } from './config';
import { OddListItemContainer } from './odd-list-item-container';
import { OddListItemMainInfo } from './odd-list-item-main-info';
import { OddListItemMarketInfo } from './odd-list-item-market-info';
import { OddListItemOddsDisplay } from './odd-list-item-odds-display';
import { OddListItemHotBadge } from './odd-list-item-hot-badge';
import { OddListItemShimmer } from './odd-list-item-shimmer';

export function OddListItem({
    odd,
    isHot = ODD_LIST_ITEM_DEFAULTS.isHot,
    className = ODD_LIST_ITEM_DEFAULTS.className,
}: OddListItemProps) {
    return (
        <OddListItemContainer isHot={isHot} href={`/odds/${odd.id}`} className={className}>
            {isHot && <OddListItemHotBadge />}

            <OddListItemShimmer />

            <div className="relative z-10 flex items-center justify-between">
                <div className={LIST_ITEM_GRID_LAYOUT.container}>
                    <OddListItemMainInfo odd={odd} />
                    <OddListItemMarketInfo odd={odd} />
                    <OddListItemOddsDisplay odd={odd} isHot={isHot} />
                </div>
            </div>
        </OddListItemContainer>
    );
}
