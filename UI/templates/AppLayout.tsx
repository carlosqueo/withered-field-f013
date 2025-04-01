'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { cn } from '@lib/utils';
import { Div } from '@atoms/Div';
import { menuOptions } from '@lib/constants';
import { useAtom } from 'jotai';
import { themeAtom } from '@store/theme';
import { authService } from '@/services/AuthService';
import { LogOutIcon } from 'lucide-react';

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className={'h-screen relative'}>
            <ImageOverlay />
            <ColorOverlay />
            <div className="flex py-8 pr-8  h-full">
                <Navigation />
                <main className="w-full h-full bg-grayBlue-600 text-black rounded-xl z-10 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

const Navigation = () => {
    const pathname = usePathname();
    const [, setTheme] = useAtom(themeAtom);
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        const color = menuOptions.find(
            option => option.href === pathname
        )?.theme;
        if (color)
            setTheme(color);

    }, []);
    return (
        <nav className="flex flex-col w-max px-16 gap-16 z-10 overflow-auto h-full">
            <Image
                src="/images/logoQueoWhite.png"
                alt="Next.js logo"
                className=''
                width={132}
                height={58}
                priority
            />
            <div className="flex flex-col gap-6 h-full font-semibold">
                {menuOptions.map(option => {
                    const isSelected = currentPath === option.href;
                    return (
                        <Div
                            as={Link}
                            hidden={option?.hidden ?? false}
                            key={option.name}
                            className={cn(
                                option?.className ?? '',
                                isSelected
                                    ? 'bg-white text-black'
                                    : 'hover:bg-white hover:text-black text-white',
                                'flex items-center gap-2 rounded-[10px] px-3 py-2 w-min '
                            )}
                            href={option.href}
                            rel="noopener noreferrer"
                            onClick={() => {
                                setTheme(option.theme);
                                setCurrentPath(option.href);
                            }}
                        >
                            <option.icon className="w-6 h-6" />
                            <div className="text-wrap">{option.name}</div>
                        </Div>
                    );
                })}
                <Div
                    key={'exit'}
                    className={cn(
                        'hover:bg-white hover:text-black text-white',
                        'flex items-center gap-2 rounded-[10px] px-3 py-2 w-min cursor-pointer'
                    )}
                    onClick={() => authService.logout()}
                >
                    <LogOutIcon className="w-6 h-6" />
                    <div className="">Salir </div>
                </Div>
            </div>
        </nav>
    );
};

const ColorOverlay = () => {
    return (
        <div
            className={cn(
                'absolute w-screen h-screen top-0 left-0 transition-all duration-300 bg-[--overlay]'
            )}
        />
    );
};

const ImageOverlay = () => {
    return (
        <div className="absolute top-0 left-0 z-0 h-full">
            <Image
                src="/images/background.png"
                alt="background"
                width={1880}
                height={1200}
                className="h-full w-screen blur-[6px]"
                priority
            />
        </div>
    );
};

export default AppLayout;
