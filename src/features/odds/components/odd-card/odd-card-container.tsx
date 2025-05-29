import Link from 'next/link';
import { useOddCardContainerClassName } from './hooks';
import type { OddCardContainerProps } from './types';

export function OddCardContainer({ isHot, children, href, className }: OddCardContainerProps) {
    const containerClassName = useOddCardContainerClassName(isHot, className);

    return (
        <Link href={href} className="block">
            <div className={containerClassName}>{children}</div>
        </Link>
    );
}
