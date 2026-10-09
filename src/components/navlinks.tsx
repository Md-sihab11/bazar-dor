import React, { Suspense } from 'react';
import type { Category } from '@/types/navtypes';
import NavlinksClient from './NavlinksClient';

const Navlinks = async () => {
    try {
        const res = await fetch(
            'https://api.api-store.workers.dev/api/bazardor/categories',

            { next: { revalidate: 300 } }
        );

        if (!res.ok) {
            return (
                <Suspense fallback={<div className="w-full border-b border-gray-200 bg-white h-14" />}>
                    <NavlinksClient data={[]} />
                </Suspense>
            );
        }

        const data: Category[] = await res.json();
        return (
            <Suspense fallback={<div className="w-full border-b border-gray-200 bg-white h-14" />}>
                <NavlinksClient data={data} />
            </Suspense>
        );
    } catch {
        return (
            <Suspense fallback={<div className="w-full border-b border-gray-200 bg-white h-14" />}>
                <NavlinksClient data={[]} />
            </Suspense>
        );
    }
};

export default Navlinks;