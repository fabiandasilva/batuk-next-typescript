'use client'

import Image from 'next/image'
import React from 'react'

interface Props {
    name: string;
    color: [string];
    price: number;
    stock: number;
    size: [string];
    img: string;

}


const CardViewer = ({ name, color, price, stock, size, img }: Props) => {




    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto pt-5">
            <Image width={1080}
                height={1620} className="w-full" src={img} alt="Product" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="mb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Color: {color}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Size:{size}</span>
                </div>
                <p className="text-gray-700 text-base mb-2">Precio: ${price}</p>
                <p className="text-gray-700 text-base">Stock: {stock}</p>
            </div>
        </div>
    )
}

export default CardViewer