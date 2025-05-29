import { Sport } from '@/types';

export function getSortedSports(sports: Sport[], order: string[]): Sport[] {
    if (order.length === 0) {
        return sports;
    }

    const sportsMap = new Map(sports.map((sport) => [sport.id, sport]));

    const orderedSports: Sport[] = [];
    const remainingSports: Sport[] = [];

    order.forEach((id) => {
        const sport = sportsMap.get(id);
        if (sport) {
            orderedSports.push(sport);
            sportsMap.delete(id);
        }
    });

    sportsMap.forEach((sport) => {
        remainingSports.push(sport);
    });

    return [...orderedSports, ...remainingSports];
}

export function extractSportsOrder(sports: Sport[]): string[] {
    return sports.map((sport) => sport.id);
}

export function hasCustomOrder(order: string[]): boolean {
    return order.length > 0;
}
