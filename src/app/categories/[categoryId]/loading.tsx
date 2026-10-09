import React from 'react';

const CategoryLoading = () => {
    return (
        <section>
            {/* Marquee skeleton */}
            <div className="h-10 bg-gray-100 animate-pulse w-full" />

            {/* Header skeleton */}
            <div className="mt-5 mb-5 bg-[#FAFCFA] container mx-auto flex gap-3 p-5 rounded-2xl border border-gray-200">
                <div className="w-16 h-16 shrink-0 bg-gray-200 rounded-xl animate-pulse" />
                <div className="flex flex-col gap-2 justify-center">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                </div>
            </div>

            {/* Sort skeleton */}
            <div className="bg-[#FAFCFA] container mx-auto flex justify-end items-center gap-3 p-5 rounded-2xl border border-gray-200 mt-5">
                <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="container mx-auto font-semibold mt-5">
                <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Product cards skeleton */}
            <div className="container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="card bg-base-100 shadow-sm p-4 sm:p-5">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 shrink-0 bg-gray-200 rounded-xl animate-pulse" />
                            <div className="flex flex-col gap-2 flex-1">
                                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />
                            <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryLoading;
