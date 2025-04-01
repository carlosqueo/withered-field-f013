import React from 'react';
import { Div } from './Div';

export const ChartTitle = ({ children }: { children: string }) => {
    return (
        <Div className="text-grayBlue-1300 text-2xl font-bold">{children}</Div>
    );
};
