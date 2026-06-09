import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
       

          <h1 className="hero__headline">
            We build the digital<br />
            <em>presence you deserve.</em>
          </h1>

          <p className="hero__sub">
            From websites that convert to AI-powered video content — we help
            businesses show up and stand out online.
          </p>

          <div className="hero__actions">
            <Link to="/services" className="btn btn--primary">
              See Our Services
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="hero__accent" aria-hidden="true" />
      </section>

      {/* SERVICES TEASER */}
      <section className="teaser">
        <div className="teaser__card">
          <div className="teaser__left">
            <div className="teaser__icon">◻</div>
            <div>
              <h3>Website Design</h3>
              <p>Clean, purposeful websites that turn visitors into customers.</p>
            </div>
          </div>
          <Link to="/services" className="teaser__link">Learn more →</Link>
        </div>

        <div className="teaser__card">
          <div className="teaser__left">
            <div className="teaser__icon">▷</div>
            <div>
              <h3>AI Videos for Business</h3>
              <p>Fast, affordable, on-brand video content powered by AI.</p>
            </div>
          </div>
          <Link to="/services" className="teaser__link">Learn more →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="cta-strip__inner">
          <p>Ready to build something exceptional?</p>
          <Link to="/contact" className="btn btn--primary">
            Let’s Talk
          </Link>
        </div>
      </section>

    </main>
  );
}