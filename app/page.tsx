
import React from 'react';
import { Hero, NewCollection, Novedades } from "@/app/components/index";


const page = async () => {
    const getProducts = await fetch(`http://localhost:3000/api/products`, {
        cache: 'no-store'
    })
    const products = await getProducts.json()

    const filteredProducts = products.filter(product => product.newIn === true)

    /* console.log(filteredProducts) */

    return (
        <>
            <Hero />
            <NewCollection title={"Descubrí la nueva colección"} />
            <Novedades title='Ultimas novedades' productsInSameCategory={filteredProducts} />
        </>
    )
}

export default page