'use client';

import { Card, CardContent } from '@/components/ui/card';
import { OddsFiltersProps } from './types';
import { useFilterOptions, useFilterHandlers, useSortHandler } from './hooks';
import { FilterSearch } from './filter-search';
import { FilterSports } from './filter-sports';
import { FilterBookmakers } from './filter-bookmakers';
import { FilterStatus } from './filter-status';
import { FilterSort } from './filter-sort';
import { FilterLoading } from './filter-loading';

export function OddsFilters({
    filters,
    onFiltersChange,
    data,
    isFilterLoading = false,
}: OddsFiltersProps) {
    const { sortOptions, statusOptions } = useFilterOptions();
    const { handleSearchChange, handleSportChange, handleBookmakerChange, handleStatusChange } =
        useFilterHandlers(onFiltersChange);
    const handleSortChange = useSortHandler(filters, onFiltersChange);

    return (
        <Card>
            <CardContent className="p-6">
                <div className="space-y-6">
                    {/* Search */}
                    <FilterSearch
                        value={filters.searchTerm}
                        onChange={handleSearchChange}
                        disabled={isFilterLoading}
                    />

                    {/* Sports */}
                    <FilterSports
                        selectedSport={filters.selectedSport}
                        sports={data?.sports || []}
                        onSportChange={handleSportChange}
                        disabled={isFilterLoading}
                    />

                    {/* Bookmakers */}
                    <FilterBookmakers
                        selectedBookmaker={filters.selectedBookmaker}
                        bookmakers={data?.bookmakers || []}
                        onBookmakerChange={handleBookmakerChange}
                        disabled={isFilterLoading}
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <FilterStatus
                                selectedStatus={filters.selectedStatus}
                                options={statusOptions}
                                onStatusChange={handleStatusChange}
                                disabled={isFilterLoading}
                            />
                        </div>

                        <div className="flex-1">
                            <FilterSort
                                sortField={filters.sortField}
                                sortOrder={filters.sortOrder}
                                options={sortOptions}
                                onSortChange={handleSortChange}
                                disabled={isFilterLoading}
                            />
                        </div>
                    </div>

                    {/* Loading indicator */}
                    <FilterLoading isLoading={isFilterLoading} />
                </div>
            </CardContent>
        </Card>
    );
}
