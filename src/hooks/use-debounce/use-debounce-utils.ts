import type { DebounceFunctionOptions, DebouncedFunction } from './types';

export function createDebouncedFunction<T extends (...args: unknown[]) => unknown>(
    func: T,
    options: DebounceFunctionOptions,
): DebouncedFunction<T> {
    const { delay, immediate = false, maxWait, leading = false, trailing = true } = options;

    let timeout: NodeJS.Timeout | null = null;
    let maxTimeout: NodeJS.Timeout | null = null;
    let lastCallTime: number | null = null;
    let lastInvokeTime = 0;
    let isPendingValue = false;

    function invokeFunc(...args: Parameters<T>) {
        isPendingValue = false;
        lastInvokeTime = Date.now();
        return func(...args);
    }

    function leadingEdge(...args: Parameters<T>) {
        lastInvokeTime = Date.now();
        isPendingValue = true;

        if (leading) {
            return invokeFunc(...args);
        }
    }

    function trailingEdge(...args: Parameters<T>) {
        timeout = null;

        if (trailing && lastCallTime) {
            return invokeFunc(...args);
        }

        isPendingValue = false;
        lastCallTime = null;
    }

    function timedOut(...args: Parameters<T>) {
        return trailingEdge(...args);
    }

    function shouldInvoke(time: number) {
        const timeSinceLastCall = time - (lastCallTime || 0);
        const timeSinceLastInvoke = time - lastInvokeTime;

        return (
            lastCallTime === null ||
            timeSinceLastCall >= delay ||
            timeSinceLastCall < 0 ||
            (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
        );
    }

    function cancel() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        if (maxTimeout) {
            clearTimeout(maxTimeout);
            maxTimeout = null;
        }

        isPendingValue = false;
        lastCallTime = null;
        lastInvokeTime = 0;
    }

    function flush(...args: Parameters<T>) {
        if (timeout) {
            return trailingEdge(...args);
        }
        return undefined;
    }

    function isPending() {
        return isPendingValue;
    }

    function debounced(...args: Parameters<T>) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastCallTime = time;

        if (isInvoking) {
            if (!timeout) {
                return leadingEdge(...args);
            }

            if (maxWait !== undefined) {
                timeout = setTimeout(() => timedOut(...args), delay);
                return invokeFunc(...args);
            }
        }

        if (!timeout) {
            timeout = setTimeout(() => timedOut(...args), delay);
        }

        if (maxWait !== undefined && !maxTimeout) {
            maxTimeout = setTimeout(() => {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                trailingEdge(...args);
            }, maxWait);
        }

        if (immediate && !timeout) {
            return invokeFunc(...args);
        }
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.isPending = isPending;

    return debounced;
}

export function simpleDebounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}
