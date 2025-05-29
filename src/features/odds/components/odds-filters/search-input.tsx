'use client';

import { memo, useCallback, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export const SearchInput = memo(function SearchInput({
    value,
    onChange,
    disabled = false,
}: SearchInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const wasDisabledRef = useRef(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
        },
        [onChange],
    );

    // Restaurar o foco quando o campo deixar de estar desabilitado
    useEffect(() => {
        if (wasDisabledRef.current && !disabled && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 10);
        }
        wasDisabledRef.current = disabled;
    }, [disabled]);

    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
                ref={inputRef}
                placeholder="Buscar por time, partida ou casa de apostas..."
                value={value}
                onChange={handleChange}
                className="pl-10"
                disabled={disabled}
            />
        </div>
    );
});
