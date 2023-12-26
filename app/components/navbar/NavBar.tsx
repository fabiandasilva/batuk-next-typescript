'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Logo, Home, Store, User, Cart } from "@/public/index";
import CartList from '@/app/components/cart/Cart';
import { useCartContext } from '@/app/context/CartContex';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';

interface Path {
  name?: string;
  path?: string;
  image: StaticImageData;
}

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const paths: Path[] = [
    {
      path: '/',
      image: Home,
      name: 'Home'
    },
    {
      path: '/store/Todos',
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


  const [popoverOpen, setPopoverOpen] = useState(false)
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const toggleCartList = () => {
    setOpen(!open);
  }


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
                  {item.name === 'Cart' ? (
                    <button onClick={toggleCartList}>
                      <Image src={item.image} alt={item.name ? item.name : ""} width="20" />
                      <span className="text-xs font-bold absolute top-5 right-2  w-5 h-5 flex justify-center items-center">
                        {cart.length === 0 ? "" : cart.length}
                      </span>
                    </button>
                  ) : (
                    <div className="flex flex-col items-center">
                      <button onClick={togglePopover}>
                        <Image src={item.image} alt={item.name ? item.name : ""} width="20" />
                      </button>
                      <Popover
                        open={popoverOpen}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                        onClose={() => setPopoverOpen(false)}
                      >
                        <Box p={1} style={{ top: 200 }}>
                          <div className='flex flex-col'>
                            <Link href="/login"> <button>Iniciar sesión</button></Link>
                            <Link href="/signup"><button>Registrarse</button></Link>
                          </div>
                        </Box>
                      </Popover>
                    </div>
                  )}
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