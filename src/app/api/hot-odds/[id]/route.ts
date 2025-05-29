import { NextRequest, NextResponse } from 'next/server';
import { getOddWithDetailsById, getAllOddsWithDetails } from '@/lib/mocks/odds';
import { HotOddsCalculator } from '@/lib/utils';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;

    if (!resolvedParams || !resolvedParams.id) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: 'Invalid parameters',
                    details: 'Odd ID is required',
                },
            },
            { status: 400 },
        );
    }

    try {
        const { searchParams } = new URL(request.url);
        const percentile = parseFloat(searchParams.get('percentile') || '0.15');
        const sportId = searchParams.get('sportId');
        const bookmaker = searchParams.get('bookmaker');

        const oddDetails = getOddWithDetailsById(resolvedParams.id);

        if (!oddDetails) {
            return NextResponse.json(
                {
                    success: false,
                    error: {
                        message: 'Odd not found',
                        details: `No odd found with ID: ${resolvedParams.id}`,
                    },
                },
                { status: 404 },
            );
        }

        const allOdds = getAllOddsWithDetails();

        const effectiveSportId = sportId || oddDetails.match.sportId;
        const effectiveBookmaker = bookmaker || oddDetails.bookmaker;

        const calculator = new HotOddsCalculator();
        const oddsValues = allOdds.map((odd) => odd.odds);
        const threshold = calculator.calculateThreshold(oddsValues, percentile);

        const isHot = calculator.isHotOdds(oddDetails.odds, threshold);

        const hotOddsCount = allOdds.filter((odd) =>
            calculator.isHotOdds(odd.odds, threshold),
        ).length;

        const stats = {
            totalOdds: allOdds.length,
            validOdds: oddsValues.length,
            threshold,
            hotOddsCount,
            hotPercentage: allOdds.length > 0 ? (hotOddsCount / allOdds.length) * 100 : 0,
            comparisonContext: {
                sportId: effectiveSportId,
                bookmaker: effectiveBookmaker,
                totalComparisionOdds: allOdds.length,
            },
        };

        return NextResponse.json({
            success: true,
            data: {
                odd: {
                    id: oddDetails.id,
                    odds: oddDetails.odds,
                    market: oddDetails.market,
                    selection: oddDetails.selection,
                    bookmaker: oddDetails.bookmaker,
                    isHot,
                },
                threshold,
                stats,
                metadata: {
                    percentile,
                    filters: {
                        sportId: effectiveSportId,
                        bookmaker: effectiveBookmaker,
                    },
                },
            },
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: 'Failed to check if odd is hot',
                    details: error instanceof Error ? error.message : 'Unknown error',
                },
            },
            { status: 500 },
        );
    }
}
