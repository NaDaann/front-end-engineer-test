'use client';

import { useState, useEffect } from 'react';
import type { UseLocalStorageOptions } from './types';
import {
    getStorageValue,
    hasStorageValue,
    getRawStorageValue,
    isLocalStorageAvailable,
} from './use-local-storage-utils';

export function useLocalStorageData<T>(
    key: string,
    initialValue: T,
    options: UseLocalStorageOptions = {},
) {
    const { syncAcrossTabs = false } = options;

    const [storedValue, setStoredValue] = useState<T>(() => {
        return getStorageValue(key, initialValue, options);
    });

    const [hasValue, setHasValue] = useState<boolean>(() => {
        return hasStorageValue(key);
    });

    const [rawValue, setRawValue] = useState<string | null>(() => {
        return getRawStorageValue(key);
    });

    useEffect(() => {
        if (!syncAcrossTabs || !isLocalStorageAvailable()) {
            return;
        }

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key && e.storageArea === window.localStorage) {
                if (e.newValue === null) {
                    setStoredValue(initialValue);
                    setHasValue(false);
                    setRawValue(null);
                } else {
                    const newValue = getStorageValue(key, initialValue, options);
                    setStoredValue(newValue);
                    setHasValue(true);
                    setRawValue(e.newValue);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key, initialValue, syncAcrossTabs, options]);

    return {
        storedValue,
        setStoredValue,
        hasValue,
        setHasValue,
        rawValue,
        setRawValue,
    };
}
