'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { OddsStatsCardBackground } from './odds-stats-card-background';
import { OddsStatsCardHeader } from './odds-stats-card-header';
import { OddsStatsCardContent } from './odds-stats-card-content';
import type { OddsStatsCardProps } from './types';
import { ODDS_STATS_CARD_CLASSES } from './config';

export function OddsStatsCard({ card }: OddsStatsCardProps) {
    const cardClasses = `${ODDS_STATS_CARD_CLASSES.card} bg-gradient-to-br ${card.bgGradient} ${card.darkBgGradient}`;

    return (
        <Card
            className={cardClasses}
            style={{
                transition: 'all 0.3s ease-in-out!important',
            }}
        >
            <OddsStatsCardBackground gradient={card.gradient} />

            <CardHeader className="space-y-0 pb-3 relative z-10">
                <OddsStatsCardHeader title={card.title} icon={card.icon} gradient={card.gradient} />
            </CardHeader>

            <CardContent className="relative z-10">
                <OddsStatsCardContent
                    value={card.value}
                    subtitle={card.subtitle}
                    gradient={card.gradient}
                />
            </CardContent>
        </Card>
    );
}
