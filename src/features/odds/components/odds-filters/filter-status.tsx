import { FilterSection } from './filter-section';
import { FilterButtonGroup } from './filter-button-group';
import { FilterStatusProps } from './types';
import { FILTER_LABELS } from './config';

export function FilterStatus({
    selectedStatus,
    options,
    onStatusChange,
    disabled,
}: FilterStatusProps) {
    return (
        <FilterSection title={FILTER_LABELS.status}>
            <FilterButtonGroup
                selectedValue={selectedStatus}
                options={options}
                onChange={onStatusChange}
                disabled={disabled}
                allLabel="Todos"
            />
        </FilterSection>
    );
}
