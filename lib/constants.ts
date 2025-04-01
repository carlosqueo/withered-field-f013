import {
    BusFront,
    Droplet,
    House,
    PersonStanding,
    Recycle,
    SettingsIcon,
    Wind,
    Zap,
} from 'lucide-react';

export const menuOptions = [
    { name: 'Inicio', href: '/', icon: House, theme: 'default' },
    {
        name: 'Energía',
        href: '/energy',
        icon: Zap,
        theme: 'energy',
    },
    {
        name: 'Agua',
        href: '/water',
        icon: Droplet,
        theme: 'water',
    },
    { name: 'Aire', href: '/air', icon: Wind, theme: 'air' },
    {
        name: 'Residuos',
        href: '/residues',
        hidden: true,
        icon: Recycle,
        theme: 'residues',
    },
    {
        name: 'Transporte',
        href: '/transport',
        hidden: true,
        icon: BusFront,
        theme: 'transport',
    },
    {
        name: 'Experiencia',
        href: '/experience',
        hidden: true,
        icon: PersonStanding,
        theme: 'experience',
    },
    {
        name: 'Configuración',
        href: '/settings',
        icon: SettingsIcon,
        theme: 'home',
        className: 'mt-auto'
    }
];