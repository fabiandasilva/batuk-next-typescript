import { Novedades } from '@/app/components';
import ItemDetail from '@/app/components/itemDetail/ItemDetail';
import { db } from '@/firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';

interface ParamsType {
    params: {
        id: string;
    };
}

/* export async function generateMetadata({ params }: ParamsType) {
    const { id } = params;

    const getProducts = await fetch(`http://localhost:3000/api/products/`, {
        cache: 'no-store'
    })
    const findProduct = await getProducts.json()


    const searchProductId = findProduct.find((product) => product.id === parseInt(id));


    const nombreProducto = searchProductId.name;
    const nombreCategoria = searchProductId.category;
    const productDetail = searchProductId;

    return {
        title: `${nombreCategoria} | ${nombreProducto}`,
        productDetails: productDetail,
    };
} */


interface Product {
    id: string,
    category: string,
    name: string,
    price: number,
    size: [],
    color: [],
    img: string,
    stock: number,
    newIn: true
}




const Page = async ({ params }: ParamsType) => {
    const { id } = params;

    /*  const getProducts = await fetch(`http://localhost:3000/api/products/`, {
         cache: 'no-store'
     }) */

    const getProductsByFirebase = async (params: string) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const productsRef = collection(db, 'productos');
        const q = params === "all" ? productsRef
            : query(productsRef, where('category', '==', params))

        const querySnapshot = await getDocs(q)

        return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Product)
    }


    const findProduct = await getProductsByFirebase('all')
    /* console.log('findProduct', findProduct) */

    const searchProductId = findProduct.find((product) => product.id === (id));

    /* console.log('searchProductId', searchProductId) */

    const renderProductWhitCategory = findProduct.filter((product) => product.category === searchProductId?.category).slice(0, 4)

    if (!searchProductId) {
        return null;
    }

    return (
        <section className='pt-[10rem]' >
            <ItemDetail product={searchProductId} />
            <Novedades title='También puede interesarte' productsInSameCategory={renderProductWhitCategory} />
        </section>
    );
};


export default Page;
