import React, { useState } from 'react';
import './Contact.css';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ message: '', isError: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.first.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        message: 'Please add your first name, a valid email, and a message, then submit again.',
        isError: true
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        message: 'Please enter a valid email address.',
        isError: true
      });
      return;
    }

    setStatus({
      message: 'Thanks! Opening your email app to send your message...',
      isError: false
    });

    const body = `Name: ${formData.first} ${formData.last}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoUrl = `mailto:contact@finanzo.co.in?subject=${encodeURIComponent(
      'Enquiry from ' + formData.first
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setFormData({ first: '', last: '', email: '', message: '' });
  };

  return (
    <section id="contact-form-section" className="contact-main-section">
      <div className="contact-section-container">
        {/* Centered Top Heading */}
        <h2 className="contact-main-title">We&rsquo;d Love to Hear From You</h2>
        <p className="contact-main-sub">
          Reach out to us and an advisor will get back to you.
        </p>

        {/* 2-Column Split: Reach Out Card Box (Left) & Form (Right) */}
        <div className="contact-grid-wrap">
          {/* Left Column: Distinct Dark Card Box */}
          <div className="contact-card-right">
            <span className="contact-card-eyebrow">Reach Out To Us</span>
            <h3 className="contact-card-title">
              Visit, call, or write to us
            </h3>

            <div className="contact-card-meta-grid">
              <div className="meta-item">
                <h4>Address</h4>
                <p>3045 10 Sunrize Avenue, Chennai</p>
              </div>

              <div className="meta-item">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+917358570881">+91 73585 70881</a>
                </p>
              </div>

              <div className="meta-item">
                <h4>Hours</h4>
                <p>
                  Mon &ndash; Fri: 9:00 am &ndash; 8:00 pm<br />
                  Sat &ndash; Sun: 9:00 am &ndash; 10:00 pm
                </p>
              </div>

              <div className="meta-item">
                <h4>Email</h4>
                <p>
                  <a href="mailto:contact@finanzo.co.in">contact@finanzo.co.in</a>
                </p>
              </div>
            </div>

            <div className="contact-card-socials">
              <h4>Follow us</h4>
              <div className="social-links-row">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="social-links-row">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form id="contact-form" className="contact-form-left" onSubmit={handleSubmit} noValidate>
            <div className="contact-group">
              <label className="contact-label" htmlFor="first-name">
                Your name
              </label>
              <div className="contact-row-inputs">
                <input
                  id="first-name"
                  name="first"
                  value={formData.first}
                  onChange={handleChange}
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                />
                <input
                  id="last-name"
                  name="last"
                  value={formData.last}
                  onChange={handleChange}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="contact-group">
              <label className="contact-label" htmlFor="email">
                Your email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-group">
              <label className="contact-label" htmlFor="message">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <div className="contact-actions-row">
              <button className="contact-submit-pill" type="submit">
                SUBMIT
              </button>
              <div className="contact-wa-text">
                Fast support via WhatsApp{' '}
                <a
                  href="https://wa.me/917358570881"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instant Chat
                </a>
              </div>
            </div>

            {status.message && (
              <div
                className={`contact-status ${status.isError ? 'error' : 'success'}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
