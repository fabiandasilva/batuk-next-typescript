import React from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  category: string;
  img: string;
  color: string;
  size: string;
}

interface ItemDetailProps {
  product: Product;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ product }) => {
  return (

    <div className="pt-6 mx-auto flex  flex-row content-center items-center">

      <div>
        <Image
          width={300}
          height={300}
          src={product.img}
          alt={`${product.category}-${product.name}`}
          className="h-auto w-auto object-cover object-center"
        />
      </div>


      <div className="ml-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>


        <div className="mt-4">
          <p className="text-3xl tracking-tight text-gray-900">{`${product.name} - ${product.category}`}</p>
        </div>


        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>

        </div>


        <form className="mt-10">

          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
              <input
                type="radio"
                name="color-choice"
                value={product.color}
                className="sr-only"
                aria-labelledby={`color-choice-${product.color}-label`}
              />
              <span id={`color-choice-${product.color}-label`} className="sr-only">
                {product.color}
              </span>
              <span aria-hidden="true" className={`h-8 w-8 bg-${product.color} rounded-full border border-black border-opacity-10`}></span>
            </label>
          </div>

          
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <span>{product.size}</span>
            </div>
          </div>

          
          <button
            type="submit"
            className="mt-10 flex w-max items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Agregar al carrito
          </button>
        </form>
      </div>
    </div>

  );
};

export default ItemDetail;
