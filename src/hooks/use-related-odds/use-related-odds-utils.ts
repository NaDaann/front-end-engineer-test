import type { RelatedOdd } from './types';

export function formatRelationshipTypes(types: string[]): string {
    const typeLabels: Record<string, string> = {
        sameMatch: 'Mesmo Jogo',
        sameMarket: 'Mesmo Mercado',
        sameBookmaker: 'Mesma Casa',
        sameLeague: 'Mesma Liga',
        sameSport: 'Mesmo Esporte',
        similarOdds: 'Odds Similares',
    };

    return types.map((type) => typeLabels[type] || type).join(', ');
}

export function categorizeRelatedOdds(relatedOdds: RelatedOdd[]) {
    const categories: Record<string, RelatedOdd[]> = {
        sameMatch: [],
        sameMarket: [],
        sameBookmaker: [],
        sameLeague: [],
        sameSport: [],
        other: [],
    };

    relatedOdds.forEach((relatedOdd) => {
        let categorized = false;

        if (relatedOdd.relationshipType.includes('sameMatch')) {
            categories.sameMatch.push(relatedOdd);
            categorized = true;
        } else if (relatedOdd.relationshipType.includes('sameMarket')) {
            categories.sameMarket.push(relatedOdd);
            categorized = true;
        } else if (relatedOdd.relationshipType.includes('sameBookmaker')) {
            categories.sameBookmaker.push(relatedOdd);
            categorized = true;
        } else if (relatedOdd.relationshipType.includes('sameLeague')) {
            categories.sameLeague.push(relatedOdd);
            categorized = true;
        } else if (relatedOdd.relationshipType.includes('sameSport')) {
            categories.sameSport.push(relatedOdd);
            categorized = true;
        }

        if (!categorized) {
            categories.other.push(relatedOdd);
        }
    });

    return Object.entries(categories).reduce(
        (acc, [key, value]) => {
            if (value.length > 0) {
                acc[key] = value;
            }
            return acc;
        },
        {} as Record<string, RelatedOdd[]>,
    );
}
