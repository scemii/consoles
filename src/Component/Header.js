import React from "react";
import { Link } from "react-router-dom";

import "./app.css"

const Header = () => {
  return (
    <div className="header">
    <ul className="navbar">
      <Link to="/" className="linkNintendo">
        NINTENDO
      </Link>
      <Link to="/sega" className="linkSega">
         SEGA
      </Link>
      <Link to="/sony" className="link">
          SONY
      </Link>
        </ul>
    </div>
  );
};

export default Header;
