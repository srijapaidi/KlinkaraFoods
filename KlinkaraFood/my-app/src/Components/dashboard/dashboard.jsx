import React from 'react';
import { Carousel } from 'react-bootstrap';
import './dashboard.css'; // If you need to add custom styles



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
            src="https://t3.ftcdn.net/jpg/06/27/13/32/360_F_627133202_wLaztzJNb0aWbZYRDS8jUC3aDJ64HkhT.jpg"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Dashboard;
