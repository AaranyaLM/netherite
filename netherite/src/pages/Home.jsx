import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const MARQUEE_ITEMS = [
  'Website Design', 'AI Video', 'Brand Identity', 'Web Development',
  'Digital Strategy', 'Content Creation', 'UI & UX', 'Visual Identity',
  'Website Design', 'AI Video', 'Brand Identity', 'Web Development',
  'Digital Strategy', 'Content Creation', 'UI & UX', 'Visual Identity',
];

const SERVICES = [
  {
    number: '01',
    name: 'Website Design',
    description:
      'Clean, purposeful websites that turn visitors into customers. We design with intent — every layout, typographic choice, and interaction serves your brand.',
    tags: ['Design', 'Development', 'Responsive', 'CMS'],
  },
  {
    number: '02',
    name: 'AI Videos for Business',
    description:
      "Video is the most engaging format online. We use AI-powered tools to produce polished, on-brand content — without a film crew or a big budget.",
    tags: ['Promotional', 'Explainer', 'Social Media', 'Fast Delivery'],
  },
];

export default function Home() {
  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
       

        <h1 className="hero__headline">
          We build the digital<br />
          <em>presence you deserve.</em>
        </h1>

        <div className="hero__bottom">
          <p className="hero__sub">
            From websites that convert to AI-powered video — we help businesses
            show up and stand out online.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Start a project →
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span className="marquee-item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services-listing">
        <div className="services-listing__header">
          <h2>Two focused offerings.<br />Built with precision.</h2>
          <Link to="/services" className="services-listing__link">
            See all services →
          </Link>
        </div>

        {SERVICES.map((s) => (
          <div className="service-row" key={s.number}>
            <div className="service-row__left">
              <span className="service-row__number">{s.number}</span>
              <h3 className="service-row__name">{s.name}</h3>
            </div>
            <div className="service-row__right">
              <p className="service-row__desc">{s.description}</p>
              <div className="service-row__tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── MISSION ── */}
      <section className="mission">
        <p className="mission__text">
          Our mission is simple: help small businesses compete with
          great design and smart technology — <em>without the agency overhead.</em>
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="cta-strip">
        <h2 className="cta-strip__headline">
          Ready to build something<br />exceptional?
        </h2>
        <Link to="/contact" className="btn btn--primary">
          Let's talk →
        </Link>
      </section>

    </main>
  );
}