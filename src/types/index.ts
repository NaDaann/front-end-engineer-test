// Global types for the sports betting platform
export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    favoriteCategories?: string[];
}

export interface Sport {
    id: string;
    name: string;
    slug: string;
    icon?: string;
    isActive: boolean;
}

export interface Match {
    id: string;
    sportId: string;
    homeTeam: string;
    awayTeam: string;
    startTime: Date;
    status: 'upcoming' | 'live' | 'finished';
    odds: Odd[];
}

export interface Odd {
    id: string;
    matchId: string;
    bookmaker: string;
    market: string;
    selection: string;
    odds: number;
    isActive: boolean;
    lastUpdated: Date;
}

export interface Category {
    id: string;
    name: string;
    sportIds: string[];
    isFavorite: boolean;
    order: number;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
