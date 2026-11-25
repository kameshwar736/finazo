import React, { useState } from 'react';
import './CourseAccounting.css';
import CourseFloatingIsland from './CourseFloatingIsland';

const CourseProfessionalGST = ({ onBackToHome = () => {}, onSelectCourse = () => {} }) => {
  const [openCurriculum, setOpenCurriculum] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Curriculum Modules (11 Modules • 25 Hours from reference Image 1)
  const curriculumGuideList = [
    {
      num: '01',
      title: 'Fundamentals of Accounting',
      lessonsCount: '5 Lessons',
      topics: [
        'Accounting principles, conventions & double-entry system',
        'Types of accounts: Real, Personal, and Nominal rules',
        'Journalizing transactions & voucher fundamentals',
        'Ledger posting, ledger balances & Trial Balance preparation',
        'Identification and rectification of accounting errors'
      ]
    },
    {
      num: '02',
      title: 'Introduction to Tally Prime',
      lessonsCount: '5 Lessons',
      topics: [
        'Downloading, installing & licensing Tally Prime 4.0',
        'Company creation, alteration, configuration & shut company',
        'Understanding Gateway of Tally navigation & menus',
        'F11 Features & F12 Configurations setup',
        'Essential keyboard shortcuts and navigation tricks'
      ]
    },
    {
      num: '03',
      title: 'Maintaining the Chart of Accounts',
      lessonsCount: '6 Lessons',
      topics: [
        'Understanding pre-defined groups in Tally Prime',
        'Creating primary & secondary account groups',
        'Creating single and multi-ledgers with opening balances',
        'Configuring Cost Centers and Cost Categories',
        'Chart of Accounts verification and bulk alterations'
      ]
    },
    {
      num: '04',
      title: 'Recording and Maintaining Accounting Transactions',
      lessonsCount: '12 Lessons',
      topics: [
        'Receipt and Payment voucher entries with cheque details',
        'Contra vouchers for cash deposits and bank transfers',
        'Purchase and Sales vouchers in item/accounting invoice mode',
        'Debit Note and Credit Note voucher management',
        'Journal vouchers for depreciation, provisions and adjustments',
        'Day Book, Cash/Bank books and ledger transaction scrutiny'
      ]
    },
    {
      num: '05',
      title: 'Banking',
      lessonsCount: '8 Lessons',
      topics: [
        'Bank Reconciliation Statement (BRS) manual & automated',
        'Configuring auto-bank reconciliation with MT940 / Excel',
        'Cheque book management & cheque printing configuration',
        'Post-dated cheques (PDC) and deposit slip generation',
        'E-payments setup and payment instruction files'
      ]
    },
    {
      num: '06',
      title: 'Generating Financial statements and MIS reports',
      lessonsCount: '6 Lessons',
      topics: [
        'Generating and analyzing Balance Sheet (Vertical & Horizontal)',
        'Profit & Loss Account review with schedule breakdowns',
        'Cash Flow and Funds Flow statement generation',
        'Key financial ratio analysis in Tally Prime',
        'Exporting MIS reports to Excel, PDF and automated email'
      ]
    },
    {
      num: '07',
      title: 'Data Security',
      lessonsCount: '5 Lessons',
      topics: [
        'Setting up administrator credentials and Tally Vault',
        'Creating user roles, security levels and permissions',
        'Restricting back-dated voucher entries and print permissions',
        'Audit Trail (Edit Log) compliance as per MCA regulations',
        'Tracking voucher creation, alteration and deletion logs'
      ]
    },
    {
      num: '08',
      title: 'Company Data Management',
      lessonsCount: '5 Lessons',
      topics: [
        'Taking manual & scheduled automatic company backups',
        'Restoring company data safely without corruption',
        'Splitting financial years for clean period transition',
        'Group company creation for consolidated multi-branch views',
        'Data repair, rewrite and verification tools'
      ]
    },
    {
      num: '09',
      title: 'Goods and Services Tax',
      lessonsCount: '7 Lessons',
      topics: [
        'Activating GST features and setting tax rates (CGST, SGST, IGST)',
        'Creating GST-compliant sales & purchase ledgers with HSN/SAC',
        'Generating tax invoices with E-Way Bill and E-Invoicing details',
        'Simulating GSTR-1 outward supplies return preparation',
        'GSTR-3B monthly tax computation and Input Tax Credit (ITC) matching',
        'Handling Reverse Charge Mechanism (RCM) transactions'
      ]
    },
    {
      num: '10',
      title: 'Assessment',
      lessonsCount: '3 Lessons',
      topics: [
        'Comprehensive capstone project on practical GST accounting',
        'Simulated business scenario audit & voucher scrutiny test',
        'Official Tally Education TEPL certification examination'
      ]
    }
  ];

  // 10 Detailed FAQs (Reference Image 4)
  const faqList = [
    {
      q: 'What is the duration of the program?',
      a: 'The program spans 25 hours of self-paced high-definition video modules with live interactive mentoring, practical GST return filing simulations, and hands-on case studies.'
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
      a: 'You will gain comprehensive mastery of Tally Prime 4.0, GST portal filing (GSTR-1, GSTR-3B), Automated Bank Reconciliation, E-Invoicing, E-Way Bill generation, MIS Financial Reporting, and Edit Log audit trail compliance.'
    },
    {
      q: 'What are the eligibility criteria?',
      a: 'Commerce students, graduates, and working professionals seeking to upskill in Tally & GST, along with business owners managing accounts, are fully eligible.'
    },
    {
      q: 'How long does the internship last?',
      a: 'The program includes integrated internship support providing hands-on experience solving authentic corporate accounting and GST returns filing cases.'
    },
    {
      q: 'Can I access the recorded sessions after the live classes?',
      a: 'Yes! You get Lifetime Access to all recorded sessions, course materials, case study templates, and future curriculum updates via your personal Finanzo dashboard.'
    },
    {
      q: 'What is unique about this program?',
      a: 'This program uniquely integrates official accreditation by Tally Education (TEPL), practical GST return filing, downloadable cheat sheets, verified certification, and direct access to the TEPL Job Portal.'
    },
    {
      q: 'Will I receive a certification?',
      a: 'Yes, upon successful completion you receive the official verifiable TEPL Accredited Course Completion Certificate with credential ID and QR verification.'
    }
  ];

  const handlePayNow = () => {
    alert('Redirecting to Finanzo Secure Checkout for ₹4,999...');
  };

  return (
    <div className="finanzo-editorial-page">
      
      {/* ================= 1. ARCHITECTURAL HERO SECTION ================= */}
      <header className="arch-hero-section">
        <div className="arch-container">
          
          {/* Top Editorial Nav Header */}
          <div className="arch-top-bar">
            <button className="arch-back-btn" onClick={onBackToHome}>
              <span className="back-arrow">←</span>
              <span>Back to Home</span>
            </button>
            <div className="arch-org-badge">
              Finanzo Institute of Professional Finance &amp; Taxation
            </div>
          </div>

          {/* Hero Statement */}
          <div className="arch-hero-statement-wrap">
            <div className="arch-eyebrow-line">
              Finanzo Professional Certification • Accredited by Tally Education (TEPL)
            </div>

            <h1 className="arch-hero-title">
              Professional Accounting &amp;<br />
              <span className="arch-title-highlight">GST Compliance</span>
            </h1>

            <p className="arch-hero-desc">
              Master Tally Prime with a strong focus on GST. Learn through practical examples, real business cases, and hands-on training to build your career in accounts and finance. Enroll now!
            </p>

            {/* Price & CTA Action Line */}
            <div className="arch-hero-cta-row">
              <div className="arch-price-group">
                <span className="arch-price-val">₹4,999</span>
                <span className="arch-price-old">₹6,999</span>
                <span className="arch-discount-tag">29% OFF</span>
              </div>
              <button onClick={handlePayNow} className="arch-btn-primary">
                <span>PAY NOW</span>
                <span className="btn-chevron">→</span>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* ================= 2. STATS RIBBON STRIP ================= */}
      <section className="arch-stats-ribbon">
        <div className="arch-container arch-stats-grid">
          <div className="arch-stat-block">
            <span className="stat-num">4.8</span>
            <span className="stat-sub">(2,100) Verified Reviews</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">10,800+</span>
            <span className="stat-sub">Active Learners</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">25 Hours</span>
            <span className="stat-sub">Online &amp; Live Training</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">Tally Certified</span>
            <span className="stat-sub">TEPL Credential Included</span>
          </div>
        </div>
      </section>

      {/* ================= 3. HORIZONTAL VISUAL FEATURE STRIP ================= */}
      <section className="arch-feature-strip">
        <div className="arch-container">
          <div className="strip-grid">
            <div className="strip-card">
              <div className="strip-thumb thumb-tally">
                <span className="strip-badge">Core Engine</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Software Practice</span>
                <h4 className="strip-title">Tally Prime 4.0 Practical</h4>
              </div>
            </div>

            <div className="strip-card">
              <div className="strip-thumb thumb-gst">
                <span className="strip-badge">Statutory</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Government Portal</span>
                <h4 className="strip-title">GST Filing &amp; E-Invoicing</h4>
              </div>
            </div>

            <div className="strip-card">
              <div className="strip-thumb thumb-internship">
                <span className="strip-badge">Hands-On</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Real Dockets</span>
                <h4 className="strip-title">Business Case Studies</h4>
              </div>
            </div>

            <div className="strip-card">
              <div className="strip-thumb thumb-tepl">
                <span className="strip-badge">Credential</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Accreditation</span>
                <h4 className="strip-title">TEPL Verified Certificate</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. SECTION: COURSE OVERVIEW & ABOUT FINANZO (ASYMMETRIC SPLIT) ================= */}
      <section className="arch-content-section" id="overview">
        <div className="arch-container arch-split-2col">
          
          {/* Left Column: Overview Prose (Image 7) */}
          <div className="arch-col-left">
            <span className="arch-kicker-label">SECTION 01 / OVERVIEW</span>
            <h2 className="arch-section-title">Course Overview</h2>
            <p className="arch-body-lead">
              This course is designed to help you master Tally Prime with a strong focus on GST. You will learn through practical examples, real business cases, and hands-on training.
            </p>
            <p className="arch-body-text">
              Along with technical knowledge, you will also gain internship support to gain industry exposure and build your career in accounts and finance.
            </p>
          </div>

          {/* Right Column: 4 Key Pillars (Image 8) */}
          <div className="arch-col-right">
            <div className="arch-pillars-grid">
              <div className="arch-pillar-box">
                <span className="pillar-num">01</span>
                <h4 className="pillar-title">Industry Mentors</h4>
                <p className="pillar-desc">Learn with experienced corporate professionals</p>
              </div>

              <div className="arch-pillar-box">
                <span className="pillar-num">02</span>
                <h4 className="pillar-title">Self Paced Learning</h4>
                <p className="pillar-desc">Complete 25 hours at your own convenience</p>
              </div>

              <div className="arch-pillar-box">
                <span className="pillar-num">03</span>
                <h4 className="pillar-title">Tally Certification</h4>
                <p className="pillar-desc">Accredited by Tally Education (TEPL)</p>
              </div>

              <div className="arch-pillar-box">
                <span className="pillar-num">04</span>
                <h4 className="pillar-title">Access to TEPL Job Portal</h4>
                <p className="pillar-desc">Apply directly to verified partner employers</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. SECTION: EXCLUSIVE COURSE OFFERINGS (BENTO GRID) ================= */}
      <section className="arch-content-section section-offerings">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 02 / VALUE ADDITIONS</span>
              <h2 className="arch-section-title">Exclusive Course Offerings</h2>
            </div>
            <p className="arch-header-desc">
              Comprehensive features and value additions bundled with your program enrollment
            </p>
          </div>

          <div className="arch-offerings-bento-grid">
            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Practice Exercise</h4>
              <p className="bento-desc">Hands-on practical vouchers and simulated cases</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Certification</h4>
              <p className="bento-desc">Accredited by Tally Education (TEPL) with verified credential ID</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Weekly Live Sessions</h4>
              <p className="bento-desc">Live interactive doubt resolution and mentoring</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Email Support</h4>
              <p className="bento-desc">Prompt expert technical assistance &amp; guidance</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Experienced Faculty</h4>
              <p className="bento-desc">Direct mentoring from seasoned finance educators</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Access to TEPL Job Portal</h4>
              <p className="bento-desc">Apply directly to verified partner employers</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Placement Support</h4>
              <p className="bento-desc">Resume formatting and hiring firm referrals</p>
            </div>

            <div className="offering-bento-card">
              <span className="bento-indicator">✦</span>
              <h4 className="bento-title">Self Paced Learning</h4>
              <p className="bento-desc">Complete 25 hours at your own convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. ⚡ ELECTRIC LIME MID-PAGE STATEMENT BANNER ================= */}
      <section className="arch-lime-banner">
        <div className="arch-container arch-lime-inner">
          <h2 className="lime-main-title">Stay on top of GST compliance.</h2>
          <p className="lime-main-desc">
            The course equips learners with practical Tally accounting, digital GST filing, and TEPL certification.<br />
            Join 10,800+ ambitious commerce professionals and master digital accounting with verified credentials.
          </p>
          <button onClick={handlePayNow} className="lime-action-btn">
            ENROLL NOW • ₹4,999
          </button>
        </div>
      </section>

      {/* ================= 7. SECTION: WHY CHOOSE THIS COURSE? ================= */}
      <section className="arch-content-section" id="why-choose">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 03 / COMPETITIVE ADVANTAGE</span>
              <h2 className="arch-section-title">Why Choose This Course?</h2>
            </div>
            <p className="arch-header-desc">
              Designed to give you practical accounting mastery and industry career readiness
            </p>
          </div>

          <div className="arch-why-bento-grid">
            <div className="arch-why-card">
              <span className="why-marker">✦</span>
              <h4 className="why-title">Expert Instructors</h4>
              <p className="why-desc">
                Learn from seasoned professionals with extensive knowledge of Tally Prime and GST regulations.
              </p>
            </div>

            <div className="arch-why-card">
              <span className="why-marker">✦</span>
              <h4 className="why-title">Hands–On Training</h4>
              <p className="why-desc">
                Real-time practical exercises and live assistance during interactive sessions, tailored for learners in regional languages.
              </p>
            </div>

            <div className="arch-why-card">
              <span className="why-marker">✦</span>
              <h4 className="why-title">Industry Relevant Skill</h4>
              <p className="why-desc">
                Stay updated with the latest digital accounting practices and GST regulations to stay ahead in the finance industry.
              </p>
            </div>

            <div className="arch-why-card">
              <span className="why-marker">✦</span>
              <h4 className="why-title">Flexible Learning</h4>
              <p className="why-desc">
                Attend from anywhere via live online sessions with expert guidance, and get your queries resolved promptly.
              </p>
            </div>

            <div className="arch-why-card full-span">
              <span className="why-marker lime">✦</span>
              <h4 className="why-title">Exclusive Tally Job Portal Access</h4>
              <p className="why-desc">
                Students enrolled in this course will have exclusive access to Tally’s job portal, expanding their career opportunities with direct employer applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. SECTION: OUR CURRICULUM GUIDE (11 MODULES • 25 HOURS) ================= */}
      <section className="arch-content-section" id="curriculum">
        <div className="arch-container arch-curriculum-split">
          
          {/* Left Column: Intro & Download Callout */}
          <div className="curriculum-intro-col">
            <span className="arch-kicker-label">SECTION 04 / CURRICULUM</span>
            <h2 className="arch-section-title">Our Curriculum Guide</h2>
            <div className="curriculum-badge-pill">
              11 MODULES • 25 HOURS
            </div>
            <p className="arch-body-text">
              The curriculum is designed to help you learn the skills required to become a successful professional. From core ledger entries to statutory GST returns and assessment.
            </p>

            <button
              onClick={() => alert('Finanzo Professional Accounting & GST Syllabus PDF is downloading...')}
              className="arch-btn-outline"
            >
              <span>Download Full Syllabus</span>
              <span className="arrow-sym">↓</span>
            </button>
          </div>

          {/* Right Column: 10 Accordion Modules (Image 1) */}
          <div className="curriculum-drawers-col">
            <div className="arch-accordion-stack">
              {curriculumGuideList.map((item, index) => {
                const isOpen = openCurriculum === index;
                return (
                  <div key={index} className={`arch-drawer-item ${isOpen ? 'active' : ''}`}>
                    <button
                      className="drawer-trigger-row"
                      onClick={() => setOpenCurriculum(isOpen ? null : index)}
                    >
                      <div className="drawer-meta-left">
                        <span className="drawer-num">{item.num}</span>
                        <span className="drawer-title">{item.title}</span>
                      </div>
                      <div className="drawer-meta-right">
                        <span className="drawer-lessons">{item.lessonsCount}</span>
                        <span className="drawer-toggle">{isOpen ? '—' : '+'}</span>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="drawer-body-content">
                        <ul className="drawer-subtopics-list">
                          {item.topics.map((t, idx) => (
                            <li key={idx} className="subtopic-line">
                              <span className="subtopic-dash">—</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 9. SECTION: ELIGIBILITY & DUAL CERTIFICATION SHOWCASE ================= */}
      <section className="arch-content-section" id="eligibility">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 05 / ELIGIBILITY &amp; CREDENTIALS</span>
              <h2 className="arch-section-title">Tally Course Eligibility</h2>
            </div>
            <p className="arch-header-desc">
              Commerce students, graduates, and working professionals seeking to upskill in Tally &amp; GST.
            </p>
          </div>

          <div className="arch-eligibility-grid">
            <div className="arch-elig-box">
              <span className="box-check">✓</span>
              <span className="box-text">Students pursuing Commerce degree (B.Com, BBA, M.Com, MBA)</span>
            </div>
            <div className="arch-elig-box">
              <span className="box-check">✓</span>
              <span className="box-text">Working accountants &amp; finance executives upskilling to Tally Prime</span>
            </div>
            <div className="arch-elig-box">
              <span className="box-check">✓</span>
              <span className="box-text">Small business owners &amp; entrepreneurs managing day-to-day accounts</span>
            </div>
            <div className="arch-elig-box">
              <span className="box-check">✓</span>
              <span className="box-text">Job seekers preparing for Accounts Executive &amp; GST roles</span>
            </div>
          </div>

          {/* Full Width Credential Banner */}
          <div className="arch-cert-showcase">
            <div className="cert-top-pill">
              ACCREDITED BY TALLY EDUCATION (TEPL)
            </div>
            <h3 className="cert-title">
              Earn an Official Tally Verified Certificate
            </h3>
            <p className="cert-lead">
              Upon completing the 25 hours curriculum and practical case studies, receive official verified credentials directly shareable on LinkedIn and recognized by employers nationwide.
            </p>

            <div className="cert-details-grid">
              <div className="cert-graphic-box">
                <div className="cert-svg-frame">
                  <svg viewBox="0 0 200 130" width="100%" height="100%">
                    <rect x="5" y="5" width="190" height="120" rx="4" fill="#0d0d11" stroke="#33333d" strokeWidth="2"/>
                    <rect x="15" y="15" width="170" height="100" rx="2" fill="#14141a"/>
                    <circle cx="100" cy="50" r="14" fill="#b8f000" opacity="0.3"/>
                    <circle cx="100" cy="50" r="8" fill="#b8f000"/>
                    <rect x="35" y="75" width="130" height="5" rx="2" fill="#71717a"/>
                    <rect x="55" y="86" width="90" height="4" rx="2" fill="#52525b"/>
                  </svg>
                </div>
                <span className="cert-caption">[ Official Credential ID &amp; QR Verification Badge ]</span>
              </div>

              <div className="cert-spec-list">
                <div className="cert-spec-head">
                  <span className="lime-dot">●</span>
                  <strong>Verifiable Credential with TEPL ID &amp; QR Code</strong>
                </div>
                <p className="cert-spec-desc">
                  Each certificate is registered in the official Tally Education Candidate Verification Portal with authentic endorsement from Finanzo and TEPL.
                </p>
                <ul className="cert-checklist">
                  <li>— TEPL Accredited Course Completion Certificate</li>
                  <li>— Verifiable Credential ID with Official Tally Transcript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 10. SECTION: COURSE FEE & COMPLETE ENROLLMENT PACKAGE (IMAGE 6) ================= */}
      <section className="arch-content-section section-pricing-package" id="pricing">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 06 / ENROLLMENT</span>
              <h2 className="arch-section-title">Complete Course Package &amp; Fees</h2>
            </div>
            <p className="arch-header-desc">
              All-inclusive program fee with software access, mentoring, and official certifications
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
                  <span className="val">Online &amp; Live</span>
                </div>
                <div className="spec-box">
                  <span className="label">Certification</span>
                  <span className="val">Tally Certified</span>
                </div>
                <div className="spec-box">
                  <span className="label">Portal Access</span>
                  <span className="val">TEPL Jobs</span>
                </div>
              </div>

              <button onClick={handlePayNow} className="package-enroll-btn">
                <span>PAY NOW • ENROLL TODAY</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>

            {/* Inclusions (Exact from Image 6) */}
            <div className="pricing-col-right">
              <h4 className="inclusions-title">This Course Includes</h4>
              <ul className="inclusions-checklist">
                <li><span className="chk">✓</span> Complete Tally Prime practical accounting</li>
                <li><span className="chk">✓</span> Real business case studies &amp; GST filing</li>
                <li><span className="chk">✓</span> Downloadable cheat sheets &amp; practice files</li>
                <li><span className="chk">✓</span> Industry-recognized internship experience</li>
                <li><span className="chk">✓</span> Course completion certificate with ID</li>
                <li><span className="chk">✓</span> Placement &amp; interview guidance</li>
                <li><span className="chk">✓</span> Exclusive TEPL Job Portal employer access</li>
                <li><span className="chk">✓</span> Real-time regional doubt resolution support</li>
              </ul>

              <div className="advisor-strip">
                <span className="advisor-note">Have questions? Talk to our Advisor</span>
                <div className="advisor-actions">
                  <a
                    href="https://wa.me/917358570881?text=Hi%20Finanzo%20team,%20I%20have%20questions%20about%20the%20Professional%20Accounting%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pkg-advisor-link"
                  >
                    💬 WhatsApp Advisor
                  </a>
                  <a href="tel:+917358570881" className="pkg-advisor-link">
                    📞 Call Support (+91 73585 70881)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 11. SECTION: STUDENT REVIEWS & FEEDBACK (IMAGE 3) ================= */}
      <section className="arch-content-section" id="reviews">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 07 / SOCIAL PROOF</span>
              <h2 className="arch-section-title">Student Reviews &amp; Feedback</h2>
            </div>
            <div className="score-pill-header">
              <span className="lime-star">★</span>
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
                "Clear explanation of GST fundamentals and practical voucher entries. The dual certificates and TEPL Job Portal access make this truly worth the price."
              </p>
              <div className="review-author-meta">
                <h5 className="author-name">Suresh V.</h5>
                <span className="author-role">Accounts Executive, Coimbatore</span>
              </div>
            </div>

            <div className="arch-review-card">
              <div className="review-card-head">
                <span className="stars-gold">★★★★★</span>
                <span className="review-time">3 weeks ago</span>
              </div>
              <p className="review-body">
                "Self-paced video sessions combined with weekly live mentoring and regional language doubt support made complex accounting topics simple."
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

      {/* ================= 13. SECTION: RELATED CERTIFICATION COURSES (IMAGE 5) ================= */}
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
            {/* Card 1: Links to Advanced Accounting course */}
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

            {/* Card 2 */}
            <div
              className="arch-course-item clickable-course"
              onClick={() => onSelectCourse(3)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-thumb thumb-two">
                <span className="thumb-tag">Tally Prime with GST Fundamentals</span>
              </div>
              <div className="course-meta">
                <h4 className="course-title">Advanced Accounting &amp; Tax Professional</h4>
                <div className="course-pricing">
                  <span className="old">₹7,999</span>
                  <span className="curr">₹5,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 14. CONTRAST WHITE ACCREDITATION & PROGRAM PARTNERS BAND ================= */}
      <section className="arch-partners-white-section">
        <div className="arch-container">
          <div className="partners-header">
            <div>
              <h3 className="partners-title">Accredited Program &amp; Industry Standards</h3>
              <p className="partners-desc">
                Aligned with National Education Policy (NEP 2020) and authorized by official certification bodies.
              </p>
            </div>
            <a href="#about" className="partners-link">Learn more about accreditation →</a>
          </div>

          <div className="partners-logo-row">
            <div className="partner-logo-item">
              <span className="p-brand">TALLY EDUCATION</span>
              <span className="p-sub">TEPL Accredited</span>
            </div>
            <div className="partner-logo-item">
              <span className="p-brand">NEP 2020</span>
              <span className="p-sub">Skill-Based Curriculum</span>
            </div>
            <div className="partner-logo-item">
              <span className="p-brand">MCA COMPLIANT</span>
              <span className="p-sub">Audit Trail Ready</span>
            </div>
            <div className="partner-logo-item">
              <span className="p-brand">GST PORTAL</span>
              <span className="p-sub">Live Return Simulation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 15. ARCHITECTURAL MINIMALIST FOOTER & CHEVRON STRIP ================= */}
      <footer className="arch-footer">
        <div className="arch-container arch-footer-grid">
          <div className="footer-col brand-col">
            <h4 className="footer-logo">finanzo</h4>
            <p className="footer-tagline">
              Digital Accounting &amp; Taxation Excellence.<br />
              Accredited by Tally Education (TEPL).
            </p>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Curriculum</h5>
            <ul className="footer-links">
              <li><a href="#overview">Course Overview</a></li>
              <li><a href="#curriculum">11 Modules</a></li>
              <li><a href="#eligibility">Eligibility Criteria</a></li>
              <li><a href="#pricing">Course Fees</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Certifications</h5>
            <ul className="footer-links">
              <li><a href="#eligibility">TEPL Credential</a></li>
              <li><a href="#pricing">Job Portal Access</a></li>
              <li><a href="#faqs">Verification Portal</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-links">
              <li>support@finanzo.in</li>
              <li>+91 73585 70881</li>
              <li>Chennai • Coimbatore • Bengaluru</li>
            </ul>
          </div>
        </div>

        {/* Geometric Architectural Chevron Bottom Pattern Strip */}
        <div className="arch-bottom-chevron-pattern">
          <div className="chevron-repeater">
            <span>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
          </div>
        </div>
      </footer>

      {/* Floating Island Quick Navigation Bar */}
      <CourseFloatingIsland price="₹4,999" onEnroll={handlePayNow} />

    </div>
  );
};

export default CourseProfessionalGST;
