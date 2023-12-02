import { Card } from '@/app/components'
import React from 'react'

interface ParamsType {
    params: {
        category: string;
    };
}
export async function generateMetadata({ params }: ParamsType) {
    const categoria = params.category
    return {
        title: `Batuk | ${categoria}`,
    };
}

const page = async ({ params }: ParamsType) => {
    const categoria = params.category
    const getProducts = await fetch(`http://localhost:3000/api/products/${categoria}`, {
        cache: 'no-store'
    })
    const products = await getProducts.json()

    return (
        <>
            {products.map((novedad) => (
                <Card key={novedad.id}
                    name={novedad.name}
                    img={novedad.img}
                    price={novedad.price}
                    id={novedad.id} />
            ))}
        </>
    )

}

export default page;