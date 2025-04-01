import { Div } from '@atoms/Div';
import { Button } from '@atoms/Button';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from '@radix-ui/react-icons';
import React from 'react';

export interface PaginationProps {
    page: number;
    maxPage: number;
    setPage: (page: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    canNextPage: boolean;
    canPreviousPage: boolean;
}

export const Pagination = ({
    page,
    maxPage,
    setPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
}: PaginationProps) => {
    return (
        <Div className="flex gap-6">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                Página {page} de {maxPage}
            </div>
            <div className="flex items-center space-x-2 self-end">
                <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => setPage(0)}
                    disabled={!canPreviousPage}
                >
                    <span className="sr-only">Ir a la primera página</span>
                    <DoubleArrowLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    <span className="sr-only">Ir a la página anterior</span>
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    <span className="sr-only">Ir a la página siguiente</span>
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => setPage(maxPage - 1)}
                    disabled={!canNextPage}
                >
                    <span className="sr-only">Ir a la última página</span>
                    <DoubleArrowRightIcon className="h-4 w-4" />
                </Button>
            </div>
        </Div>
    );
};
