'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Logo, Home, Store, User, Cart } from "@/public/index";
import CartList from '@/app/components/cart/Cart';
import { useCartContext } from '@/app/context/CartContex';

interface Path {
  name?: string;
  path?: string;
  image: StaticImageData;
}

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open);
  };
  const paths: Path[] = [
    {
      path: '/',
      image: Home,
      name: 'Home'
    },
    {
      path: '/store/all',
      image: Store,
      name: 'Store'
    },
    {
      path: '/user',
      image: User
    },
    {

      image: Cart,
      name: 'Cart'
    }
  ];

  const { cart } = useCartContext();
  /* console.log("Carrito", cart.length)
 */

  return (
    <>
      <header className='bg-white fixed w-full p-1 z-10'>
        <nav className="flex flex-row flex-nowrap justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            {paths.slice(0, 2).map((item, index) => (
              <Link href={item.path || ""} key={index}>
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <Image src={item.image} alt={item.name ? item.name : ""} width="20" height="20" />
                    {item.name && <span className="text-sm leading-5 font-bold">{item.name}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <ul>
            <li>
              <Link href="/">
                <div className="flex items-center space-x-2 gap-1">
                  <div className="flex flex-col items-center">
                    <Image src={Logo} alt="Batuk" width="200" height="200" />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex gap-2">
            {paths.slice(2).map((item, index) => (
              <div className="flex items-center space-x-2 pt-1" key={index}>
                <div className="flex items-center space-x-2 gap-1">
                  {item.name == 'Cart' || item.name == 'cart' ? <button onClick={toggle}><Image src={item.image} alt={item.name ? item.name : ""} width="20" /><span className="text-xs font-bold absolute top-5 right-2  w-5 h-5 flex justify-center items-center">{cart.length === 0 ? "" : cart.length}</span></button> :
                    <div className="flex flex-col items-center">
                      <Image src={item.image} alt={item.name ? item.name : ""} width="20" />
                    </div>}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </header>
      <CartList open={open} setOpen={setOpen} />
    </>
  );
};

export default NavBar;