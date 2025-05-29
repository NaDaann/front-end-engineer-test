import { NextRequest, NextResponse } from 'next/server';
import { getAllOddsWithDetails, getOddsStats, mockSports } from '@/lib/mocks';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // Parâmetros de busca e filtro
        const search = searchParams.get('search') || '';
        const sportId = searchParams.get('sportId') || '';
        const bookmaker = searchParams.get('bookmaker') || '';
        const status = searchParams.get('status') || '';
        const sortField = searchParams.get('sortField') || 'lastUpdated';
        const sortOrder = searchParams.get('sortOrder') || 'desc';
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '20');

        // Obter todas as odds com informações detalhadas
        const allOdds = getAllOddsWithDetails();

        // Filtrar odds
        const filteredOdds = allOdds.filter((odd) => {
            // Filtro de busca
            if (search) {
                const searchLower = search.toLowerCase();
                const matchesSearch =
                    odd.match.homeTeam.toLowerCase().includes(searchLower) ||
                    odd.match.awayTeam.toLowerCase().includes(searchLower) ||
                    odd.bookmaker.toLowerCase().includes(searchLower) ||
                    odd.market.toLowerCase().includes(searchLower) ||
                    odd.selection.toLowerCase().includes(searchLower) ||
                    odd.sport.name.toLowerCase().includes(searchLower);

                if (!matchesSearch) return false;
            }

            // Filtro de esporte
            if (sportId && odd.match.sportId !== sportId) {
                return false;
            }

            // Filtro de casa de apostas
            if (bookmaker && odd.bookmaker !== bookmaker) {
                return false;
            }

            // Filtro de status
            if (status && odd.match.status !== status) {
                return false;
            }

            return true;
        });

        // Ordenar odds
        filteredOdds.sort((a, b) => {
            let compareValue = 0;

            switch (sortField) {
                case 'odds':
                    compareValue = a.odds - b.odds;
                    break;
                case 'lastUpdated':
                    compareValue =
                        new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
                    break;
                case 'match':
                    compareValue = `${a.match.homeTeam} vs ${a.match.awayTeam}`.localeCompare(
                        `${b.match.homeTeam} vs ${b.match.awayTeam}`,
                    );
                    break;
                case 'bookmaker':
                    compareValue = a.bookmaker.localeCompare(b.bookmaker);
                    break;
            }

            return sortOrder === 'asc' ? compareValue : -compareValue;
        });

        // Paginação
        const total = filteredOdds.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedOdds = filteredOdds.slice(startIndex, endIndex);

        // Obter estatísticas
        const oddsStats = getOddsStats();

        // Estatísticas da paginação
        const stats = {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasMore: endIndex < total,
            ...oddsStats,
        };

        await new Promise((resolve) => setTimeout(resolve, 100)); // Simular delay de rede

        return NextResponse.json({
            success: true,
            data: {
                odds: paginatedOdds,
                stats,
                sports: mockSports,
                bookmakers: oddsStats.bookmakers,
            },
            message: 'Odds retrieved successfully',
        });
    } catch (error) {
        console.error('Error fetching all odds:', error);

        return NextResponse.json(
            {
                success: false,
                data: null,
                message: 'Failed to fetch odds',
            },
            { status: 500 },
        );
    }
}
