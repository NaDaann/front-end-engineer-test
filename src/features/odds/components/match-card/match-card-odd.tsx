'use client';

import Link from 'next/link';
import { formatOdds } from '@/lib/utils';
import { MatchCardHotEffects } from './match-card-hot-effects';
import { CARD_VARIANTS } from './config';
import { MatchCardOddProps } from './types';
import { useHotOddCheck } from '@/hooks/use-hot-odd-check';

export function MatchCardOdd({ odd }: MatchCardOddProps) {
    const { isHot } = useHotOddCheck(odd.id);
    const variant = isHot ? CARD_VARIANTS.hot : CARD_VARIANTS.normal;

    return (
        <Link key={odd.id} href={`/odds/${odd.id}`} className="block">
            <div
                className={`relative p-3 border rounded-lg transition-all duration-200 group/odd ${variant.oddContainer}`}
            >
                <MatchCardHotEffects isHot={isHot} />
                <div className="text-xs text-muted-foreground mb-1">{odd.selection}</div>
                <div
                    className={`font-bold text-lg transition-colors duration-200 ${variant.oddText}`}
                >
                    {formatOdds(odd.odds)}
                </div>
                <div className="text-xs text-muted-foreground">{odd.bookmaker}</div>
            </div>
        </Link>
    );
}
