import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__inner">
          <span className="hero__eyebrow"></span>
          <h1 className="hero__headline">
            We build the digital<br />
            <em>presence you deserve.</em>
          </h1>
          <p className="hero__sub">
            From websites that convert to AI-powered video content — Netherite
            helps businesses show up and stand out online.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--primary">See Our Services</Link>
            <Link to="/contact" className="btn btn--ghost">Start a Project</Link>
          </div>
        </div>
        <div className="hero__accent" aria-hidden="true" />
      </section>

      {/* What we do — brief teaser */}
      <section className="teaser">
        <div className="teaser__grid">
          <div className="teaser__card">
            <div className="teaser__icon">◻</div>
            <h3>Website Design</h3>
            <p>Clean, purposeful websites built to reflect your brand and turn visitors into customers.</p>
            <Link to="/services" className="teaser__link">Learn more →</Link>
          </div>
          <div className="teaser__card">
            <div className="teaser__icon">▷</div>
            <h3>AI Videos for Business</h3>
            <p>Engaging, professional video content produced with AI — fast, affordable, and on-brand.</p>
            <Link to="/services" className="teaser__link">Learn more →</Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <p>Ready to grow your digital presence?</p>
        <Link to="/contact" className="btn btn--primary">Let's Talk</Link>
      </section>

    </main>
  );
}
