'use client';

import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Sport } from '@/types';
import { cn } from '@/lib/utils';

interface SportCategoryCardProps {
    sport: Sport;
    isFavorite: boolean;
    onToggleFavorite: (sportId: string) => void;
    isDragging?: boolean;
}

export const SportCategoryCard = React.memo(function SportCategoryCard({
    sport,
    isFavorite,
    onToggleFavorite,
    isDragging = false,
}: SportCategoryCardProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging: isSortableDragging,
    } = useSortable({
        id: sport.id,
        // Configurações otimizadas
        transition: {
            duration: 200,
            easing: 'ease-out',
        },
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || 'transform 200ms ease-out, opacity 150ms ease',
        // Forçar composição em camada separada para melhor performance
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden' as const,
        WebkitBackfaceVisibility: 'hidden' as const,
    };

    return (
        <Card
            ref={setNodeRef}
            style={style}
            data-testid={`sport-category-card-${sport.id}`}
            className={cn(
                'cursor-grab active:cursor-grabbing transition-all duration-200 ease-out',
                'hover:shadow-lg hover:scale-[1.02] transform-gpu',
                (isDragging || isSortableDragging) &&
                    'opacity-40 rotate-3 scale-105 shadow-2xl z-50',
                'will-change-transform backface-hidden',
            )}
            {...attributes}
            {...listeners}
        >
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="text-2xl">{sport.icon}</div>
                        <div>
                            <CardTitle className="text-lg">{sport.name}</CardTitle>
                            <Badge
                                variant={sport.isActive ? 'default' : 'secondary'}
                                className="mt-1 text-color-white"
                            >
                                {sport.isActive ? 'Ativo' : 'Inativo'}
                            </Badge>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(sport.id);
                        }}
                        className={cn(
                            'p-1',
                            isFavorite
                                ? 'text-yellow-500 hover:text-yellow-600'
                                : 'text-gray-400 hover:text-gray-600',
                        )}
                    >
                        {isFavorite ? (
                            <Star className="w-5 h-5 fill-current" />
                        ) : (
                            <Star className="w-5 h-5" />
                        )}
                    </Button>
                </div>
            </CardHeader>
        </Card>
    );
});
