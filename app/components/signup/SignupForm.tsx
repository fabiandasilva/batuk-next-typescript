'use client'
import Link from 'next/link';
import React from 'react'


type SignupFormProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    values: {
        email: string;
        password: string;
        displayName: string;

    };
};

const SignupForm: React.FC<SignupFormProps> = ({ handleChange, handleSubmit, values }) => {



    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-40 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Registrar
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="displayName" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombre y apellido
                        </label>
                        <div className="mt-2">
                            <input
                                name='displayName'
                                value={values.displayName}
                                placeholder='Juan Perez'
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Correo electrónico
                        </label>
                        <div className="mt-2">
                            <input
                                name='email'
                                value={values.email}
                                placeholder='correofalso@hotmail.com'
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Contraseña
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                name='password'
                                value={values.password}
                                placeholder='********'
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
                        >
                            Registrarse
                        </button>
                        <Link href="/login">
                            <button
                                type="submit"
                                className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
                            >
                                Ingresar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm