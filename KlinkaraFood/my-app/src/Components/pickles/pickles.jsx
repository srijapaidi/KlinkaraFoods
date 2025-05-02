import React from 'react';
import './pickles.css';
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

const Pickles = () => {
  return (
    <div className="pickles-section">
        
      <h2 className="section-heading">Pickles</h2>

      <div className="pickles-container">
        {pickles.map(pickle => {
          const encodedMessage = encodeURIComponent(
            `🛍️ *${pickle.title}*\n\n📝 ${pickle.description}\n💰 Price: ${pickle.price}`
          );

          const whatsappLink = `https://wa.me/919014128624?text=${encodedMessage}`;

          return (
            <div key={pickle.id} className="pickle-card">
              <img src={pickle.imageUrl} alt={pickle.title} className="pickle-img" />
              <h3 className="pickle-title">{pickle.title}</h3>
              <p className="pickle-desc">{pickle.description}</p>
              <p className="pickle-price"><strong>{pickle.price}</strong></p>
              <a className="order-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pickles;
