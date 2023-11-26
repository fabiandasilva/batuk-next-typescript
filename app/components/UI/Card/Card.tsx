import { useFormatPrice } from "@/app/utils/useFormatPrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  img: string;
  name: string;
  price: number;
  id: number;
}

const Card = ({ img, name, price, id }: CardProps) => {

  const formattedPrice = useFormatPrice({ price });

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
        </div>
        <p className="text-sm font-medium text-gray-900">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
};

export default Card;
