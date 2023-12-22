import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const getAllProducts = async () => {
  const productsRef = collection(db, 'productos');
  const querySnapshot = await getDocs(productsRef);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

const ProductTable = async () => {
  const items = await getAllProducts();

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
              <th className="px-3 py-2 border">Slug</th>
              <th className="px-3 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.slug} className="border">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">{item.stock}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">
                  <Image
                    src={item.img}
                    alt={item.title}
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

                  <Link
                    href={`/admin/delete/${item.id}`}
                    className="rounded bg-red-400 p-2 text-white"
                  >
                    Eliminar
                  </Link>
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
