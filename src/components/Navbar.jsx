import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assests/logo.png'; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="KAIROS LEARNING UNIVERSE Logo" className="logo-img" />
          <div className="logo-text">KAIROS LEARNING UNIVERSE</div>
        </div>
        <div className={`menu-container ${isOpen ? 'active' : ''}`}>
          <ul className="menu">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li><a href="#career" onClick={() => setIsOpen(false)}>Career</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;