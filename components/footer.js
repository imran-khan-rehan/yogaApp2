// components/Footer.js
import React from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.png'
import '../styles/Header.css';
const Footer = () => {
  return (
    <footer className="main-footer">
      <section className="grid-container">
        <div className="grid-item">
          <Image
            src={logo} 
         
            alt="logo"
            className="main-logo-pic w-20 h-20 m-auto"
          />
          <p>© 2024 MĀ Wellness</p>
        </div>
        <div className="grid-item">
          <ul>
            <li className="info-txt">INFORMATION</li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Crystal Bowls</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <ul>
            <li className="contact-txt">CONTACT INFO</li>
            <li>539 Herald Street</li>
            <li>250-880-0553</li>
            <li><a href="mailto:info@mawellnessandyoga.ca">info@mawellnessandyoga.ca</a></li>
            <li><a href="#">Map & Directions</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
