export interface UseApiOptions {
    autoFetch?: boolean;
    enabled?: boolean;
    params?: Record<string, string | number>;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: unknown;
}

export interface UseApiReturn<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export interface UseApiRequestReturn<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    execute: (endpoint: string, options?: UseApiOptions) => Promise<T>;
    reset: () => void;
}

export interface UseApiRequestConfig {
    endpoint: string;
    options?: UseApiOptions;
}

export interface ApiError {
    message: string;
    status?: number;
    code?: string;
}
