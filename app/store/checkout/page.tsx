'use client'
import { Notifications } from "@/app/components";
import CheckOutForm from "@/app/components/checkOutForm/CheckOutForm";
import CheckOutItems from "@/app/components/checkOutItems/CheckOutItems";
import { useAuthContext } from "@/app/context/AuthContext";
import { useCartContext } from '@/app/context/CartContex'
import { useRouter } from 'next/navigation'

import React, { useState } from "react";
import { toast } from "react-toastify";



const CheckOutPage = () => {
    const router = useRouter()
    const cartContext = useCartContext();
    const cart = cartContext ? cartContext.cart : null;

    const clearCart = cartContext ? cartContext.clearCart : null;

    const { user } = useAuthContext();

    /* console.log(user) */

    const [values, setValues] = useState({
        email: user.email || "",
        numberCard: "",
        dateCard: "",
        cvvCard: "",
    });


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...values, cart };
        /* vacio el carrito y redirecciono */
        cartContext?.clearCart();
        toast.success("Compra realizada con exito, pronto nos pondremos en contacto contigo.");

        setTimeout(() => {
            router.push('/store/Todos')
        }, 3000);




    }

    return (
        <>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pt-40 pb-36 h-full">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Orden de compra</p>
                    <CheckOutItems cart={cart} />
                </div>
                <CheckOutForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                />
                <Notifications />
            </div>
        </>
    );
}

export default CheckOutPage;
