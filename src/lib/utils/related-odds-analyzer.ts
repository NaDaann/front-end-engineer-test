import { OddWithDetails } from '@/lib/mocks/odds';

export interface RelatedOddsFilters {
    sameMatch?: boolean;
    sameMarket?: boolean;
    sameBookmaker?: boolean;
    sameSport?: boolean;
    sameLeague?: boolean;
    excludeOriginal?: boolean;
    limit?: number;
    minRelevanceScore?: number;
}

export interface RelatedOdd {
    odd: OddWithDetails;
    relationshipType: string[];
    relevanceScore: number;
}

export interface RelationshipWeights {
    sameMatch: number;
    sameMarket: number;
    sameBookmaker: number;
    sameLeague: number;
    sameSport: number;
    similarOdds: number;
    sameTeam: number;
    recentlyUpdated: number;
}

export class RelatedOddsAnalyzer {
    private weights: RelationshipWeights;

    constructor(customWeights?: Partial<RelationshipWeights>) {
        this.weights = {
            sameMatch: 50,
            sameMarket: 30,
            sameBookmaker: 20,
            sameLeague: 15,
            sameSport: 10,
            similarOdds: 8,
            sameTeam: 25,
            recentlyUpdated: 5,
            ...customWeights,
        };
    }

    private identifyRelationships(
        targetOdd: OddWithDetails,
        candidateOdd: OddWithDetails,
    ): string[] {
        const relationships: string[] = [];

        if (targetOdd.matchId === candidateOdd.matchId) {
            relationships.push('sameMatch');
        }

        if (targetOdd.market === candidateOdd.market) {
            relationships.push('sameMarket');
        }

        if (targetOdd.bookmaker === candidateOdd.bookmaker) {
            relationships.push('sameBookmaker');
        }

        if (targetOdd.match.sportId === candidateOdd.match.sportId) {
            relationships.push('sameSport');
        }

        if (
            targetOdd.match.league &&
            candidateOdd.match.league &&
            targetOdd.match.league === candidateOdd.match.league
        ) {
            relationships.push('sameLeague');
        }

        if (
            targetOdd.match.homeTeam === candidateOdd.match.homeTeam ||
            targetOdd.match.homeTeam === candidateOdd.match.awayTeam ||
            targetOdd.match.awayTeam === candidateOdd.match.homeTeam ||
            targetOdd.match.awayTeam === candidateOdd.match.awayTeam
        ) {
            relationships.push('sameTeam');
        }

        const oddsDifference = Math.abs(targetOdd.odds - candidateOdd.odds);
        if (oddsDifference <= 0.5) {
            relationships.push('similarOdds');
        }

        const timeDifference = Math.abs(
            new Date(targetOdd.lastUpdated).getTime() -
                new Date(candidateOdd.lastUpdated).getTime(),
        );
        const hoursDifference = timeDifference / (1000 * 60 * 60);
        if (hoursDifference <= 2) {
            relationships.push('recentlyUpdated');
        }

        return relationships;
    }

    private calculateRelevanceScore(
        targetOdd: OddWithDetails,
        candidateOdd: OddWithDetails,
        relationships: string[],
    ): number {
        let score = 0;

        relationships.forEach((relationship) => {
            score += this.weights[relationship as keyof RelationshipWeights] || 0;
        });

        const oddsDifference = Math.abs(targetOdd.odds - candidateOdd.odds);
        if (oddsDifference <= 0.1) {
            score += 5;
        }

        const timeDifference = Math.abs(
            new Date(targetOdd.lastUpdated).getTime() -
                new Date(candidateOdd.lastUpdated).getTime(),
        );
        const hoursDifference = timeDifference / (1000 * 60 * 60);

        if (hoursDifference > 48) {
            score *= 0.5;
        } else if (hoursDifference > 24) {
            score *= 0.7;
        }

        if (targetOdd.match.status === candidateOdd.match.status) {
            score += 3;
        }

        return Math.round(score * 100) / 100;
    }

