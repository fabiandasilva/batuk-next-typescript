"use client";

import React, { useState } from "react";
import { storage, db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

import Notifications from "@/app/components/notifications/Notifications";
import FormAdmin from "@/app/components/formAdmin/FormAdmin";

const createProduct = async (values, file) => {
    /* throw new Error('Error forzado'); */
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

        if (e.target.name === "size") {
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
            console.warn('Error en:',error);
            toast.error("Ocurrió un error al crear el producto.");
        }

        console.log(values);

    };

    return (
        <div className="container m-auto pt-40 max-w-lg">
            <FormAdmin values={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setFile={setFile} />
                hide={true}	
            <Notifications />
        </div>
    );
};

export default CreateForm;
