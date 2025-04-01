import { Avatar, AvatarFallback, AvatarImage } from '@atoms/Avatar';
import React from 'react';

const UserAvatar = ({
    src,
    alt,
    fallback,
    className,
}: {
    className?: string;
    src: string;
    alt: string;
    fallback: string;
}) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
};

export { UserAvatar };
