import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="cert-section" id="career">
      <div className="cert-frame">
        {/* Section Header */}
        <p className="cert-eyebrow">Certification &amp; Experience</p>
        <h1 className="cert-h1">Industry Certification &amp; Practical Internships</h1>
        <p className="cert-lede">
          Equipping every learner with verifiable Tally credentials and hands-on accounting practice that employers recognize immediately.
        </p>
        <hr className="cert-rule" />

        <div className="cert-rows">
          {/* Row 1: Official Tally Certification */}
          <section className="cert-row" aria-labelledby="c1">
            <span className="cert-chip blue">Official credential</span>
            <h2 id="c1" className="cert-h2">Authorised Tally Certification</h2>
            <p className="cert-desc">
              Validate your technical proficiency with certificates issued directly in collaboration with Tally Education (TEPL), recognized nationwide by corporate recruiters and CA firms.
            </p>

            {/* Certificate Preview Card */}
            <div className="cert-preview" role="img" aria-label="Sample Tally certificate of completion with QR code">
              <div className="cert-wm">SAMPLE</div>
              <div className="cert-gold">
                <div className="cert-logos">
                  <div className="cert-tally">
                    Tally<small>Authorised Certification</small>
                  </div>
                  <div className="cert-candidate-id">Candidate ID: TLY-000000</div>
                </div>

                <div className="cert-ctitle">CERTIFICATE</div>
                <span className="cert-ribbon">of Completion</span>

                <div className="cert-cbody">
                  This is to certify that <b>Learner Name</b>
                  <br />
                  has successfully completed the
                  <br />
                  <b>Tally Prime with GST</b> programme
                  <br />
                  in collaboration with Tally Education (TEPL).
                </div>

                <svg className="cert-qr" viewBox="0 0 10 10" aria-hidden="true">
                  <rect width="10" height="10" fill="#fff" />
                  <g fill="#111">
                    <rect x="0" y="0" width="3" height="3" />
                    <rect x="7" y="0" width="3" height="3" />
                    <rect x="0" y="7" width="3" height="3" />
                    <rect x="4" y="0" width="1" height="2" />
                    <rect x="5" y="3" width="2" height="1" />
                    <rect x="4" y="5" width="3" height="1" />
                    <rect x="8" y="5" width="2" height="2" />
                    <rect x="4" y="7" width="1" height="3" />
                    <rect x="6" y="8" width="3" height="1" />
                    <rect x="3" y="4" width="1" height="1" />
                  </g>
                  <g fill="#fff">
                    <rect x=".7" y=".7" width="1.6" height="1.6" />
                    <rect x="7.7" y=".7" width="1.6" height="1.6" />
                    <rect x=".7" y="7.7" width="1.6" height="1.6" />
                  </g>
                </svg>

                <div className="cert-sign">
                  <span>Course Director</span>
                  <span>Tally Education (TEPL)</span>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <ul className="cert-list">
              <li>
                <span className="cert-tick">✓</span>
                <div>
                  <h3>Verifiable QR &amp; Candidate ID</h3>
                  <p>Instantly verified online by HR teams and hiring managers.</p>
                </div>
              </li>
              <li>
                <span className="cert-tick">✓</span>
                <div>
                  <h3>Recognized by 10,000+ Employers</h3>
                  <p>Standard qualification across major accounting and taxation roles.</p>
                </div>
              </li>
              <li>
                <span className="cert-tick">✓</span>
                <div>
                  <h3>One-Click LinkedIn Badge</h3>
                  <p>Showcase verified credentials directly on your professional resume.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Row 2: 6-Week Hands-On Internship (Flipped Layout) */}
          <section className="cert-row flip" aria-labelledby="c2">
            <span className="cert-chip green">Experience track</span>
            <h2 id="c2" className="cert-h2">6-Week Hands-On Internship</h2>
            <p className="cert-desc">
              Step into real-world accounting before graduation. Handle genuine client ledgers, reconcile GST inputs, and prepare compliant audit schedules under senior guidance.
            </p>

            {/* Green Certificate Preview Card */}
            <div className="cert-preview green" role="img" aria-label="Sample internship experience letter">
              <div className="cert-wm">SAMPLE</div>
              <div className="cert-green-side" />
              <div className="cert-green-main">
                <div className="cert-green-tiny">Internship Completion Certificate</div>
                <h4>Certificate of Completion</h4>
                <p>This is to certify that <b>Learner Name</b></p>
                <p>has successfully completed a <b>6-Week Hands-On Accounting Internship</b></p>
                <p className="cert-date-range">Month Year – Month Year</p>
                <div className="cert-green-sig">Authorised Signatory</div>
                <div className="cert-green-who">
                  Founder &amp; CEO
                  <br />
                  Training Partner
                </div>
              </div>
            </div>

            {/* Checklist */}
            <ul className="cert-list">
              <li>
                <span className="cert-tick">✓</span>
                <div>
                  <h3>Live Business Client Ledgers</h3>
                  <p>No dummy simulations—work on actual audited commercial transaction books.</p>
                </div>
              </li>
              <li>
                <span className="cert-tick">✓</span>
                <div>
                  <h3>GST, TDS &amp; E-Way Bill Filing</h3>
                  <p>Hands-on practice filing GSTR-1, GSTR-3B and generating e-invoices.</p>
                </div>
              </li>
              <li>
                <span className="cert-tick">✓</span>
                <div>
                  <h3>Experience Letter &amp; LOR</h3>
                  <p>Official internship completion certificate plus Letter of Recommendation.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
