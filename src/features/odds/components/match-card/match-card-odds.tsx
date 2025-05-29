'use client';

import { MatchCardOddsProps } from './types';
import { MatchCardOdd } from './match-card-odd';

export function MatchCardOdds({ odds }: MatchCardOddsProps) {
    return (
        <div className="grid grid-cols-3 gap-2">
            {odds.map((odd) => (
                <MatchCardOdd key={odd.id} odd={odd} />
            ))}
        </div>
    );
}
