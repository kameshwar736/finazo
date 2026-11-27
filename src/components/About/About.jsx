import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import Accreditation from '../Accreditation';
import CTA from '../CTA';
import useReveal from '../../hooks/useReveal';

const AnimatedStat = ({ end, suffix = '', formatComma = false, duration = 1800, started }) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(end);
      return;
    }

    let startTimestamp = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic: 1 - (1 - t)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);
      setVal(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setVal(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [started, end, duration]);

  const formatted = formatComma ? val.toLocaleString('en-US') : val;
  return (
    <span className="impact-number">
      {started ? formatted : 0}{suffix}
    </span>
  );
};

const About = () => {
  const containerRef = useReveal();
  const galleryRef = useRef(null);
  const impactRef = useRef(null);
  const [impactInView, setImpactInView] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Photo mosaic wipe-open reveal on scroll
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

    // Impact in view observer for number counter
    const impactEl = impactRef.current;
    if (impactEl) {
      if ('IntersectionObserver' in window && !reduce) {
        const ioImpact = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImpactInView(true);
              obs.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.15,
          rootMargin: '0px 0px -60px 0px'
        });
        ioImpact.observe(impactEl);
      } else {
        setImpactInView(true);
      }
    }
  }, []);

  useEffect(() => {
    // Smooth scroll to section if hash is present
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#about') {
        const id = hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

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
      num: '01',
      title: 'Live GST Portal Simulation',
      desc: 'No theoretical dummy mockups. Learn directly on live government portal interfaces for GSTR-1, 3B, and E-Way bills.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Official Authorised Tally Partner',
      desc: 'Curriculum co-designed with Tally Education (TEPL) with verified digital certifications and 30-day free software licenses.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      num: '03',
      title: '6-Week Client Ledger Internship',
      desc: 'Handle actual audited books of active businesses to graduate with verifiable work experience and Letters of Recommendation.',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Practicing CA Mentorship',
      desc: 'Weekly 1-on-1 review sessions, career mentoring, and technical ledger audits guided by senior Chartered Accountants.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
          <path d="M16 3.1a4 4 0 0 1 0 7.8" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Dedicated Placement Cell',
      desc: 'Direct hiring pipeline with 100+ partner CA firms, audit practices, and multinational corporate accounting departments.',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'Govt. Recognized Ecosystem',
      desc: 'Officially recognized by Startup India (DPIIT) and Startup TN, incubated at Crescent Innovation & Incubation Council (CIIC).',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      )
    }
  ];

  return (
    <div className="about-page-wrapper" id="about" ref={containerRef}>
      
      {/* 1. ABOUT HERO SECTION (Exact UI from About Us – Finanzo.html) */}
      <section className="about-hero-section" id="about-hero">
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

        {/* 2. Three highlights strip (01 / 02 / 03) */}
        <div className="about-hero-points-wrap">
          <div className="about-hero-points" aria-label="What we offer">
            <div className="about-pt reveal-up" style={{ '--delay': '0s' }}>
              <div className="about-pt-line" />
              <span>01</span>
              <h2>Financial Expertise</h2>
            </div>
            <div className="about-pt reveal-up" style={{ '--delay': '0.12s' }}>
              <div className="about-pt-line" />
              <span>02</span>
              <h2>Industry Readiness</h2>
            </div>
            <div className="about-pt reveal-up" style={{ '--delay': '0.24s' }}>
              <div className="about-pt-line" />
              <span>03</span>
              <h2>Professional Development</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE (Interactive UI from who-we-are.html) */}
      <section className="about-section who-we-are-section" aria-labelledby="who" id="who-we-are">
        <div className="who-container">
          
          {/* Left Column: Story & 3D Tilted Blue Grid */}
          <div className="who-left">
            <div className="who-copy">
              <h2 id="who" className="reveal-left" style={{ '--delay': '0s' }}>Who We Are</h2>
              <p className="reveal-up" style={{ '--delay': '0.12s' }}>
                Founded by practicing Chartered Accountants and educational innovators, Finanzo was born to solve a critical industry reality: while millions of students graduate with commerce degrees each year, few possess the practical muscle memory required to operate TallyPrime, execute GST returns, or balance company ledgers on Day 1.
              </p>
              <p className="reveal-up" style={{ '--delay': '0.24s' }}>
                Today, Finanzo operates as an official Authorised Learning Partner of Tally Education (TEPL) and is recognized under the Startup India and Startup TN government initiatives. We provide college students, career switchers, and working professionals with direct, hands-on access to the tools and workflows of modern corporate finance.
              </p>
            </div>
          </div>

          {/* Right Column: Photo Mosaic Gallery with Wipe-Open Reveal */}
          <div className="who-gallery reveal-zoom" style={{ '--delay': '0.15s' }} id="gallery" ref={galleryRef}>
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
          </div>

        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="about-section mission-vision-section" id="mission-vision">
        <div className="about-container">
          <div className="mission-vision-grid">
            
            <div className="mv-card vision-card reveal-left" style={{ '--delay': '0s' }}>
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

            <div className="mv-card mission-card reveal-right" style={{ '--delay': '0.12s' }}>
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

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE FINANZO */}
      <section className="about-section why-choose-section" id="why-choose-about">
        <div className="about-container why-choose-wrap">
          <header className="why-choose-header">
            <h1 className="why-choose-title reveal-up" style={{ '--delay': '0s' }}>Why choose Finanzo</h1>
            <p className="why-choose-subtext reveal-up" style={{ '--delay': '0.12s' }}>
              The unfair competitive advantages that set Finanzo graduates apart from conventional textbook learners.
            </p>
          </header>

          <div className="why-choose-grid">
            {whyChoosePoints.map((item, idx) => {
              const isRow1 = idx < 3;
              const revealClass = isRow1 ? 'reveal-left' : 'reveal-right';
              const delay = `${(idx * 0.15).toFixed(2)}s`;
              return (
                <article
                  key={idx}
                  className={`why-choose-card ${revealClass}`}
                  style={{ '--delay': delay }}
                >
                  <span className="why-card-num">{item.num}</span>
                  <div className="why-icon-wrap">{item.icon}</div>
                  <h2 className="why-card-title">{item.title}</h2>
                  <p className="why-card-desc">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR IMPACT IN NUMBERS */}
      <section className="about-section impact-overview-section" id="impact" ref={impactRef}>
        <div className="about-container">
          <div className="centered-header">
            <h2 className="section-heading reveal-up" style={{ '--delay': '0s' }}>Our Impact in Numbers</h2>
            <p className="section-subtext reveal-up" style={{ '--delay': '0.12s' }}>
              Verified outcomes demonstrating the trust of students, universities, and corporate recruiters.
            </p>
          </div>

          <div className="about-impact-grid">
            <div className="impact-box reveal-up" style={{ '--delay': '0s' }}>
              <AnimatedStat end={10} suffix="K+" started={impactInView} />
              <span className="impact-label">TRUSTED STUDENTS</span>
            </div>
            <div className="impact-box reveal-up" style={{ '--delay': '0.12s' }}>
              <AnimatedStat end={2800} formatComma={true} suffix="+" started={impactInView} />
              <span className="impact-label">CERTIFICATIONS AWARDED</span>
            </div>
            <div className="impact-box reveal-up" style={{ '--delay': '0.24s' }}>
              <AnimatedStat end={729} suffix="+" started={impactInView} />
              <span className="impact-label">PLACED CANDIDATES</span>
            </div>
            <div className="impact-box reveal-up" style={{ '--delay': '0.36s' }}>
              <AnimatedStat end={140} suffix="+" started={impactInView} />
              <span className="impact-label">INDUSTRY MENTORS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM & MENTORS */}
      <section className="about-section mentors-section" id="team-mentors">
        <div className="about-container">
          <div className="centered-header">
            <h2 className="section-heading reveal-up" style={{ '--delay': '0s' }}>Team & Industry Mentors</h2>
            <p className="section-subtext reveal-up" style={{ '--delay': '0.12s' }}>
              Learn directly from certified Chartered Accountants, veteran tax advocates, and senior ERP corporate trainers.
            </p>
          </div>

          <div className="mentors-grid">
            {mentors.map((m, idx) => (
              <div
                key={idx}
                className="mentor-card reveal-up"
                style={{ '--delay': `${(idx * 0.12).toFixed(2)}s` }}
              >
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
      <section id="our-partners">
        <Accreditation />
      </section>

      {/* 9. CTA */}
      <CTA />

    </div>
  );
};

export default About;
