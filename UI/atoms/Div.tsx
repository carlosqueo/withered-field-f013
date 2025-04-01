import React, { ReactNode } from 'react';
import { Loading } from './Loading';

export type TDivProps <C extends React.ElementType> = {
    children: ReactNode;
    as?: C;
    hidden?: boolean | null;
    loading?: boolean;
    loadingComponent?: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
} & React.ComponentPropsWithoutRef<C>;

const Div = <C extends React.ElementType = 'div'>({
    loading,
    hidden,
    children,
    as,
    loadingComponent: LoadingComponent = Loading,
    ...props
}: TDivProps<C>) => {
    const Component = as ?? 'div';
    if (loading) return <LoadingComponent />;
    if (hidden) return null;
    return <Component {...props}>{children}</Component>;
};

export { Div };