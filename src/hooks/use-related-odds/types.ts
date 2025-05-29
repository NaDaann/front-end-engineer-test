import { OddWithDetails } from '@/lib/mocks/odds';

export interface RelatedOddsFilters {
    sameMatch?: boolean;
    sameMarket?: boolean;
    sameBookmaker?: boolean;
    sameSport?: boolean;
    sameLeague?: boolean;
    excludeOriginal?: boolean;
    limit?: number;
}

export interface RelatedOdd {
    odd: OddWithDetails;
    relationshipType: string[];
    relevanceScore: number;
}

export interface RelatedOddsStats {
    totalFound: number;
    byRelationType: Record<string, number>;
}

export interface RelatedOddsResponse {
    targetOdd: OddWithDetails;
    relatedOdds: RelatedOdd[];
    criteria: RelatedOddsFilters;
    stats: RelatedOddsStats;
}

export interface UseRelatedOddsOptions {
    enabled?: boolean;
    refetchOnMount?: boolean;
}

export interface UseRelatedOddsResult {
    targetOdd: OddWithDetails | null;
    relatedOdds: RelatedOdd[];
    criteria: RelatedOddsFilters | null;
    stats: RelatedOddsStats | null;

    data: RelatedOddsResponse | null;

    loading: boolean;
    error: string | null;

    refetch: () => void;
}
