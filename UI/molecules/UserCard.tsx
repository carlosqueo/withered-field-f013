
import React from 'react';
import { getInitials } from '@lib/utils';
import { CardInfo } from './CardInfo';
import { UserAvatar } from './UserAvatar';

const UserCard = ({ role, fullName, avatarUrl }: { role: string, fullName: string, avatarUrl: string }) => {
    return (
        <CardInfo
            className='cursor-pointer select-none gap-2'
            infoClassName={(index) => `${index === 1 ? 'text-xs mt-1 text-gray-400' : 'text-sm'} mt-0`}
            leftPanelItem={
                <UserAvatar className='h-8 w-8' alt='avatar' src={avatarUrl} fallback={getInitials(fullName)}/>
            }
            info={[
                fullName,
                role
            ]}
        />
    );
};

export { UserCard };