// src/components/Chatbot.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './chatbot.css'; // For styling the chatbot

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false); // State to toggle visibility
  const navigate = useNavigate();

  // Function to toggle visibility of the chatbot container
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  // Function to navigate to the home page
  const navigateToHome = () => {
    navigate('/');  // Navigate to home page
  };

  // Function to open WhatsApp
  const openWhatsApp = () => {
    window.open('https://wa.me/919014128624', '_blank');  // Replace with your WhatsApp number
  };

  return (
    <div>
      {/* Chatbot Icon: Initially visible */}
      <div className="chatbot-icon" onClick={toggleChatbot} alt="Chatbot " >
      <h6>Chatbot</h6>
      </div>

      {/* Chatbot Container (hidden initially, shown when the icon is clicked) */}
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>How can we assist you?</h3>
          </div>
          <div className="chatbot-body">
            <button className="chatbot-button" onClick={openWhatsApp}>
              Contact via WhatsApp
            </button>
            <button className="chatbot-button" onClick={navigateToHome}>
              Go To Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
