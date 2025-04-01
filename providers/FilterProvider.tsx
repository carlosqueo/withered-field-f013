import { DateFilter } from '@/UI/molecules/DateFilter';
import { ZoneFilter } from '@/UI/molecules/ZoneFIlter';
import React, { createContext, useMemo, useState } from 'react';

interface FilterContextType {
    values: Record<string, string | number | boolean>;
    setValues: React.Dispatch<React.SetStateAction<Record<string, string | number | boolean>>>;
    filters: React.ComponentType[];
}

const Context = createContext<FilterContextType | null>(null);

interface FilterProviderProps {
    children: React.ReactNode | ((contextValues: FilterContextType) => React.ReactNode);
    filters: string[];
}

const FilterProvider = ({ children, filters: filtersProp }: FilterProviderProps) => {
    const [values, setValues] = useState<Record<string, string | number | boolean>>({});

    const filtersList = useMemo(() => ([
        { id: 'zones', component: ZoneFilter },
        { id: 'dates', component: DateFilter }
    ]), []);

    const filters = useMemo(() => {
        return filtersList.filter((filter) => filtersProp.includes(filter.id));
    }, [filtersList, filtersProp]);

    const contextValues = useMemo(() => ({
        values,
        setValues,
        filters: filters.map((filter) => filter.component)
    }), [values, setValues, filters]);

    return (
        <Context.Provider value={contextValues}>
            {typeof children === 'function' ? children(contextValues) : children}
        </Context.Provider>
    );
};

export const useFilter = () => {
    const context = React.useContext(Context);
    if (!context)
        throw new Error('useFilter no está dentro del proveedor');

    return context;
};

export default FilterProvider;
