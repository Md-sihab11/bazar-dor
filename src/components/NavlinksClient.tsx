"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Category } from '@/types/navtypes';

const NavlinksClient = ({ data }: { data: Category[] }) => {
    const pathname = usePathname();

    return (
        <div className="w-full border-b border-gray-200 bg-white">
            <div className="container mx-auto flex flex-row gap-4 p-4 overflow-x-auto whitespace-nowrap">
                {data.map((n: Category) => {
                    const isActive = pathname === `/categories/${n.id}`;

                    return (
                        <Link
                            key={n.id}
                            href={`/categories/${n.id}`}
                            className={`flex flex-row items-center gap-2 rounded-lg px-3 py-2 shrink-0 transition-colors duration-300 ${
                                isActive
                                    ? "bg-green-500 text-white"
                                    : "bg-white text-black hover:bg-green-100"
                            }`}
                        >
                            {n.icon}
                            {n.nameBn}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NavlinksClient;