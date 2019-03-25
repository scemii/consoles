import React from "react";
import { Link } from "react-router-dom";

import "./app.css"

const Header = () => {
  return (
    <div className="header">
    <ul className="navbar">
      <Link to="/console/nintendo" className="linkNintendo">
        NINTENDO
      </Link>
      <Link to="/console/sega" className="linkSega">
         SEGA
      </Link>
      <Link to="/console/sony" className="link">
          SONY
      </Link>
        </ul>
    </div>
  );
};

export default Header;
