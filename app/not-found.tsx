'use client'
 
import { useRouter } from "next/navigation";

export default function NotFound() {

    const router = useRouter()

    return (
        <>
            <main className="container m-auto min-h-screen pt-44">
                <h1 className="text-4x text-gray-600 my-4">Página no encontrada</h1>
                <hr />
                <p className="text-base my-4">La ruta que intentas acceder no existe</p>
                <button onClick={() => router.back()}>
                    Volver
                </button>
            </main>
        </>
    )
}