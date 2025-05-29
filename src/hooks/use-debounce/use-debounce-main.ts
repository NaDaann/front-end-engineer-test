'use client';

import type { UseDebounceOptions, UseDebounceReturn } from './types';
import { useDebounceValue } from './use-debounce-value';

export function useDebounce<T>(
    value: T,
    delay: number,
    options: Omit<UseDebounceOptions, 'delay'> = {},
): T {
    const debounceOptions: UseDebounceOptions = {
        delay,
        ...options,
    };

    const { debouncedValue } = useDebounceValue(value, debounceOptions);
    return debouncedValue;
}

export function useAdvancedDebounce<T>(
    value: T,
    options: UseDebounceOptions,
): UseDebounceReturn<T> {
    return useDebounceValue(value, options);
}
