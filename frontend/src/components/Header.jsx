import React from "react";
// import link from "react-router-dom";
import "../styles/Header.scss"

const Header = () => {
  return (
    <header id="navbar">
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About Us</li>
        <li>Feedback</li>
      </ul>
    </header>
  );
};

export default Header;
