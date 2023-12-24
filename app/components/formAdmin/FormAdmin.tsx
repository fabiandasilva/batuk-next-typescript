import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'
import Notifications from '../notifications/Notifications'

export default function FormAdmin({ values, handleSubmit, handleChange, setFile, hide }) {

    type FormAdminProps = {
        values: {
            name: string,
            price: number,
            category: string,
            color: string,
            size: string,
            newIn: boolean,
            stock: number
        },
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Información del producto</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {hide ? <div className="sm:col-span-5">
                            <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                                Id
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        name="id"
                                        value={values.id}
                                        onChange={handleChange}
                                        placeholder="4500"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div> : null}

                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="WEST"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Precio
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        placeholder="4500"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Cambiar imagen
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex items-center text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer bg-white rounded-md font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 relative px-4 py-2 border border-gray-300"
                                        >
                                            <span className='flex items-center'>
                                                <span className='mr-2'>Subir Imagen</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                    />
                                                </svg>
                                            </span>
                                            <input

                                                type="file"
                                                id="file-upload"
                                                allowMultiple={false}
                                                onChange={(e) => setFile(e.target.files[0])}
                                                className="hidden"
                                            />
                                        </label>
                                    </div>

                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                Categoria
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Remera"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                                Stock
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        name="stock"
                                        value={values.stock}
                                        onChange={handleChange}
                                        placeholder="5"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="border-b border-gray-900/10 pb-12">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3 sm:col-start-1">
                            <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                                Colores
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={values.color.join(",")}
                                    onChange={handleChange}
                                    placeholder='#000000, #ffffff, #ff0000'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    name="color"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">
                                Talles
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="size"
                                    value={values.size.join(",")}
                                    onChange={handleChange}
                                    placeholder='XS, S, M, L, XL'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="mt-10">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Novedades</h2>
                        <div className="space-y-6">
                            <fieldset>
                                <div className="mt-6 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                name="newIn"
                                                value={values.newIn ? "true" : "false"}
                                                onChange={handleChange}
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="candidates" className="font-medium text-gray-900">
                                                Marcar como novedad
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Guardar
                </button>
            </div>
            <Notifications />
        </form>
    )
}
