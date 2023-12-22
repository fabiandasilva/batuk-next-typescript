"use client";

import React, { useState } from "react";
import { storage, db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

import Notifications from "@/app/components/notifications/Notifications";

const createProduct = async (values, file) => {
    /* throw new Error('Error forzado para pruebas'); */
    const storageRef = ref(storage, values.id);
    const fileSnapshot = await uploadBytes(storageRef, file);

    const fileUrl = await getDownloadURL(fileSnapshot.ref);

    const docRef = doc(db, "productos", values.id);

    return setDoc(docRef, { ...values, img: fileUrl }).then(() => {
        console.log("Document successfully written!");
    });
};

const CreateForm = () => {
    const [values, setValues] = useState({
        id: "",
        name: "",
        price: 0,
        stock: 0,
        category: "",
        color: [],
        size: [],
        newIn: false,
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        let value = e.target.value;

        if (e.target.name === "color") {
            value = e.target.value.split(",");
        }

        if (e.target.name === "talles") {
            value = e.target.value.split(",");
        }

        if (e.target.name === "price") {
            value = Number(e.target.value);
        }

        if (e.target.name === "stock") {
            value = Number(e.target.value);
        }

        if (e.target.name === "newIn") {
            value = e.target.checked;
        }

        setValues({
            ...values,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createProduct(values, file);
            toast.success("Producto creado correctamente.");
        } catch (error) {
            console.warn(error);
            toast.error("Ocurrió un error al crear el producto.");
        }

        console.log(values);

    };

    return (
        <div className="container m-auto mt-2 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Id: </label>
                <input
                    type="number"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="id"
                    value={values.id}
                    onChange={handleChange}
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                />

                <label>Imagen: </label>

                <input
                    required
                    type="file"
                    allowMultiple={false}
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                />

                <label>Color: </label>
                <input
                    type="text"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />

                <label>Talles: </label>
                <input
                  
                    type="text"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="talles"
                    value={values.talles}
                    onChange={handleChange}
                />
                <label>Novedad: </label>
                <input
                    type="checkbox"
                    className="p-2 rounded border border-blue-100 block my-4 aling-left"
                    name="newIn"
                    value={values.newIn}
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    value={values.stock}
                    onChange={handleChange}
                />

                <button type="submit">Enviar</button>
            </form>
            <Notifications />
        </div>
    );
};

export default CreateForm;
