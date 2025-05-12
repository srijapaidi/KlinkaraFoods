import React from 'react';
import { Carousel } from 'react-bootstrap';

import './dashboard.css'; // If you need to add custom styles
import  pic from '../assets/OIP.jpg';



const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>KlinkaraFoods</h2>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/07/65/71/34/240_F_765713426_3IrJI5j9BveqFmKUktMigjUGo2x7CJWc.jpg"
            alt="First slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://teluguimages.timesnownews.com/photo/msid-106506488,width-100,height-200,resizemode-75/106506488.jpg"
            alt="Second slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Dashboard;
