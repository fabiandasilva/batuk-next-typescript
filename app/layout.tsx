import React from 'react';
import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './context/AuthContext';



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
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}
