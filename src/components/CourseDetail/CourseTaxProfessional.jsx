import React, { useState } from 'react';
import './CourseAccounting.css';
import './CourseProfessionalGST.css';
import './CourseTaxProfessional.css';

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

const CourseTaxProfessional = ({ onBackToHome = () => { }, onSelectCourse = () => { } }) => {
  const [openModules, setOpenModules] = useState([0]);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleModule = (index) => {
    setOpenModules(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // 10 Detailed FAQs (Reference Image 4)
  const faqList = [
    {
      q: 'What is the duration of the program?',
      a: 'The program spans 35 hours of self-paced high-definition video modules with live interactive mentoring, practical accounting case studies, and hands-on Tally Prime training.'
    },
    {
      q: 'Who are the instructors?',
      a: 'Training is provided by practicing Chartered Accountants and seasoned corporate finance professionals with over 10+ years of real-world expertise in corporate accounting, Tally Prime, and Indian GST regulations.'
    },
    {
      q: 'What is the mode of delivery?',
      a: 'The program is delivered 100% online through structured self-paced modules, interactive weekend live mentoring, real-time doubt clearing sessions, and support in regional languages.'
    },
    {
      q: 'Is there any support for job placement?',
      a: 'Yes! Enrolled learners receive exclusive direct access to the official TEPL Job Portal to apply directly with verified partner employers, plus resume formatting and interview preparation.'
    },
    {
      q: 'What tools and skills will I learn?',
      a: 'You will gain comprehensive mastery of Tally Prime 4.0, GST basics, corporate ledger maintenance, Bank Reconciliation, TDS concepts, MIS Financial Reporting, and Edit Log audit trail compliance.'
    },
    {
      q: 'What are the eligibility criteria?',
      a: 'Commerce students, graduates, and working professionals seeking to upskill in Tally & GST, along with business owners managing accounts, are fully eligible.'
    },
    {
      q: 'How long does the internship last?',
      a: 'The program includes integrated practical internship case studies covering 3 authentic business accounting and reporting dockets.'
    },
    {
      q: 'Can I access the recorded sessions after the live classes?',
      a: 'Yes! You get Lifetime Access to all recorded sessions, course materials, case study templates, and future curriculum updates via your personal Finanzo dashboard.'
    },
    {
      q: 'What is unique about this program?',
      a: 'This program is tailored as a Career Starter for beginners and professionals, combining official Tally certification, 35 hours of practical training, 3 business case studies, and direct TEPL Job Portal access.'
    },
    {
      q: 'Will I receive a certification?',
      a: 'Yes, upon successful completion you receive the official verifiable TEPL Accredited Course Completion Certificate with credential ID and QR verification.'
    }
  ];

  const handlePayNow = () => {
    alert('Redirecting to Finanzo Secure Checkout for ₹5,999...');
  };

  const handleDownloadSyllabus = () => {
    alert('Finanzo Advanced Accounting & Tax Professional Syllabus PDF is downloading...');
  };

  return (
    <div className="finanzo-editorial-page tax-page-clean">

      {/* ================= HERO SECTION (MATCHING REFERENCE UI) ================= */}
      <header className="tax-hero-section">
        <div className="tax-hero-container">
          <div className="tax-hero-split">

            {/* Content Column (Matching Reference Layout) */}
            <div className="tax-hero-left">

              {/* Eyebrow Line */}
              <div className="tax-hero-eyebrow-line">
                FINANZO PROFESSIONAL CERTIFICATION &bull; ACCREDITED BY TALLY EDUCATION (TEPL)
              </div>

              {/* Dual-Tone Bold Headline */}
              <h1 className="tax-hero-title">
                Advanced Accounting &amp;<br />
                <span className="tax-hero-cyan-title">Tax Professional</span>
              </h1>

              {/* Course Description */}
              <p className="tax-hero-desc">
                Start your accounting journey with Tally Prime. This course covers all the fundamentals you need to get started with Tally Prime and understand GST basics. Learn through practical examples and real business scenarios. Enroll now!
              </p>

              {/* Price & PAY NOW Action Line */}
              <div className="tax-hero-price-cta-row">
                <div className="tax-hero-price-group">
                  <span className="tax-hero-price-val">₹5,999</span>
                  <span className="tax-hero-price-old">₹7,999</span>
                  <span className="tax-hero-price-discount">25% OFF</span>
                </div>
                <button onClick={handlePayNow} className="tax-hero-btn-paynow">
                  <span>PAY NOW</span>
                  <span className="btn-chevron">&rarr;</span>
                </button>
              </div>

            </div>

            {/* Right Column: 3D Calculator with Glow Gradient & Hover Effects */}
            <div className="tax-hero-right">
              <div className="tax-hero-visual-frame">
                <div className="tax-hero-calc-glow" aria-hidden="true" />
                <img
                  src="/hero-tax-calculator-transparent.png"
                  alt="Advanced Accounting & Tax 3D Calculator with Rupee Coins"
                  className="tax-hero-calc-img"
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ================= 2. STATS RIBBON STRIP ================= */}
      <section className="arch-stats-ribbon">
        <div className="arch-container arch-stats-grid">
          <div className="arch-stat-block">
            <span className="stat-num">4.7</span>
            <span className="stat-sub">(1,850) Verified Reviews</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">8,200+</span>
            <span className="stat-sub">Active Learners</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">35 Hours</span>
            <span className="stat-sub">Online &amp; Live Training</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">Tally Certified</span>
            <span className="stat-sub">TEPL Credential Included</span>
          </div>
        </div>
      </section>



      {/* ================= 4. SECTION: COURSE OVERVIEW & ABOUT FINANZO ================= */}
      <section className="arch-content-section" id="overview">
        <div className="arch-container arch-split-2col">

          {/* Left Column: Overview Prose (Image 5) */}
          <div className="arch-col-left">
            <span className="arch-kicker-label">SECTION 01 / OVERVIEW</span>
            <h2 className="arch-section-title">Course Overview</h2>
            <p className="arch-body-lead">
              Start your accounting journey with Tally Prime. This course covers all the fundamentals you need to get started with Tally Prime and understand GST basics.
            </p>
            <p className="arch-body-text">
              Learn through practical examples and real business scenarios designed for beginners and working professionals looking to upskill. Along with technical knowledge, you will also gain internship support to gain industry exposure and build your career in accounts and finance.
            </p>
          </div>

          {/* Right Column: Course Image & Partner Logos */}
          <div className="arch-col-right">
            <div className="course-overview-media-col">
              <div className="course-overview-image-wrap">
                <img
                  src="/course/course3.jpg"
                  alt="Advanced Accounting & Tax Professional Course Overview"
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
          SECTION: ABOUT TALLY PRIME WITH GST FUNDAMENTALS (FROM GST COMPLIANCE PAGE)
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
                <p className="tally-pillar-desc">Complete 35 hours at your own convenience</p>
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
          SECTION: OUR CURRICULUM GUIDE (FROM GST COMPLIANCE PAGE)
          ========================================================================== */}
      <section className="gst-curriculum-guide-section" id="curriculum">
        <div className="gst-curr-wrap">
          <aside className="gst-curr-aside">
            <span className="gst-curr-mark" />
            <h2 className="gst-curr-heading">Our Curriculum Guide</h2>
            <p className="gst-curr-subtext">
              The curriculum is designed to help you learn the skills required to become a successful professional.
            </p>
            <span className="gst-curr-tag">11 Modules • 35 Hours</span>
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
          SECTION: TALLY COURSE ELIGIBILITY
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
          SECTION: COMPLETE COURSE PACKAGE & FEES (CLEAN LIGHT CARD)
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
                <span className="pkg-curr">₹5,999</span>
                <span className="pkg-old">₹7,999</span>
                <span className="pkg-discount">25% DISCOUNT APPLIED</span>
              </div>

              <div className="pkg-specs-grid">
                <div className="spec-box">
                  <span className="label">Duration</span>
                  <span className="val">35 Hours</span>
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
                <li><span className="chk">✓</span> 35 Hours Self-Paced Learning Modules</li>
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
                    href="https://wa.me/917358570881?text=Hi%20Finanzo%20team,%20I%20have%20questions%20about%20the%20Tax%20Professional%20course"
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

      {/* ================= 12. SECTION: FAQS (IMAGE 4) ================= */}
      <section className="arch-content-section" id="faqs">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 08 / FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="arch-section-title">Frequently Asked Questions</h2>
            </div>
            <div className="arch-faq-count-pill">10 QUESTIONS</div>
          </div>

          <div className="arch-faq-2col-grid">
            {/* Column 1 */}
            <div className="faq-column">
              {faqList.slice(0, 5).map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`arch-drawer-item ${isOpen ? 'active' : ''}`}>
                    <button
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

            {/* Column 2 */}
            <div className="faq-column">
              {faqList.slice(5, 10).map((faq, index) => {
                const actualIndex = index + 5;
                const isOpen = openFaq === actualIndex;
                return (
                  <div key={actualIndex} className={`arch-drawer-item ${isOpen ? 'active' : ''}`}>
                    <button
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

      {/* ================= 13. SECTION: RELATED CERTIFICATION COURSES (IMAGE 2) ================= */}
      <section className="arch-content-section" id="related">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 09 / RELATED CERTIFICATIONS</span>
              <h2 className="arch-section-title">Related Certification Courses</h2>
            </div>
            <a href="#courses" className="arch-view-all">View All Courses →</a>
          </div>

          <div className="arch-related-grid">
            {/* Card 1: Links to Advanced Accounting & Taxation */}
            <div
              className="arch-course-item clickable-course"
              onClick={() => onSelectCourse(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-thumb thumb-one">
                <span className="thumb-tag">Tally Prime with GST Fundamentals (INTERNSHIP)</span>
              </div>
              <div className="course-meta">
                <h4 className="course-title">Advanced Accounting &amp; Taxation with Professional Practice</h4>
                <div className="course-pricing">
                  <span className="old">₹9,999</span>
                  <span className="curr">₹7,999</span>
                </div>
              </div>
            </div>

            {/* Card 2: Links to Professional Accounting & GST */}
            <div
              className="arch-course-item clickable-course"
              onClick={() => onSelectCourse(2)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-thumb thumb-two">
                <span className="thumb-tag">TallyPrime with GST Compliance</span>
              </div>
              <div className="course-meta">
                <h4 className="course-title">Professional Accounting &amp; GST</h4>
                <div className="course-pricing">
                  <span className="old">₹6,999</span>
                  <span className="curr">₹4,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseTaxProfessional;
