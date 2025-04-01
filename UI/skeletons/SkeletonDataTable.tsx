import { Skeleton } from '@atoms/Skeleton';

export const DataTableSkeleton = () => {
    const createSkeletonRow = (height: number, count: number) => (
        <div className='flex gap-6'>
            {Array.from({ length: count }).map((_, index) => (
                <Skeleton key={index + count} className={`h-${height} w-[220px]`} />
            ))}
        </div>
    );

    return (
        <div className='w-full flex items-center flex-col gap-6'>
            {createSkeletonRow(6, 5)}
            {createSkeletonRow(12, 5)}
            {createSkeletonRow(12, 5)}
            {createSkeletonRow(12, 5)}
            {createSkeletonRow(12, 5)}
            {createSkeletonRow(12, 5)}
        </div>
    );
};
