import React from "react";
import "./Footer.css"; // Import the CSS file
import logo from '../assests/logo.png'

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <h2>KAIROS LEARNING UNIVERSE</h2>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#main-container1">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#ourteam">Mentors</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Advisory Services</li>
            <li>Training Programs</li>
            <li>Global Collaboration</li>
            <li>Custom Solutions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Phone: +91 8274969037</li>
            <li>Email: info@kluniverse.com</li>
            <li>Address: Kolkata, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-credit">
        <p>Designed and Developed by <a href="https://www.siplhub.com/" target="_blank" rel="nofollow">@Sikharthy Infotech Private Limited</a></p>
      </div>
    </footer>
  );
};

export default Footer;