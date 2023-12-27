import Image from 'next/image'
import React from 'react'

type Props = {
    cart: {
        id: string;
        name: string;
        img: string;
        size: string;
        color: string;
        price: number;
    }[];

}

function CheckOutItems({ cart }: Props) {
    return (
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.map((item) => (

                <div key={item.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <Image className="m-2 h-24 w-28 rounded-md border object-cover object-center object-top" src={item.img} alt={item.name} width={384}
                        height={576} />
                    <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">{item.name}</span>
                        <span className="float-right text-gray-400">{item.size}</span>
                        <p className="mt-1 text-sm text-gray-500">
                            Color:
                            <div
                                style={{ backgroundColor: item.color }}
                                className={`w-10 h-4 p-0 m-0   border-2 border-gray-500`}></div></p>
                        <p className="text-lg font-bold">${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CheckOutItems