import React from 'react';
import './CTA.css';
import useReveal from '../hooks/useReveal';

const CTA = () => {
  const containerRef = useReveal();

  return (
    <section className="cta-section" id="contact">
      <div className="cta-ambient-glow" />

      <div className="cta-container" ref={containerRef}>
        <div className="cta-card reveal-zoom">
          <div className="cta-content">
            <h2 className="cta-title reveal-up" style={{ '--delay': '0.12s' }}>
              Ready to Accelerate Your Finance Career?
            </h2>

            <p className="cta-description reveal-up" style={{ '--delay': '0.24s' }}>
              Join 10,000+ learners mastering TallyPrime, GST compliance, and corporate accounting with live business ledgers. Enroll today and unlock 30 days of free complimentary TallyPrime software access.
            </p>

            <div className="cta-action-buttons reveal-up" style={{ '--delay': '0.36s' }}>
              <a href="#courses" className="cta-btn-primary">
                <span>Explore All Courses</span>
                <span className="cta-btn-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>

              <a href="#account" className="cta-btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Talk to a Career Advisor</span>
              </a>
            </div>

            <div className="cta-trust-checklist reveal-up" style={{ '--delay': '0.48s' }}>
              <div className="checklist-item">
                <span className="check-dot">✓</span>
                <span>Official Tally Certification</span>
              </div>
              <div className="checklist-item">
                <span className="check-dot">✓</span>
                <span>6-Week Client Ledger Internship</span>
              </div>
              <div className="checklist-item">
                <span className="check-dot">✓</span>
                <span>100% Practical GST Portal Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
