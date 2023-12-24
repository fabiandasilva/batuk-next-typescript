
import Link from 'next/link'
import React from 'react'

interface Props {
    segments: string[]
}

export const BreadCrumb = ({ segments }: Props) => {
    return (
        <main className="bg-gray-100 p-4">
            <ol role="list" className="flex items-center space-x-2">
                {segments.map((segment, index) => (
                    <li key={index}>
                        <div className="flex items-center text-blue-500 hover:underline">
                            <Link href={`/${segments.slice(0, index + 1).join('/')}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>

                            </Link>
                            {index < segments.length - 1 && (
                                <svg
                                    className="mx-2 h-4 w-4 fill-current text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L9 7.414V15a1 1 0 11-2 0V7.414L4.707 9.707a1 1 0 01-1.414-1.414l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    )
}