import React from 'react';
import type { Category } from '@/types/navtypes';
import NavlinksClient from './NavlinksClient';


const Navlinks = async () => {
    const res = await fetch(
        'https://api.abcz.workers.dev/api/bazardor/categories'
    ); //2 api

    const data: Category[] = await res.json();

    return <NavlinksClient data={data} />;
};

export default Navlinks;