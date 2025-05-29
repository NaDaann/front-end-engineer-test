'use client';

import type { UseLocalStorageOptions, LocalStorageError } from './types';

export function isLocalStorageAvailable(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }

    try {
        const testKey = '__localStorage_test__';
        window.localStorage.setItem(testKey, 'test');
        window.localStorage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
}

export function defaultSerializer(value: unknown): string {
    return JSON.stringify(value);
}

export function defaultDeserializer(value: string): unknown {
    return JSON.parse(value);
}

export function getStorageValue<T>(
    key: string,
    initialValue: T,
    options: UseLocalStorageOptions = {},
): T {
    const { deserializer = defaultDeserializer, errorHandling = 'fallback-to-initial' } = options;

    if (!isLocalStorageAvailable()) {
        return initialValue;
    }

    try {
        const item = window.localStorage.getItem(key);
        if (item === null) {
            return initialValue;
        }
        return deserializer(item) as T;
    } catch (error) {
        const localStorageError: LocalStorageError = {
            type: 'deserialization-error',
            message: `Failed to deserialize value for key "${key}"`,
            originalError: error instanceof Error ? error : new Error(String(error)),
        };

        switch (errorHandling) {
            case 'throw':
                throw localStorageError;
            case 'return-null':
                return null as T;
            case 'fallback-to-initial':
            default:
                return initialValue;
        }
    }
}

export function setStorageValue<T>(
    key: string,
    value: T,
    options: UseLocalStorageOptions = {},
): boolean {
    const { serializer = defaultSerializer, errorHandling = 'fallback-to-initial' } = options;

    if (!isLocalStorageAvailable()) {
        return false;
    }

    try {
        const serializedValue = serializer(value);
        window.localStorage.setItem(key, serializedValue);
        return true;
    } catch (error) {
        const errorName = error instanceof Error ? error.name : 'Unknown';
        const localStorageError: LocalStorageError = {
            type: errorName === 'QuotaExceededError' ? 'quota-exceeded' : 'serialization-error',
            message: `Failed to serialize and store value for key "${key}"`,
            originalError: error instanceof Error ? error : new Error(String(error)),
        };

        if (errorHandling === 'throw') {
            throw localStorageError;
        }

        return false;
    }
}

export function removeStorageValue(key: string): boolean {
    if (!isLocalStorageAvailable()) {
        return false;
    }

    try {
        window.localStorage.removeItem(key);
        return true;
    } catch {
        return false;
    }
}

export function hasStorageValue(key: string): boolean {
    if (!isLocalStorageAvailable()) {
        return false;
    }

    return window.localStorage.getItem(key) !== null;
}

export function getRawStorageValue(key: string): string | null {
    if (!isLocalStorageAvailable()) {
        return null;
    }

    return window.localStorage.getItem(key);
}

export function clearAllStorage(): boolean {
    if (!isLocalStorageAvailable()) {
        return false;
    }

    try {
        window.localStorage.clear();
        return true;
    } catch {
        return false;
    }
}
