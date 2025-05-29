import React from 'react';
import { useRelatedOddsFooterClassName } from './hooks';
import { RELATED_ODDS_FOOTER_CLASSES } from './config';
import type { RelatedOddsFooterProps } from './types';

export function RelatedOddsFooter({ totalCount, onRefresh, className }: RelatedOddsFooterProps) {
    return (
        <div className={useRelatedOddsFooterClassName(className)}>
            <div className={RELATED_ODDS_FOOTER_CLASSES.info}>
                <span>Total de {totalCount} odds relacionadas encontradas</span>
                {onRefresh && (
                    <button
                        onClick={onRefresh}
                        className={RELATED_ODDS_FOOTER_CLASSES.refreshButton}
                    >
                        Atualizar
                    </button>
                )}
            </div>
        </div>
    );
}
