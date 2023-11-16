import ItemDetail from '@/app/components/itemDetail/ItemDetail';
import { MocukupDada } from '@/app/data/Mockup';
import React from 'react';

interface Params {
    params: any;
}

export async function generateMetadata({ params }: Params) {
    const { id } = params;
    const products = MocukupDada;
    const searchProductId = products.filter((product) => product.id === parseInt(id));
    console.log('searchProductId', searchProductId);

    const nombreProducto = searchProductId[0].name;
    const nombreCategoria = searchProductId[0].category;
    const productDetail = searchProductId[0];

    return {
        title: `${nombreCategoria} | ${nombreProducto}`,
        productDetails: productDetail,
    };
}




const Page = ({ params }: any) => {
    const { id } = params;
    console.log(id)

    const findProduct = MocukupDada;
    const searchProductId = findProduct.find((product) => product.id === parseInt(id));
    console.log('searchProductId', searchProductId)

    return (
        <section className='w-screen'>
            <ItemDetail product={searchProductId} />
        </section>
    );
};


export default Page;
