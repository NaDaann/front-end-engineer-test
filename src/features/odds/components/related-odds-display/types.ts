import type { OddWithMatch } from '@/hooks/use-odds';

export interface RelatedOddsDisplayProps {
    oddId: string;
    maxItems?: number;
    className?: string;
}

export interface RelatedOddsLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export interface RelatedOddsHeaderProps {
    title?: string;
    count?: number;
    className?: string;
}

export interface RelatedOddsContentProps {
    relatedOdds: RelatedOddData[];
    maxItems: number;
    loading?: boolean;
    className?: string;
}

export interface RelatedOddsFooterProps {
    totalCount: number;
    onRefresh?: () => void;
    className?: string;
}

export interface RelatedOddsLoadingProps {
    maxItems?: number;
    className?: string;
}

export interface RelatedOddsErrorProps {
    error: string;
    onRetry?: () => void;
    className?: string;
}

export interface RelatedOddsEmptyProps {
    className?: string;
}

export interface RelatedOddData {
    odd: OddWithMatch;
}

export interface RelatedOddCardProps {
    relatedOdd: RelatedOddData;
    className?: string;
}

export interface RelatedOddsGridProps {
    relatedOdds: RelatedOddData[];
    maxItems: number;
    className?: string;
}

export interface RelatedOddsMoreIndicatorProps {
    additionalCount: number;
    className?: string;
}
