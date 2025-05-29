'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { UseDebounceOptions, UseDebounceReturn } from './types';
import { createDebouncedFunction } from './use-debounce-utils';

export function useDebounceValue<T>(value: T, options: UseDebounceOptions): UseDebounceReturn<T> {
    const { delay, immediate = false, maxWait, leading = false, trailing = true } = options;

    const [debouncedValue, setDebouncedValue] = useState<T>(immediate ? value : value);
    const [isPending, setIsPending] = useState(false);

    const valueRef = useRef(value);
    const debouncedFunctionRef = useRef<ReturnType<typeof createDebouncedFunction> | null>(null);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    useEffect(() => {
        const updateValue = () => {
            setDebouncedValue(valueRef.current);
            setIsPending(false);
        };

        debouncedFunctionRef.current = createDebouncedFunction(updateValue, {
            delay,
            immediate,
            maxWait,
            leading,
            trailing,
        });

        return () => {
            debouncedFunctionRef.current?.cancel();
        };
    }, [delay, immediate, maxWait, leading, trailing]);

    useEffect(() => {
        if (debouncedFunctionRef.current) {
            setIsPending(true);
            debouncedFunctionRef.current();
        }
    }, [value]);

    const cancel = useCallback(() => {
        if (debouncedFunctionRef.current) {
            debouncedFunctionRef.current.cancel();
            setIsPending(false);
        }
    }, []);

    const flush = useCallback(() => {
        if (debouncedFunctionRef.current) {
            debouncedFunctionRef.current.flush();
            setDebouncedValue(valueRef.current);
            setIsPending(false);
        }
    }, []);

    const reset = useCallback(() => {
        cancel();
        setDebouncedValue(valueRef.current);
        setIsPending(false);
    }, [cancel]);

    return {
        debouncedValue,
        isPending,
        cancel,
        flush,
        reset,
    };
}
