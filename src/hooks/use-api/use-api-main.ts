'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '@/lib/api/client';
import { ApiResponse } from '@/types';
import type { UseApiOptions, UseApiReturn } from './types';

export function useApi<T>(endpoint: string, options: UseApiOptions = {}): UseApiReturn<T> {
    const { autoFetch = true, enabled = true, params, method = 'GET', body } = options;
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (!enabled) return;

        setLoading(true);
        setError(null);

        try {
            let fullEndpoint = endpoint;
            if (params && method === 'GET') {
                const searchParams = new URLSearchParams();
                Object.entries(params).forEach(([key, value]) => {
                    searchParams.append(key, value.toString());
                });
                fullEndpoint = `${endpoint}?${searchParams.toString()}`;
            }

            let response: ApiResponse<T>;

            switch (method) {
                case 'GET':
                    response = await apiClient.get(fullEndpoint);
                    break;
                case 'POST':
                    response = await apiClient.post(fullEndpoint, body);
                    break;
                case 'PUT':
                    response = await apiClient.put(fullEndpoint, body);
                    break;
                case 'DELETE':
                    response = await apiClient.delete(fullEndpoint);
                    break;
                default:
                    response = await apiClient.get(fullEndpoint);
            }

            if (response.success) {
                setData(response.data);
            } else {
                setError(response.message || 'An error occurred');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }, [endpoint, enabled, method, params, body]);

    useEffect(() => {
        if (autoFetch && enabled) {
            fetchData();
        }
    }, [autoFetch, enabled, fetchData]);

    const refetch = () => {
        fetchData();
    };

    return {
        data,
        loading,
        error,
        refetch,
    };
}
