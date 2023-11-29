'use client'
import React from 'react';
import { Hero, NewCollection, Novedades } from "@/app/components/index";
import { useCartContext } from './context/CartContex';


const page = () => {
    /*    const products = MocukupDada; */

    const { products } = useCartContext();

    const newCollection = products.filter((product) => product.newIn === true);

    return (
        <>
            <Hero />
            <NewCollection title={"Descubrí la nueva colección"} />
            <Novedades title='Ultimas novedades' productsInSameCategory={newCollection} />
        </>
    )
}

export default page