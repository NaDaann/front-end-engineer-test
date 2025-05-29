import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRelatedOddsErrorClassName } from './hooks';
import { RELATED_ODDS_ERROR_CLASSES } from './config';
import type { RelatedOddsErrorProps } from './types';

export function RelatedOddsError({ error, onRetry, className }: RelatedOddsErrorProps) {
    return (
        <Card className={useRelatedOddsErrorClassName(className)}>
            <CardContent className={RELATED_ODDS_ERROR_CLASSES.content}>
                <div className={RELATED_ODDS_ERROR_CLASSES.container}>
                    <p className={RELATED_ODDS_ERROR_CLASSES.title}>
                        Erro ao carregar odds relacionadas
                    </p>
                    <p className={RELATED_ODDS_ERROR_CLASSES.message}>{error}</p>
                    {onRetry && (
                        <button onClick={onRetry} className={RELATED_ODDS_ERROR_CLASSES.button}>
                            Tentar Novamente
                        </button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
