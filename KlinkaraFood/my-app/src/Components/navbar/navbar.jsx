
import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Instaicon from '../assets/insta.jpg'
import Whatapp from '../assets/whatapp.jpg'
import Youtube from '../assets/youtube.jpg'

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  return (
    <div className="navbar-container">
      {/* Cart Box */}
      <div className="cart-box">
        <span className="cart-count">3</span>
        <i className="cart-icon">&#128722;</i>
      </div>

      <nav className="navbar">
        {/* Logo & Tagline */}
        <div className="logo">
          <h1>Klinkara Foods</h1>
          <p className="tagline">అమ్మ చేతి రుచి</p>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allproducts">All Products</Link></li>

          {/* Dropdown for Products */}
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >

            <a href="#products" className="flex items-center gap-1">
              Products
              <span className="ml-1 text-sm">
                {isDropdownVisible ? "▲" : "▼"}
              </span>
            </a>
            
            <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
              <li><Link to="/pickles">Pickles</Link></li>
              <li><Link to="/podis">Podis</Link></li>
              <li><Link to="/snacks">Snacks</Link></li>
              <li><Link to="/sweets">Sweets</Link></li>
               {/*
              <li><a href="#fasting">Fasting/Snacks</a></li> 
              <li><a href="#masalas">Masalas</a></li>
              <li><a href="#Grains">Grains</a></li>
              <li><a href="#Vadiyalu">Vadiyalu</a></li>
               */}
            </ul>
          </li>

         {/*  <li><a href="#contact">Contact</a></li> */}
          <li><a href="/about">About</a></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        {/* Contact Info & Social Links */}
        <div className="contact-social">

          <p className="contact-info">📞 9014128624</p>
          <p className="contact-info">📧  klinkarafoods@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://instagram.com/klinkarafoods"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instaicon} alt="Instagram" />
            </a>
            <a
              href="https://youtube.com/@klinkarafoods"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="YouTube" />
            </a>
            <a
              href="https://wa.me/919014128624?text=Hello%20Klinkara%20Foods!%20I%20have%20a%20query."
              target="_blank"
              rel="noreferrer"
            >
              <img src={Whatapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
