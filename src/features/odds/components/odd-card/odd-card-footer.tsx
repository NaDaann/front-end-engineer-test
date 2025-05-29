import { formatDate } from '@/lib/utils';
import type { OddCardFooterProps } from './types';

export function OddCardFooter({ odd }: OddCardFooterProps) {
    return (
        <div className="relative z-10 border-t pt-3 group-hover:border-gray-300 transition-colors duration-300">
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">Mercado: {odd.market}</span>
                <span className="text-gray-600">Seleção: {odd.selection}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
                Atualizado: {formatDate(odd.lastUpdated)}
            </div>
        </div>
    );
}
