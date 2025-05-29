'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { MatchesGridEmptyStateProps } from './types';
import { useMatchesGrid } from './hooks';

export function MatchesGridEmptyState({ 
    selectedSport, 
    favoriteCategories 
}: MatchesGridEmptyStateProps) {
    const { emptyStateMessage } = useMatchesGrid({
        matches: [],
        selectedSport,
        favoriteCategories,
    });

    return (
        <Card>
            <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                    {emptyStateMessage}
                </p>
            </CardContent>
        </Card>
    );
}
