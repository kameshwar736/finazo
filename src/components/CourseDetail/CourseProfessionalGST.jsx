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

const CourseProfessionalGST = ({ onBackToHome = () => { }, onSelectCourse = () => { } }) => {
  const [openCurriculum, setOpenCurriculum] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const statsRef = useRef(null);
  const offeringsContainerRef = useRef(null);
  const trackRef = useRef(null);
  const whyItemRefs = useRef([]);

  // Original 5 Why Choose Items from Professional Accounting & GST
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
      title: 'Hands–On Training',
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

  // Original 8 Exclusive Course Offerings from Professional Accounting & GST
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
      title: 'Weekly Live Sessions',
      desc: 'Live interactive doubt resolution and mentoring'
    },
    {
      title: 'Email Support',
      desc: 'Prompt expert technical assistance & guidance'
    },
    {
      title: 'Experienced Faculty',
      desc: 'Direct mentoring from seasoned finance educators'
    },
    {
      title: 'Access to TEPL Job Portal',
      desc: 'Apply directly to verified partner employers'
    },
    {
      title: 'Placement Support',
      desc: 'Resume formatting and hiring firm referrals'
    },
    {
      title: 'Self Paced Learning',
      desc: 'Complete 25 hours at your own convenience'
    }
  ];

  // Original Eligibility Audience from Professional Accounting & GST
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

  // Original Curriculum Modules (10 Modules • 25 Hours from reference Image 1)
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

  // Original 10 Detailed FAQs from Professional Accounting & GST
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

      firstC = cards[0].offsetTop + cards[0].offsetHeight / 2;
      lastC = cards[cards.length - 1].offsetTop + cards[cards.length - 1].offsetHeight / 2;
      range = Math.max(0, lastC - firstC);

      sec.style.height = `${pinnedH + range * 1.25}px`;
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
    const handleWhyScroll = () => {
      const items = whyItemRefs.current.filter(Boolean);
      if (!items.length) return;

      const nav = 80;
      const trigger =
        window.innerWidth <= 800
          ? (nav + window.innerHeight * 0.36 + (window.innerHeight - nav - window.innerHeight * 0.36) / 2)
          : (nav + (window.innerHeight - nav) / 2);

      let found = 0;
      items.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        if (r.top <= trigger && r.bottom >= trigger) {
          found = i;
        } else if (i === items.length - 1 && r.top <= trigger) {
          found = i;
        }
      });

      setActiveWhyIndex(found);
    };

    window.addEventListener('scroll', handleWhyScroll, { passive: true });
    handleWhyScroll();
    return () => window.removeEventListener('scroll', handleWhyScroll);
  }, []);

  useEffect(() => {
    const target = statsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handlePayNow = () => {
    alert('Redirecting to Finanzo Secure Checkout for ₹4,999...');
  };

  return (
    <div className="finanzo-editorial-page page-theme-azure">

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
                <span className="arch-hero-line">Professional Accounting</span>
                <span className="arch-hero-line">&amp;</span>
                <span className="arch-hero-line">
                  <span className="hero-lime-highlight">GST Compliance</span>
                </span>
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
              <AnimatedStat target={4.8} decimals={1} active={statsVisible} />
            </span>
            <span className="stat-sub">(2,100) Verified Reviews</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">
              <AnimatedStat target={10800} formatComma suffix="+" active={statsVisible} />
            </span>
            <span className="stat-sub">Active Learners</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num">
              <AnimatedStat target={25} suffix=" Hours" active={statsVisible} />
            </span>
            <span className="stat-sub">Online &amp; Live Training</span>
          </div>
          <div className="arch-stat-divider"></div>
          <div className="arch-stat-block">
            <span className="stat-num" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              Tally Certified
            </span>
            <span className="stat-sub">TEPL Credential Included</span>
          </div>
        </div>
      </section>

      {/* ================= 4. SECTION: COURSE OVERVIEW & ARCHITECTURAL BLUEPRINT ================= */}
      <section className="arch-content-section" id="overview">
        <div className="arch-container">
          <div className="overview-grid-split">

            {/* Left Column: Narrative & Key Highlights */}
            <div className="overview-narrative-col">
              <span className="overview-eyebrow">SECTION 01 / OVERVIEW</span>
              <h2 className="overview-main-title">
                Course <span className="hero-lime-highlight">Overview</span>
              </h2>
              <p className="overview-lead-text">
                This course is designed to help you master Tally Prime with a strong focus on GST. You will learn through practical examples, real business cases, and hands-on training.
              </p>
              <p className="overview-body-desc">
                Along with technical knowledge, you will also gain internship support to gain industry exposure and build your career in accounts and finance.
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

      {/* ================= 6. SECTION: INTERNSHIP PROGRAM INTEGRATION ================= */}
      <section className="arch-content-section section-internship-light" id="internship">
        <div className="arch-container">

          <div className="internship-header-block">
            <h2 className="internship-main-title">
              Internship Program Integration
            </h2>
            <p className="internship-main-desc">
              Along with technical knowledge, you will also gain internship support to gain industry exposure and build your career in accounts and finance.
            </p>
          </div>

          <div className="internship-cards-grid">
            <div className="intern-card-col">
              <span className="intern-card-index">01</span>
              <h3 className="intern-card-title">Gain Real–World Experience</h3>
              <p className="intern-card-desc">Work on real corporate transactions and navigate multi-tier GST accounting environments.</p>
            </div>

            <div className="intern-card-col">
              <span className="intern-card-index">02</span>
              <h3 className="intern-card-title">Practical Application of Skills</h3>
              <p className="intern-card-desc">Apply theoretical concepts directly to corporate client books and automated reconciliation cases.</p>
            </div>

            <div className="intern-card-col">
              <span className="intern-card-index">03</span>
              <h3 className="intern-card-title">Boost Your Resume</h3>
              <p className="intern-card-desc">Stand out to recruiters with verified practical internship credentials and hands-on portfolio proof.</p>
            </div>

            <div className="intern-card-col">
              <span className="intern-card-index">04</span>
              <h3 className="intern-card-title">NEP 2020 Aligned Skill Dev</h3>
              <p className="intern-card-desc">Structured in strict compliance with National Education Policy experiential learning mandates.</p>
            </div>

            <div className="intern-card-col">
              <span className="intern-card-index">05</span>
              <h3 className="intern-card-title">Official Tally Certification</h3>
              <p className="intern-card-desc">Accredited by Tally Education (TEPL) with verifiable digital certification ID and LinkedIn badge.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. SECTION: WHY CHOOSE THIS COURSE (STICKY SPLIT SCROLL) ================= */}
      <section className="why-sticky-section" id="why-choose">
        <div className="why-sticky-container">
          <div className="why-sticky-head">
            <h2>Why Choose This Course?</h2>
            <p>Designed to give you practical accounting mastery and industry career readiness.</p>
          </div>

          <div className="why-sticky-split">
            {/* Pinned Image Panel (Left on Desktop) */}
            <div className="why-sticky-panel">
              {whyStickyItems.map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={item.alt}
                  className={idx === activeWhyIndex ? 'on' : ''}
                />
              ))}
              <div className="why-sticky-segs">
                {whyStickyItems.map((_, idx) => (
                  <i
                    key={idx}
                    className={idx === activeWhyIndex ? 'on' : ''}
                    onClick={() => {
                      const el = whyItemRefs.current[idx];
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Scrolling Narrative List (Right on Desktop) */}
            <div className="why-sticky-list">
              {whyStickyItems.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (whyItemRefs.current[idx] = el)}
                  className={`why-sticky-item ${idx === activeWhyIndex ? 'on' : ''}`}
                >
                  <span className="n">{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. SECTION: CURRICULUM GUIDE ACCORDION ================= */}
      <section className="arch-content-section" id="curriculum">
        <div className="arch-container arch-curriculum-split">

          {/* Left Column: Program Highlights Summary Card */}
          <aside className="arch-curriculum-sidebar">
            <div className="curriculum-sticky-card">
              <span className="curriculum-hero-badge">10 MODULES • 25 HOURS</span>
              <h3 className="curriculum-summary-title">Our Curriculum Guide</h3>
              <p className="curriculum-summary-desc">
                The curriculum is designed to help you learn the skills required to become a successful professional. From core ledger entries to statutory GST returns and assessment.
              </p>

              <div className="curriculum-meta-list">
                <div className="curriculum-meta-item">
                  <span className="meta-dot"></span>
                  <span>10 Structured In-Depth Modules</span>
                </div>
                <div className="curriculum-meta-item">
                  <span className="meta-dot"></span>
                  <span>Interactive Hands-On Assignments</span>
                </div>
                <div className="curriculum-meta-item">
                  <span className="meta-dot"></span>
                  <span>Lifetime Access to Video Lessons</span>
                </div>
                <div className="curriculum-meta-item">
                  <span className="meta-dot"></span>
                  <span>TEPL Accredited Assessment</span>
                </div>
              </div>

              <button
                onClick={() => alert('Finanzo Professional Accounting & GST Syllabus PDF is downloading...')}
                className="curriculum-enroll-btn"
                style={{ marginBottom: '0.75rem', background: 'transparent', border: '1px solid #2baffd', color: '#2baffd' }}
              >
                <span>Download Full Syllabus ↓</span>
              </button>

              <button onClick={handlePayNow} className="curriculum-enroll-btn">
                <span>ENROLL NOW • ₹4,999</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </aside>

          {/* Right Column: 10 Accordion Module Drawers */}
          <div className="arch-curriculum-content">
            <div className="curriculum-header-strip">
              <div>
                <h2 className="arch-section-title">
                  Our Curriculum Guide
                </h2>
              </div>
              <span className="module-total-pill">10 Modules</span>
            </div>

            <div className="arch-drawers-container">
              {curriculumGuideList.map((item, index) => {
                const isOpen = openCurriculum === index;
                return (
                  <div key={index} className={`curriculum-drawer-item ${isOpen ? 'active' : ''}`}>
                    <button
                      className="drawer-trigger-row"
                      onClick={() => setOpenCurriculum(isOpen ? null : index)}
                    >
                      <div className="drawer-title-group">
                        <span className="drawer-mod-index">{item.num}</span>
                        <h4 className="drawer-mod-heading">{item.title}</h4>
                      </div>
                      <div className="drawer-meta-group">
                        <span className="drawer-lessons-tag">{item.lessonsCount}</span>
                        <span className="drawer-toggle-symbol">{isOpen ? '—' : '+'}</span>
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
              Commerce students, graduates, and working professionals seeking to upskill in Tally &amp; GST.
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
              <p>Upon completing the 25 hours curriculum and internship support case studies, receive verified credentials directly shareable on LinkedIn and recognized by employers nationwide.</p>
              <div className="cert-stats-grid">
                <div><b>25</b><span>Hours curriculum</span></div>
                <div><b>TEPL</b><span>Official accredited credential</span></div>
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
                  <div className="pr">Professional Accounting &amp; GST Compliance</div>
                  <div className="dt">25 Hours Curriculum · Practical Accounting &amp; GST Case Studies</div>
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
                    📞 Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 12. SECTION: STUDENT REVIEWS & FEEDBACK ================= */}
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

      {/* ================= 13. SECTION: FAQS ================= */}
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
              onClick={() => onSelectCourse(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="course-thumb thumb-one">
                <span className="thumb-tag">Tally &amp; 6-Week Internship</span>
              </div>
              <div className="course-meta">
                <h4 className="course-title">Advanced Accounting &amp; Taxation with Professional Practice</h4>
                <div className="course-pricing">
                  <span className="old">₹9,999</span>
                  <span className="curr">₹7,999</span>
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

export default CourseProfessionalGST;
