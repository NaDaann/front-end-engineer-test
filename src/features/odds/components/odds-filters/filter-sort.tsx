import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3 } from 'lucide-react';
import { FilterSection } from './filter-section';
import { FilterSortProps } from './types';
import { FILTER_LABELS } from './config';

export function FilterSort({
    sortField,
    sortOrder,
    options,
    onSortChange,
    disabled,
}: FilterSortProps) {
    return (
        <FilterSection title={FILTER_LABELS.sort}>
            <div className="flex gap-2 flex-wrap">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={sortField === option.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => onSortChange(option.value)}
                        disabled={disabled}
                        className="flex items-center gap-1"
                    >
                        {option.label}
                        {sortField === option.value &&
                            (sortOrder === 'asc' ? (
                                <TrendingUp className="w-3 h-3" />
                            ) : (
                                <BarChart3 className="w-3 h-3" />
                            ))}
                    </Button>
                ))}
            </div>
        </FilterSection>
    );
}
