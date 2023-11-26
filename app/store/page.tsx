import React from "react";
import FilterAside from "../components/filter/Filter";
import { Card } from "@/app/components/index";
import { MocukupDada } from "../data/Mockup";

const Page = () => {
  const productos = MocukupDada;
  
  const getCategories = [...new Set(productos.map((product) => product.category))];
  const getColors = [...new Set(productos.flatMap((product) => product.color))];
  




  return (
    <section className="flex mx-auto justify-center gap-4 pt-40">
      <FilterAside getCategories={getCategories} getColors={getColors} />
      <main className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 pb-20">
        {productos.map((novedad) => (
          <Card
            key={novedad.id}
            name={novedad.name}
            img={novedad.img}
            price={novedad.price}
            id={novedad.id}
          />
        ))}
      </main>
    </section>
  );
};

export default Page;
