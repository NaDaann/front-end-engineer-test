import type { SortOption, StatusOption } from '../../types';

export const FILTER_SORT_OPTIONS: SortOption[] = [
    { value: 'lastUpdated', label: 'Última Atualização' },
    { value: 'odds', label: 'Valor da Odd' },
    { value: 'match', label: 'Nome da Partida' },
    { value: 'bookmaker', label: 'Casa de Apostas' },
];

export const FILTER_STATUS_OPTIONS: StatusOption[] = [
    { value: 'upcoming', label: 'Próximos' },
    { value: 'live', label: 'Ao Vivo' },
    { value: 'finished', label: 'Finalizados' },
];

export const FILTER_LABELS = {
    search: 'Buscar',
    sports: 'Esportes',
    bookmakers: 'Casas de Apostas',
    status: 'Status',
    sort: 'Ordenar por',
    allSports: 'Todos',
    allBookmakers: 'Todas',
    loadingText: 'Aplicando filtros...',
} as const;
