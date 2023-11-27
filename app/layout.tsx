import React from 'react';
import type { Metadata } from 'next'
import { NavBar } from './components'
import Footer from './components/footer/Footer'
import './globals.css'
import { CartProvider } from './context/CartContex';


export const metadata: Metadata = {
  title: 'Batuk',
  description: 'E-commerce de indumentaria streetwear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <CartProvider>
          <NavBar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
