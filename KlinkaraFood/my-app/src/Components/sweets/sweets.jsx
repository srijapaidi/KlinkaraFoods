import React from 'react';
import './sweets.css'; // Reuse same styling
import Sweet1 from '../assets/laddu.jpg';
import Sweet2 from '../assets/Gavvale sweet.jpg';
import Sweet3 from '../assets/Arshalu.jpg';
import Sweet4 from '../assets/Karajjalu.jpg';
import Sweet5 from '../assets/Shangapindi Laddu.jpg';
import Sweet6 from '../assets/Rava Laddu.jpg';

const sweets = [
  { id: 1, title: 'Laddu', description: 'Classic Festive Sweet', price: '₹299/500g', imageUrl: Sweet1 },
  { id: 2, title: 'Sweet Gavalu', description: 'Crunchy & Syrupy', price: '₹299/500g', imageUrl: Sweet2 },
  { id: 3, title: 'Arshalu', description: 'Traditional Deep-Fried Delight', price: '₹299/500g', imageUrl: Sweet3 },
  { id: 4, title: 'Karjalu', description: 'Sweet Coconut Filling', price: '₹299/500g', imageUrl: Sweet4 },
  { id: 5, title: 'Shangapindi Laddu', description: 'Nutritious Chickpea Sweet', price: '₹299/500g', imageUrl: Sweet5 },
  { id: 6, title: 'Rava Laddu', description: 'Semolina-Based Favorite', price: '₹299/500g', imageUrl: Sweet6 },
];

const Sweets = () => {
  return (
    <div className="pickles-section">
      <h2 className="section-heading">Sweets</h2>
      <div className="pickles-container">
        {sweets.map(sweet => {
          const encodedMessage = encodeURIComponent(
            `🛍️ *${sweet.title}*\n\n📝 ${sweet.description}\n💰 Price: ${sweet.price}`
          );
          const whatsappLink = `https://wa.me/919014128624?text=${encodedMessage}`;

          return (
            <div key={sweet.id} className="pickle-card">
              <img src={sweet.imageUrl} alt={sweet.title} className="pickle-img" />
              <h3 className="pickle-title">{sweet.title}</h3>
              <p className="pickle-desc">{sweet.description}</p>
              <p className="pickle-price"><strong>{sweet.price}</strong></p>
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

export default Sweets;
