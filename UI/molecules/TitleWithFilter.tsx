import { useFilter } from '@/providers/FilterProvider';
import { PageTitle } from '../organisms/PageTitle';
import { Div } from '../atoms/Div';
import React from 'react';

export const TitleWithFilter = ({ title }: { title: string }) => {
    const { filters } = useFilter();
    return (
        <div className='flex items-center gap-4 justify-between w-full'>
            <PageTitle>
                {title}
            </PageTitle>
            <Div className='flex items-center gap-4'>
                {filters.map((filter) => (
                    <div key={filter.name}>
                        {React.createElement(filter)}
                    </div>
                ))}
            </Div>
        </div>
    );
};