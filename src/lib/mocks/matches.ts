import { Match, Odd } from '@/types';

export const mockMatches: Match[] = [
    {
        id: '1',
        sportId: '1',
        homeTeam: 'Flamengo',
        awayTeam: 'Palmeiras',
        startTime: new Date('2025-05-27T20:00:00'),
        status: 'upcoming',
        odds: [
            {
                id: '1',
                matchId: '1',
                bookmaker: 'Bet365',
                market: 'Resultado Final',
                selection: 'Flamengo',
                odds: 2.5,
                isActive: true,
                lastUpdated: new Date('2025-05-26T10:30:00'),
            },
            {
                id: '2',
                matchId: '1',
                bookmaker: 'Bet365',
                market: 'Resultado Final',
                selection: 'Empate',
                odds: 3.2,
                isActive: true,
                lastUpdated: new Date('2025-05-26T10:30:00'),
            },
            {
                id: '3',
                matchId: '1',
                bookmaker: 'Bet365',
                market: 'Resultado Final',
                selection: 'Palmeiras',
                odds: 2.8,
                isActive: true,
                lastUpdated: new Date('2025-05-26T10:30:00'),
            },
            {
                id: '4',
                matchId: '1',
                bookmaker: 'Betano',
                market: 'Resultado Final',
                selection: 'Flamengo',
                odds: 2.4,
                isActive: true,
                lastUpdated: new Date('2025-05-26T11:15:00'),
            },
            {
                id: '5',
                matchId: '1',
                bookmaker: 'Betano',
                market: 'Resultado Final',
                selection: 'Empate',
                odds: 3.3,
                isActive: true,
                lastUpdated: new Date('2025-05-26T11:15:00'),
            },
            {
                id: '6',
                matchId: '1',
                bookmaker: 'Betano',
                market: 'Resultado Final',
                selection: 'Palmeiras',
                odds: 2.9,
                isActive: true,
                lastUpdated: new Date('2025-05-26T11:15:00'),
            },
        ],
    },
    {
        id: '2',
        sportId: '2',
        homeTeam: 'Lakers',
        awayTeam: 'Warriors',
        startTime: new Date('2025-05-27T22:00:00'),
        status: 'live',
        odds: [
            {
                id: '7',
                matchId: '2',
                bookmaker: 'Bet365',
                market: 'Vencedor',
                selection: 'Lakers',
                odds: 1.8,
                isActive: true,
                lastUpdated: new Date('2025-05-26T12:00:00'),
            },
            {
                id: '8',
                matchId: '2',
                bookmaker: 'Bet365',
                market: 'Vencedor',
                selection: 'Warriors',
                odds: 2.1,
                isActive: true,
                lastUpdated: new Date('2025-05-26T12:00:00'),
            },
            {
                id: '9',
                matchId: '2',
                bookmaker: 'SportingBet',
                market: 'Vencedor',
                selection: 'Lakers',
                odds: 1.85,
                isActive: true,
                lastUpdated: new Date('2025-05-26T12:30:00'),
            },
            {
                id: '10',
                matchId: '2',
                bookmaker: 'SportingBet',
                market: 'Vencedor',
                selection: 'Warriors',
                odds: 2.05,
                isActive: true,
                lastUpdated: new Date('2025-05-26T12:30:00'),
            },
        ],
    },
    {
        id: '3',
        sportId: '3',
        homeTeam: 'Real Madrid',
        awayTeam: 'Barcelona',
        startTime: new Date('2025-05-28T16:00:00'),
        status: 'upcoming',
        odds: [
            {
                id: '11',
                matchId: '3',
                bookmaker: 'Bet365',
                market: '1X2',
                selection: 'Real Madrid',
                odds: 2.2,
                isActive: true,
                lastUpdated: new Date('2025-05-26T09:00:00'),
            },
            {
                id: '12',
                matchId: '3',
                bookmaker: 'Bet365',
                market: '1X2',
                selection: 'Empate',
                odds: 3.4,
                isActive: true,
                lastUpdated: new Date('2025-05-26T09:00:00'),
            },
            {
                id: '13',
                matchId: '3',
                bookmaker: 'Bet365',
                market: '1X2',
                selection: 'Barcelona',
                odds: 3.1,
                isActive: true,
                lastUpdated: new Date('2025-05-26T09:00:00'),
            },
            {
                id: '14',
                matchId: '3',
                bookmaker: 'Betfair',
                market: '1X2',
                selection: 'Real Madrid',
                odds: 2.15,
                isActive: true,
                lastUpdated: new Date('2025-05-26T09:30:00'),
            },
            {
                id: '15',
                matchId: '3',
                bookmaker: 'Betfair',
                market: '1X2',
                selection: 'Empate',
                odds: 3.5,
                isActive: true,
                lastUpdated: new Date('2025-05-26T09:30:00'),
            },
            {
                id: '16',
                matchId: '3',
                bookmaker: 'Betfair',
                market: '1X2',
                selection: 'Barcelona',
                odds: 3.0,
                isActive: true,
                lastUpdated: new Date('2025-05-26T09:30:00'),
            },
        ],
    },
];

export function getAllOddsWithMatchInfo() {
    const allOdds: Array<
        Odd & {
            match: {
                id: string;
                sportId: string;
                homeTeam: string;
                awayTeam: string;
                startTime: Date;
                status: 'upcoming' | 'live' | 'finished';
            };
            sport?: {
                name: string;
                slug: string;
            };
        }
    > = [];

    mockMatches.forEach((match) => {
        match.odds.forEach((odd) => {
            allOdds.push({
                ...odd,
                match: {
                    id: match.id,
                    sportId: match.sportId,
                    homeTeam: match.homeTeam,
                    awayTeam: match.awayTeam,
                    startTime: match.startTime,
                    status: match.status,
                },
            });
        });
    });

    return allOdds;
}

export function getOddById(id: string) {
    const allOdds = getAllOddsWithMatchInfo();
    return allOdds.find((odd) => odd.id === id);
}
