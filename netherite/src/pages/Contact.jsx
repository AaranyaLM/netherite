import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to a backend or form service
    setSubmitted(true);
  };

  return (
    <main className="contact">

      <div className="contact__header">
        <span className="contact__eyebrow">Get in Touch</span>
        <h1 className="contact__title">Tell us about<br />your project.</h1>
        <p className="contact__sub">
          Fill in the form and we'll get back to you within one business day to
          discuss how we can help bring your vision to life.
        </p>
      </div>

      <div className="contact__body">

        <aside className="contact__sidebar">
          <div className="contact__detail">
            <span>Email</span>
            <a href="mailto:hello@netherite.co">hello@netherite.co</a>
          </div>
          <div className="contact__detail">
            <span>Response Time</span>
            <a href="mailto:hello@netherite.co">Within one business day</a>
          </div>
        </aside>

        <div className="contact__main">
          {submitted ? (
            <div className="contact__thanks">
              <div className="contact__thanks-icon" aria-hidden="true">✓</div>
              <h2>We got your message.</h2>
              <p>Thanks for reaching out. We'll be in touch shortly to start the conversation.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service You're Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="website">Website Design</option>
                  <option value="video">AI Videos for Business</option>
                  <option value="both">Both</option>
                  <option value="other">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="A brief description of what you're looking for, your timeline, or any questions."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn--submit">
                Send message →
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}