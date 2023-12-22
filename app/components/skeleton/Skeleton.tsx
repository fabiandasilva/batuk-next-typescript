import React from 'react';

const Card = () => (
    <div className="w-full">
        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    </div>
);

const Skeleton = () => {
    const numberOfCards = 8;

    return (
        <section className="bg-white">
            <div className="container px-6 mx-auto animate-pulse pb-20">
                <div className="grid grid-cols-1 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {[...Array(numberOfCards)].map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skeleton;
