import { Novedades } from '@/app/components';
import ItemDetail from '@/app/components/itemDetail/ItemDetail';
import { MocukupDada } from '@/app/data/Mockup';
import React from 'react';

interface ParamsType {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: ParamsType) {
    const { id } = params;

    const products = MocukupDada;
    const searchProductId = products.filter((product) => product.id === parseInt(id));


    const nombreProducto = searchProductId[0].name;
    const nombreCategoria = searchProductId[0].category;
    const productDetail = searchProductId[0];

    return {
        title: `${nombreCategoria} | ${nombreProducto}`,
        productDetails: productDetail,
    };
}




const Page = ({ params }: ParamsType) => {
    const { id } = params;
    console.log(id)

    const findProduct = MocukupDada;
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
