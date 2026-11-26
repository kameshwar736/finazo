import React, { useState, useEffect, useRef } from 'react';
import './CourseAccounting.css';

const AnimatedStat = ({ target, decimals = 0, suffix = '', formatComma = false, active }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : formatComma
        ? Math.round(value).toLocaleString('en-US')
        : Math.round(value).toString();

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
};

const CourseAccounting = ({ onBackToHome = () => { }, onSelectCourse = () => { } }) => {
  const [openCurriculum, setOpenCurriculum] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const statsRef = useRef(null);
  const offeringsContainerRef = useRef(null);
  const trackRef = useRef(null);
  const whyItemRefs = useRef([]);

  const whyStickyItems = [
    {
      n: '01',
      tag: 'Mentorship',
      title: 'Expert Instructors',
      desc: 'Learn from seasoned professionals with extensive knowledge of Tally Prime and GST regulations.',
      image: '/whychoose/instructor.jpg',
      alt: 'Expert Instructors'
    },
    {
      n: '02',
      tag: 'Practical learning',
      title: 'Hands-On Training',
      desc: 'Real-time practical exercises and live assistance during interactive sessions, tailored for learners in regional languages.',
      image: '/whychoose/Hands-On Training.avif',
      alt: 'Hands-On Training'
    },
    {
      n: '03',
      tag: 'Career ready',
      title: 'Industry Relevant Skill',
      desc: 'Stay updated with the latest digital accounting practices and GST regulations to stay ahead in the finance industry.',
      image: '/whychoose/Industry Relevant Skill.avif',
      alt: 'Industry Relevant Skill'
    },
    {
      n: '04',
      tag: 'Learn anywhere',
      title: 'Flexible Learning',
      desc: 'Attend from anywhere via live online sessions with expert guidance, and get your queries resolved promptly.',
      image: '/whychoose/flexiblelearn.jpg',
      alt: 'Flexible Learning'
    },
    {
      n: '05',
      tag: 'Placements',
      title: 'Exclusive Tally Job Portal Access',
      desc: 'Students enrolled in this course will have exclusive access to Tally’s job portal, expanding their career opportunities with direct employer applications.',
      image: '/whychoose/Exclusive Tally Job Portal Access.jpg',
      alt: 'Exclusive Tally Job Portal Access'
    }
  ];

  const offeringsData = [
    {
      title: 'Practice Exercise',
      desc: 'Hands-on practical vouchers and simulated cases'
    },
    {
      title: 'Certification',
      desc: 'Accredited by Tally Education (TEPL) with verified credential ID'
    },
    {
      title: 'Live Doubt Sessions',
      desc: 'Clear your questions directly with expert trainers'
    },
    {
      title: 'Placement Support',
      desc: 'Resume building, mock interviews and job referrals'
    }
  ];

  const eligibilityAudience = [
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

  useEffect(() => {
    const sec = offeringsContainerRef.current;
    const track = trackRef.current;
    if (!sec || !track) return;

    let cards = [].slice.call(track.children);
    let mobile = window.matchMedia('(max-width: 800px)');
    let firstC, lastC, range;

    const getNavHeight = () => {
      const nav = document.querySelector('.prime-navbar-wrapper') || document.querySelector('nav');
      return nav ? nav.offsetHeight : 80;
    };

    const measure = () => {
      if (mobile.matches) {
        sec.style.height = '';
        track.style.transform = '';
        return;
      }
      cards = [].slice.call(track.children);
      if (!cards.length) return;

      const navH = getNavHeight();
      const pinnedH = window.innerHeight - navH;

      // Exact centers of the first and last cards
      firstC = cards[0].offsetTop + cards[0].offsetHeight / 2;
      lastC = cards[cards.length - 1].offsetTop + cards[cards.length - 1].offsetHeight / 2;
      range = Math.max(0, lastC - firstC);

      // Section height = pinned area height + distance between card centers * generous scroll factor for smooth spacing
      sec.style.height = `${pinnedH + range * 1.35}px`;
      update();
    };

    const update = () => {
      if (mobile.matches) return;
      cards = [].slice.call(track.children);
      if (!cards.length || range === undefined) return;

      const navH = getNavHeight();
      const pinnedH = window.innerHeight - navH;
      const totalScroll = sec.offsetHeight - pinnedH;
      if (totalScroll <= 0) return;

      const r = sec.getBoundingClientRect();
      const scrolled = -(r.top - navH);
      // Strictly clamp progress between 0 and 1 (never past the end)
      const p = Math.min(1, Math.max(0, scrolled / totalScroll));
      const y = firstC + p * range - pinnedH / 2;

      track.style.transform = `translate3d(0, ${-y}px, 0)`;

      const act = Math.min(cards.length - 1, Math.max(0, Math.round(p * (cards.length - 1))));
      setActiveOfferIndex(act);
    };

    const onScroll = () => {
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    if (mobile.addEventListener) {
      mobile.addEventListener('change', measure);
    }

    // Measure initially and when fonts or images finish loading
    measure();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    const timer = setTimeout(measure, 150);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (mobile.removeEventListener) {
        mobile.removeEventListener('change', measure);
      }
    };
  }, [offeringsData.length]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let tick = false;
    const update = () => {
      tick = false;
      const nav = 80;
      const mobile = window.innerWidth <= 800;
      const mid = mobile
        ? (nav + window.innerHeight * 0.36 + (window.innerHeight - nav - window.innerHeight * 0.36) / 2)
        : (nav + (window.innerHeight - nav) / 2);
      let best = 0;
      let bd = 1e9;
      whyItemRefs.current.forEach((el, k) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) {
          bd = d;
          best = k;
        }
      });
      setActiveWhyIndex(best);
    };

    const handleScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

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

          {/* Hero Statement */}
          <div className="arch-hero-content-split">
            <div className="arch-hero-statement-wrap">
              <div className="arch-eyebrow-line">
                FINANZO PROFESSIONAL CERTIFICATION • ACCREDITED BY TALLY EDUCATION (TEPL)
              </div>

              <h1 className="arch-hero-title">
                <span className="arch-hero-line">Advanced Accounting &amp; Taxation</span>
                <span className="arch-hero-line">with</span>
                <span className="arch-hero-line">
                  <span className="hero-lime-highlight">Professional</span> Practice
                </span>
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

            {/* Right Side 3D Metallic Rupee Coins with Ladders Visual */}
            <div
              className="arch-hero-visual-wrap"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
                e.currentTarget.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--mouse-x', '50%');
                e.currentTarget.style.setProperty('--mouse-y', '50%');
              }}
            >
              <img
                src="/hero-new.png"
                alt="3D Metallic Rupee Coin Stacks with Ladders"
                className="arch-hero-coins-img"
              />
            </div>
          </div>

        </div>
      </header>

      {/* ================= 2. STATS RIBBON STRIP ================= */}
      <section className="arch-stats-ribbon" ref={statsRef}>
        <div className="arch-container arch-stats-grid">
          <div className="arch-stat-block">
            <span className="stat-num">
              <AnimatedStat target={4.9} decimals={1} active={statsVisible} />
            </span>
            <span className="stat-sub">(3,200) Verified Reviews</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">
              <AnimatedStat target={12500} formatComma suffix="+" active={statsVisible} />
            </span>
            <span className="stat-sub">Active Learners</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">
              <AnimatedStat target={35} suffix=" Hours" active={statsVisible} />
            </span>
            <span className="stat-sub">Self-Paced Learning</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">
              <AnimatedStat target={6} suffix="-Week" active={statsVisible} />
            </span>
            <span className="stat-sub">Internship Included</span>
          </div>
        </div>
      </section>

      {/* ================= 4. SECTION: COURSE OVERVIEW & ARCHITECTURAL BLUEPRINT ================= */}
      <section className="arch-content-section" id="overview">
        <div className="arch-container">
          <div className="overview-grid-split">

            {/* Left Column: Narrative & Key Highlights */}
            <div className="overview-narrative-col">
              <span className="overview-eyebrow">ACCREDITED PROFESSIONAL PROGRAM</span>
              <h2 className="overview-main-title">
                Course <span className="hero-lime-highlight">Overview</span>
              </h2>
              <p className="overview-lead-text">
                Master digital accounting, corporate taxation, and GST compliance using Tally Prime 4.0—India’s leading business management and financial software.
              </p>
              <p className="overview-body-desc">
                Engineered for commerce graduates, aspiring accountants, and business owners, this program bridges academic knowledge with enterprise-grade accounting workflows. Gain practical command over real business ledgers, multi-warehouse inventory, automated bank reconciliations, E-Invoicing, and statutory filings with expert guidance in regional languages.
              </p>

              {/* 4 Feature Check Pills */}
              <div className="overview-feature-pills-grid">
                <div className="overview-pill-item">
                  <span className="overview-pill-icon">✓</span>
                  <span>Tally Prime 4.0 Industry Standard</span>
                </div>
                <div className="overview-pill-item">
                  <span className="overview-pill-icon">✓</span>
                  <span>Live GST Portal Simulations (GSTR-1 &amp; 3B)</span>
                </div>
                <div className="overview-pill-item">
                  <span className="overview-pill-icon">✓</span>
                  <span>Automated BRS &amp; Multi-Tier Invoicing</span>
                </div>
                <div className="overview-pill-item">
                  <span className="overview-pill-icon">✓</span>
                  <span>NEP 2020 Aligned &amp; TEPL Accredited</span>
                </div>
              </div>
            </div>

            {/* Right Column: Kept blank per design */}
            <div className="overview-blueprint-col" />

          </div>
        </div>
      </section>

      {/* ================= SECTION: ABOUT TALLY PRIME WITH GST FUNDAMENTALS ================= */}
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

      {/* ================= 5. SECTION: EXCLUSIVE COURSE OFFERINGS (SPLIT TRACK CAROUSEL) ================= */}
      <section className="offer" id="offer" ref={offeringsContainerRef}>
        <div className="stick">
          <div className="left">
            <h2>Exclusive Course Offerings</h2>
            <p>Comprehensive features and value additions bundled with your program enrollment</p>
            <div className="dots" id="dots">
              {offeringsData.map((_, i) => (
                <i key={i} className={i === activeOfferIndex ? 'on' : ''} />
              ))}
            </div>
          </div>
          <div className="view">
            <div className="track" id="track" ref={trackRef}>
              {offeringsData.map((item, idx) => (
                <div
                  key={idx}
                  className={`card ${idx === activeOfferIndex ? 'on' : ''}`}
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.600-5.4-11.4-12-12C6.600 11.400 11.400 6.600 12 0z"
                    />
                  </svg>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. SECTION: INTERNSHIP PROGRAM INTEGRATION (REDESIGNED LIGHT THEME) ================= */}
      <section className="arch-content-section section-internship-light" id="internship">
        <div className="arch-container">

          {/* Section Header */}
          <div className="internship-header-block">
            <h2 className="internship-main-title">
              <span className="internship-title-highlight">Internship Program Integration</span>
            </h2>

            <p className="internship-lead-paragraph">
              The Integrated Internship Program offers an intensive 6–week hands-on corporate learning experience using Tally Prime. Bridge academic knowledge with authentic workplace practice, master digital accounting and GST workflows, and earn dual verifiable credentials recognized across corporate industries.
            </p>
          </div>

          {/* 4 Cards Unified Banner below Internship Description */}
          <div className="internship-specs-strip">
            <div className="internship-spec-card">
              <div className="internship-spec-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
                  <path d="M19 3v4M17 5h4" strokeWidth="1.75" />
                  <circle cx="5" cy="19" r="1.5" strokeWidth="1.75" />
                </svg>
              </div>
              <h4 className="spec-name">6–Week Immersive Training</h4>
              <p className="spec-sub">Hands-on corporate simulation projects, not just theory.</p>
            </div>

            <div className="internship-spec-card">
              <div className="internship-spec-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
                  <path d="M19 3v4M17 5h4" strokeWidth="1.75" />
                  <circle cx="5" cy="19" r="1.5" strokeWidth="1.75" />
                </svg>
              </div>
              <h4 className="spec-name">100% Practical Workflows</h4>
              <p className="spec-sub">Real Tally Prime vouchers, inventory, and GST compliance.</p>
            </div>

            <div className="internship-spec-card">
              <div className="internship-spec-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
                  <path d="M19 3v4M17 5h4" strokeWidth="1.75" />
                  <circle cx="5" cy="19" r="1.5" strokeWidth="1.75" />
                </svg>
              </div>
              <h4 className="spec-name">NEP 2020 Aligned</h4>
              <p className="spec-sub">Credit-ready skill curriculum aligned with national policy.</p>
            </div>

            <div className="internship-spec-card">
              <div className="internship-spec-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
                  <path d="M19 3v4M17 5h4" strokeWidth="1.75" />
                  <circle cx="5" cy="19" r="1.5" strokeWidth="1.75" />
                </svg>
              </div>
              <h4 className="spec-name">Dual TEPL Certification</h4>
              <p className="spec-sub">Verifiable credentials with direct TEPL job portal access.</p>
            </div>
          </div>

          {/* Section Heading: Styled like "OUR AI ADVANTAGE" */}
          <div className="internship-achieve-centered-header">
            <h3 className="internship-achieve-main-title">
              WHAT LEARNERS WILL ACHIEVE <span className="highlight-blue">FROM INTERNSHIP</span>
            </h3>
            <p className="internship-achieve-subtitle">
              We equip you with practical digital accounting mastery, simulated corporate workflows, and verified skills that employers actively seek. No prior corporate experience required.
            </p>
          </div>

          {/* 4 Cards surrounding Center Glowing Orb */}
          <div className="internship-achieve-grid-stage">
            {/* Top-Left Card */}
            <div className="achieve-dark-card card-tl">
              <h4 className="achieve-card-title">REAL–WORLD EXPERIENCE</h4>
              <p className="achieve-card-desc">
                Work through authentic corporate case studies that simulate daily business operations, equipping you to handle end-to-end accounting tasks independently from day one.
              </p>
            </div>

            {/* Bottom-Left Card */}
            <div className="achieve-dark-card card-bl">
              <h4 className="achieve-card-title">PRACTICAL APPLICATION</h4>
              <p className="achieve-card-desc">
                Apply theoretical knowledge in real time through hands-on tasks, including chart of accounts setup, multi-tier invoicing, E-Way Bill generation, and ledger reconciliations.
              </p>
            </div>

            {/* Center Simple Badge */}
            <div className="achieve-center-orb-wrapper">
              <div className="achieve-center-orb">
                <span className="orb-text-main">TEPL</span>
              </div>
            </div>

            {/* Top-Right Card */}
            <div className="achieve-dark-card card-tr">
              <h4 className="achieve-card-title">BOOST YOUR RESUME</h4>
              <p className="achieve-card-desc">
                Documented practical experience in Tally Prime significantly distinguishes your profile, providing verified evidence of corporate readiness that catches the attention of hiring managers.
              </p>
            </div>

            {/* Bottom-Right Card */}
            <div className="achieve-dark-card card-br">
              <h4 className="achieve-card-title">NEP 2020 ALIGNED</h4>
              <p className="achieve-card-desc">
                The internship adheres strictly to National Education Policy 2020 (NEP 2020) guidelines, offering credit-ready vocational learning that broadens employment avenues nationwide.
              </p>
            </div>
          </div>

          {/* Official TEPL Dual Certification Card (Matching Dark Card UI) */}
          <div className="achieve-cert-card-wrap">
            <div className="achieve-dark-card card-cert">
              <h4 className="achieve-card-title">OFFICIAL TEPL DUAL CERTIFICATION</h4>
              <p className="achieve-card-desc">
                Upon program completion, receive dual verified credentials: the official TEPL Accredited Course Completion Certificate and 6–Week Corporate Practical Internship Certificate with verifiable QR codes recognized nationwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 8. SECTION: WHY CHOOSE THIS COURSE? (STICKY SPLIT-SCROLL) ================= */}
      <section className="why-sticky-section" id="why-choose">
        <div className="why-sticky-container">
          <div className="why-sticky-head">
            <h2>
              Why Choose <span className="why-title-highlight">This Course?</span>
            </h2>
            <p>Designed to give you practical accounting mastery and industry career readiness</p>
          </div>
          <div className="why-sticky-split">
            <div className="why-sticky-panel" id="panel">
              {whyStickyItems.map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={item.alt}
                  className={idx === activeWhyIndex ? 'on' : ''}
                />
              ))}
              <div className="why-sticky-segs" id="segs">
                {whyStickyItems.map((_, idx) => (
                  <i
                    key={idx}
                    className={idx <= activeWhyIndex ? 'on' : ''}
                    onClick={() => {
                      setActiveWhyIndex(idx);
                      whyItemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="why-sticky-list" id="list">
              {whyStickyItems.map((item, idx) => (
                <article
                  key={idx}
                  ref={(el) => (whyItemRefs.current[idx] = el)}
                  className={`why-sticky-item ${idx === activeWhyIndex ? 'on' : ''}`}
                  onClick={() => {
                    setActiveWhyIndex(idx);
                    whyItemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <div className="n">{item.n}</div>
                  <div className="tag">{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. SECTION: OUR CURRICULUM GUIDE (EDITORIAL ACCORDION SPLIT) ================= */}
      <section className="arch-content-section" id="curriculum">
        <div className="arch-container arch-curriculum-split">

          {/* Left Column: Intro & Download Callout */}
          <div className="curriculum-intro-col">
            <h2 className="arch-section-title">
              <span className="hero-lime-highlight">Our Curriculum Guide</span>
            </h2>
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
              <h2 className="arch-section-title">
                <span className="hero-lime-highlight">Tally Course Eligibility</span>
              </h2>
            </div>
            <p className="arch-header-desc">
              Those with a background in commerce at graduate or postgraduate level, along with students or working professionals interested in upskilling, are eligible.
            </p>
          </div>

          <div className="elig-audience-grid">
            {eligibilityAudience.map((item, idx) => (
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

      {/* ================= 10B. SECTION: TALLY & INTERNSHIP CERTIFICATION ================= */}
      <section className="cert-sec" id="certification">
        <div className="arch-container">
          <div className="cert-sec-head">
            <h2 className="arch-section-title">
              Earn an Industry–Recognized <span className="hero-lime-highlight">Tally &amp; Internship Certificate</span>
            </h2>
          </div>
          <div className="cert-grid-body">
            <div className="cert-copy-col">
              <h3>Tally &amp; Internship Certificate</h3>
              <p>Upon completing the 25 hours curriculum and 6–week internship case studies, receive dual verified credentials directly shareable on LinkedIn and recognized by employers nationwide.</p>
              <div className="cert-stats-grid">
                <div><b>25</b><span>Hours curriculum</span></div>
                <div><b>6</b><span>Weeks internship case studies</span></div>
                <div><b>✓</b><span>Shareable on LinkedIn</span></div>
                <div><b>✓</b><span>Recognized by employers nationwide</span></div>
              </div>
            </div>
            <div className="cert-show-col">
              <div className="cert-mockup" role="img" aria-label="Sample Tally and Internship certificate">
                <div className="c-top">
                  <h4>Certificate of Completion</h4>
                  <p>Tally &amp; Internship Programme</p>
                </div>
                <div className="c-mid">
                  <small>This is to certify that</small>
                  <div className="nm">Student Name</div>
                  <small>has successfully completed the requirements of</small>
                  <div className="pr">Tally Prime &amp; Internship Programme</div>
                  <div className="dt">25 Hours Curriculum · 6–Week Internship Case Studies</div>
                  <div className="c-logo">finanzo</div>
                  <svg className="c-sig" viewBox="0 0 120 40" fill="none" stroke="#1a2a86" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M4 28c10-24 14-24 10-4s8 6 14-8c-2 14 6 12 12 2 4-6 6-4 4 4 8-10 20-14 40-12" />
                    <path d="M6 34h100" stroke="#bbb" strokeWidth="1" />
                  </svg>
                  <svg className="c-seal" viewBox="0 0 80 90">
                    <path d="M40 2l34 12v28c0 24-16 38-34 46C22 80 6 66 6 42V14z" fill="#1a2a86" />
                    <path d="M40 10l26 9v23c0 18-12 30-26 36-14-6-26-18-26-36V19z" fill="#0a1ea8" stroke="#fff" strokeWidth="2" />
                    <path d="M40 28l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z" fill="#fff" />
                  </svg>
                </div>
                <div className="c-foot">Verified credential · ID: FNZ-XXXXXX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 11. SECTION: COURSE FEE & COMPLETE ENROLLMENT PACKAGE ================= */}
      <section className="arch-content-section section-pricing-package section-pricing-light" id="pricing">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <h2 className="arch-section-title">
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
      <section className="arch-content-section section-reviews-light" id="reviews">
        <div className="arch-container">
          <div className="arch-section-header-row">
            <div>
              <h2 className="arch-section-title">
                Student Reviews &amp; Feedback
              </h2>
            </div>
            <div className="score-pill-header score-pill-light">
              <span className="gold-star">★</span>
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
              <h2 className="arch-section-title">
                <span className="hero-lime-highlight">Frequently Asked Questions</span>
              </h2>
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
              <h2 className="arch-section-title">
                <span className="hero-lime-highlight">Related Certification Courses</span>
              </h2>
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

    </div>
  );
};

export default CourseAccounting;