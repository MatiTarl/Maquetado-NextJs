'use client'
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orders', href: '/Orders' },
    { name: 'Inventory', href: '/Inventory' },
    { name: 'Vehicles', href: '/Vehicles' },
    { name: 'Drivers', href: '/Drivers' },
    { name: 'New', href: '/New' },
];

export default function NavLinks() {
    const pathName = usePathname()
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[38px] items-center justify-center mr-1 ml-1 text-black rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathName == link.href ? 'bg-sky-100 text-blue-600' : ''}
            `}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
