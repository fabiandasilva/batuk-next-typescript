
import React from 'react';
import { Hero, NewCollection, Novedades } from "@/app/components/index";
import RootLayout from './store/layout';


const page = async () => {
    const getProducts = await fetch(`http://localhost:3000/api/products`, {
        cache: 'no-store'
    })
    const products = await getProducts.json()

    const filteredProducts = products.filter(product => product.newIn === true)

    /* console.log(filteredProducts) */

    return (
        <RootLayout>
            <Hero />
            <NewCollection title={"Descubrí la nueva colección"} />
            <Novedades title='Ultimas novedades' productsInSameCategory={filteredProducts} />
        </RootLayout>
    )
}

export default page