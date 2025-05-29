import { Odd } from '@/types';
import { mockMatches } from './matches';
import { mockSports } from './sports';

export interface OddWithDetails extends Odd {
    match: {
        id: string;
        sportId: string;
        homeTeam: string;
        awayTeam: string;
        startTime: Date;
        status: 'upcoming' | 'live' | 'finished';
        venue?: string;
        league?: string;
    };
    sport: {
        id: string;
        name: string;
        slug: string;
        icon?: string;
    };
    history?: Array<{
        timestamp: Date;
        odds: number;
    }>;
    relatedOdds?: Array<{
        id: string;
        market: string;
        selection: string;
        odds: number;
        bookmaker: string;
    }>;
}

// Dados adicionais para odds detalhadas
const oddsDetailsMap: Record<
    string,
    {
        venue?: string;
        league?: string;
        history: Array<{ timestamp: Date; odds: number }>;
        relatedOdds: Array<{
            id: string;
            market: string;
            selection: string;
            odds: number;
            bookmaker: string;
        }>;
    }
> = {
    '1': {
        venue: 'Maracanã',
        league: 'Campeonato Brasileiro',
        history: [
            { timestamp: new Date('2025-05-26T10:00:00'), odds: 2.45 },
            { timestamp: new Date('2025-05-26T14:00:00'), odds: 2.5 },
            { timestamp: new Date('2025-05-26T18:00:00'), odds: 2.48 },
        ],
        relatedOdds: [
            {
                id: '2',
                market: 'Resultado Final',
                selection: 'Empate',
                odds: 3.2,
                bookmaker: 'Bet365',
            },
            {
                id: '3',
                market: 'Resultado Final',
                selection: 'Palmeiras',
                odds: 2.8,
                bookmaker: 'Bet365',
            },
        ],
    },
    '7': {
        venue: 'Crypto.com Arena',
        league: 'NBA',
        history: [
            { timestamp: new Date('2025-05-26T11:00:00'), odds: 1.75 },
            { timestamp: new Date('2025-05-26T15:00:00'), odds: 1.8 },
            { timestamp: new Date('2025-05-26T19:00:00'), odds: 1.82 },
        ],
        relatedOdds: [
            {
                id: '8',
                market: 'Vencedor',
                selection: 'Warriors',
                odds: 2.1,
                bookmaker: 'Bet365',
            },
        ],
    },
    '11': {
        venue: 'Santiago Bernabéu',
        league: 'La Liga',
        history: [
            { timestamp: new Date('2025-05-26T08:00:00'), odds: 2.25 },
            { timestamp: new Date('2025-05-26T12:00:00'), odds: 2.2 },
            { timestamp: new Date('2025-05-26T16:00:00'), odds: 2.18 },
        ],
        relatedOdds: [
            {
                id: '12',
                market: '1X2',
                selection: 'Empate',
                odds: 3.4,
                bookmaker: 'Bet365',
            },
            {
                id: '13',
                market: '1X2',
                selection: 'Barcelona',
                odds: 3.1,
                bookmaker: 'Bet365',
            },
        ],
    },
};

export function getAllOddsWithDetails(): OddWithDetails[] {
    const allOdds: OddWithDetails[] = [];

    mockMatches.forEach((match) => {
        const sport = mockSports.find((s) => s.id === match.sportId);
        if (sport) {
            match.odds.forEach((odd) => {
                const details = oddsDetailsMap[odd.id];

                const oddWithDetails: OddWithDetails = {
                    ...odd,
                    match: {
                        id: match.id,
                        sportId: match.sportId,
                        homeTeam: match.homeTeam,
                        awayTeam: match.awayTeam,
                        startTime: match.startTime,
                        status: match.status,
                        venue: details?.venue,
                        league: details?.league,
                    },
                    sport: {
                        id: sport.id,
                        name: sport.name,
                        slug: sport.slug,
                        icon: sport.icon,
                    },
                    history: details?.history,
                    relatedOdds: details?.relatedOdds,
                };

                allOdds.push(oddWithDetails);
            });
        }
    });

    return allOdds;
}

export function getOddWithDetailsById(id: string): OddWithDetails | undefined {
    const allOdds = getAllOddsWithDetails();

    const foundOdd = allOdds.find((odd) => odd.id === id);

    return foundOdd;
}

export function getOddsStats() {
    const allOdds = getAllOddsWithDetails();

    return {
        activeOdds: allOdds.filter((odd) => odd.isActive).length,
        totalBookmakers: Array.from(new Set(allOdds.map((odd) => odd.bookmaker))).length,
        sportBreakdown: mockSports.map((sport) => ({
            sport: sport.name,
            count: allOdds.filter((odd) => odd.match.sportId === sport.id).length,
        })),
        bookmakers: Array.from(new Set(allOdds.map((odd) => odd.bookmaker))).sort(),
    };
}
