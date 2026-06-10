import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/netherite-black.png';
import './Footer.css';

const TIMEZONES = [
  { city: 'Kathmandu', tz: 'Asia/Kathmandu' },
  { city: 'London',    tz: 'Europe/London'   },
  { city: 'New York',  tz: 'America/New_York' },
  { city: 'Sydney',    tz: 'Australia/Sydney' },
];

function LiveClock({ tz }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return <span className="footer__tz-time">{time}</span>;
}

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Netherite" />
          <p>Modern web development and AI-driven video solutions for ambitious businesses.</p>
        </div>

        <div className="footer__columns">
          <div className="footer__col">
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <p>to be added</p>
          </div>
        </div>
      </div>

      <div className="footer__timezones" aria-label="World times">
        {TIMEZONES.map(({ city, tz }) => (
          <div className="footer__tz" key={city}>
            <span className="footer__tz-city">{city}</span>
            <LiveClock tz={tz} />
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Netherite</span>
        <span>Built with precision.</span>
      </div>

    </footer>
  );
}