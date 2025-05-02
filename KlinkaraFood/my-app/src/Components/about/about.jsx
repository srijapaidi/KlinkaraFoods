import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="about-heading">About Klinkara Foods</h2>

      <p className="about-intro">
        Welcome to <strong>Klinkara Foods</strong>, established in 2024. We're here to bring the warmth of tradition and the magic of homemade flavors to every home.
      </p>

      <div className="about-block">
        <h3>Our Story</h3>
        <p>
          Klinkara Foods was born out of love and legacy — a dream to share my mother's treasured recipes with the world. Based in Hyderabad, we use age-old techniques to recreate that true homemade taste.
        </p>
      </div>

      <div className="about-block">
        <h3>Our Mission</h3>
        <p>
          “To introduce authentic, handcrafted, and preservative-free snacks, pickles, and podis that taste just like your mom made them.”
        </p>
      </div>

      <div className="about-block">
        <h3>What Makes Us Special</h3>
        <ul>
          <li>🧂 Inspired by my mother's kitchen</li>
          <li>🌿 100% natural, homemade-style ingredients</li>
          <li>❤️ Traditional taste, no shortcuts</li>
          <li>🚚 Packed fresh, delivered with care</li>
        </ul>
      </div>

      <div className="about-block">
        <h3>Meet the Maker</h3>
        <p>
          Hi, I’m <strong>Srija Paidi</strong> 👋 — and this is my tribute to my mother’s cooking. Her love and recipes are the soul of Klinkara Foods. Every item we offer is a part of her kitchen legacy, made with care and nostalgia.
        </p>
      </div>

      <div className="about-block">
        <h3>Our Promise</h3>
        <ul>
          <li>✅ Pure ingredients, handmade feel</li>
          <li>✅ Preservative-free products</li>
          <li>✅ Simple ordering, fast delivery</li>
        </ul>
      </div>

      <div className="about-block contact-block">
        <h3>Contact Us</h3>
        <p>📍 Sirpur(T), Telangana</p>
        <p>📞 +91 90141 28624</p>
        <p>📧 klinkarafoods@gmail.com</p>
        <p>📱 Instagram: <a href="https://instagram.com/klinkarafoods" target="_blank" rel="noopener noreferrer">@klinkarafoods</a></p>
      </div>
    </div>
  );
};

export default About;
