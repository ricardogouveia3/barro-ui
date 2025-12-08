import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export default function Skeleton({ className, ...props }: Readonly<HTMLAttributes<HTMLDivElement>>) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-stone-200 dark:bg-stone-800', className)}
            {...props}
        />
    );
}
