import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesPage = () => {
  const categories = [
    {
      title: 'Outdoor Adventures',
      imgSrc: require('../images/outdoor-adventures.jpg'),
    },
    {
      title: 'Cultural Experiences',
      imgSrc: require('../images/cultural-experiences.jpg'),
    },
    {
        title: 'Sightseeing',
        imgSrc: require('../images/sightseeing.jpg'),
    },
    {
        title: 'Water Sports',
        imgSrc: require('../images/water-sports.jpg'),
    },
    {
        title: 'Beaches',
        imgSrc: require('../images/beaches.jpg'),
    },
    {
        title: 'Parks And Wildlife',
        imgSrc: require('../images/parks-and-wildlife.jpg'),
    },
    {
        title: 'Historical Sites',
        imgSrc: require('../images/historical-sites.jpg'),
    },
    {
        title: 'Family Fun',
        imgSrc: require('../images/family-fun.jpg'),
    },
  ];

  return (
    <div className="categories-page">
      <h1>Activities Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category.title}
            imgSrc={category.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
