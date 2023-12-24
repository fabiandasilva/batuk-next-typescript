'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Logo } from "@/public/index";
import { BreadCrumb } from '../breadCrumb/BreadCrumb';



const AdminNavBar = () => {






    return (
        <>
            <header className='bg-white fixed w-full p-1 z-10 pb-9'>
                <nav className="flex flex-row flex-nowrap justify-center items-center p-4">

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
                </nav>
                
                <BreadCrumb segments={['admin']} />

            </header>

        </>
    );
};

export default AdminNavBar;