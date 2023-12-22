'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const FilterAside = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Todos",
    "Remera",
    "Accesorios",
    "Buzos",
    "Camperas",
    "Camisas"
  ]

  return (
    <aside className="filter">
      <div>
        <span className='text-lg bolder underline'>Categorías</span>
        <div id="categories" className="flex flex-col">
          {categories.map((category, index) => (
            <Link href={`/store/${category}`} key={index}>
              <span
                className={`cursor-pointer capitalize ${selectedCategory === category ? 'font-bold' : ''}`}
                key={index}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;
