'use client';

import type { UseLocalStorageOptions, UseLocalStorageReturn } from './types';
import { useLocalStorageData } from './use-local-storage-data';
import { setStorageValue, removeStorageValue, clearAllStorage } from './use-local-storage-utils';

export function useLocalStorage<T>(
    key: string,
    initialValue: T,
    options: UseLocalStorageOptions = {},
): UseLocalStorageReturn<T> {
    const { storedValue, setStoredValue, hasValue, setHasValue, rawValue, setRawValue } =
        useLocalStorageData(key, initialValue, options);

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            const success = setStorageValue(key, valueToStore, options);

            if (success) {
                setStoredValue(valueToStore);
                setHasValue(true);
                setRawValue(JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error('Failed to set localStorage value:', error);
        }
    };

    const removeValue = () => {
        const success = removeStorageValue(key);

        if (success) {
            setStoredValue(initialValue);
            setHasValue(false);
            setRawValue(null);
        }
    };

    const clearAll = () => {
        clearAllStorage();
        setStoredValue(initialValue);
        setHasValue(false);
        setRawValue(null);
    };

    return {
        value: storedValue,
        setValue,
        removeValue,
        hasValue,
        rawValue,
        clearAll,
    };
}
