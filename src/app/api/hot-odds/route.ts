import { NextRequest, NextResponse } from 'next/server';
import { getAllOddsWithDetails } from '@/lib/mocks/odds';
import { HotOddsCalculator } from '@/lib/utils';

const hotOddsCalculator = new HotOddsCalculator();

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const percentile = parseFloat(searchParams.get('percentile') || '0.15');
        const sportId = searchParams.get('sportId');
        const bookmaker = searchParams.get('bookmaker');

        const allOdds = getAllOddsWithDetails();

        let filteredOdds = allOdds;

        if (sportId) {
            filteredOdds = filteredOdds.filter((odd) => odd.match.sportId === sportId);
        }

        if (bookmaker) {
            filteredOdds = filteredOdds.filter((odd) => odd.bookmaker === bookmaker);
        }

        const oddsValues = filteredOdds.map((odd) => odd.odds);

        const threshold = hotOddsCalculator.calculateThreshold(oddsValues, percentile);

        const hotOdds = filteredOdds.filter((odd) =>
            hotOddsCalculator.isHotOdds(odd.odds, threshold),
        );

        const stats = {
            totalOdds: filteredOdds.length,
            hotOddsCount: hotOdds.length,
            threshold,
            hotPercentage:
                filteredOdds.length > 0 ? (hotOdds.length / filteredOdds.length) * 100 : 0,
            filters: {
                sportId,
                bookmaker,
                percentile,
            },
        };

        return NextResponse.json({
            success: true,
            data: {
                threshold,
                hotOdds: hotOdds.map((odd) => ({
                    id: odd.id,
                    odds: odd.odds,
                    market: odd.market,
                    selection: odd.selection,
                    bookmaker: odd.bookmaker,
                    match: {
                        homeTeam: odd.match.homeTeam,
                        awayTeam: odd.match.awayTeam,
                        sportId: odd.match.sportId,
                    },
                })),
                stats,
            },
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: 'Failed to calculate hot odds',
                    details: error instanceof Error ? error.message : 'Unknown error',
                },
            },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { odds, percentile = 0.15 } = body;

        if (!Array.isArray(odds)) {
            return NextResponse.json(
                {
                    success: false,
                    error: {
                        message: 'Invalid input: odds must be an array',
                    },
                },
                { status: 400 },
            );
        }

        const oddsValues = odds
            .map((odd) => (typeof odd === 'number' ? odd : odd.odds))
            .filter((value) => typeof value === 'number');

        const threshold = hotOddsCalculator.calculateThreshold(oddsValues, percentile);

        const stats = {
            totalOdds: oddsValues.length,
            threshold,
            percentile,
            validOddsCount: oddsValues.length,
        };

        return NextResponse.json({
            success: true,
            data: {
                threshold,
                stats,
            },
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: 'Failed to process hot odds calculation',
                    details: error instanceof Error ? error.message : 'Unknown error',
                },
            },
            { status: 500 },
        );
    }
}
