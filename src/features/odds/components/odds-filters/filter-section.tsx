import { FilterSectionProps } from './types';

export function FilterSection({ title, children }: FilterSectionProps) {
    return (
        <div>
            <h4 className="text-sm font-medium mb-3">{title}</h4>
            {children}
        </div>
    );
}
