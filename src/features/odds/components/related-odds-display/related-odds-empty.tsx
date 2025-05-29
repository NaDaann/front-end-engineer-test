import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRelatedOddsEmptyClassName } from './hooks';
import { RELATED_ODDS_EMPTY_CLASSES } from './config';
import type { RelatedOddsEmptyProps } from './types';

export function RelatedOddsEmpty({ className }: RelatedOddsEmptyProps) {
    return (
        <Card className={useRelatedOddsEmptyClassName(className)}>
            <CardContent className={RELATED_ODDS_EMPTY_CLASSES.content}>
                <div className={RELATED_ODDS_EMPTY_CLASSES.container}>
                    <p className={RELATED_ODDS_EMPTY_CLASSES.title}>
                        Nenhuma odd relacionada encontrada
                    </p>
                    <p className={RELATED_ODDS_EMPTY_CLASSES.message}>
                        Tente ajustar os filtros ou verificar se existem outras odds no sistema
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
