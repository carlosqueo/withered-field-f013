import { FormControl, FormField, FormItem, FormMessage } from '@atoms/Form';
import { Select } from '@atoms/Select';
import React from 'react';

interface IFormSelect
    extends Omit<React.ComponentProps<typeof FormField>, 'render'> {
    options: Array<{ value: string | number; label: string }>;
    placeholder?: string;
}

const FormSelect: React.FC<IFormSelect> = ({
    options,
    name,
    control,
    placeholder,
    ...props
}) => {
    return (
        <FormField
            {...props}
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Select
                            {...field}
                            placeholder={placeholder}
                            options={options.map(opt => ({
                                ...opt,
                                value: String(opt.value),
                            }))}
                            onValueChange={field.onChange}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export { FormSelect };
