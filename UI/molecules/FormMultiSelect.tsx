import { FormControl, FormField, FormItem, FormMessage } from '@atoms/Form';
import { MultiSelect } from '@atoms/MultiSelect';
import React from 'react';

interface IFormMultiSelect
    extends Omit<React.ComponentProps<typeof FormField>, 'render'> {
    options: Array<{ value: string | number; label: string }>;
    placeholder?: string;
    className?: string;
}

const FormMultiSelect: React.FC<IFormMultiSelect> = ({
    options,
    placeholder,
    className,
    ...props
}) => {
    return (
        <FormField
            {...props}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormControl>
                        <MultiSelect
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

export { FormMultiSelect };
