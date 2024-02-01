// components/Header.js
import React from 'react';
import Image from 'next/image';
import logo from "../public/images/logo.png";
import '../styles/Header.css';

const Navbar = () => {
  const toggleMenu = () => {
    // Add your menu toggle logic here
    // You can use state to manage the menu visibility
    // Example: setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <Image
        src={logo}
     
        alt="logo"
        className="main-logo-pic w-20 h-20"
      />

      <nav className="navbar" id="myNavbar">
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/event">EVENT</a></li>
          <li>
            <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
              &#9776;
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
