import React from "react";
import Card from "../UI/Card/Card";

interface PropsCard {
  productsInSameCategory: {
    id: number;
    name: string;
    img: string;
    price: number;
  }[];
  title: string;
}



const Novedades = ({ productsInSameCategory, title }: PropsCard) => {

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4   sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productsInSameCategory.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Novedades;
