import React from 'react';

const categories = ['Length', 'Mass', 'Temperature', 'Speed'];

function CategorySelector({ onSelectCategory }) {
  return (
    <div className="form-group">
      <label htmlFor="category">Select a category:</label>
      <select id="category" className="form-control" onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category.toLowerCase()}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
