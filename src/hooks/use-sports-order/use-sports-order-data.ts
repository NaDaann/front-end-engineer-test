'use client';

import { useLocalStorage } from '../use-local-storage';
import type { SportsOrderData, UseSportsOrderOptions } from './types';

const DEFAULT_STORAGE_KEY = 'sports-order';

export function useSportsOrderData(options: UseSportsOrderOptions = {}): SportsOrderData {
    const { storageKey = DEFAULT_STORAGE_KEY } = options;

    const { value: storedOrder, setValue: setStoredOrder } = useLocalStorage<string[]>(
        storageKey,
        [],
    );

    return {
        storedOrder,
        setStoredOrder,
    };
}
