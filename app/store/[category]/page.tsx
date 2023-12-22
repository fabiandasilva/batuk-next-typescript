import { Card } from '@/app/components'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/config'


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

/* export async function getStaticPaths() {
    return {
        paths: [
            { params: { category: 'Remera' } },
            { params: { category: 'Buzo' } },
            { params: { category: 'Campera' } },
            { params: { category: 'Accesorios' } }
        ],
        fallback: false,
    };
}
 */

const getProducts = async (params: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const productsRef = collection(db, 'productos');
    const q = params === "Todos" ? productsRef
        : query(productsRef, where('category', '==', params))

    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

const page = async ({ params }: ParamsType) => {

    //Descoemntar para usar con json-server
    /* const getProducts = await fetch(`http://localhost:3000/api/products/${categoria}`, {
        cache: 'no-store'
    })
    const products = await getProducts.json() */


    const categoria = params.category
    const products = await (await getProducts(categoria))
     console.log('products', products) 

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