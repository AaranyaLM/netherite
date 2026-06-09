import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/netherite-black.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer__inner">

    <div className="footer__brand">
      <img src={logo} alt="Netherite" />
      <p>Modern web development and AI-driven solutions.</p>
    </div>

    <div className="footer__columns">
      <div>
        <h4>Pages</h4>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h4>Connect</h4>
        <a href="mailto:hello@netherite.co">Email</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>

  </div>

  <div className="footer__bottom">
    <p>© {new Date().getFullYear()} Netherite</p>
    <p></p>
  </div>
</footer>
  );
}
