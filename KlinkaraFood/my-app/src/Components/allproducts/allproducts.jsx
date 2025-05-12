import React from 'react';
import './allproducts.css'; // Import the common CSS for all products.

import Pickle1 from '../assets/Mango.jpg';
import Pickle2 from '../assets/tomatopickle.jpg';
import Pickle3 from '../assets/ChinthakayaPickle.jpg';
import Pickle4 from '../assets/lemon.jpg';
import Pickle5 from '../assets/Ginger.jpg';
import Pickle6 from '../assets/Garlic.jpg';
import Pickle7 from '../assets/Amla.jpg';
import Pickle8 from '../assets/mixedvegpickle.jpg';
import Pickle9 from '../assets/redChilli.jpg';
import Pickle10 from '../assets/carrot.jpg';
import Pickle11 from '../assets/beetroot.jpg';
import Pickle12 from '../assets/drumstick.jpg';
import Pickle13 from '../assets/Greenchilli.jpg';

import Snack1 from '../assets/boondi.jpg';
import Snack2 from '../assets/chegodi.jpg';
import Snack3 from '../assets/Chekkalu green.jpg';
import Snack4 from '../assets/Chekkalu red.jpg';
import Snack5 from '../assets/Chuduva Mixture.jpg';
import Snack6 from '../assets/Gavvalu (Spice).webp';
import Snack7 from '../assets/KarapusaSevu.jpg';
import Snack8 from '../assets/Kobbari Karijelu.jpg';
import Snack9 from '../assets/Minapa Karapusa (Janthikalu).jpg';
import Snack10 from '../assets/Murukulu.jpg';
import Snack11 from '../assets/Sakinalu (Plain).jpg';
import Snack12 from '../assets/Murukulu.jpg';

import Sweet1 from '../assets/laddu.jpg';
import Sweet2 from '../assets/Gavvale sweet.jpg';
import Sweet3 from '../assets/Arshalu.jpg';
import Sweet4 from '../assets/Karajjalu.jpg';
import Sweet5 from '../assets/Shangapindi Laddu.jpg';
import Sweet6 from '../assets/Rava Laddu.jpg';

import Podi1 from '../assets/curryLeaves.jpg';
import Podi2 from '../assets/flax.jpg';
import Podi3 from '../assets/Coriander.jpg';
import Podi4 from '../assets/Kakarkay.jpg';
import Podi5 from '../assets/Kandi Podi.jpg';
import Podi6 from '../assets/Kobbari Karam.jpg';
import Podi7 from '../assets/Munagaku Kaaram.jpg';
import Podi8 from '../assets/Nalla Karam.jpg';
import Podi9 from '../assets/Nuvvula Karam.jpg';
import Podi10 from '../assets/Palli Karam.jpg';
import Podi11 from '../assets/Pappula Podi.jpg';
import Podi12 from '../assets/Pesara Podi.webp';
import Podi13 from '../assets/Podis Special Mix.jpg';

// Define arrays for each product type (Pickles, Snacks, Sweets, Podis)
const pickles = [
  { id: 1, title: 'Mango Pickle', description: 'Traditional Taste – Always', price: '₹499/kg', imageUrl: Pickle1 },
  { id: 2, title: 'Tomato Pickle', description: 'Traditional Taste – Always', price: '₹499/kg', imageUrl: Pickle2 },
  { id: 3, title: 'Chinthakaya/Tamarind Pickle', description: 'Traditional Taste – Always', price: '₹499/kg', imageUrl: Pickle3 },
  { id: 4, title: 'Lemon Pickle', description: 'Tangy & Spicy Flavor', price: '₹499/kg', imageUrl: Pickle4 },
  { id: 5, title: 'Ginger Pickle', description: 'Zesty & Flavorful', price: '₹499/kg', imageUrl: Pickle5 },
  { id: 6, title: 'Garlic Pickle', description: 'Aromatic & Tasty', price: '₹499/kg', imageUrl: Pickle6 },
  { id: 7, title: 'Amla/Usirikaya Pickle', description: 'Rich in Vitamin C', price: '₹499/kg', imageUrl: Pickle7 },
  { id: 8, title: 'Mixed Vegetable Pickle', description: 'All-in-One Flavor', price: '₹499/kg', imageUrl: Pickle8 },
  { id: 9, title: 'Red Chili Pickle', description: 'Spicy Delight', price: '₹499/kg', imageUrl: Pickle9 },
  { id: 10, title: 'Carrot Pickle', description: 'Crunchy & Fresh', price: '₹499/kg', imageUrl: Pickle10 },
  { id: 11, title: 'Beetroot Pickle', description: 'Colorful & Unique', price: '₹499/kg', imageUrl: Pickle11 },
  { id: 12, title: 'Drumstick/Munakaya Pickle', description: 'Unique South Indian Taste', price: '₹499/kg', imageUrl: Pickle12 },
  { id: 13, title: 'Green Chilli Pickle', description: 'Hot & Addictive', price: '₹499/kg', imageUrl: Pickle13 },
];

