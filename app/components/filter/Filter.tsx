'use client'
import React from 'react';

interface FilterAsideProps {
  getCategories: string;
  getColors: [];
}

const FilterAside = ({ getCategories, getColors }: FilterAsideProps) => {

  return (
    <aside className="filter">
      <div>
        <span>Categorías</span>
        <div id="categories" className="flex flex-col">
          {getCategories}
        </div>
      </div>
      <div className="filter__type">
        <span>Color</span>
        {getColors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className={`w-1 h-1  p-4 m-2 rounded-3xl border-2 border-gray-500 `}
          ></div>
        ))}
      </div>
    </aside>
  );
};

export default FilterAside;
