import React from 'react';
import { DropOrUploadExcel } from './DropOrUploadExcel';
import { FormControl, FormField, FormItem, FormMessage } from '@atoms/Form';

interface IFormFile
    extends Omit<React.ComponentProps<typeof FormField>, 'render'> {
    label: string;
}

const FormFile = ({ name, control, label, ...props }: IFormFile) => {
    return (
        <FormField
            {...props}
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <DropOrUploadExcel
                            onLoad={field.onChange}
                            label={label}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export { FormFile };
