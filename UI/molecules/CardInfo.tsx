import { Div } from '@atoms/Div';
import { cn } from '@lib/utils';
import React, { ReactNode } from 'react';

export type TCardInfo<C extends React.ElementType> = {
    as?: C;
    loading?: boolean;
    info?: string[];
    leftPanelItem?: ReactNode;
    infoClassName?: (_index: number) => string;
    extraInfo?: ReactNode;
    className?: string;
} & React.ComponentPropsWithoutRef<C>;

const CardInfo = <C extends React.ElementType = 'div'>({
    as,
    leftPanelItem,
    info = [],
    infoClassName = () => '',
    extraInfo,
    className,
    ...props
}: TCardInfo<C>) => {
    const Component = as ?? Div;
    return (
        <Component
            className={cn('flex items-center gap-4', className)}
            {...props}
        >
            {leftPanelItem}
            <Div className="w-[80%]">
                {info.map((item, index) => (
                    <Div
                        key={index}
                        className={cn(
                            index === 0
                                ? 'text-xl font-medium'
                                : 'text-sm mt-2',
                            index === 1 ? 'text-base' : '',
                            infoClassName(index)
                        )}
                    >
                        {item}
                    </Div>
                ))}
                {extraInfo}
            </Div>
        </Component>
    );
};

export { CardInfo };
