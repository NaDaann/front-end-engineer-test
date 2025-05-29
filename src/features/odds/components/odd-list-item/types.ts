import type { OddWithMatch } from '@/hooks/use-odds';

export type OddListItemVariant = 'default' | 'hot';

export interface OddListItemProps {
    odd: OddWithMatch;
    isHot?: boolean;
    className?: string;
}

export interface OddListItemContainerProps {
    isHot: boolean;
    children: React.ReactNode;
    href: string;
    className?: string;
}

export interface OddListItemMainInfoProps {
    odd: OddWithMatch;
}

export interface OddListItemMarketInfoProps {
    odd: OddWithMatch;
}

export interface OddListItemOddsDisplayProps {
    odd: OddWithMatch;
    isHot: boolean;
}

export interface OddListItemHotBadgeProps {
    className?: string;
}

export interface StatusConfig {
    color: string;
    text: string;
    pulse?: boolean;
}
