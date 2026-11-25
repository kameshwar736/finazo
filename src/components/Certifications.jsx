import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="cert-section" id="career">
      <div className="cert-container">
        
        {/* Clean Header with Breathing Room */}
        <div className="cert-header">
          <h2 className="cert-main-title">
            Industry Certification & Practical Internships
          </h2>

          <p className="cert-subtext">
            Equipping every learner with verifiable Tally credentials and hands-on accounting practice that employers recognize immediately.
          </p>
        </div>

        {/* 2 Clean, Uncluttered Pillars */}
        <div className="cert-two-pillars">
          
          {/* Pillar 1: Official Tally Certification */}
          <div className="cert-pillar-card animate-on-scroll stagger-1">
            <div className="pillar-header">
              <div className="pillar-tag official">OFFICIAL CREDENTIAL</div>
              <h3 className="pillar-title">Authorised Tally Certification</h3>
            </div>

            <p className="pillar-description">
              Validate your technical proficiency with certificates issued directly in collaboration with Tally Education (TEPL), recognized nationwide by corporate recruiters and CA firms.
            </p>

            <div className="pillar-features-list">
              <div className="pillar-feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Verifiable QR & Candidate ID</strong>
                  <p>Instantly verified online by HR teams and hiring managers.</p>
                </div>
              </div>

              <div className="pillar-feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Recognized by 10,000+ Employers</strong>
                  <p>Standard qualification across major accounting and taxation roles.</p>
                </div>
              </div>

              <div className="pillar-feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>One-Click LinkedIn Badge</strong>
                  <p>Showcase verified credentials directly on your professional resume.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: 6-Week Practical Internship */}
          <div className="cert-pillar-card animate-on-scroll stagger-2">
            <div className="pillar-header">
              <div className="pillar-tag internship">EXPERIENCE TRACK</div>
              <h3 className="pillar-title">6-Week Hands-On Internship</h3>
            </div>

            <p className="pillar-description">
              Step into real-world accounting before graduation. Handle genuine client ledgers, reconcile GST inputs, and prepare compliant audit schedules under senior guidance.
            </p>

            <div className="pillar-features-list">
              <div className="pillar-feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Live Business Client Ledgers</strong>
                  <p>No dummy simulations—work on actual audited commercial transaction books.</p>
                </div>
              </div>

              <div className="pillar-feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>GST, TDS & E-Way Bill Filing</strong>
                  <p>Hands-on practice filing GSTR-1, GSTR-3B and generating e-invoices.</p>
                </div>
              </div>

              <div className="pillar-feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Experience Letter & LOR</strong>
                  <p>Official internship completion certificate plus Letter of Recommendation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
