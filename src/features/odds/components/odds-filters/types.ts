import type { OddsPageFilters, SortOption, StatusOption, SortField } from '../../types';
import type { OddsData } from '@/hooks/use-odds';

export interface OddsFiltersProps {
    filters: OddsPageFilters;
    onFiltersChange: (filters: Partial<OddsPageFilters>) => void;
    data: OddsData | null;
    isFilterLoading?: boolean;
}

export interface FilterSearchProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
}

export interface FilterButtonGroupProps {
    selectedValue: string;
    options: Array<{ value: string; label: string; count?: number }>;
    onChange: (value: string) => void;
    disabled?: boolean;
    allLabel?: string;
}

export interface FilterSportsProps {
    selectedSport: string;
    sports: Array<{ id: string; name: string }>;
    onSportChange: (sportId: string) => void;
    disabled?: boolean;
}

export interface FilterBookmakersProps {
    selectedBookmaker: string;
    bookmakers: string[];
    onBookmakerChange: (bookmaker: string) => void;
    disabled?: boolean;
}

export interface FilterStatusProps {
    selectedStatus: string;
    options: StatusOption[];
    onStatusChange: (status: string) => void;
    disabled?: boolean;
}

export interface FilterSortProps {
    sortField: SortField;
    sortOrder: 'asc' | 'desc';
    options: SortOption[];
    onSortChange: (field: string) => void;
    disabled?: boolean;
}

export interface FilterLoadingProps {
    isLoading: boolean;
}
