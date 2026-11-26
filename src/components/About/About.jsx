import React, { useEffect, useRef } from 'react';
import './About.css';
import Accreditation from '../Accreditation';
import CTA from '../CTA';

const About = () => {
  const tilesRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Photo mosaic wipe-open reveal on scroll
    const galleryEl = galleryRef.current;
    if (galleryEl) {
      const phs = galleryEl.querySelectorAll('.who-ph');
      if ('IntersectionObserver' in window && !reduce) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });

        phs.forEach((p) => io.observe(p));
      } else {
        phs.forEach((p) => p.classList.add('in'));
      }
    }

    // 2. Gradient 3D grid flattening on scroll
    const tilesEl = tilesRef.current;
    if (tilesEl) {
      if (reduce) {
        tilesEl.style.setProperty('--p', '1');
      } else {
        let ticking = false;
        const updateTiles = () => {
          ticking = false;
          if (!tilesEl) return;
          const r = tilesEl.getBoundingClientRect();
          const vh = window.innerHeight;
          let p = (vh - r.top) / (vh * 0.75);
          p = Math.max(0, Math.min(1, p));
          tilesEl.style.setProperty('--p', p.toFixed(3));
        };

        const onScroll = () => {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateTiles);
          }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        updateTiles();

        return () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
        };
      }
    }
  }, []);

  const handleTilePointer = (e, isEnter) => {
    const tile = e.currentTarget;
    const r = tile.getBoundingClientRect();
    tile.style.setProperty('--x', `${Math.max(0, Math.min(r.width, e.clientX - r.left))}px`);
    tile.style.setProperty('--y', `${Math.max(0, Math.min(r.height, e.clientY - r.top))}px`);
    if (isEnter) {
      tile.classList.add('on');
    } else {
      tile.classList.remove('on');
    }
  };

  const handleTileFocus = (e, isFocus) => {
    const tile = e.currentTarget;
    tile.style.setProperty('--x', '50%');
    tile.style.setProperty('--y', '50%');
    if (isFocus) {
      tile.classList.add('on');
    } else {
      tile.classList.remove('on');
    }
  };

  const mentors = [
    {
      name: 'CA Rajesh Sharma',
      role: 'Head of Taxation & Corporate Audit',
      exp: '15+ Years Exp • Ex-PwC',
      initials: 'RS',
      specialty: 'GST E-Filing, Statutory Audits, Corporate Tax'
    },
    {
      name: 'CA Ananya Iyer',
      role: 'Financial Modeling & Valuation Lead',
      exp: '12+ Years Exp • Ex-EY',
      initials: 'AI',
      specialty: 'M&A, DCF Valuation, Treasury Management'
    },
    {
      name: 'Vikramaditya S.',
      role: 'Master TallyPrime Trainer',
      exp: '14+ Years Exp • Tally Certified Professional',
      initials: 'VS',
      specialty: 'TallyPrime ERP, Inventory Controls, Payroll'
    },
    {
      name: 'Pooja Nair',
      role: 'Direct Tax & Compliance Specialist',
      exp: '10+ Years Exp • Practicing Tax Advocate',
      initials: 'PN',
      specialty: 'TDS/TCS Returns, Income Tax Appeals, Balance Sheets'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Live GST Portal Simulation',
      desc: 'No theoretical dummy mockups. Learn directly on live government portal interfaces for GSTR-1, 3B, and E-Way bills.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      title: 'Official Authorised Tally Partner',
      desc: 'Curriculum co-designed with Tally Education (TEPL) with verified digital certifications and 30-day free software licenses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: '6-Week Client Ledger Internship',
      desc: 'Handle actual audited books of active businesses to graduate with verifiable work experience and Letters of Recommendation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: 'Practicing CA Mentorship',
      desc: 'Weekly 1-on-1 review sessions, career mentoring, and technical ledger audits guided by senior Chartered Accountants.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Dedicated Placement Cell',
      desc: 'Direct hiring pipeline with 100+ partner CA firms, audit practices, and multinational corporate accounting departments.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'Govt. Recognized Ecosystem',
      desc: 'Officially recognized by Startup India (DPIIT) and Startup TN, incubated at Crescent Innovation & Incubation Council (CIIC).',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  const approachPhases = [
    {
      step: '01',
      phase: 'Conceptual Rigor',
      detail: 'Demystifying direct & indirect taxation, debit-credit foundations, and statutory Indian accounting standards without jargon.'
    },
    {
      step: '02',
      phase: 'Software Mastery',
      detail: 'Hands-on keyboard training in TallyPrime, advanced Excel spreadsheet automation, and portal reconciliation tools.'
    },
    {
      step: '03',
      phase: 'Live Client Audit',
      detail: 'Managing authentic commercial client ledgers, balancing cash flows, and filing real-time return simulations.'
    },
    {
      step: '04',
      phase: 'Industry Induction',
      detail: 'Technical interview bootcamps, resume vetting by CAs, and guaranteed placement drives with top accounting employers.'
    }
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* 1. ABOUT HERO SECTION (Exact UI from About Us – Finanzo.html) */}
      <section className="about-hero-section">
        <header className="about-hero-canvas">
          <div className="about-blob about-b1" />
          <div className="about-blob about-b2" />
          <div className="about-blob about-b3" />
          <div className="about-hero-grain" />

          <div className="about-hero-copy">
            <h1 className="about-hero-h1">
              About{' '}
              <span className="about-hero-u">
                Us
                <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M1 4C25 9 60 9 99 2" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
            </h1>

            <p className="about-hero-lead">
              Finanzo is on a mission to empower aspiring finance and commerce professionals with industry-grade practical education, live GST filing expertise, and placement-ready credentials.
            </p>

            <div className="about-hero-cta">
              <a className="about-hero-btn" id="courses" href="#courses">
                Explore Courses <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </header>

        {/* 3 Value Pillars */}
        <div className="about-hero-points-wrap">
          <div className="about-hero-points" aria-label="What we offer">
            <div className="about-pt">
              <span>01</span>
              <h2>Industry-grade practical education</h2>
            </div>
            <div className="about-pt">
              <span>02</span>
              <h2>Live GST filing expertise</h2>
            </div>
            <div className="about-pt">
              <span>03</span>
              <h2>Placement-ready credentials</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Interactive UI from who-we-are.html) */}
      <section className="about-section who-we-are-section" aria-labelledby="who" id="who-we-are">
        <div className="who-container">
          
          {/* Left Column: Story & 3D Tilted Blue Grid */}
          <div className="who-left">
            <div className="who-copy">
              <h2 id="who">Who We Are</h2>
              <p>
                Founded by practicing Chartered Accountants and educational innovators, Finanzo was born to solve a critical industry reality: while millions of students graduate with commerce degrees each year, few possess the practical muscle memory required to operate TallyPrime, execute GST returns, or balance company ledgers on Day 1.
              </p>
              <p>
                Today, Finanzo operates as an official Authorised Learning Partner of Tally Education (TEPL) and is recognized under the Startup India and Startup TN government initiatives. We provide college students, career switchers, and working professionals with direct, hands-on access to the tools and workflows of modern corporate finance.
              </p>
            </div>

            {/* 3D Tilted Interactive Blue Grid */}
            <div className="who-tiles-wrap">
              <div className="who-tiles" id="tiles" ref={tilesRef}>
                
                {/* Tile 1 */}
                <button
                  className="who-tile"
                  type="button"
                  aria-label="Practicing Chartered Accountants"
                  onPointerEnter={(e) => handleTilePointer(e, true)}
                  onPointerLeave={(e) => handleTilePointer(e, false)}
                  onFocus={(e) => handleTileFocus(e, true)}
                  onBlur={(e) => handleTileFocus(e, false)}
                >
                  <span className="tile-in tile-base">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
                      <path d="M8.5 12l2.5 2.5 4.5-5" />
                    </svg>
                    <em className="tile-lbl">Founded by practicing CAs</em>
                  </span>
                  <span className="tile-in tile-fill" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
                      <path d="M8.5 12l2.5 2.5 4.5-5" />
                    </svg>
                    <em className="tile-lbl">Founded by practicing CAs</em>
                  </span>
                </button>

                {/* Tile 2 */}
                <button
                  className="who-tile"
                  type="button"
                  aria-label="Authorised Learning Partner of Tally Education"
                  onPointerEnter={(e) => handleTilePointer(e, true)}
                  onPointerLeave={(e) => handleTilePointer(e, false)}
                  onFocus={(e) => handleTileFocus(e, true)}
                  onBlur={(e) => handleTileFocus(e, false)}
                >
                  <span className="tile-in tile-base">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="9" r="5" />
                      <path d="M8.8 13.3L7.5 21l4.5-2.6 4.5 2.6-1.3-7.7" />
                    </svg>
                    <em className="tile-lbl">Authorised Learning Partner, TEPL</em>
                  </span>
                  <span className="tile-in tile-fill" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="9" r="5" />
                      <path d="M8.8 13.3L7.5 21l4.5-2.6 4.5 2.6-1.3-7.7" />
                    </svg>
                    <em className="tile-lbl">Authorised Learning Partner, TEPL</em>
                  </span>
                </button>

                {/* Tile 3 */}
                <button
                  className="who-tile"
                  type="button"
                  aria-label="Recognized under Startup India"
                  onPointerEnter={(e) => handleTilePointer(e, true)}
                  onPointerLeave={(e) => handleTilePointer(e, false)}
                  onFocus={(e) => handleTileFocus(e, true)}
                  onBlur={(e) => handleTileFocus(e, false)}
                >
                  <span className="tile-in tile-base">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 19c0-6 4-12 14-14 0 10-6 14-12 14" />
                      <path d="M5 19l5-5" />
                      <circle cx="14.5" cy="9.5" r="1.2" />
                    </svg>
                    <em className="tile-lbl">Recognized under Startup India</em>
                  </span>
                  <span className="tile-in tile-fill" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 19c0-6 4-12 14-14 0 10-6 14-12 14" />
                      <path d="M5 19l5-5" />
                      <circle cx="14.5" cy="9.5" r="1.2" />
                    </svg>
                    <em className="tile-lbl">Recognized under Startup India</em>
                  </span>
                </button>

                {/* Tile 4 */}
                <button
                  className="who-tile"
                  type="button"
                  aria-label="Recognized under Startup TN"
                  onPointerEnter={(e) => handleTilePointer(e, true)}
                  onPointerLeave={(e) => handleTilePointer(e, false)}
                  onFocus={(e) => handleTileFocus(e, true)}
                  onBlur={(e) => handleTileFocus(e, false)}
                >
                  <span className="tile-in tile-base">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
                      <circle cx="12" cy="10" r="2.4" />
                    </svg>
                    <em className="tile-lbl">Recognized under Startup TN</em>
                  </span>
                  <span className="tile-in tile-fill" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
                      <circle cx="12" cy="10" r="2.4" />
                    </svg>
                    <em className="tile-lbl">Recognized under Startup TN</em>
                  </span>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column: Photo Mosaic Gallery with Wipe-Open Reveal */}
          <div className="who-gallery" id="gallery" ref={galleryRef}>
            <div className="who-ph who-wide">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
                <path d="M16 5.2a3.2 3.2 0 010 5.6M18 14c2 .6 3.5 2.3 3.5 5" />
              </svg>
              <b>[ Image: Our Founders &amp; Campus Team ]</b>
              <small>Recommended: 700 x 440 px</small>
            </div>

            <div className="who-ph who-sq">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="1.8" />
                <path d="M21 16l-5-5-8 9" />
              </svg>
              <b>[ Image ]</b>
              <small>Recommended: 340 x 400 px</small>
            </div>

            <div className="who-ph who-sq">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="1.8" />
                <path d="M21 16l-5-5-8 9" />
              </svg>
              <b>[ Image ]</b>
              <small>Recommended: 340 x 400 px</small>
            </div>

            <div className="who-ph who-wide">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="1.8" />
                <path d="M21 16l-5-5-8 9" />
              </svg>
              <b>[ Image ]</b>
              <small>Recommended: 700 x 440 px</small>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="about-section mission-vision-section">
        <div className="about-container">
          <div className="mission-vision-grid">
            
            <div className="mv-card mission-card">
              <div className="mv-icon-circle blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
              </div>
              <h3 className="mv-card-title">Our Mission</h3>
              <p className="mv-card-desc">
                To bridge India's commerce-to-corporate skills gap by delivering authentic, software-driven accounting and taxation training—enabling every learner to enter the workforce with confidence, certified skills, and proven internship experience.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon-circle emerald">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
              <p className="mv-card-desc">
                To be the nationwide benchmark for practical financial education—trusted by universities for curriculum integration, recognized by government incubation ecosystems, and preferred by thousands of hiring companies for certified talent.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE FINANZO */}
      <section className="about-section why-choose-section">
        <div className="about-container">
          <div className="centered-header">
            <h2 className="section-heading">Why Choose Finanzo</h2>
            <p className="section-subtext">
              The unfair competitive advantages that set Finanzo graduates apart from conventional textbook learners.
            </p>
          </div>

          <div className="why-choose-grid">
            {whyChoosePoints.map((item, idx) => (
              <div key={idx} className="why-choose-card">
                <div className="why-icon-wrap">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR LEARNING APPROACH */}
      <section className="about-section learning-approach-section">
        <div className="about-container">
          <div className="centered-header">
            <h2 className="section-heading">Our Learning Approach</h2>
            <p className="section-subtext">
              An industry-vetted 4-step pedagogical blueprint designed to build real workplace competency.
            </p>
          </div>

          <div className="approach-phases-grid">
            {approachPhases.map((phase, idx) => (
              <div key={idx} className="phase-card">
                <div className="phase-number">{phase.step}</div>
                <h3 className="phase-title">{phase.phase}</h3>
                <p className="phase-desc">{phase.detail}</p>
              </div>
            ))}
          </div>

          {/* Image Placeholder: Approach / Dashboard */}
          <div className="about-image-frame approach-image-space">
            <div className="placeholder-canvas">
              <div className="placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="placeholder-label">[ Image Space: Practical Lab Simulation / Live TallyPrime Interface ]</span>
              <span className="placeholder-dimensions">Recommended: 1200 x 480 px</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR IMPACT */}
      <section className="about-section impact-overview-section">
        <div className="about-container">
          <div className="centered-header">
            <h2 className="section-heading">Our Impact in Numbers</h2>
            <p className="section-subtext">
              Verified outcomes demonstrating the trust of students, universities, and corporate recruiters.
            </p>
          </div>

          <div className="about-impact-grid">
            <div className="impact-box">
              <span className="impact-number">10K+</span>
              <span className="impact-label">TRUSTED STUDENTS</span>
            </div>
            <div className="impact-box">
              <span className="impact-number">2,800+</span>
              <span className="impact-label">CERTIFICATIONS AWARDED</span>
            </div>
            <div className="impact-box">
              <span className="impact-number">729+</span>
              <span className="impact-label">PLACED CANDIDATES</span>
            </div>
            <div className="impact-box">
              <span className="impact-number">140+</span>
              <span className="impact-label">INDUSTRY MENTORS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM & MENTORS */}
      <section className="about-section mentors-section">
        <div className="about-container">
          <div className="centered-header">
            <h2 className="section-heading">Team & Industry Mentors</h2>
            <p className="section-subtext">
              Learn directly from certified Chartered Accountants, veteran tax advocates, and senior ERP corporate trainers.
            </p>
          </div>

          <div className="mentors-grid">
            {mentors.map((m, idx) => (
              <div key={idx} className="mentor-card">
                
                {/* Image Placeholder: Mentor Headshot */}
                <div className="mentor-photo-frame">
                  <div className="mentor-placeholder-canvas">
                    <span className="mentor-avatar-initials">{m.initials}</span>
                    <span className="mentor-photo-tag">[ Photo Space: {m.name} ]</span>
                  </div>
                </div>

                <div className="mentor-details">
                  <h3 className="mentor-name">{m.name}</h3>
                  <span className="mentor-role">{m.role}</span>
                  <span className="mentor-exp">{m.exp}</span>
                  <div className="mentor-specialty-box">
                    <span>Focus: {m.specialty}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR PARTNERS (Reusable Infinite White Marquee) */}
      <Accreditation />

      {/* 9. CTA */}
      <CTA />

    </div>
  );
};

export default About;
