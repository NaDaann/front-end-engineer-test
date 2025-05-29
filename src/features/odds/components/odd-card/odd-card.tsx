'use client';

import { ODD_CARD_DEFAULTS, HOT_CARD_STYLES } from './config';
import { OddCardContainer } from './odd-card-container';
import { OddCardHeader } from './odd-card-header';
import { OddCardContent } from './odd-card-content';
import { OddCardFooter } from './odd-card-footer';
import { OddCardShimmer } from './odd-card-shimmer';
import { HotBadge } from './hot-badge';
import type { OddCardProps } from './types';

export function OddCard({
    odd,
    isHot = ODD_CARD_DEFAULTS.isHot,
    className = ODD_CARD_DEFAULTS.className,
}: OddCardProps) {
    return (
        <OddCardContainer isHot={isHot} href={`/odds/${odd.id}`} className={className}>
            {isHot && <HotBadge className={HOT_CARD_STYLES.hotBadge} />}

            <OddCardShimmer />

            <div className="relative z-10 flex justify-between items-start mb-3">
                <OddCardHeader odd={odd} isHot={isHot} />
                <OddCardContent odd={odd} isHot={isHot} />
            </div>

            <OddCardFooter odd={odd} />
        </OddCardContainer>
    );
}
