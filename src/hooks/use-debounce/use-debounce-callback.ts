'use client';

import { useCallback, useRef } from 'react';
import type { DebounceFunctionOptions } from './types';
import { createDebouncedFunction } from './use-debounce-utils';

export function useDebounceCallback<T extends (...args: unknown[]) => unknown>(
    callback: T,
    options: DebounceFunctionOptions,
) {
    const callbackRef = useRef(callback);
    const debouncedRef = useRef<ReturnType<typeof createDebouncedFunction<T>> | null>(null);

    callbackRef.current = callback;

    const getDebouncedFunction = useCallback(() => {
        if (!debouncedRef.current) {
            const wrappedCallback = ((...args: Parameters<T>) => {
                return callbackRef.current(...args);
            }) as T;

            debouncedRef.current = createDebouncedFunction(wrappedCallback, options);
        }
        return debouncedRef.current;
    }, [options]);

    const debouncedCallback = useCallback(
        (...args: Parameters<T>) => {
            const debouncedFn = getDebouncedFunction();
            return debouncedFn(...args);
        },
        [getDebouncedFunction],
    );

    const cancel = useCallback(() => {
        debouncedRef.current?.cancel();
    }, []);

    const flush = useCallback(() => {
        if (debouncedRef.current) {
            return callbackRef.current();
        }
        return undefined;
    }, []);

    const isPending = useCallback(() => {
        return debouncedRef.current?.isPending() ?? false;
    }, []);

    return {
        debouncedCallback,
        cancel,
        flush,
        isPending,
    };
}
