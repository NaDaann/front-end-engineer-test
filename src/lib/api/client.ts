import { ApiResponse, PaginatedResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = API_BASE_URL) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
        const url = `${this.baseUrl}${endpoint}`;

        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'GET' });
    }

    async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { method: 'DELETE' });
    }

    async getPaginated<T>(
        endpoint: string,
        params?: Record<string, string | number>,
    ): Promise<PaginatedResponse<T>> {
        const searchParams = new URLSearchParams();

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                searchParams.append(key, value.toString());
            });
        }

        const url = searchParams.toString() ? `${endpoint}?${searchParams.toString()}` : endpoint;

        return this.request<T[]>(url) as Promise<PaginatedResponse<T>>;
    }
}

export const apiClient = new ApiClient();
