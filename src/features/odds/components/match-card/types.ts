import { Match, Odd } from '@/types';

export interface MatchCardProps {
    match: Match;
}

export interface MatchCardHeaderProps {
    match: Match;
}

export interface MatchCardMetaProps {
    match: Match;
}

export interface MatchCardOddsProps {
    odds: Odd[];
}

export interface MatchCardOddProps {
    odd: Odd;
}

export interface MatchCardContainerProps {
    children: React.ReactNode;
}

export interface MatchCardHotEffectsProps {
    isHot: boolean;
}

export interface StatusConfig {
    color: string;
    text: string;
    pulse?: boolean;
}
