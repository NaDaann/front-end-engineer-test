import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { MatchesFiltersSearchProps } from './types';
import { MATCHES_FILTERS_DEFAULTS, FILTER_BUTTON_STYLES } from './config';

export function MatchesFiltersSearch({
    searchTerm,
    onSearchChange,
    placeholder = MATCHES_FILTERS_DEFAULTS.placeholder,
}: MatchesFiltersSearchProps) {
    const handleChange = (value: string) => {
        try {
            onSearchChange(value);
        } catch (error) {
            console.error('Error in search change handler:', error);
        }
    };

    return (
        <div className={FILTER_BUTTON_STYLES.searchContainer}>
            <div className={FILTER_BUTTON_STYLES.searchInputContainer}>
                <Search className={FILTER_BUTTON_STYLES.searchIcon} />
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => handleChange(e.target.value)}
                    className={FILTER_BUTTON_STYLES.searchInput}
                />
            </div>
        </div>
    );
}
