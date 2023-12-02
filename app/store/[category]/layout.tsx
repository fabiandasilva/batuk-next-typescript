
import FilterAside from '@/app/components/filter/Filter';
import React from 'react';



const CategoryPage = async ({ children }) => {

    return (
        <section className="flex mx-auto justify-center gap-4 pt-40">
            <FilterAside />
            <main className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 pb-20">
                {children}
            </main>
        </section>
    );
};

export default CategoryPage;
