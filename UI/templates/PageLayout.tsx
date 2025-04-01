import { ReactNode } from 'react';
import { Div } from '@atoms/Div';
import { cn } from '@/lib/utils';
import { PageTitle } from '@organisms/PageTitle';

interface PageLayoutProps {
    title: string;
    titleComponent?: ({ title }: { title: string }) => ReactNode;
    children: ReactNode;
    sidePage?: React.ReactNode;
    sideTitle?: React.ReactNode;
    className?: string;
}

export function PageLayout({
    title,
    titleComponent: TitleComponent,
    sideTitle,
    sidePage,
    children,
    className,
}: PageLayoutProps) {
    return (
        <Div className='grid-cols-7 grid h-full'>
            <div className={cn(sidePage ? 'col-span-5' : 'col-span-full', ' p-8 flex flex-col gap-10', className)}>
                <div className='flex items-center gap-4'>
                    {TitleComponent ? (
                        <TitleComponent title={title} />
                    ) : (
                        <PageTitle>{title}</PageTitle>
                    )}
                    {sideTitle}
                </div>
                <div className={cn(className)}>
                    {children}
                </div>
            </div>
            <Div hidden={!sidePage} className="col-span-2 bg-grayBlue-900 rounded-l-2xl h-full p-10">
                {sidePage}
            </Div>
        </Div>
    );
}
