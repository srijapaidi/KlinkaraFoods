import React from 'react';
import './podis.css'; // Reuse same styling
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

const Podis = () => {
  return (
    <div className="pickles-section">
      <h2 className="section-heading">Podis</h2>
      <div className="pickles-container">
        {podis.map(podi => {
          const encodedMessage = encodeURIComponent(
            `🛍️ *${podi.title}*\n\n📝 ${podi.description}\n💰 Price: ${podi.price}`
          );
          const whatsappLink = `https://wa.me/919014128624?text=${encodedMessage}`;

          return (
            <div key={podi.id} className="pickle-card">
              <img src={podi.imageUrl} alt={podi.title} className="pickle-img" />
              <h3 className="pickle-title">{podi.title}</h3>
              <p className="pickle-desc">{podi.description}</p>
              <p className="pickle-price"><strong>{podi.price}</strong></p>
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

export default Podis;
