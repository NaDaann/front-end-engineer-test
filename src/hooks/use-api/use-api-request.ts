'use client';

import { useState, useCallback } from 'react';
import { apiClient } from '@/lib/api/client';
import { ApiResponse } from '@/types';
import type { UseApiOptions } from './types';
import { buildEndpointWithParams } from './use-api-params';

export function useApiRequest<T>() {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = useCallback(async (endpoint: string, options: UseApiOptions = {}) => {
        const { enabled = true, params, method = 'GET', body } = options;

        if (!enabled) return;

        setLoading(true);
        setError(null);

        try {
            const fullEndpoint = buildEndpointWithParams(endpoint, params, method);
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
                return response.data;
            } else {
                const errorMessage = response.message || 'An error occurred';
                setError(errorMessage);
                throw new Error(errorMessage);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setLoading(false);
    }, []);

    return {
        data,
        loading,
        error,
        execute,
        reset,
    };
}
