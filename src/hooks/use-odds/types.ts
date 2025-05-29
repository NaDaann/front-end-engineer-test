export interface OddWithMatch {
    id: string;
    matchId: string;
    bookmaker: string;
    market: string;
    selection: string;
    odds: number;
    isActive: boolean;
    lastUpdated: Date;
    match: {
        id: string;
        sportId: string;
        homeTeam: string;
        awayTeam: string;
        startTime: Date;
        status: 'upcoming' | 'live' | 'finished';
    };
    sport: {
        name: string;
        slug: string;
    };
}

export interface OddsStats {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasMore: boolean;
    activeOdds: number;
    totalBookmakers: number;
    sportBreakdown: Array<{
        sport: string;
        count: number;
    }>;
}

export interface OddsData {
    odds: OddWithMatch[];
    stats: OddsStats;
    sports: Array<{
        id: string;
        name: string;
        slug: string;
        isActive: boolean;
    }>;
    bookmakers: string[];
}

export interface UseOddsFilters {
    search?: string;
    sportId?: string;
    bookmaker?: string;
    status?: string;
    sortField?: 'odds' | 'lastUpdated' | 'match' | 'bookmaker';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    limit?: number;
}

export interface UseOddsOptions {
    enabled?: boolean;
}

export interface UseOddsReturn {
    odds: OddWithMatch[];
    stats: OddsStats | null;
    sports: Array<{
        id: string;
        name: string;
        slug: string;
        isActive: boolean;
    }>;
    bookmakers: string[];
    data: OddsData | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}
