import React from 'react';
import type { Metadata } from 'next'
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
                {children}
            </body>
        </html>
    )
}
