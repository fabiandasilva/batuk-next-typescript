import React from "react";
import FilterAside from "../components/filter/Filter";
import { Card } from "@/app/components/index";
import { MocukupDada } from "../data/Mockup";

const Page = () => {
  const productos = MocukupDada;
  console.log(productos)


  return (
    <section className="flex mx-auto justify-center gap-4 pt-40">
      <FilterAside />
      <main className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        {productos.map((novedad) => (
          <Card
            key={novedad.id}
            name={novedad.name}
            img={novedad.img}
            price={novedad.price}
            color={novedad.color}
            id={novedad.id}
          />
        ))}
      </main>
    </section>
  );
};

export default Page;
