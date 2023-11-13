import React from 'react';

 

const FilterAside = () => {
  return (
    <aside className="filter">
      <div className="filter__type">
        <span>Categoría</span>
        <div id="categories" className="filter__category">
        &nbsp;
        </div>
      </div>
      <div className="filter__type">
        <span>Color</span>
        <div className="flex space-x-1 text-sm text-gray-500">
            <div
              className="rounded-full w-5 h-5 border-black flex-w"
              style={{ backgroundColor: "#f5f5f5" , border: "solid 1px black" }}
            >              
              &nbsp;
            </div>
          </div>
      </div>      
    </aside>
  );
};

export default FilterAside;
