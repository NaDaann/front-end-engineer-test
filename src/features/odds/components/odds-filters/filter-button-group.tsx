import { Button } from '@/components/ui/button';
import { FilterButtonGroupProps } from './types';

export function FilterButtonGroup({
    selectedValue,
    options,
    onChange,
    disabled,
    allLabel = 'Todos',
}: FilterButtonGroupProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            <Button
                variant={selectedValue === '' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onChange('')}
                disabled={disabled}
            >
                {allLabel}
            </Button>
            {options.map((option) => (
                <Button
                    key={option.value}
                    variant={selectedValue === option.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onChange(option.value)}
                    disabled={disabled}
                >
                    {option.label}
                    {option.count && (
                        <span className="ml-1 text-xs opacity-70">({option.count})</span>
                    )}
                </Button>
            ))}
        </div>
    );
}
