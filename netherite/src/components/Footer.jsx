import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/netherite-black.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__logo">
          <img src={logo} alt="Netherite" />
        </Link>
        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} Netherite. All rights reserved.</p>
      </div>
    </footer>
  );
}
