import type { OddWithMatch } from '@/hooks/use-odds';

export type OddCardVariant = 'default' | 'hot';

export interface OddCardProps {
    odd: OddWithMatch;
    isHot?: boolean;
    className?: string;
}

export interface OddCardContainerProps {
    isHot: boolean;
    children: React.ReactNode;
    href: string;
    className?: string;
}

export interface OddCardHeaderProps {
    odd: OddWithMatch;
    isHot: boolean;
}

export interface OddCardContentProps {
    odd: OddWithMatch;
    isHot: boolean;
}

export interface OddCardFooterProps {
    odd: OddWithMatch;
}

export interface OddCardBadgeProps {
    odd: OddWithMatch;
}

export interface HotBadgeProps {
    className?: string;
}

export interface StatusConfig {
    color: string;
    text: string;
    pulse?: boolean;
}
