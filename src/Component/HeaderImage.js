import React from 'react';
import image from '../assets/image3.jpg'; // Tell Webpack this JS file uses this image
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
        src={image}
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