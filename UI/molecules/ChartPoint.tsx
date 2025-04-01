'use client';

import { Div } from '@atoms/Div';
import { cn } from '@lib/utils';

interface ChartPointProps {
    value: number;
    title: string;
    valueDescription: string;
}

export const ChartPoint = ({ value, title, valueDescription }: ChartPointProps ) => {
    const colors = {
        good: 'text-success-1000',
        medium: 'text-warning-1000',
        bad: 'text-error-1000',
    };
    const getColor = (value: number) => {
        if (value >= 50)
            return colors.good;
        if (value > 25)
            return colors.medium;
        return colors.bad;
    };
    const color = getColor(value);
    return (
        <Div className='flex flex-col gap-4 bg-white p-8 rounded-lg'>
            <div className="text-xl text-center font-medium text-black">{title}</div>
            <div className='flex flex-col text-center w-full'>
                <div className={cn(
                    color,
                    'text-4xl font-bold')}
                >
                    {value}
                </div>
                <div className="text-base text-grayBlue-1100">{valueDescription}</div>
            </div>
        </Div>
    );
};