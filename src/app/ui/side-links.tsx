'use client'
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Overview', href: '/new/overview' },
    { name: 'Cylinder Stock', href: '/new/cylinder-stock' },
    { name: 'Regulators', href: '/new/regulators' },
    { name: 'Gas Mixes', href: '/new/gas-mixes' },
    { name: 'Pallets', href: '/new/pallets' },
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
                        className={`flex h-[38px] w-[20rem] flex-col justify-center text-left text-black rounded-xl p-3 m-3 text-sm font-medium hover:bg-gray-200  

            ${pathName == link.href ? 'bg-gray-100'  : ''}
            `}
                    >
                        <p className="text-start hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
