import React from 'react';
import image from '../assets/image3.jpg'; 
import image2 from "../assets/image4.jpg"
import "./app.css"
import Carousel from "react-bootstrap/Carousel";

function HeaderImage() {
    
  return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
 
  ); 
}

export default HeaderImage;