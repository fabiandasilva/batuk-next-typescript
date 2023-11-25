"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Shipping } from "@/public/index";

interface Product {
  name: string;
  category: string;
  img: string;
  color: [];
  size: string;
  price: number;
}

interface ItemDetailProps {
  product: Product;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex content-center justify-center">
      <div>
        <Image
          width={300}
          height={300}
          src={product.img}
          alt={`${product.category}-${product.name}`}
          className="h-auto w-auto object-cover object-center"
        />
      </div>
      <div className="ml-8 mt-11  w-[400px]">
        <form className="mt-5">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-xl uppercase ">
            {product.category} {product.name}{" "}
          </h1>
          <div className="mt-0">
            <h3>${product.price}</h3>
          </div>
          <hr className="mt-5" />
          <h3 className="text-sm font-medium text-gray-900">
            Seleccioná un color:
          </h3>
          <div className="flex">
            {product.color.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={`w-2 h-2 p-4 m-2 rounded-3xl ${selectedColor === color ? "border-2 border-gray-500" : ""
                  }`}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
          <hr className="mt-5" />
          <div className="mt-5">
            <h3 className="text-sm font-medium text-gray-900">Talles</h3>
            <div className="flex items-center ">
              <span>{product.size}</span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-sm uppercase font-medium text-white"
          >
            Agregar
          </button>
          <span>
            <p className="mt-5 text-sm font-medium text-gray-400 hover:underline">
              <a href="https://batukjeans.com.ar/envios-y-cambios/">
                Envíos, cambios y devoluciones
              </a>
            </p>
            <p className="mt-2 text-sm font-medium text-gray-400 hover:underline">
              <a href="https://batukjeans.com.ar/talles//talles">
                Ver tabla de talles
              </a>
            </p>
          </span>
          <Image
            width={300}
            height={200}
            src={Shipping}
            alt="Mercado Pago"
            className="h-auto w-auto object-cover object-center mt-7"
          />
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;
