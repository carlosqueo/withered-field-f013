interface PageTitleProps {
    children: string;
}
export const PageTitle = ({
    children,
}: PageTitleProps) => {
    return (
        <div className="text-3xl font-bold leading-8 text-grayBlue-1300">
            {children}
        </div>
    );
};
