import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <img src="/path/to/logo.png" alt="Logo" />
                <h2>Your Website</h2>
              </div>
              <div className="footer-links">
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-contact">
                <p>Contact us:</p>
                <p>Email: example@example.com</p>
                <p>Phone: 123-456-7890</p>
              </div>
            </div>
            <p className="footer-copy">&copy; 2023 Your Website</p>
          </div>
        </footer>
      );
    };

export default Footer;