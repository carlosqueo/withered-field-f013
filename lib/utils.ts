import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const getBucketURL = (url: string) => {
    const bucketURL = process.env.AWS_S3_BUCKET_URL ? process.env.AWS_S3_BUCKET_URL : 'https://queo-prod-s3.s3-us-west-2.amazonaws.com';
    return `${bucketURL}${url}`;
};

export const getInitials = (fullName: string) => {
    const initials = fullName.split(' ');
    return initials?.[0]?.[0] + initials?.[1]?.[0];

};