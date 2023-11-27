'use client'
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log("Carrito", cart.length)


    const addToCart = (item: any) => {
        setCart([...cart, item])
    }

    const removeItem = (itemId: any) => {
        setCart(cart.filter(item => item.id !== itemId))
    }


    return (
        <CartContext.Provider value={{ addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

