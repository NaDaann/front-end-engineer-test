'use client';

import Link from 'next/link';
import type { OddListItemContainerProps } from './types';
import { useOddListItemContainerClassName } from './hooks';

export function OddListItemContainer({
    isHot,
    children,
    href,
    className,
}: OddListItemContainerProps) {
    const containerClassName = useOddListItemContainerClassName(isHot, className);

    return (
        <Link href={href} className="block">
            <div className={containerClassName}>{children}</div>
        </Link>
    );
}
