import React from 'react';
import { Input, InputProps } from '@/UI/atoms/Input';

const InputLabel = ({ label, id, name, type, placeholder, value, onChange, onBlur, className }: InputProps & { label: string }) => {
    return (
        <div className='flex flex-col gap-3'>
            <label className='text-blackenedBlue-1000 text-base font-medium' htmlFor={id}>{label}</label>
            <Input id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} className={className} />
        </div>
    );
};

export default InputLabel;