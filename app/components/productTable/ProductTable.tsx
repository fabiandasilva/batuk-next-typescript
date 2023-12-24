'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/firebase/config';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';


const ProductTable = () => {
  interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
    img: string;
  }

  const [items, setItems] = useState([]) as [Product[], Function];

  const getAllProducts = async () => {
    const productsRef = collection(db, 'productos');
    const querySnapshot = await getDocs(productsRef);
    setItems(querySnapshot.docs.map(docSnapshot => docSnapshot.data()));
  };

  const deleteProduct = async (id: string) => {
    const docRef = doc(db, 'productos', id);
    await deleteDoc(docRef);
    setItems(items.filter(item => item.id !== id));
  };

  useEffect(() => {
    getAllProducts();
  }, []); 

  return (
    <>
      <Link
        href="/admin/create"
        className="rounded bg-blue-600 p-2 text-white w-1/12 text-center mb-4"
      >
        Crear nuevo
      </Link>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left text-gray-600 m-auto border-collapse">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="px-3 py-2 border">Nombre</th>
              <th className="px-3 py-2 border">Precio</th>
              <th className="px-3 py-2 border">En stock</th>
              <th className="px-3 py-2 border">Tipo</th>
              <th className="px-3 py-2 border">Imagen</th>
              <th className="px-3 py-2 border">Id</th>
              <th className="px-3 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className="border">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">{item.stock}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                </td>
                <td className="p-2">{item.id}</td>
                <td className="p-2">
                  <Link
                    href={`/admin/edit/${item.id}`}
                    className="rounded bg-green-400 p-2 text-white mr-2"
                  >
                    Editar
                  </Link>

                  <button onClick={() => deleteProduct(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
