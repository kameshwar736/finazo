import React from 'react';
import './Footer.css';
import useReveal from '../hooks/useReveal';

const Footer = () => {
  const footerRef = useReveal();

  return (
    <footer className="finanzo-footer" ref={footerRef}>
      <div className="footer-container">

        {/* Main Footer Grid */}
        <div className="footer-top-grid">

          {/* Brand Info Column */}
          <div className="footer-brand-col reveal-up" style={{ '--delay': '0s' }}>
            <a href="#home" className="footer-brand-logo-link">
              <img
                src="/LOGO.png"
                alt="Finanzo Logo"
                className="footer-brand-logo"
              />
            </a>

            <p className="footer-brand-desc">
              Empowering next-generation accountants, commerce graduates, and finance professionals with practical, industry-grade education and official Tally credentials.
            </p>

            <div className="footer-tally-partner-badge">
              <span className="badge-check">✓</span>
              <span>Authorised Tally Learning Partner</span>
            </div>

            {/* Social Links */}
            <div className="footer-social-row">
              <a href="#linkedin" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#youtube" className="social-icon-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#twitter" className="social-icon-btn" aria-label="X Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Popular Courses */}
          <div className="footer-links-col reveal-up" style={{ '--delay': '0.12s' }}>
            <h4 className="footer-col-title">Popular Courses</h4>
            <ul className="footer-nav-list">
              <li><a href="#course-accounting">Advanced Accounting & Taxation</a></li>
              <li><a href="#courses">Professional Accounting & GST</a></li>
              <li><a href="#courses">TallyPrime with GST Fundamentals</a></li>
              <li><a href="#courses">6-Week Accounting Internship Track</a></li>
              <li><a href="#courses">Corporate Balance Sheet Preparation</a></li>
              <li><a href="#courses">TDS, TCS & Income Tax E-Filing</a></li>
            </ul>
          </div>

          {/* Column 3: Platform & Ecosystem */}
          <div className="footer-links-col reveal-up" style={{ '--delay': '0.24s' }}>
            <h4 className="footer-col-title">Finanzo Ecosystem</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About Our Mission</a></li>
              <li><a href="#about">Accreditation & Partners</a></li>
              <li><a href="#career">Placement Cell & Recruiters</a></li>
              <li><a href="#career">Verify Student Certificate</a></li>
              <li><a href="#webinar">Upcoming Live Masterclasses</a></li>
              <li><a href="#career">Become an Instructor</a></li>
            </ul>
          </div>

          {/* Column 4: Support & Contact */}
          <div className="footer-links-col reveal-up" style={{ '--delay': '0.36s' }}>
            <h4 className="footer-col-title">Contact & Helpdesk</h4>
            <div className="footer-contact-info">
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:support@finanzo.in">support@finanzo.in</a>
              </div>

              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>

              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>

              <div className="footer-startup-tags">
                <span className="startup-tag">Recognized by Startup India</span>
                <span className="startup-tag">Supported by Startup TN</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright Bar */}
        <div className="footer-bottom-bar reveal-up" style={{ '--delay': '0.48s' }}>
          <div className="footer-copyright-text">
            © {new Date().getFullYear()} Finanzo EdTech Private Limited. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="sep">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="sep">•</span>
            <a href="#refund">Refund Policy</a>
            <span className="sep">•</span>
            <a href="#security">Security & Verification</a>
          </div>
        </div>

        <div className="footer-disclaimer-note">
          Disclaimer: Tally, TallyPrime, and TEPL are registered trademarks of Tally Solutions Pvt. Ltd. Finanzo is an independent Authorised Learning Partner providing specialized educational training and certification programs.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
