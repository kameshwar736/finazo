import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ message: '', isError: false });

  useEffect(() => {
    // Reveal animations on scroll
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    const elements = document.querySelectorAll(
      '.contact-reveal'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el, index) => {
      el.style.setProperty('--d', `${(index % 4) * 90}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const scrollToForm = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page-root">
      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero" id="top">
        <div className="contact-hero-left">
          <h1>Contact Us</h1>
          <p>
            Have questions about courses, certifications, or GST practical training? Get in touch with our expert advisors.
          </p>
          <div>
            <a className="contact-btn slate" href="#contact-form-section" onClick={scrollToForm}>
              Contact us <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>

        <div className="contact-hero-right">
          <div className="contact-hero-glow" aria-hidden="true" />
          <a
            className="contact-scroll-btn"
            href="#contact-form-section"
            onClick={scrollToForm}
            aria-label="Scroll to contact form"
          >
            &darr;
          </a>
        </div>

        <div className="contact-ghost" aria-hidden="true">
          Finanzo&nbsp;Finanzo&nbsp;Finanzo&nbsp;Finanzo&nbsp;
        </div>
      </section>

      {/* ================= FORM & REACH OUT SECTION ================= */}
      <section id="contact-form-section" className="contact-main-section">
        <div className="contact-form-wrap">
          <h2 className="contact-reveal">We&rsquo;d Love to Hear From You</h2>
          <p className="contact-sub contact-reveal">
            Reach out to us and an advisor will get back to you.
          </p>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-group contact-reveal">
              <label className="contact-label" htmlFor="first-name">
                Your name
              </label>
              <div className="contact-row">
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

            <div className="contact-group contact-reveal">
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

            <div className="contact-group contact-reveal">
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

            <div className="contact-actions contact-reveal">
              <button className="contact-btn blue" type="submit">
                Submit
              </button>
              <div className="contact-wa">
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

          {/* ================= REACH OUT INFO ================= */}
          <div className="contact-reach contact-reveal">
            <p className="contact-eyebrow">Reach Out To Us</p>
            <h3>Visit, call, or write to us</h3>
            <div className="contact-cols">
              <div className="contact-col-item">
                <h4>Address</h4>
                <p>3045 10 Sunrize Avenue, Chennai</p>
              </div>
              <div className="contact-col-item">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+917358570881">+91 73585 70881</a>
                </p>
              </div>
              <div className="contact-col-item">
                <h4>Hours</h4>
                <p>
                  Mon &ndash; Fri: 9:00 am &ndash; 8:00 pm<br />
                  Sat &ndash; Sun: 9:00 am &ndash; 10:00 pm
                </p>
              </div>
              <div className="contact-col-item">
                <h4>Email</h4>
                <p>
                  <a href="mailto:contact@finanzo.co.in">contact@finanzo.co.in</a>
                </p>
              </div>
              <div className="contact-col-item contact-col-full">
                <h4>Follow us</h4>
                <p className="contact-follow">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
