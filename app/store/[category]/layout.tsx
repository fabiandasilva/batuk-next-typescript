
import FilterAside from '@/app/components/filter/Filter';
import Skeleton from '@/app/components/skeleton/Skeleton';
import React, { Suspense } from 'react';



const CategoryPage = async ({ children }) => {

    return (
        <section className="flex mx-auto justify-center gap-4 pt-40">
            <FilterAside />
            <Suspense fallback={<Skeleton />}>
                <main className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 pb-20">
                    {children}
                </main>
            </Suspense>
        </section>
    );
};

export default CategoryPage;
