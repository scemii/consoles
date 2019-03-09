import React from "react";
import { Link } from "react-router-dom";
import "./app.css"

const Header = () => {
  return (
    <div className="header">
    <ul className="navbar">
      <Link to="/" className="link">
        Nintendo
      </Link>
        <Link to="/sega" className="link">
          Sega
        </Link>
          <Link to="/sony" className="link">
            Sony
          </Link>
        </ul>
    </div>
  );
};

export default Header;
