import { FilterSection } from './filter-section';
import { FilterButtonGroup } from './filter-button-group';
import { FilterBookmakersProps } from './types';
import { FILTER_LABELS } from './config';

export function FilterBookmakers({
    selectedBookmaker,
    bookmakers,
    onBookmakerChange,
    disabled,
}: FilterBookmakersProps) {
    const bookmakersOptions =
        bookmakers?.map((bookmaker) => ({
            value: bookmaker,
            label: bookmaker,
        })) || [];

    return (
        <FilterSection title={FILTER_LABELS.bookmakers}>
            <FilterButtonGroup
                selectedValue={selectedBookmaker}
                options={bookmakersOptions}
                onChange={onBookmakerChange}
                disabled={disabled}
                allLabel={FILTER_LABELS.allBookmakers}
            />
        </FilterSection>
    );
}
