import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'Website Design',
    tagline: 'Your website, built to convert.',
    description:
      'We design and build websites that clearly communicate what you do and why it matters. Whether you need a portfolio, a business site, or a landing page — we craft each page with purpose: clean layouts, considered typography, and an experience that feels right for your brand.',
    details: [
      'Custom design tailored to your brand',
      'Mobile-first, responsive layouts',
      'Fast, lightweight builds',
      'Easy for you to manage and update',
    ],
  },
  {
    number: '02',
    title: 'AI Videos for Business',
    tagline: 'Video content, without the overhead.',
    description:
      'Video is the most engaging content format online — and now it doesn\'t require a film crew or a big budget. We use AI-powered tools to produce polished, on-brand videos for your business: promotional content, explainers, social media clips, and more. Fast turnaround, professional results.',
    details: [
      'Promotional and brand videos',
      'Product explainer videos',
      'Social media content',
      'Fast delivery, easy revisions',
    ],
  },
];

export default function Services() {
  return (
    <main className="services">
      <div className="services__header">
        <span className="services__eyebrow">What We Do</span>
        <h1 className="services__title">Our Services</h1>
        <p className="services__sub">
          Two focused offerings. Each one done well.
        </p>
      </div>

      <div className="services__list">
        {services.map((s) => (
          <div className="service-item" key={s.number}>
            <div className="service-item__meta">
              <span className="service-item__num">{s.number}</span>
              <h2 className="service-item__title">{s.title}</h2>
              <p className="service-item__tagline">{s.tagline}</p>
            </div>
            <div className="service-item__body">
              <p className="service-item__desc">{s.description}</p>
              <ul className="service-item__list">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="services__cta">
        <p>Have a project in mind?</p>
        <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
      </div>
    </main>
  );
}
