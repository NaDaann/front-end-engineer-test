import { FilterSection } from './filter-section';
import { FilterButtonGroup } from './filter-button-group';
import { FilterSportsProps } from './types';
import { FILTER_LABELS } from './config';

export function FilterSports({
    selectedSport,
    sports,
    onSportChange,
    disabled,
}: FilterSportsProps) {
    const sportOptions =
        sports?.map((sport) => ({
            value: sport.id,
            label: sport.name,
        })) || [];

    return (
        <FilterSection title={FILTER_LABELS.sports}>
            <FilterButtonGroup
                selectedValue={selectedSport}
                options={sportOptions}
                onChange={onSportChange}
                disabled={disabled}
                allLabel={FILTER_LABELS.allSports}
            />
        </FilterSection>
    );
}
