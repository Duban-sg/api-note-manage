import React from 'react';
import './Category.css';
import { CategoryForm } from './CategoryForm';
import { Button } from 'bootstrap';


function Category({ categories, onSelectCategory, onShowModalCategory }) {
  const handleToggleForm = () => {
    onShowModalCategory(state => !state);
  };

   
  return (
    
    
    <div className="category ">
      <div className='container mt-3 ms-3'>
        <div className='row'>
          <h3>Categorias
            <span className="badge bg-secondary rounded-pill text-white" onClick={handleToggleForm}>+</span> {/* Botón para mostrar u ocultar el formulario */}
          </h3>
        </div>
        <ul>
          {categories.map((category, index) => (
            <li key={category} onClick={() => onSelectCategory(category)}>
              {category.name}
              
              <span className="badge bg-secondary rounded-pill text-white">{category.notes.length}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export { Category };
