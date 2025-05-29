export type {
    RelatedOddsFilters,
    RelatedOdd,
    RelatedOddsStats,
    RelatedOddsResponse,
    UseRelatedOddsOptions,
    UseRelatedOddsResult,
} from './types';

export { useRelatedOdds } from './use-related-odds-main';
export { useRelatedOddsData } from './use-related-odds-data';

export {
    useMatchRelatedOdds,
    useMarketRelatedOdds,
    useBookmakerRelatedOdds,
    useLeagueRelatedOdds,
} from './use-related-odds-specialized';

export { useRelatedOddsQueryParams, filtersToQueryParams } from './use-related-odds-query-params';

export { formatRelationshipTypes, categorizeRelatedOdds } from './use-related-odds-utils';
