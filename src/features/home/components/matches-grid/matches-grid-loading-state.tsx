'use client';

import { LoadingState } from '@/components/common/loading';
import { MatchesGridLoadingStateProps } from './types';
import { MATCHES_GRID_CONFIG } from './config';

export function MatchesGridLoadingState({ count }: MatchesGridLoadingStateProps) {
    const loadingCount = count ?? MATCHES_GRID_CONFIG.loading.defaultCount;

    return <LoadingState type="matches" count={loadingCount} />;
}
