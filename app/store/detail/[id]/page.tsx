import { Novedades } from '@/app/components';
import ItemDetail from '@/app/components/itemDetail/ItemDetail';
import { MockupData } from '@/app/data/Mockup';
import React from 'react';

interface ParamsType {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: ParamsType) {
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
}




const Page = async ({ params }: ParamsType) => {
    const { id } = params;

    const getProducts = await fetch(`http://localhost:3000/api/products/`, {
        cache: 'no-store'
    })
    const findProduct = await getProducts.json()

    const searchProductId = findProduct.find((product) => product.id === parseInt(id));

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
