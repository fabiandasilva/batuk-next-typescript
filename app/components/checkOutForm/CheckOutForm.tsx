import React from 'react';
import { useCartContext } from '@/app/context/CartContex';

interface CheckOutFormProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: {
        email: string;
        displayName: string;
        numberCard: string;
        dateCard: string;
        cvvCard: string;
    };
}

const CheckOutForm: React.FC<CheckOutFormProps> = ({ handleChange, handleSubmit, values }) => {
    const cartContext = useCartContext();
    const cart = cartContext?.cart || [];

    const getTotalPrice = (): number => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    };

    return (
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Detalles del pago</p>
            <p className="text-gray-400">Complete su pedido proporcionando sus datos de pago.</p>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            required
                            name="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="correofalso@gmail.com"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                    </div>
                </div>             

                <label className="mt-4 mb-2 block text-sm font-medium">Tajerta de credito</label>
                <div className="flex">
                    <div className="relative w-7/12 flex-shrink-0">
                        <input type="number" name='numberCard'
                            value={values.numberCard || ''}
                            required
                            onChange={handleChange} className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                            </svg>
                        </div>
                    </div>
                    <input type="text" name='dateCard'
                        value={values.dateCard || ''}
                        required
                        onChange={handleChange} className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />

                    <input type="number" name='cvvCard'
                        required
                        value={values.cvvCard || ''}
                        onChange={handleChange} className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVV" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">${getTotalPrice()}</p>
                </div>
                <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Realizar compra</button>
            </form>
        </div>
    )
}

export default CheckOutForm