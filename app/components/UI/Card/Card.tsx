import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  img: string;
  name: string;
  color: string;
  price: number;
  id: number;
}

const Card = ({ img, name, color, price, id }: CardProps) => {

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "ARS",
    }).format(price);
  };

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={img}
          alt="Batuk new collection"
          objectFit="contain"
          objectPosition="center"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width="200"
          height="300"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/store/detail/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </Link>
          </h3>
          <div className="flex space-x-1 text-sm text-gray-500">
            <div
              className="rounded-full w-5 h-5 border-black"
              style={{ backgroundColor: color, border: "solid 0.5px #CECECE" }}
            >
              &nbsp;
            </div>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default Card;
