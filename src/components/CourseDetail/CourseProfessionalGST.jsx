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



const FAQ_LIST = [
  {
    q: 'What is the duration of the program?',
    a: 'The program spans 25 hours of self-paced high-definition video modules combined with 3 comprehensive corporate internship case studies and weekly live mentoring sessions.'
  },
  {
    q: 'Who are the instructors?',
    a: 'Training is provided by practicing Chartered Accountants and seasoned corporate finance professionals with over 10+ years of real-world expertise in corporate accounting, Tally Prime, and Indian GST regulations.'
  },
  {
    q: 'What is the mode of delivery?',
    a: 'The program is delivered 100% online. You get instant access to structured self-paced modules, interactive weekend live mentoring, real-time doubt clearing sessions, and support in regional languages.'
  },
  {
    q: 'Is there any support for job placement?',
    a: 'Yes! Enrolled learners receive exclusive direct access to the official TEPL Job Portal to apply directly with verified partner employers. In addition, Finanzo provides resume formatting, mock interview prep, and hiring referrals.'
  },
  {
    q: 'What tools and skills will I learn?',
    a: 'You will gain comprehensive mastery of Tally Prime 4.0, GST portal filing (GSTR-1, GSTR-3B), Automated Bank Reconciliation, E-Invoicing, E-Way Bill generation, MIS Financial Reporting, and Edit Log audit trail compliance.'
  },
  {
    q: 'What are the eligibility criteria?',
    a: 'Students pursuing commerce or management degrees (B.Com, BBA, M.Com, MBA), working accountants and finance executives upskilling, and small business owners managing accounts are fully eligible.'
  },
  {
    q: 'How does the practical internship work?',
    a: 'The practical internship includes 3 comprehensive real-world business case studies where you perform live voucher entries, GST calculations, and financial report finalization with mentor reviews.'
  },
  {
    q: 'Can I access the recorded sessions after the live classes?',
    a: 'Yes! You get Lifetime Access to all recorded sessions, course materials, case study templates, and future curriculum updates via your personal Finanzo dashboard.'
  },
  {
    q: 'What is unique about this program?',
    a: 'This program uniquely integrates official accreditation by Tally Education (TEPL), NEP 2020 alignment, practical internship with 3 authentic case studies, verified credential, and direct access to the TEPL Job Portal.'
  },
  {
    q: 'Will I receive a certification?',
    a: 'Yes, upon successful completion you receive the official TEPL Accredited Course Completion Certificate with verifiable credentials and QR code recognized by employers nationwide.'
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
  const handlePayNow = () => {
    alert('Redirecting to Finanzo Secure Checkout for ₹4,999...');
  };
  const [openModules, setOpenModules] = useState([0]);
  const [openFaq, setOpenFaq] = useState(0);

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

            {/* Right Column: Standalone 3D GST Logo */}
            <div className="gst-hero-visual-col">
              <div className="gst-logo-standalone-wrap">
                <div className="gst-hero-image-glow" aria-hidden="true" />
                <img 
                  src="/gst-3d-hero.png" 
                  alt="Professional GST 3D Logo" 
                  className="gst-hero-logo-img" 
                />
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
          <div className="gst-overview-grid-split">
            <div className="gst-overview-col-left">
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

            {/* Right Column: Course Image & Partner Logos */}
            <div className="course-overview-media-col">
              <div className="course-overview-image-wrap">
                <img
                  src="/course/course2.jpg"
                  alt="Professional Accounting & GST Compliance Course Overview"
                  className="course-overview-main-img"
                />
              </div>
              <div className="course-overview-logos-row">
                <div className="course-overview-logo-card">
                  <img
                    src="/course/Tally%20Power%20of%20Simplicity%20Logo.png"
                    alt="Tally Power of Simplicity"
                    className="course-overview-partner-logo"
                  />
                </div>
                <div className="course-overview-logo-card">
                  <img
                    src="/course/TEPL%20Tally%20Education%20Logo.png"
                    alt="Tally Education TEPL"
                    className="course-overview-partner-logo"
                  />
                </div>
              </div>
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
            <h2 className="about-tally-title">
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

      {/* ==========================================================================
          SECTION: COURSE PACKAGE & FEES (PRICING SECTION)
          ========================================================================== */}
      <section className="arch-content-section section-pricing-package section-pricing-light" id="pricing">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <h2 className="arch-section-title arch-title-dark">
                Complete Course Package &amp; Fees
              </h2>
            </div>
            <p className="arch-header-desc">
              All-inclusive program fee with software access, mentoring, internship, and official certifications
            </p>
          </div>

          <div className="arch-pricing-package-card">
            <div className="pricing-col-left">
              <span className="package-tag">FULL ACCESS ENROLLMENT</span>
              <div className="package-price-wrap">
                <span className="pkg-curr">₹4,999</span>
                <span className="pkg-old">₹6,999</span>
                <span className="pkg-discount">29% DISCOUNT APPLIED</span>
              </div>

              <div className="pkg-specs-grid">
                <div className="spec-box">
                  <span className="label">Duration</span>
                  <span className="val">25 Hours</span>
                </div>
                <div className="spec-box">
                  <span className="label">Learning Mode</span>
                  <span className="val">Self-Paced + Live</span>
                </div>
                <div className="spec-box">
                  <span className="label">Internship</span>
                  <span className="val">3 Case Studies</span>
                </div>
                <div className="spec-box">
                  <span className="label">Certification</span>
                  <span className="val">Tally (TEPL) Certified</span>
                </div>
              </div>

              <button type="button" onClick={handlePayNow} className="package-enroll-btn">
                <span>PAY NOW • ENROLL TODAY</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>

            <div className="pricing-col-right">
              <h4 className="inclusions-title">Package Inclusions</h4>
              <ul className="inclusions-checklist">
                <li><span className="chk">✓</span> 25 Hours Self-Paced Learning Modules</li>
                <li><span className="chk">✓</span> Weekly Live Interactive Sessions with Mentors</li>
                <li><span className="chk">✓</span> 3 Real-World Corporate Case Studies</li>
                <li><span className="chk">✓</span> Accredited Tally Education (TEPL) Certification</li>
                <li><span className="chk">✓</span> Exclusive TEPL Job Portal Direct Employer Access</li>
                <li><span className="chk">✓</span> Hands-On GST Portal Simulation (GSTR-1 &amp; 3B)</li>
                <li><span className="chk">✓</span> Real-Time Regional Doubt &amp; Mentor Support</li>
                <li><span className="chk">✓</span> National Education Policy (NEP 2020) Aligned</li>
              </ul>

              <div className="advisor-strip">
                <span className="advisor-note">Have questions before enrolling?</span>
                <div className="advisor-actions">
                  <a
                    href="https://wa.me/917358570881?text=Hi%20Finanzo%20team,%20I%20have%20questions%20about%20the%20Professional%20Accounting%20and%20GST%20Compliance%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-advisor-link"
                  >
                    💬 WhatsApp Advisor
                  </a>
                  <a href="tel:+917358570881" className="pkg-advisor-link">
                    📞 Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION: STUDENT REVIEWS & FEEDBACK (3-COLUMN GRID)
          ========================================================================== */}
      <section className="arch-content-section section-reviews-light" id="reviews">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <h2 className="arch-section-title arch-title-dark">
                Student Reviews &amp; Feedback
              </h2>
            </div>
            <div className="score-pill-header score-pill-light">
              <span className="gold-star">★</span>
              <span>4.8 / 5.0 (2,100 Reviews)</span>
            </div>
          </div>

          <div className="arch-reviews-3col-grid">
            <div className="arch-review-card">
              <div className="review-card-head">
                <span className="stars-gold">★★★★★</span>
                <span className="review-time">2 weeks ago</span>
              </div>
              <p className="review-body">
                "The internship case studies were immensely helpful. Learning Tally Prime practically gave me the confidence to clear my interview for Junior Accountant!"
              </p>
              <div className="review-author-meta">
                <h5 className="author-name">Kavitha R.</h5>
                <span className="author-role">Commerce Graduate, Chennai</span>
              </div>
            </div>

            <div className="arch-review-card">
              <div className="review-card-head">
                <span className="stars-gold">★★★★★</span>
                <span className="review-time">1 month ago</span>
              </div>
              <p className="review-body">
                "Clear explanation of GST fundamentals, e-Invoicing, and practical voucher entries. The dual certificates and TEPL Job Portal access make this truly worth every penny."
              </p>
              <div className="review-author-meta">
                <h5 className="author-name">Suresh V.</h5>
                <span className="author-role">Accounts &amp; GST Executive, Coimbatore</span>
              </div>
            </div>

            <div className="arch-review-card">
              <div className="review-card-head">
                <span className="stars-gold">★★★★★</span>
                <span className="review-time">3 weeks ago</span>
              </div>
              <p className="review-body">
                "Self-paced video sessions combined with weekly live mentoring and regional language doubt support made complex accounting and GST return filing simple."
              </p>
              <div className="review-author-meta">
                <h5 className="author-name">Ananya S.</h5>
                <span className="author-role">B.Com Final Year Student, Madurai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION: FAQS (2-COLUMN SPLIT ACCORDION)
          ========================================================================== */}
      <section className="arch-content-section" id="faqs">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <h2 className="arch-section-title">
                <span className="hero-lime-highlight">Frequently Asked Questions</span>
              </h2>
            </div>
            <div className="arch-faq-count-pill">10 QUESTIONS</div>
          </div>

          <div className="arch-faq-2col-grid">
            {/* Column 1: Items 0..4 */}
            <div className="faq-column">
              {FAQ_LIST.slice(0, 5).map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`arch-drawer-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="drawer-trigger-row"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="faq-question-label">{faq.q}</span>
                      <span className="drawer-toggle">{isOpen ? '—' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="drawer-body-content">
                        <p className="faq-answer-p">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2: Items 5..9 */}
            <div className="faq-column">
              {FAQ_LIST.slice(5, 10).map((faq, index) => {
                const actualIndex = index + 5;
                const isOpen = openFaq === actualIndex;
                return (
                  <div key={actualIndex} className={`arch-drawer-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="drawer-trigger-row"
                      onClick={() => setOpenFaq(isOpen ? null : actualIndex)}
                    >
                      <span className="faq-question-label">{faq.q}</span>
                      <span className="drawer-toggle">{isOpen ? '—' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="drawer-body-content">
                        <p className="faq-answer-p">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default CourseProfessionalGST;
