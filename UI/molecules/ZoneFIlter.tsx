import { Select } from '@/UI/atoms/Select';

export const ZoneFilter = () => {
    return (
        <Select
            className='bg-white border border-snowWhite-600 rounded-lg'
            options={[]}
            defaultSelected='Zone: Principal'
            onValueChange={() => { }}
        />
    );
};
