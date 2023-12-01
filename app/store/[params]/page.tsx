import { MockupData } from '@/app/data/Mockup'
import React from 'react'

interface ParamsType{
  params: string

}


export async function generateMetadata({ params }: ParamsType) {


  const products = MockupData;


  const targetProductId = parseInt(params.params, 10);

  console.log("El id es ", targetProductId)


  const productParams = products.filter((product) => product.id === targetProductId);

  console.log(productParams);

  const nombreProducto = productParams[0].name;
  const nombreCategoria = productParams[0].category;
  /*   console.log(nombreProducto) */

  return {
    title: `${nombreCategoria} | ${nombreProducto}`
  };
}


const page = () => {
  return (
    <div className='pt-48 pb-48 flex justify-center flex-col text-center'>
      <h1>Seguimos trabajando </h1>
      <br />
      <p>pronto estará disponible</p>
    </div>
  )
}

export default page