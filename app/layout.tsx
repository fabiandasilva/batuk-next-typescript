import React from 'react';
import type { Metadata } from 'next'
import { NavBar } from './components' 
import Footer from './components/footer/Footer'
import './globals.css'

 
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
