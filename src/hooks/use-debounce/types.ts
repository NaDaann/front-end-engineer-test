export interface UseDebounceOptions {
    delay: number;

    immediate?: boolean;

    maxWait?: number;

    leading?: boolean;

    trailing?: boolean;
}

export interface UseDebounceReturn<T> {
    debouncedValue: T;

    isPending: boolean;

    cancel: () => void;

    flush: () => void;

    reset: () => void;
}

export interface DebounceFunctionOptions {
    delay: number;
    immediate?: boolean;
    maxWait?: number;
    leading?: boolean;
    trailing?: boolean;
}

export interface DebouncedFunction<T extends (...args: unknown[]) => unknown> {
    (...args: Parameters<T>): void;
    cancel: () => void;
    flush: () => void;
    isPending: () => boolean;
}
