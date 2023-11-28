'use client'
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => useContext(CartContext)

interface Product {
    id: string;
    size: string;
    color: string;

}
interface CartContextType {
    cart: Product[];
    addToCart: (item: Product) => void;
    removeItem: (itemId: string) => void;
}
interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {

    const [cart, setCart] = useState<Product[]>([]);
    /*  console.log("Carrito", cart.length)
     console.log("Carrito", cart) */


    const addToCart = (item: Product) => {
        if (!cart.some(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color)) {
            setCart([...cart, item]);
        }
    };

    const removeItem = (itemId: string) => {
        setCart(cart.filter(item => item.id !== itemId))
    }

    const value: CartContextType = {
        cart,
        addToCart,
        removeItem
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

