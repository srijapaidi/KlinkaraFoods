import React from 'react';
import './snacks.css'; // ✅ Use same CSS styling as Podis

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

const Snacks = () => {
  return (
    <div className="pickles-section"> {/* ✅ Same wrapper as Podis */}
      <h2 className="section-heading">Snacks</h2> {/* ✅ Same heading style */}

      <div className="pickles-container">
        {snacks.map(snack => {
          const encodedMessage = encodeURIComponent(
            `🛍️ *${snack.title}*\n\n📝 ${snack.description}\n💰 Price: ${snack.price}`
          );

          const whatsappLink = `https://wa.me/919014128624?text=${encodedMessage}`;

          return (
            <div key={snack.id} className="pickle-card">
              <img src={snack.imageUrl} alt={snack.title} className="pickle-img" />
              <h3 className="pickle-title">{snack.title}</h3>
              <p className="pickle-desc">{snack.description}</p>
              <p className="pickle-price"><strong>{snack.price}</strong></p>
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

export default Snacks;