    private matchesFilters(
        targetOdd: OddWithDetails,
        candidateOdd: OddWithDetails,
        relationships: string[],
        filters: RelatedOddsFilters,
    ): boolean {
        if (filters.sameMatch && !relationships.includes('sameMatch')) {
            return false;
        }
        if (filters.sameMarket && !relationships.includes('sameMarket')) {
            return false;
        }
        if (filters.sameBookmaker && !relationships.includes('sameBookmaker')) {
            return false;
        }
        if (filters.sameSport && !relationships.includes('sameSport')) {
            return false;
        }
        if (filters.sameLeague && !relationships.includes('sameLeague')) {
            return false;
        }

        return true;
    }

    public findRelatedOdds(
        targetOdd: OddWithDetails,
        allOdds: OddWithDetails[],
        filters: RelatedOddsFilters = {},
    ): RelatedOdd[] {
        const relatedOdds: RelatedOdd[] = [];

        allOdds.forEach((candidateOdd) => {
            if (filters.excludeOriginal !== false && candidateOdd.id === targetOdd.id) {
                return;
            }

            if (!candidateOdd.isActive) {
                return;
            }

            const relationships = this.identifyRelationships(targetOdd, candidateOdd);

            if (relationships.length === 0) {
                return;
            }

            if (!this.matchesFilters(targetOdd, candidateOdd, relationships, filters)) {
                return;
            }

            const relevanceScore = this.calculateRelevanceScore(
                targetOdd,
                candidateOdd,
                relationships,
            );

            if (filters.minRelevanceScore && relevanceScore < filters.minRelevanceScore) {
                return;
            }

            relatedOdds.push({
                odd: candidateOdd,
                relationshipType: relationships,
                relevanceScore,
            });
        });

        return relatedOdds
            .sort((a, b) => b.relevanceScore - a.relevanceScore)
            .slice(0, filters.limit || 10);
    }

    public generateStats(relatedOdds: RelatedOdd[]) {
        const stats = {
            totalFound: relatedOdds.length,
            averageRelevanceScore: 0,
            byRelationType: {} as Record<string, number>,
            scoreDistribution: {
                high: 0, // > 50
                medium: 0, // 20-50
                low: 0, // < 20
            },
        };

        if (relatedOdds.length === 0) {
            return stats;
        }

        const totalScore = relatedOdds.reduce((sum, item) => sum + item.relevanceScore, 0);
        stats.averageRelevanceScore = Math.round((totalScore / relatedOdds.length) * 100) / 100;

        relatedOdds.forEach((item) => {
            item.relationshipType.forEach((type) => {
                stats.byRelationType[type] = (stats.byRelationType[type] || 0) + 1;
            });

            if (item.relevanceScore > 50) {
                stats.scoreDistribution.high++;
            } else if (item.relevanceScore >= 20) {
                stats.scoreDistribution.medium++;
            } else {
                stats.scoreDistribution.low++;
            }
        });

        return stats;
    }

    public groupByRelationshipType(relatedOdds: RelatedOdd[]): Record<string, RelatedOdd[]> {
        const groups: Record<string, RelatedOdd[]> = {};

        relatedOdds.forEach((relatedOdd) => {
            const primaryRelationship = this.getPrimaryRelationship(relatedOdd.relationshipType);

            if (!groups[primaryRelationship]) {
                groups[primaryRelationship] = [];
            }

            groups[primaryRelationship].push(relatedOdd);
        });

        return groups;
    }

    private getPrimaryRelationship(relationships: string[]): string {
        const priority = [
            'sameMatch',
            'sameMarket',
            'sameTeam',
            'sameLeague',
            'sameBookmaker',
            'sameSport',
            'similarOdds',
            'recentlyUpdated',
        ];

        for (const rel of priority) {
            if (relationships.includes(rel)) {
                return rel;
            }
        }

        return relationships[0] || 'other';
    }
}
