export { RelatedOddsDisplay } from './related-odds-display';
export { RelatedOddsLayout } from './related-odds-layout';
export { RelatedOddsHeader } from './related-odds-header';
export { RelatedOddsContent } from './related-odds-content';
export { RelatedOddsFooter } from './related-odds-footer';
export { RelatedOddsError } from './related-odds-error';
export { RelatedOddsEmpty } from './related-odds-empty';
export { RelatedOddsLoading } from './related-odds-loading';
export { RelatedOddsGrid } from './related-odds-grid';
export { RelatedOddsMoreIndicator } from './related-odds-more-indicator';
export { RelatedOddCard } from './related-odd-card';

export type {
    RelatedOddsDisplayProps,
    RelatedOddsLayoutProps,
    RelatedOddsHeaderProps,
    RelatedOddsContentProps,
    RelatedOddsFooterProps,
    RelatedOddsErrorProps,
    RelatedOddsEmptyProps,
    RelatedOddsLoadingProps,
    RelatedOddsGridProps,
    RelatedOddsMoreIndicatorProps,
    RelatedOddCardProps,
    RelatedOddData,
} from './types';

export {
    RELATED_ODDS_DEFAULTS,
    RELATED_ODDS_LAYOUT_CLASSES,
    RELATED_ODDS_HEADER_CLASSES,
    RELATED_ODDS_CONTENT_CLASSES,
    RELATED_ODDS_FOOTER_CLASSES,
    RELATED_ODDS_ERROR_CLASSES,
    RELATED_ODDS_EMPTY_CLASSES,
    RELATED_ODDS_MORE_INDICATOR_CLASSES,
    RELATED_ODDS_SKELETON_CONFIG,
} from './config';

export {
    useRelatedOddsData,
    useRelatedOddsLayoutClassName,
    useRelatedOddsHeaderClassName,
    useRelatedOddsContentClassName,
    useRelatedOddsFooterClassName,
    useRelatedOddsErrorClassName,
    useRelatedOddsEmptyClassName,
    useRelatedOddsMoreIndicatorClassName,
} from './hooks';
