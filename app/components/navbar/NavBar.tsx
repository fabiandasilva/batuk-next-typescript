import Image from 'next/image'
import React from 'react'
import { Logo, Home, Store, User, Cart } from "@/public/index";

const NavBar = () => {
    return (
        <header className=' bg-white  fixed w-full p-1 z-10'>
            <nav className="flex flex-row flex-nowrap justify-between items-center p-4 ">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <Image src={Home} alt="Inicio" width="20" height="20" />
                        <span className="text-sm leading-5">Home</span>
                    </div>
                    <div className="flex items-center space-x-2 pt-1">
                        <Image src={Store} alt="Tienda" width="20" height="20" />
                        <span className="text-sm leading-5">Store</span>
                    </div>
                </div>

                <ul>
                    <li>
                        <Image src={Logo} alt="Batuk" width="100" height="100" />
                    </li>
                </ul>
                <div className="flex gap-2">
                    <div className="flex items-center space-x-2 pt-1">
                        <Image src={User} alt="Tienda" width="20" />
                    </div>
                    <div className="flex items-end space-x-2">
                        <Image src={Cart} alt="Inicio" width="20" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar