export interface HotOddData {
    id: string;
    odds: number;
    market: string;
    selection: string;
    bookmaker: string;
    isHot: boolean;
}

export interface HotOddStats {
    totalOdds: number;
    validOdds: number;
    threshold: number;
    hotOddsCount: number;
    hotPercentage: number;
    comparisonContext: {
        sportId?: string;
        bookmaker?: string;
        totalComparisionOdds: number;
    };
}

export interface HotOddMetadata {
    percentile: number;
    filters: {
        sportId?: string;
        bookmaker?: string;
    };
}

export interface HotOddCheckResponse {
    success: boolean;
    data?: {
        odd: HotOddData;
        threshold: number;
        stats: HotOddStats;
        metadata: HotOddMetadata;
    };
    error?: {
        message: string;
        details?: string;
    };
    timestamp: string;
}

export interface UseHotOddCheckOptions {
    percentile?: number;
    sportId?: string;
    bookmaker?: string;
    enabled?: boolean;
}

export interface UseHotOddCheckReturn {
    isHot: boolean;
    threshold: number;

    oddData: HotOddData | null;
    stats: HotOddStats | null;
    metadata: HotOddMetadata | null;

    isLoading: boolean;
    error: string | null;

    refetch: () => void;
}