const snacks = [
  { id: 1, title: 'Boondi Spicy', description: 'Crispy & Spicy Delight', price: '₹499/kg', imageUrl: Snack1 },
  { id: 2, title: 'Chegodi', description: 'Traditional Crunchy Rings', price: '₹499/kg', imageUrl: Snack2 },
  { id: 3, title: 'Chekkalu (Green Chilli)', description: 'Spicy & Crisp with Green Chilli Flavor', price: '₹499/kg', imageUrl: Snack3 },
  { id: 4, title: 'Chekkalu (Red Chilli)', description: 'Hot & Crispy Red Chilli Version', price: '₹499/kg', imageUrl: Snack4 },
  { id: 5, title: 'Chuduva Mixture', description: 'Light & Tasty Tea-Time Snack', price: '₹499/kg', imageUrl: Snack5 },
  { id: 6, title: 'Gavvalu (Spice)', description: 'Shell-Shaped Spicy Bites', price: '₹499/kg', imageUrl: Snack6 },
  { id: 7, title: 'Karapusa', description: 'Crispy Chickpea Snack', price: '₹499/kg', imageUrl: Snack7 },
  { id: 8, title: 'Kobbari Karijelu (Coconut filling)', description: 'Sweet & Crispy Coconut Snack', price: '₹499/kg', imageUrl: Snack8 },
  { id: 9, title: 'Minapa Karapusa (Janthikalu)', description: 'Classic Crunch with Urad Dal', price: '₹499/kg', imageUrl: Snack9 },
  { id: 10, title: 'Murukulu', description: 'South Indian Spiral Crunch', price: '₹499/kg', imageUrl: Snack10 },
  { id: 11, title: 'Sakinalu (Plain)', description: 'Traditional Festival Snack', price: '₹499/kg', imageUrl: Snack11 },
  { id: 12, title: 'Snacks Combo', description: 'Mix of All-Time Favorites', price: '₹499/kg', imageUrl: Snack12 },
];

const sweets = [
  { id: 1, title: 'Laddu', description: 'Classic Festive Sweet', price: '₹299/500g', imageUrl: Sweet1 },
  { id: 2, title: 'Sweet Gavalu', description: 'Crunchy & Syrupy', price: '₹299/500g', imageUrl: Sweet2 },
  { id: 3, title: 'Arshalu', description: 'Traditional Deep-Fried Delight', price: '₹299/500g', imageUrl: Sweet3 },
  { id: 4, title: 'Karjalu', description: 'Sweet Coconut Filling', price: '₹299/500g', imageUrl: Sweet4 },
  { id: 5, title: 'Shangapindi Laddu', description: 'Nutritious Chickpea Sweet', price: '₹299/500g', imageUrl: Sweet5 },
  { id: 6, title: 'Rava Laddu', description: 'Semolina-Based Favorite', price: '₹299/500g', imageUrl: Sweet6 },
];

const podis = [
  { id: 1, title: 'Curry Leaves Podi', description: 'Healthy & Aromatic', price: '₹299/250g', imageUrl: Podi1 },
  { id: 2, title: 'Flax Seed Podi', description: 'Rich in Omega-3', price: '₹299/250g', imageUrl: Podi2 },
  { id: 3, title: 'Coriander Spice Powder', description: 'Fresh & Flavorful', price: '₹299/250g', imageUrl: Podi3 },
  { id: 4, title: 'Kakarkay / Bitter Gourd Karam', description: 'Unique Bitter-Sweet Taste', price: '₹299/250g', imageUrl: Podi4 },
  { id: 5, title: 'Kandi Podi (Toor Dal)', description: 'Protein Packed', price: '₹299/250g', imageUrl: Podi5 },
  { id: 6, title: 'Kobbari Karam (Coconut)', description: 'Traditional Flavor', price: '₹299/250g', imageUrl: Podi6 },
  { id: 7, title: 'Munagaku Kaaram', description: 'Loaded with Iron', price: '₹299/250g', imageUrl: Podi7 },
  { id: 8, title: 'Nalla Karam / IDLY Podi', description: 'Perfect for Idly & Dosa', price: '₹299/250g', imageUrl: Podi8 },
  { id: 9, title: 'Nuvvula Karam (Sesame Powder)', description: 'Nutty & Healthy', price: '₹299/250g', imageUrl: Podi9 },
  { id: 10, title: 'Palli Karam (Peanut Powder)', description: 'Crunchy & Tasty', price: '₹299/250g', imageUrl: Podi10 },
  { id: 11, title: 'Pappula Podi', description: 'Mild & Savory', price: '₹299/250g', imageUrl: Podi11 },
  { id: 12, title: 'Pesara Podi', description: 'Green Gram Goodness', price: '₹299/250g', imageUrl: Podi12 },
  { id: 13, title: 'Podis Special Mix', description: 'All-in-One Combo', price: '₹399/250g', imageUrl: Podi13 },
];

// Main component for All Products
const AllProducts = () => {
  const allProducts = [...pickles, ...snacks, ...sweets, ...podis]; // Combine all product arrays
  
  return (
    <div className="pickles-section">
      <div className="header">
        <h1>Our Products</h1>
        <p>Pickles, Snacks, Sweets & Podis</p>
      </div>
      <div className="product-container">
        {allProducts.map((product) => {
          const encodedMessage = encodeURIComponent(
            `🛍️ *${product.title}*\n\n📝 ${product.description}\n💰 Price: ${product.price}`
          );
          const whatsappLink = `https://wa.me/919014128624?text=${encodedMessage}`;

          return (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.title} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <a
                  className="order-button"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
