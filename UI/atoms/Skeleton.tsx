'use client';
import { cn } from '@lib/utils';

const Skeleton = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-gray-300/90', className)}
            {...props}
        />
    );
};

export { Skeleton };
