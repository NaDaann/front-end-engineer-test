import { formatOdds } from '@/lib/utils';
import { useOddCardOddsClassName } from './hooks';
import type { OddCardContentProps } from './types';

export function OddCardContent({ odd, isHot }: OddCardContentProps) {
    const oddsClassName = useOddCardOddsClassName(isHot);

    return (
        <div className="text-right">
            <div className={oddsClassName}>{formatOdds(odd.odds)}</div>
            <div className="text-xs text-gray-500">{odd.bookmaker}</div>
        </div>
    );
}
