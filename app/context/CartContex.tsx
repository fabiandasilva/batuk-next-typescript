'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => useContext(CartContext)


interface Product {
    id: string;
    size: string;
    color: string;
    stock: number;
    price: number;
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



    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);



    const addToCart = (item: Product) => {
        if (!cart.some(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color)) {
            setCart([...cart, item]);
        }

        setCart(prevCart => {
            const updatedCart = [...prevCart];

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color);
            if (itemIndex !== -1) {

                if (updatedCart[itemIndex].stock > 0) {
                    updatedCart[itemIndex].stock -= 1;

                } else {

                    console.error('No hay suficiente stock');
                }
            }
            return updatedCart;
        });
    };


    const removeItem = (itemId: string) => {
        setCart(cart.filter(item => item.id !== itemId))
        localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.id !== itemId)));

    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    }

    const value: CartContextType = {
        cart,
        addToCart,
        removeItem, 
        clearCart
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

