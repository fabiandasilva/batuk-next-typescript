"use client";
import FormAdmin from "@/app/components/formAdmin/FormAdmin";
import { db, storage } from "@/firebase/config";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
    img: string;
    color: [];
    size: [];
    newIn: boolean;
}
const editImg = async (values, file) => {
    // Subir el archivo al almacenamiento
    const storageRef = ref(storage, values.id);
    const fileSnapshot = await uploadBytes(storageRef, file);
    const fileUrl = await getDownloadURL(fileSnapshot.ref);

    // Actualizar el documento en Firestore
    const docRef = doc(db, "productos", values.id);

    return updateDoc(docRef, {
        // Solo actualiza la imagen si se ha seleccionado un nuevo archivo
        ...(file && { img: fileUrl }),
        // Actualiza otros campos
        name: values.name,
        price: values.price,
        stock: values.stock,
        category: values.category,
        color: values.color,
        size: values.size,
        newIn: values.newIn,
    }).then(() => {
        console.log("Document successfully updated!");
    });
};


const EditForm = ({ params }) => {
    const id = params.id;
    const [values, setValues] = useState({
        id: "",
        name: "",
        price: 0,
        stock: 0,
        category: "",
        newIn: false,
        size: [],   // Cambiado a un arreglo
        color: [],  // Cambiado a un arreglo
    });


    useEffect(() => {
        const getProducts = async () => {
            const productsRef = collection(db, "productos");
            const querySnapshot = await getDocs(productsRef);
            const products = querySnapshot.docs.map((docSnapshot) =>
                docSnapshot.data()
            ) as Product[];
            const foundProduct = products.find((item) => item.id === id);

            setValues({
                id: foundProduct?.id || "",
                name: foundProduct?.name || "",
                price: foundProduct?.price || 0,
                stock: foundProduct?.stock || 0,
                category: foundProduct?.category || "",
                color: foundProduct?.color || [],
                size: foundProduct?.size || [],
                newIn: foundProduct?.newIn || false,
            });
        };

        getProducts();
    }, [id]);

    const [file, setFile] = useState(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: type === "checkbox" ? checked : value,
            [name]: name === "size" || name === "color" ? value.split(",") : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos enviados', values)

        try {

            await editImg(values, file);

            toast.success("Producto editado correctamente.");
        } catch (error) {
            console.warn(error);
            toast.error("Ocurrió un error al editar el producto.");
        }
    };


    return (
        <div className="container m-auto pt-40 max-w-lg">
            <FormAdmin values={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setFile={setFile} 
                hide={false}
                />
                
        </div>
    );
};

export default EditForm;
