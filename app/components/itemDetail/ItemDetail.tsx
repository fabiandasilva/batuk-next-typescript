"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Shipping } from "@/public/index";
import { useFormatPrice } from "@/app/utils/useFormatPrice";
import ButtonCart from "../UI/buttonCart/ButtonCart";
import { useCartContext } from "@/app/context/CartContex";




interface Product {
  name: string;
  category: string;
  img: string;
  color: [];
  size: [];
  price: number;
  stock: number;
  id: string;
}

interface ItemDetailProps {
  product: Product;
}

interface CartContextType {
  addToCart: (product: Product) => void;
}
const ItemDetail: React.FC<ItemDetailProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [stock, setStock] = useState({});

  const { addToCart } = useCartContext();


  const handleAddToCart = () => {
    if (selectedColor === "") {
      console.error("Por favor, selecciona un color antes de agregar al carrito.");
      return;
    }



    const newObjectCartItem = {
      ...product,
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      cantidad: selectedQuantity,
      color: selectedColor,
      size: selectedSize,
      stock: product.stock - selectedQuantity,
    };
    setStock(prevStock => ({
      ...prevStock,
      [product.id]: (prevStock[product.id] || product.stock) - selectedQuantity
    }));

    addToCart(newObjectCartItem) as CartContextType;;



  };

  const formattedPrice = useFormatPrice({ price: product.price });
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
          className="h-auto w-auto "
        />
      </div>
      <div className="ml-8 mt-0  w-[400px]">
        <div className="mt-5">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-xl uppercase ">
            {product.category} {product.name}
          </h1>
          <div className="mt-0">
            <h3>{formattedPrice}</h3>
          </div>
          <hr className="mt-5" />
          <h3 className="text-sm font-medium text-gray-900 mt-5">
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
            {product.size.length > 0 ? (
              <>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Talles disponibles</h3>
                <div className="flex items-center ">
                  <select className="text-lg" onChange={(e) => setSelectedSize((e.target as HTMLSelectElement).value)}>
                    {product.size.map((size, index) => (
                      <option key={index} value={size} className="text-lg">
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <h3 className="text-md font-medium text-gray-900">Talle único</h3>
            )}

            <h3 className="text-sm font-medium text-gray-900 mt-5">
              Cantidad
            </h3>
            {stock[product.id] <= 0 ? (
              <p className="text-sm font-medium text-gray-900 mt-5">
                Sin stock
              </p>
            ) : (
              <div className="flex items-center ">
                <select className="text-lg"
                  onChange={(e) => setSelectedQuantity(Number(e.target.value))}>
                  {[...Array(Math.max(0, stock[product.id] || product.stock)).keys()].map((_, index) => (
                    <option key={index} value={index + 1} className="text-lg">
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}


          </div>
          <ButtonCart
            onClick={handleAddToCart}
          >
            Agregar
          </ButtonCart>
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
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
