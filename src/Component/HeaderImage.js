import React from 'react';
import image from '../assets/image3.jpg'; // Tell Webpack this JS file uses this image
import "./app.css"

function HeaderImage() {
    
  return(
    <div className="headerImage">
        <img src={image} className="img-fluid" alt="image" />
    </div>
  ); 
}

export default HeaderImage;