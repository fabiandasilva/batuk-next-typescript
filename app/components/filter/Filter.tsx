'use client'
import React from 'react';

interface FilterAsideProps {
  getCategories: string[];
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const FilterAside = ({ getCategories, onCategorySelect, selectedCategory }: FilterAsideProps) => {

  return (
    <aside className="filter">
      <div>
        <span className='text-lg bolder underline'>Categorías</span>
        <div id="categories" className="flex flex-col">
          {getCategories.map((category, index) => (
            <span
              className={`cursor-pointer ${selectedCategory === category ? 'font-bold' : ''}`}
              key={index}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </span>

          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;
