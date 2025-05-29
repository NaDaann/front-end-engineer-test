'use client';

export function useApiParams(params?: Record<string, string | number>) {
    if (!params) return {};

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value.toString());
    });

    return Object.fromEntries(searchParams.entries());
}

export function buildEndpointWithParams(
    endpoint: string,
    params?: Record<string, string | number>,
    method: string = 'GET',
): string {
    if (!params || method !== 'GET') {
        return endpoint;
    }

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value.toString());
    });

    const queryString = searchParams.toString();
    return queryString ? `${endpoint}?${queryString}` : endpoint;
}
