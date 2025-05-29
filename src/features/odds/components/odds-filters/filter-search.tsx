import { SearchInput } from './search-input';
import { FilterSearchProps } from './types';

export function FilterSearch({ value, onChange, disabled }: FilterSearchProps) {
    return (
        <div className="flex items-center space-x-4">
            <div className="flex-1">
                <SearchInput value={value} onChange={onChange} disabled={disabled} />
            </div>
        </div>
    );
}
