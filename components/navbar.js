import React from 'react';
import '../styles/Navbar.css';
import $ from 'jquery';

const Navbar = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        const iconBars = document.querySelectorAll('.bar');
        $(menu).slideToggle();
        menu.classList.toggle('show');
        iconBars.forEach(bar => {
            bar.classList.toggle('change');
        });
    };

    return (
        <div className="navbar">
            <div className="logo"><a href='/'><img src="/images/logo.png" alt="Logo" /></a></div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="menu">
                <div className="menu-flex">
                    <a href="/">Home</a>
                    <a href="/events1">Event 1</a>
                    <a href="/events2">Event 2</a>
                </div>
            </div>
    
        </div>
    );
};

export default Navbar;
