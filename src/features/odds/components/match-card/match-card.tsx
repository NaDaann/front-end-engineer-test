'use client';

import { MatchCardProps } from './types';
import { MatchCardContainer } from './match-card-container';
import { MatchCardHeader } from './match-card-header';
import { MatchCardMeta } from './match-card-meta';
import { MatchCardOdds } from './match-card-odds';

export function MatchCard({ match }: MatchCardProps) {
    return (
        <MatchCardContainer>
            <div className="z-10">
                <MatchCardHeader match={match} />
                <MatchCardMeta match={match} />
                <MatchCardOdds odds={match.odds} />
            </div>
        </MatchCardContainer>
    );
}
