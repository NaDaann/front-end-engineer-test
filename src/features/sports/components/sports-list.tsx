'use client';

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import { SportCategoryCard } from './sport-category-card';
import { Sport } from '@/types';
import { useSports } from '@/providers/sports-provider';
import { useSportsOrder } from '@/hooks/use-sports-order';

interface SportsListProps {
    sports: Sport[];
    favoriteCategories: string[];
}

export function SportsList({ sports, favoriteCategories }: SportsListProps) {
    const { addFavoriteCategory, removeFavoriteCategory } = useSports();
    const { sports: orderedSports, reorderSports } = useSportsOrder(sports);
    const [activeId, setActiveId] = React.useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    // Aguardar hidratação para evitar erros de SSR
    useEffect(() => {
        setMounted(true);
    }, []);

    // Configurações otimizadas para sensores com melhor responsividade
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // Menor distância para ativação mais rápida
                tolerance: 5,
                delay: 0, // Sem delay para resposta imediata
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragStart = useCallback((event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    }, []);

    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            const { active, over } = event;

            setActiveId(null);

            if (active.id !== over?.id) {
                const oldIndex = orderedSports.findIndex((item) => item.id === active.id);
                const newIndex = orderedSports.findIndex((item) => item.id === over?.id);

                const newItems = arrayMove(orderedSports, oldIndex, newIndex);
                reorderSports(newItems);
            }
        },
        [orderedSports, reorderSports],
    );

    const handleToggleFavorite = useCallback(
        (sportId: string) => {
            if (favoriteCategories.includes(sportId)) {
                removeFavoriteCategory(sportId);
            } else {
                addFavoriteCategory(sportId);
            }
        },
        [favoriteCategories, addFavoriteCategory, removeFavoriteCategory],
    );

    // Memoizar itens para evitar re-renders desnecessários
    const itemIds = useMemo(() => orderedSports.map((item) => item.id), [orderedSports]);

    const activeItem = useMemo(
        () => orderedSports.find((sport) => sport.id === activeId),
        [orderedSports, activeId],
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Categorias de Esportes</h2>
                <div className="text-sm text-gray-600">Arraste para reordenar</div>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {orderedSports.map((sport) => (
                            <SportCategoryCard
                                key={sport.id}
                                sport={sport}
                                isFavorite={favoriteCategories.includes(sport.id)}
                                onToggleFavorite={handleToggleFavorite}
                                isDragging={activeId === sport.id}
                            />
                        ))}
                    </div>
                </SortableContext>

                {mounted &&
                    createPortal(
                        <DragOverlay>
                            {activeItem ? (
                                <SportCategoryCard
                                    sport={activeItem}
                                    isFavorite={favoriteCategories.includes(activeItem.id)}
                                    onToggleFavorite={() => {}} // Não funcional durante drag
                                    isDragging={true}
                                />
                            ) : null}
                        </DragOverlay>,
                        document.body,
                    )}
            </DndContext>

            {favoriteCategories.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Suas Categorias Favoritas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {favoriteCategories.map((categoryId) => {
                            const sport = sports.find((s) => s.id === categoryId);
                            return sport ? (
                                <div
                                    key={categoryId}
                                    className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                                >
                                    <span>{sport.icon}</span>
                                    <span>{sport.name}</span>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
