import React, { useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

// Sample images (adjust as needed)
import Profile from '../assets/Sakinalu-280.jpg';
import Snack2 from '../assets/ChinthakayaPickle.jpg';
import Snack3 from '../assets/KarapusaSevu.jpg';
import Pickle1 from '../assets/Mango.jpg';
import Pickle2 from '../assets/grains.jpg';
import Pickle3 from '../assets/ChinthakayaPickle.jpg';

const ProductCard = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const routeMap = {
    snacks: '/snacks',
    pickles: '/pickles',
    podis: '/podis',
    sweets: '/sweets',
    grains: '/grains',
    mixture: '/mixture',
    masalas: '/masalas',
    vadiyalu: '/vadiyalu',
    fasting: '/snacks', // Fasting mapped to snacks
  };

  const categories = ['All', 'Snacks', 'Pickles', 'Mixture', 'Sweets', 'Grains', 'Podis'];

  const products = [
    { id: 1, title: 'Snacks', price: '₹499 kg', imageUrl: Profile },
    { id: 2, title: 'Pickles', price: '₹499 kg', imageUrl: Snack2 },
    { id: 3, title: 'Mixture', price: '₹499 kg', imageUrl: Snack3 },
    { id: 4, title: 'Sweets', price: '₹499 kg', imageUrl: Pickle1 },
    { id: 5, title: 'Grains', price: '₹499 kg', imageUrl: Pickle2 },
    { id: 6, title: 'Podis', price: '₹499 kg', imageUrl: Pickle3 },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.title === selectedCategory);

  return (
    <div className="product-wrapper">
      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => {
              setSelectedCategory(cat);
              const route = routeMap[cat.toLowerCase()];
              if (route) navigate(route);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid-container">
        {filteredProducts.map(product => {
          const route = routeMap[product.title.toLowerCase()];
          return (
            <div key={product.id} className="product-tile" onClick={() => route && navigate(route)}>
              <img src={product.imageUrl} alt={product.title} className="tile-image" />
              <div className="tile-content">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button>Explore</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
