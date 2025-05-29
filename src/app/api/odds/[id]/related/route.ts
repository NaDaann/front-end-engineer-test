import { NextRequest, NextResponse } from 'next/server';
import { getOddWithDetailsById, getAllOddsWithDetails, OddWithDetails } from '@/lib/mocks/odds';
import {
    RelatedOddsAnalyzer,
    RelatedOddsFilters,
    RelatedOdd,
} from '@/lib/utils/related-odds-analyzer';

interface RelatedOddsResponse {
    success: boolean;
    data: {
        targetOdd: OddWithDetails;
        relatedOdds: RelatedOdd[];
        criteria: RelatedOddsFilters;
        stats: {
            totalFound: number;
            averageRelevanceScore: number;
            byRelationType: Record<string, number>;
            scoreDistribution: {
                high: number;
                medium: number;
                low: number;
            };
        };
        groupedByType: Record<string, RelatedOdd[]>;
    };
    timestamp: string;
}

/**
 * API endpoint para buscar odds relacionadas a uma odd específica
 * Implementa busca dinâmica por padrões sem depender de dados pré-definidos
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<RelatedOddsResponse | { success: false; error: unknown }>> {
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

        // Parse dos filtros da query string
        const filters: RelatedOddsFilters = {
            sameMatch: searchParams.get('sameMatch') === 'true',
            sameMarket: searchParams.get('sameMarket') === 'true',
            sameBookmaker: searchParams.get('sameBookmaker') === 'true',
            sameSport: searchParams.get('sameSport') === 'true',
            sameLeague: searchParams.get('sameLeague') === 'true',
            excludeOriginal: searchParams.get('excludeOriginal') !== 'false', // true por padrão
            limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10,
            minRelevanceScore: searchParams.get('minRelevanceScore')
                ? parseFloat(searchParams.get('minRelevanceScore')!)
                : undefined,
        };

        // Buscar a odd específica
        const targetOdd = getOddWithDetailsById(resolvedParams.id);

        if (!targetOdd) {
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

        // Buscar todas as odds para análise
        const allOdds = getAllOddsWithDetails();

        // Inicializar o analisador de odds relacionadas
        const analyzer = new RelatedOddsAnalyzer();

        // Encontrar odds relacionadas
        const relatedOdds = analyzer.findRelatedOdds(targetOdd, allOdds, filters);

        // Gerar estatísticas
        const stats = analyzer.generateStats(relatedOdds);

        // Agrupar por tipo de relacionamento
        const groupedByType = analyzer.groupByRelationshipType(relatedOdds);

        return NextResponse.json({
            success: true,
            data: {
                targetOdd,
                relatedOdds,
                criteria: filters,
                stats,
                groupedByType,
            },
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: 'Failed to find related odds',
                    details: error instanceof Error ? error.message : 'Unknown error',
                },
            },
            { status: 500 },
        );
    }
}
