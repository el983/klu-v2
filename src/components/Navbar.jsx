import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assests/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="KAIROS LEARNING UNIVERSE Logo" className="logo-img" />
          <div className="logo-text">KAIROS LEARNING UNIVERSE</div>
        </div>
        <div className={`menu-container ${isOpen ? "active" : ""}`}>
          <ul className="menu">
            <li>
              <a href="#main-container1" onClick={(e) => handleScroll(e, "main-container1")}>Home</a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a>
            </li>            
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
            </li>
            <li>
              <a href="#ourteam" onClick={(e) => handleScroll(e, "ourteam")}>Mentors</a>
            </li>
            <li>
              <a href="#blog" onClick={(e) => handleScroll(e, "blog")}>Blog</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
            </li>
            {/* <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "career")}>Career</a>
            </li> */}
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
