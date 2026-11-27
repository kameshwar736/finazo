import React, { useState } from 'react';
import './CourseProfessionalGST.css';


const NOTE_TEXT = "Includes hands-on practical exercises and live mentor support.";

const CURRICULUM_MODULES = [
  {
    title: "Fundamentals of Accounting",
    lessons: 5,
    summary: "Core accounting concepts, double-entry bookkeeping, debit/credit rules, and foundational voucher principles.",
    topics: [
      "Meaning of Accounting & Phases of the Accounting Cycle",
      "Golden Rules of Accounting",
      "Voucher Principles & Double-Entry Bookkeeping",
      "Trial Balance and Financial Statements",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Introduction to Tally Prime",
    lessons: 5,
    summary: "Gateway navigation, company setup, configurations, and core digital accounting workflow.",
    topics: [
      "Introduction to Tally Prime",
      "Company Creation and setting up of company features in Tally",
      "Getting Started with Tally",
      "Company Configurations",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Maintaining the Chart of Accounts",
    lessons: 6,
    summary: "Creating and managing ledger groups, primary accounts, cost centers, and subsidiary books.",
    topics: [
      "Introduction to Maintaining the Chart of Accounts",
      "Creation of Accounting Masters in Tally Prime",
      "Creation of Inventory Masters in Tally Prime",
      "Alteration & Deletion of Masters in Tally Prime",
      "Multi-Masters Creation and Display of Chart of Accounts",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Recording and Maintaining Accounting Transactions",
    lessons: 12,
    summary: "Payment, receipt, sales, purchase, contra, and journal voucher entries with live business documents.",
    topics: [
      "Introduction to Recording and Maintaining Accounting Transactions",
      "Introduction to Recording Accounting Vouchers in Tally Prime",
      "Receipt Voucher (F6)",
      "Contra Voucher (F4)",
      "Payment Voucher (F5)",
      "Purchase Voucher (F9)",
      "Sales Voucher (F8)",
      "Debit Note Voucher (Alt + F5)",
      "Credit Note Voucher (Alt + F6)",
      "Journal Voucher (F7)",
      "Recording for Provisions",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Banking",
    lessons: 8,
    summary: "Cheque printing, e-banking transactions, auto & manual bank reconciliation statements (BRS).",
    topics: [
      "Introduction to Banking",
      "Banking Payments",
      "Cheque Printing",
      "Deposit Slips",
      "Payment Advice",
      "Overview of Bank Reconciliation and Manual Reconciliation Process",
      "Auto Bank Reconciliation",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Generating Financial statements and MIS reports",
    lessons: 6,
    summary: "Trial balance, profit & loss statement, balance sheet finalisation, and managerial MIS reporting.",
    topics: [
      "Introduction to MIS",
      "Final Accounts Reports in Tally",
      "Cash Flow and Fund Flow Analysis Report and Receipts and Payments",
      "MIS Reports in Tally",
      "Books and Registers",
      "Conclusion & Quiz"
    ],
    hasNote: false
  },
  {
    title: "Data Security",
    lessons: 5,
    summary: "User role permissions, audit trails, multi-level password locks, and data access security.",
    topics: [
      "Introduction to Security Control & User Access Rights",
      "Tally Vault & User Passwords",
      "Audit Trails & Transaction Tracking",
      "Security Configurations & Data Locks",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Company Data Management",
    lessons: 5,
    summary: "Company split, database backup, restore, data synchronization, and repair utilities.",
    topics: [
      "Learning Objectives",
      "Company Data Split & Merge",
      "Backup, Restore & Data Repair",
      "Data Synchronization",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Goods and Services Tax",
    lessons: 7,
    summary: "CGST, SGST, IGST setup, HSN/SAC codes, e-Invoicing, e-Way bills, and generating GSTR-1 & GSTR-3B.",
    topics: [
      "Introduction to GST",
      "GST in Tally Prime",
      "Recording GST Compliant Transactions",
      "Input Tax Credit set off against Liability",
      "GST Tax Payment",
      "Generating GST Returns for a Regular Dealer in Tally",
      "Conclusion & Quiz"
    ],
    hasNote: true
  },
  {
    title: "Assessment",
    lessons: 3,
    summary: "Comprehensive practice evaluation, simulated accounts exam, and certification readiness test.",
    topics: [
      "Comprehensive Practice Evaluation",
      "Simulated Accounts & GST Exam",
      "Certification Readiness Test"
    ],
    hasNote: false
  },
  {
    title: "Internship - Accounting & Reporting (Three Case Studies)",
    lessons: 4,
    summary: "Work on three practical accounting case studies replicating live trading and manufacturing businesses.",
    topics: [
      "Three Live Business Accounting Case Studies",
      "Real-Time Voucher Entries & Bank Reconciliation",
      "Manufacturing & Trading GST Compliance",
      "Management Report Finalisation & Mentor Review"
    ],
    hasNote: true
  }
];


const ELIGIBILITY_AUDIENCE = [
  {
    cat: 'Students',
    sub: 'Commerce degree',
    title: 'Students pursuing Commerce degree (B.Com, BBA, M.Com, MBA)',
    img: '/eligibility/card-1.jpg',
  },
  {
    cat: 'Professionals',
    sub: 'Tally Prime upskilling',
    title: 'Working accountants & finance executives upskilling to Tally Prime',
    img: '/eligibility/card-2.jpg',
  },
  {
    cat: 'Entrepreneurs',
    sub: 'Day-to-day accounts',
    title: 'Small business owners & entrepreneurs managing day-to-day accounts',
    img: '/eligibility/card-3.jpg',
  },
  {
    cat: 'Job seekers',
    sub: 'Accounts & GST roles',
    title: 'Job seekers preparing for Accounts Executive & GST roles',
    img: '/eligibility/card-4.jpg',
  },
];

const CourseProfessionalGST = ({ onBackToHome = () => {}, onSelectCourse = () => {} }) => {
  const [openModules, setOpenModules] = useState([0]);

  const toggleModule = (index) => {
    setOpenModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  return (
    <div className="gst-hero-page">
      {/* Hero Section */}
      <section className="gst-hero-section">
        {/* Background Visual Atmospheric Effects */}
        <div className="gst-ambient-vertical-lighting" aria-hidden="true" />
        <div className="gst-ambient-glow-right" aria-hidden="true" />
        <div className="gst-ambient-glow-top" aria-hidden="true" />

        <div className="gst-hero-container">
          <div className="gst-hero-split-grid">
            {/* Left Column: Headlines, Matrix & CTAs */}
            <div className="gst-hero-content">
              {/* Back to Courses Link */}
              <button 
                type="button" 
                onClick={onBackToHome} 
                className="gst-hero-back-btn"
                aria-label="Back to Home"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Home</span>
              </button>

              {/* Accreditation Kicker */}
              <div className="gst-hero-kicker">
                FINANZO PROFESSIONAL CERTIFICATION • ACCREDITED BY TALLY EDUCATION (TEPL)
              </div>

              {/* Title matching reference screenshot */}
              <h1 className="gst-hero-title">
                Professional Accounting <br />
                <span className="gst-ampersand">&amp;</span>
                <span className="gst-hero-cyan-text">GST Compliance</span>
              </h1>

              {/* Description matching reference screenshot */}
              <p className="gst-hero-desc">
                Master Tally Prime with a strong focus on GST. Learn through practical examples, real business cases, and hands-on training to build your career in accounts and finance. Enroll now!
              </p>

              {/* Pricing & CTA Action Row */}
              <div className="gst-pricing-cta-row">
                <div className="gst-price-group">
                  <span className="gst-current-price">₹4,999</span>
                  <span className="gst-original-price">₹6,999</span>
                  <span className="gst-discount-badge">29% OFF</span>
                </div>

                <button type="button" className="gst-btn-pay">
                  PAY NOW &rarr;
                </button>
              </div>
            </div>

            {/* Right Column: 3D Glowing GST Image & Floating Elements */}
            <div className="gst-hero-visual-col">
              <div className="gst-device-scene">
                {/* Floating Satellite Badge */}
                <div className="gst-satellite-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>

                {/* Glassmorphic Speech Bubble */}
                <div className="gst-speech-bubble">
                  <p className="gst-bubble-text">
                    Master practical GST filing &amp; compliance with real business cases. 🚀
                  </p>
                </div>

                {/* 3D GST Showcase Image Container */}
                <div className="gst-3d-image-frame">
                  <img 
                    src="/gst-3d-hero.png" 
                    alt="Professional GST 3D Illustration" 
                    className="gst-3d-hero-img" 
                  />
                  <div className="gst-image-glow-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          STATS STRIP (4 METRICS: 4.8 REVIEWS, LEARNERS, 25 HRS, TALLY CERTIFIED)
          ========================================================================== */}
      <section className="gst-stats-strip">
        <div className="gst-stats-container">
          {/* Stat 1 */}
          <div className="gst-stat-item">
            <span className="gst-stat-num">4.8</span>
            <span className="gst-stat-label">(2,100) VERIFIED REVIEWS</span>
          </div>

          {/* Stat 2 */}
          <div className="gst-stat-item">
            <span className="gst-stat-num">10,800+</span>
            <span className="gst-stat-label">ACTIVE LEARNERS</span>
          </div>

          {/* Stat 3 */}
          <div className="gst-stat-item">
            <span className="gst-stat-num">25 Hours</span>
            <span className="gst-stat-label">ONLINE &amp; LIVE TRAINING</span>
          </div>

          {/* Stat 4 */}
          <div className="gst-stat-item">
            <span className="gst-stat-num">Tally Certified</span>
            <span className="gst-stat-label">TEPL CREDENTIAL INCLUDED</span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 01 / OVERVIEW (COURSE OVERVIEW & CHECKLIST)
          ========================================================================== */}
      <section className="gst-overview-section">
        <div className="gst-overview-container">
          {/* Section Kicker */}
          <div className="gst-overview-kicker">
            SECTION 01 / OVERVIEW
          </div>

          {/* Section Heading */}
          <h2 className="gst-overview-title">
            Course <span className="gst-overview-blue">Overview</span>
          </h2>

          {/* Lead Paragraph */}
          <p className="gst-overview-lead">
            This course is designed to help you master Tally Prime with a strong focus on GST. You will learn through practical examples, real business cases, and hands-on training.
          </p>

          {/* Secondary Paragraph */}
          <p className="gst-overview-sublead">
            Along with technical knowledge, you will also gain internship support to gain industry exposure and build your career in accounts and finance.
          </p>

          {/* 2x2 Feature Checklist */}
          <div className="gst-overview-checklist">
            <div className="gst-check-item">
              <span className="gst-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="gst-check-text">Tally Prime 4.0 Industry Standard</span>
            </div>

            <div className="gst-check-item">
              <span className="gst-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="gst-check-text">Live GST Portal Simulations (GSTR–1 &amp; 3B)</span>
            </div>

            <div className="gst-check-item">
              <span className="gst-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="gst-check-text">Automated BRS &amp; Multi–Tier Invoicing</span>
            </div>

            <div className="gst-check-item">
              <span className="gst-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="gst-check-text">NEP 2020 Aligned &amp; TEPL Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION: ABOUT TALLY PRIME WITH GST FUNDAMENTALS (FROM ACCOUNTING PAGE)
          ========================================================================== */}
      <section className="arch-content-section section-about-tally" id="about-tally">
        <div className="arch-container">
          <div className="about-tally-header-wrap">
            <h2 className="arch-section-title about-tally-title">
              About <span className="hero-lime-highlight">Tally Prime</span> with GST Fundamentals
            </h2>
          </div>

          {/* 4 Narrow Key Pillar Image Cards */}
          <div className="about-tally-pillars-grid">
            <div className="tally-pillar-card">
              <img
                src="/abouttally/mentor.jpg"
                alt="Industry Mentors"
                className="tally-pillar-bg"
              />
              <div className="tally-pillar-overlay" />
              <div className="tally-pillar-content">
                <span className="tally-pillar-num">01</span>
                <h3 className="tally-pillar-title">INDUSTRY MENTORS</h3>
                <p className="tally-pillar-desc">Learn with experienced corporate professionals</p>
              </div>
            </div>

            <div className="tally-pillar-card">
              <img
                src="/abouttally/selflearing.jpg"
                alt="Self Paced Learning"
                className="tally-pillar-bg"
              />
              <div className="tally-pillar-overlay" />
              <div className="tally-pillar-content">
                <span className="tally-pillar-num">02</span>
                <h3 className="tally-pillar-title">SELF PACED LEARNING</h3>
                <p className="tally-pillar-desc">Complete 25 hours at your own convenience</p>
              </div>
            </div>

            <div className="tally-pillar-card">
              <img
                src="/abouttally/certification.jpg"
                alt="Tally Certification"
                className="tally-pillar-bg"
              />
              <div className="tally-pillar-overlay" />
              <div className="tally-pillar-content">
                <span className="tally-pillar-num">03</span>
                <h3 className="tally-pillar-title">TALLY CERTIFICATION</h3>
                <p className="tally-pillar-desc">Accredited by Tally Education (TEPL)</p>
              </div>
            </div>

            <div className="tally-pillar-card">
              <img
                src="/abouttally/access.jpg"
                alt="Access to TEPL Job Portal"
                className="tally-pillar-bg"
              />
              <div className="tally-pillar-overlay" />
              <div className="tally-pillar-content">
                <span className="tally-pillar-num">04</span>
                <h3 className="tally-pillar-title">TEPL JOB PORTAL</h3>
                <p className="tally-pillar-desc">Apply directly to verified partner employers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION: OUR CURRICULUM GUIDE (FROM FINANZO GUIDE)
          ========================================================================== */}
      <section className="gst-curriculum-guide-section" id="curriculum">
        <div className="gst-curr-wrap">
          <aside className="gst-curr-aside">
            <span className="gst-curr-mark" />
            <h2 className="gst-curr-heading">Our Curriculum Guide</h2>
            <p className="gst-curr-subtext">
              The curriculum is designed to help you learn the skills required to become a successful professional.
            </p>
            <span className="gst-curr-tag">11 Modules • 25 Hours</span>
          </aside>

          <ol className="gst-curr-list">
            {CURRICULUM_MODULES.map((m, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              const isOpen = openModules.includes(idx);
              return (
                <li key={idx} className={`gst-curr-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="gst-curr-head"
                    onClick={() => toggleModule(idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="gst-curr-title-col">
                      <span className="gst-curr-lab">Module {numStr} · {m.lessons} Lessons</span>
                      <span className="gst-curr-ttl">{m.title}</span>
                    </div>
                    <span className="gst-curr-sum">{m.summary}</span>
                    <span className="gst-curr-plus" aria-hidden="true" />
                  </button>

                  <div className="gst-curr-panel">
                    <div className="gst-curr-inner">
                      <div className="gst-curr-body">
                        <h3 className="gst-curr-body-title">Modules &amp; Hands-On Topics Covered</h3>
                        <ol className="gst-curr-topics-ol">
                          {m.topics.map((t, tIdx) => (
                            <li key={tIdx} className="gst-curr-topic-li">
                              <span className="gst-curr-topic-num">{tIdx + 1}</span>
                              <span className="gst-curr-topic-name">{t}</span>
                            </li>
                          ))}
                        </ol>
                        {m.hasNote && (
                          <div className="gst-curr-note">
                            {NOTE_TEXT}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ==========================================================================
          SECTION: TALLY COURSE ELIGIBILITY (FROM ADVANCED ACCOUNTING PAGE)
          ========================================================================== */}
      <section className="arch-content-section" id="eligibility">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <h2 className="arch-section-title">
                <span className="hero-lime-highlight">Tally Course Eligibility</span>
              </h2>
            </div>
            <p className="arch-header-desc">
              Those with a background in commerce at graduate or postgraduate level, along with students or working professionals interested in upskilling, are eligible.
            </p>
          </div>

          <div className="elig-audience-grid">
            {ELIGIBILITY_AUDIENCE.map((item, idx) => (
              <article key={idx} className="elig-card" tabIndex={0}>
                <div className="elig-media">
                  <img src={item.img} alt={item.cat} loading="lazy" />
                </div>
                <div className="elig-body">
                  <span className="elig-cat">{item.cat}</span>
                  <span className="elig-sub">{item.sub}</span>
                  <h3 className="elig-title">{item.title}</h3>
                </div>
                <div className="elig-go">DISCOVER</div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseProfessionalGST;
