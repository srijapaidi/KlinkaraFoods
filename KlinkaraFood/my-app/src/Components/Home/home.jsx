// src/pages/Home.jsx
import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import Dashboard from '../dashboard/dashboard.jsx';
import ProductCard from '../card/ProductCard.jsx';
import Chatbot from '../chatbot/chatbot.jsx';
import Footer from '../footer/footer.jsx';




const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <section id="shop">
        <Dashboard />
      </section>
      <section id="products">
        <ProductCard />
      </section>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Home;
