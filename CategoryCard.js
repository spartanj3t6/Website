import React from 'react';

const CategoryCard = ({ category, imgSrc }) => {
  return (
    <div className="category-card">
      <img src={imgSrc} alt={category} className="category-image" />
      <h3 className="category-title">{category}</h3>
    </div>
  );
};

export default CategoryCard;