import React from 'react';
import type { Category } from '@/types/navtypes';
import Link from 'next/link';

const Navlinks = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data = await res.json()

    return (
        <div className="w-full border-b border-gray-200 bg-white">
            <div className="container mx-auto flex flex-row gap-4 p-4">
                {
                    data.map((n: Category) => (
                        <Link key={n.id} href={`/categories/${n.id}`} className="flex flex-row gap-2">
                            {n.icon}
                            {n.nameBn}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Navlinks;