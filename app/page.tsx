
import React from 'react';
import { Hero, NewCollection, Novedades } from "@/app/components/index";
import RootLayout from './store/layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';


const page = async () => {
    /* const getProducts = await fetch(`http://localhost:3000/api/products`, {
        cache: 'no-store'
    })
    const products = await getProducts.json()

    const filteredProducts = products.filter(product => product.newIn === true) */

    /* console.log(filteredProducts) */
    interface Product {
        id: string;
        name: string;
        price: number;
        stock: number;
        category: string;
        img: string;
    }
    const getProducts = async () => {
        const productsRef = collection(db, "productos");
        const querySnapshot = await getDocs(productsRef);
        const products = querySnapshot.docs.map((docSnapshot) =>
            docSnapshot.data()
        ) as Product[];

        const filteredProducts = products.filter(product => product.newIn === true)
        return filteredProducts
    }

    const filteredProducts = await getProducts()

    
    


    return (
        <RootLayout>
            <Hero />
            <NewCollection title={"Descubrí la nueva colección"} />
            <Novedades title='Ultimas novedades' productsInSameCategory={filteredProducts} />
        </RootLayout>
    )
}

export default page