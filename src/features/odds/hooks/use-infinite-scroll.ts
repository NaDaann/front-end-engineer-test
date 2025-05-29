import { useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollProps {
    hasMore: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
    threshold?: number;
    rootMargin?: string;
}

export function useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore,
    threshold = 0.1,
    rootMargin = '100px',
}: UseInfiniteScrollProps) {
    const loadingRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const observerCallback = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (entry.isIntersecting && hasMore && !isLoading) {
                onLoadMore();
            }
        },
        [hasMore, isLoading, onLoadMore],
    );

    useEffect(() => {
        const node = loadingRef.current;

        if (!node) return;

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(observerCallback, {
            threshold,
            rootMargin,
        });

        observerRef.current.observe(node);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [observerCallback, threshold, rootMargin]);

    return { loadingRef };
}
