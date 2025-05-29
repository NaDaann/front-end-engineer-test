export interface HotOdd {
    id: string;
    odds: number;
    market: string;
    selection: string;
    bookmaker: string;
    match: {
        homeTeam: string;
        awayTeam: string;
        sportId: string;
    };
}

export interface HotOddsStats {
    totalOdds: number;
    hotOddsCount: number;
    threshold: number;
    hotPercentage: number;
    filters: {
        sportId?: string;
        bookmaker?: string;
        percentile: number;
    };
}

export interface HotOddsData {
    threshold: number;
    hotOdds: HotOdd[];
    stats: HotOddsStats;
}

export interface HotOddsResponse {
    success: boolean;
    data?: HotOddsData;
    error?: {
        message: string;
        details?: string;
    };
    timestamp: string;
}

export interface UseHotOddsBFFOptions {
    percentile?: number;
    sportId?: string;
    bookmaker?: string;
    enabled?: boolean;
    refetchInterval?: number;
}

export interface UseHotOddsBFFReturn {
    hotOdds: HotOdd[];
    threshold: number;
    stats: HotOddsStats;

    isLoading: boolean;
    error: string | null;
    lastFetch: Date | null;

    isHot: (oddsValue: number) => boolean;
    isHotOddById: (oddId: string) => boolean;
    getHotOddsIds: Set<string>;

    refetch: () => Promise<void>;

    config: {
        percentile: number;
        sportId?: string;
        bookmaker?: string;
        enabled: boolean;
    };
}

export interface UseIsHotOddBFFReturn {
    isHot: boolean;
    threshold: number;
    isLoading: boolean;
    error: string | null;
}

export interface UseCustomHotOddsBFFReturn {
    calculateHotOdds: (
        odds: number[] | Array<{ odds: number }>,
        percentile?: number,
    ) => Promise<HotOddsData>;
    isLoading: boolean;
    error: string | null;
}
