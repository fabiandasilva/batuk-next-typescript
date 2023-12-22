import { Button } from "@/app/components";
import React from "react";



const EditForm = () => {
    return (
        <div className="container m-auto mt-10 max-w-lg">
            <form className="mt-12 pt-60">
                <label>Slug: </label>
                <input
                    type="text"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                />

                <label>Precio: </label>
                <input
                    type="number"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                />

                <label>Stock: </label>
                <input
                    type="number"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="inStock"
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                />

                <label>Descripción: </label>
                <textarea
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                />

                <Button type="submit">Enviar</Button>
            </form>
        </div>
    );
};

export default EditForm;
