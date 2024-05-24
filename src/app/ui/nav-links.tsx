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
    { name: 'Orders', href: '/orders' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Drivers', href: '/drivers' },
    { name: 'New', href: '/new' },
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
                        className={`flex h-[38px] items-center justify-center mr-1 ml-1 text-black rounded-md  p-3 text-sm font-medium hover:bg-blue-500 transition-colors hover:text-white md:flex-none md:justify-start md:p-2 md:px-3
            ${pathName == link.href ? 'bg-blue-900  text-white' : ''}
            `}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
