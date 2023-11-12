import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Logo, Home, Store, User, Cart } from "@/public/index";

interface Path {
  name?: string;
  path: string;
  image: StaticImageData;
}

const NavBar  = () => { 
  const paths: Path[] = [
    {
      path: '/',
      image: Home,
      name: 'Home'
    },
    {
      path: '/store',
      image: Store,
      name: 'Store'
    },
    {
      path: '/user',
      image: User
    },
    {
      path: '/cart',
      image: Cart
    }
  ];

  return (
    <header className='bg-white fixed w-full p-1 z-10'>
      <nav className="flex flex-row flex-nowrap justify-between items-center p-4">
        <div className="flex items-center space-x-2"> 
          {paths.slice(0, 2).map((item, index) => (
            <Link href={item.path} key={index}>
              <div className="flex items-center">
                <div className="flex flex-col items-center"> 
                  <Image src={item.image} alt={item.name ? item.name :""} width="20" height="20" />
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
                  <Image src={Logo} alt="Batuk" width="100" height="100" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="flex gap-2">
          {paths.slice(2).map((item, index) => (
            <div className="flex items-center space-x-2 pt-1" key={index}>
              <Link href={item.path}>
                <div className="flex items-center space-x-2 gap-1">
                  <div className="flex flex-col items-center"> 
                    <Image src={item.image} alt={item.name ? item.name : ""} width="20" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;