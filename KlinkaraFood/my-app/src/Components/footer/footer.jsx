import React from 'react';
import './footer.css'; // Importing the CSS file for styling
import Instaicon from '../assets/insta.jpg';
import Youtube from '../assets/youtube.jpg';
import Whatapp from '../assets/whatapp.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Product Categories Section */}
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul>
            <li><a href="#pickles">Pickles</a></li>
            <li><a href="#podis">Podis</a></li>
            <li><a href="#snacks">Snacks</a></li>
            <li><a href="#sweets">Sweets</a></li>
            
          </ul>
        </div>

       
       


        {/* Business Info Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:klinkarafoods@gmail.com">klinkarafoods@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+910123456789">+91 9014128624</a></li>
            <li><strong>Address:</strong> Sirpur (T), 504299</li>
          </ul>
        </div>

        {/* Footer Branding */}
        <div className="footer-section footer-branding">
          <h4>Our Brands</h4>
          <ul>
            <li><a href="https://www.example.com/klinkarafoods">KlinkaraFoods</a></li>
            <li><a href="https://www.example.com/ammachethiruchulu">Amma Chethi Ruchulu</a></li>
          </ul>
        </div>



{/* Contact Info & Social Links */}

        <div className="contact-social">

 
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
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 KlinkaraFoods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
