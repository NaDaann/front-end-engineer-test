'use client';

import { LIST_ITEM_HOT_STYLES } from './config';

export function OddListItemShimmer() {
    return <div className={LIST_ITEM_HOT_STYLES.shimmer}></div>;
}
