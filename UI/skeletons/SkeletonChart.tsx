import { Skeleton } from '@atoms/Skeleton';

export const SkeletonChart = () => {
    return (
        <div className='flex flex-col gap-6 w-[100%]'>
            {/* <Skeleton className='w-[80%] h-[20px]' /> */}
            <div className='flex h-[350px] bg-white rounded-lg '>
                <div className='flex gap-5 items-end p-8'>
                    <Skeleton className={'h-[100%] w-[40px]'} />
                    <Skeleton className={'h-[80%] w-[40px]'} />
                    <Skeleton className={'h-[90%] w-[40px]'} />
                    <Skeleton className={'h-[50%] w-[40px]'} />
                    <Skeleton className={'h-[60%] w-[40px]'} />
                    <Skeleton className={'h-[70%] w-[40px]'} />
                    <Skeleton className={'h-[70%] w-[40px]'} />
                    <Skeleton className={'h-[90%] w-[40px]'} />
                    <Skeleton className={'h-[100%] w-[40px]'} />
                    <Skeleton className={'h-[100%] w-[40px]'} />
                    <Skeleton className={'h-[70%] w-[40px]'} />
                    <Skeleton className={'h-[60%] w-[40px]'} />
                    <Skeleton className={'h-[100%] w-[40px]'} />
                    <Skeleton className={'h-[100%] w-[40px]'} />
                </div>
                <div className='flex flex-col gap-6 h-full justify-center'>
                    <Skeleton className='w-[200px] h-[20px]' />
                    <Skeleton className='w-[100px] h-[20px]' />
                    <Skeleton className='w-[200px] h-[20px]' />
                    <Skeleton className='w-[100px] h-[20px]' />
                    <Skeleton className='w-[200px] h-[20px]' />
                    <Skeleton className='w-[100px] h-[20px]' />
                </div>
            </div>
        </div>
    );
};