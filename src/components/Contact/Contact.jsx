import React, { useEffect } from 'react';
import './Contact.css';
import ContactFormSection from './ContactFormSection';

const Contact = () => {
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
      <ContactFormSection />
    </div>
  );
};

export default Contact;
