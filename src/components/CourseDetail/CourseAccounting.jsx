import React, { useState } from 'react';
import './CourseAccounting.css';
import CourseFloatingIsland from './CourseFloatingIsland';

const CourseAccounting = ({ onBackToHome = () => { }, onSelectCourse = () => { } }) => {
  const [openCurriculum, setOpenCurriculum] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Curriculum Modules (10 Detailed Modules)
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
        'Comprehensive capstone project on end-to-end accounting',
        'Simulated business scenario audit & voucher scrutiny test',
        'Official Tally Education TEPL certification examination'
      ]
    }
  ];

  // 10 Detailed FAQs
  const faqList = [
    {
      q: 'What is the duration of the program?',
      a: 'The program spans 35 hours of self-paced high-definition video modules combined with a 6-week immersive internship featuring weekly live mentoring sessions and hands-on case studies.'
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
      q: 'How long does the internship last?',
      a: 'The integrated internship lasts for 6 weeks, during which you will solve 3 comprehensive real-world business case studies simulating real corporate accounting scenarios.'
    },
    {
      q: 'Can I access the recorded sessions after the live classes?',
      a: 'Yes! You get Lifetime Access to all recorded sessions, course materials, case study templates, and future curriculum updates via your personal Finanzo dashboard.'
    },
    {
      q: 'What is unique about this program?',
      a: 'This program uniquely integrates official accreditation by Tally Education (TEPL), NEP 2020 alignment, 6-week practical internship with 3 authentic case studies, dual verified credentials, and direct access to the TEPL Job Portal.'
    },
    {
      q: 'Will I receive a certification?',
      a: 'Yes, upon successful completion you receive dual verifiable credentials: the official TEPL Accredited Course Completion Certificate and the 6-Week Practical Accounting & GST Internship Certificate with verifiable QR codes.'
    }
  ];

  const handlePayNow = () => {
    alert('Redirecting to Finanzo Secure Checkout for ₹7,999...');
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
              Advanced Accounting &amp; Taxation with<br />
              <span className="arch-title-highlight">Professional Practice</span>
            </h1>

            <p className="arch-hero-desc">
              Explore Finanzo: The course equips learners with the skills to handle various accounting functions, taxation and financial reporting digitally. Enroll now!
            </p>

            {/* Price & CTA Action Line */}
            <div className="arch-hero-cta-row">
              <div className="arch-price-group">
                <span className="arch-price-val">₹7,999</span>
                <span className="arch-price-old">₹9,999</span>
                <span className="arch-discount-tag">20% OFF</span>
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
            <span className="stat-num">4.9</span>
            <span className="stat-sub">(3,200) Verified Reviews</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">12,500+</span>
            <span className="stat-sub">Active Learners</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">35 Hours</span>
            <span className="stat-sub">Self-Paced Learning</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">6-Week</span>
            <span className="stat-sub">Internship Included</span>
          </div>
        </div>
      </section>

      {/* ================= 3. HORIZONTAL VISUAL FEATURE STRIP (TEMPLATE MIRROR) ================= */}
      <section className="arch-feature-strip">
        <div className="arch-container">
          <div className="strip-grid">
            <div className="strip-card">
              <div className="strip-thumb thumb-tally">
                <span className="strip-badge">Simulation</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Core Engine</span>
                <h4 className="strip-title">Tally Prime 4.0 Practice</h4>
              </div>
            </div>

            <div className="strip-card">
              <div className="strip-thumb thumb-gst">
                <span className="strip-badge">Compliance</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Tax Portal</span>
                <h4 className="strip-title">GST &amp; E-Invoicing Live</h4>
              </div>
            </div>

            <div className="strip-card">
              <div className="strip-thumb thumb-internship">
                <span className="strip-badge">Experiential</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Corporate Work</span>
                <h4 className="strip-title">6-Week Real Internship</h4>
              </div>
            </div>

            <div className="strip-card">
              <div className="strip-thumb thumb-tepl">
                <span className="strip-badge">Credential</span>
              </div>
              <div className="strip-info">
                <span className="strip-cat">Accreditation</span>
                <h4 className="strip-title">TEPL Dual Certification</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. SECTION: COURSE OVERVIEW & ABOUT FINANZO (ASYMMETRIC SPLIT) ================= */}
      <section className="arch-content-section" id="overview">
        <div className="arch-container arch-split-2col">

          {/* Left Column: Overview Prose */}
          <div className="arch-col-left">
            <span className="arch-kicker-label">SECTION 01 / OVERVIEW</span>
            <h2 className="arch-section-title">Course Overview</h2>
            <p className="arch-body-lead">
              This course comprehensively introduces GST Fundamentals using Tally Prime, a leading accounting software. Designed for professionals, small business owners, and students, it focuses on the practical applications of accounting principles in a digital environment.
            </p>
            <p className="arch-body-text">
              Participants will gain hands-on experience managing financial transactions, generating financial statements, handling taxes, and ensuring GST compliance—all through live interactive sessions, real-time doubt resolution, and expert assistance in regional languages.
            </p>
          </div>

          {/* Right Column: 4 Key Pillars */}
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
          <h2 className="lime-main-title">Stay on top of everything.</h2>
          <p className="lime-main-desc">
            The course equips learners with practical accounting, digital taxation, and TEPL certification.<br />
            Join 12,500+ ambitious commerce professionals and master digital Tally Prime with industry recognition.
          </p>
          <button onClick={handlePayNow} className="lime-action-btn">
            ENROLL NOW • ₹7,999
          </button>
        </div>
      </section>

      {/* ================= 7. SECTION: INTERNSHIP PROGRAM INTEGRATION (FEATURED EXPERIENCE) ================= */}
      <section className="arch-content-section" id="internship">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 03 / EXPERIENTIAL PRACTICE</span>
              <h2 className="arch-section-title">Internship Program Integration</h2>
            </div>
            <div className="arch-tag-group">
              <span className="arch-lime-tag">6-WEEK IMMERSIVE</span>
              <span className="arch-dark-tag">ONLINE</span>
            </div>
          </div>

          <p className="arch-body-lead-wide">
            The Integrated Internship Program offers a 6–week immersive experience, providing hands-on, real-world accounting practice using Tally Prime. Throughout the program, learners will work on three practical accounting case studies, enabling them to build essential skills in digital accounting and GST fundamentals aligned with the National Education Policy 2020 (NEP 2020).
          </p>

          <div className="arch-internship-asymmetric-split">
            {/* Left: 5 Numbered Steps */}
            <div className="internship-steps-col">
              <h3 className="sub-section-kicker">What Learners Will Achieve from the Internship</h3>

              <div className="arch-steps-editorial">
                <div className="arch-step-row">
                  <span className="step-index">01</span>
                  <div className="step-body">
                    <h4 className="step-headline">Gain Real–World Experience</h4>
                    <p className="step-text">
                      Complete case studies that simulate actual business scenarios, enhancing your ability to handle real-world accounting tasks.
                    </p>
                  </div>
                </div>

                <div className="arch-step-row">
                  <span className="step-index">02</span>
                  <div className="step-body">
                    <h4 className="step-headline">Practical Application of Skills</h4>
                    <p className="step-text">
                      Apply your theoretical knowledge in real-time, practical situations through hands-on tasks.
                    </p>
                  </div>
                </div>

                <div className="arch-step-row">
                  <span className="step-index">03</span>
                  <div className="step-body">
                    <h4 className="step-headline">Boost Your Resume</h4>
                    <p className="step-text">
                      Experience in Tally Prime will significantly enhance your resume, adding valuable, in-demand skills to your portfolio.
                    </p>
                  </div>
                </div>

                <div className="arch-step-row">
                  <span className="step-index">04</span>
                  <div className="step-body">
                    <h4 className="step-headline">NEP20–Aligned Skill Development</h4>
                    <p className="step-text">
                      The internship aligns with the National Education Policy 2020 (NEP20), offering skill-based learning and broadening job opportunities.
                    </p>
                  </div>
                </div>

                <div className="arch-step-row">
                  <span className="step-index">05</span>
                  <div className="step-body">
                    <h4 className="step-headline">Official Tally Internship Certification</h4>
                    <p className="step-text">
                      Upon completion, receive a certification that strengthens your resume and improves your career prospects by showcasing hands-on experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Featured 3 Case Studies Card (Like "Featured tall building" in template) */}
            <div className="internship-showcase-col">
              <div className="internship-featured-case-box">
                <span className="case-kicker">FEATURED 3 REAL-WORLD CASE STUDIES</span>
                <h4 className="case-main-title">Corporate Simulation Dockets</h4>

                <div className="case-entry-item">
                  <span className="case-num">Case 01</span>
                  <h5 className="case-title">Multi-State Retail GST &amp; E-Way Bill</h5>
                  <p className="case-desc">GSTR-1, GSTR-3B reconciliation with 2B mismatch handling on live government simulation ledger.</p>
                </div>

                <div className="case-entry-item">
                  <span className="case-num">Case 02</span>
                  <h5 className="case-title">Manufacturing Inventory &amp; Bill of Materials</h5>
                  <p className="case-desc">Multi-warehouse stock valuation, automated BRS, and debit/credit note adjustments.</p>
                </div>

                <div className="case-entry-item">
                  <span className="case-num">Case 03</span>
                  <h5 className="case-title">Corporate TDS &amp; Balance Sheet Finalization</h5>
                  <p className="case-desc">Section 194C/J TDS deduction, Form 26Q preparation, and year-end audit trail verification.</p>
                </div>

                <div className="case-box-footer">
                  <span className="case-footer-tag">NEP 2020 Skill Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 8. SECTION: WHY CHOOSE THIS COURSE? ================= */}
      <section className="arch-content-section" id="why-choose">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 04 / COMPETITIVE ADVANTAGE</span>
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

      {/* ================= 9. SECTION: OUR CURRICULUM GUIDE (EDITORIAL ACCORDION SPLIT) ================= */}
      <section className="arch-content-section" id="curriculum">
        <div className="arch-container arch-curriculum-split">

          {/* Left Column: Intro & Download Callout */}
          <div className="curriculum-intro-col">
            <span className="arch-kicker-label">SECTION 05 / CURRICULUM</span>
            <h2 className="arch-section-title">Our Curriculum Guide</h2>
            <div className="curriculum-badge-pill">
              11 MODULES • 35 HOURS
            </div>
            <p className="arch-body-text">
              The curriculum is designed to help you learn the skills required to become a successful digital accounting professional. From core ledger entries to statutory GST returns and audit trails.
            </p>

            <button
              onClick={() => alert('Finanzo Detailed Curriculum PDF is downloading...')}
              className="arch-btn-outline"
            >
              <span>Download Full Syllabus</span>
              <span className="arrow-sym">↓</span>
            </button>
          </div>

          {/* Right Column: 10 Accordion Modules */}
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

      {/* ================= 10. SECTION: ELIGIBILITY & DUAL CERTIFICATION SHOWCASE ================= */}
      <section className="arch-content-section" id="eligibility">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 06 / ELIGIBILITY &amp; CREDENTIALS</span>
              <h2 className="arch-section-title">Tally Course Eligibility</h2>
            </div>
            <p className="arch-header-desc">
              Those with a background in commerce at graduate or postgraduate level, along with students or working professionals interested in upskilling, are eligible.
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
              Earn an Industry–Recognized Tally &amp; Internship Certificate
            </h3>
            <p className="cert-lead">
              Upon completing the 25 hours curriculum and 6–week internship case studies, receive dual verified credentials directly shareable on LinkedIn and recognized by employers nationwide.
            </p>

            <div className="cert-details-grid">
              <div className="cert-graphic-box">
                <div className="cert-svg-frame">
                  <svg viewBox="0 0 200 130" width="100%" height="100%">
                    <rect x="5" y="5" width="190" height="120" rx="4" fill="#0d0d11" stroke="#33333d" strokeWidth="2" />
                    <rect x="15" y="15" width="170" height="100" rx="2" fill="#14141a" />
                    <circle cx="100" cy="50" r="14" fill="#b8f000" opacity="0.3" />
                    <circle cx="100" cy="50" r="8" fill="#b8f000" />
                    <rect x="35" y="75" width="130" height="5" rx="2" fill="#71717a" />
                    <rect x="55" y="86" width="90" height="4" rx="2" fill="#52525b" />
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
                  <li>— 6–Week Practical Accounting &amp; GST Internship Certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 11. SECTION: COURSE FEE & COMPLETE ENROLLMENT PACKAGE ================= */}
      <section className="arch-content-section section-pricing-package" id="pricing">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 07 / ENROLLMENT</span>
              <h2 className="arch-section-title">Complete Course Package &amp; Fees</h2>
            </div>
            <p className="arch-header-desc">
              All-inclusive program fee with software access, mentoring, internship, and official certifications
            </p>
          </div>

          <div className="arch-pricing-package-card">
            <div className="pricing-col-left">
              <span className="package-tag">FULL ACCESS ENROLLMENT</span>
              <div className="package-price-wrap">
                <span className="pkg-curr">₹7,999</span>
                <span className="pkg-old">₹9,999</span>
                <span className="pkg-discount">20% DISCOUNT APPLIED</span>
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
                  <span className="val">6 Weeks</span>
                </div>
                <div className="spec-box">
                  <span className="label">Certification</span>
                  <span className="val">Tally &amp; Internship</span>
                </div>
              </div>

              <button onClick={handlePayNow} className="package-enroll-btn">
                <span>PAY NOW • ENROLL TODAY</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>

            <div className="pricing-col-right">
              <h4 className="inclusions-title">Package Inclusions</h4>
              <ul className="inclusions-checklist">
                <li><span className="chk">✓</span> 35 Hours Self-Paced Learning Modules</li>
                <li><span className="chk">✓</span> Weekly Live Interactive Sessions with Mentors</li>
                <li><span className="chk">✓</span> 6–Week Integrated Corporate Internship</li>
                <li><span className="chk">✓</span> 3 Practical Accounting Case Studies</li>
                <li><span className="chk">✓</span> Tally &amp; Internship Dual Certifications</li>
                <li><span className="chk">✓</span> Exclusive TEPL Job Portal Direct Employer Access</li>
                <li><span className="chk">✓</span> Real-Time Regional Doubt Support</li>
                <li><span className="chk">✓</span> National Education Policy (NEP 2020) Aligned</li>
              </ul>

              <div className="advisor-strip">
                <span className="advisor-note">Have questions before enrolling?</span>
                <div className="advisor-actions">
                  <a
                    href="https://wa.me/917358570881?text=Hi%20Finanzo%20team,%20I%20have%20questions%20about%20the%20Tally%20Prime%20course"
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

      {/* ================= 12. SECTION: STUDENT REVIEWS & FEEDBACK (3-COLUMN GRID) ================= */}
      <section className="arch-content-section" id="reviews">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 08 / SOCIAL PROOF</span>
              <h2 className="arch-section-title">Student Reviews &amp; Feedback</h2>
            </div>
            <div className="score-pill-header">
              <span className="lime-star">★</span>
              <span>4.9 / 5.0 (3,200 Reviews)</span>
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

      {/* ================= 13. SECTION: FAQS (2-COLUMN SPLIT ACCORDION) ================= */}
      <section className="arch-content-section" id="faqs">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 09 / FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="arch-section-title">Frequently Asked Questions</h2>
            </div>
            <div className="arch-faq-count-pill">10 QUESTIONS</div>
          </div>

          <div className="arch-faq-2col-grid">
            {/* Column 1: Items 0..4 */}
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

            {/* Column 2: Items 5..9 */}
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

      {/* ================= 14. SECTION: RELATED CERTIFICATION COURSES ================= */}
      <section className="arch-content-section" id="related">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <span className="arch-kicker-label">SECTION 10 / RELATED CERTIFICATIONS</span>
              <h2 className="arch-section-title">Related Certification Courses</h2>
            </div>
            <a href="#courses" className="arch-view-all">View All Courses →</a>
          </div>

          <div className="arch-related-grid">
            <div
              className="arch-course-item clickable-course"
              onClick={() => onSelectCourse(2)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-thumb thumb-one">
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

      {/* ================= 15. CONTRAST WHITE ACCREDITATION & PROGRAM PARTNERS BAND ================= */}
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

      {/* ================= 16. ARCHITECTURAL MINIMALIST FOOTER & CHEVRON STRIP ================= */}
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
              <li><a href="#internship">6-Week Internship</a></li>
              <li><a href="#eligibility">Eligibility Criteria</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Certifications</h5>
            <ul className="footer-links">
              <li><a href="#eligibility">TEPL Credential</a></li>
              <li><a href="#eligibility">Internship Letter</a></li>
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
      <CourseFloatingIsland price="₹7,999" onEnroll={handlePayNow} />

    </div>
  );
};

export default CourseAccounting;