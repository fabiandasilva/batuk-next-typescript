import React from "react";
import Card from "../UI/Card/Card";
import { MocukupDada } from "@/app/data/Mockup";

 

const Novedades  = () => {
  const novedades = MocukupDada 

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ultimas novedades</h2>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4   sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     {novedades.filter((novedad) => novedad.newIn === true).map((novedad) => (
        <Card           
          key={novedad.id}          
          name={novedad.name}
          img={novedad.img}
          price={novedad.price}
          color={novedad.color}
          id={novedad.id}
        />
      ))}  
        </div>
      </div>
    </div>   
    </section>
  );
};

export default Novedades;
