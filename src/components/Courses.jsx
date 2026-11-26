import React, { useEffect, useRef } from 'react';
import './Courses.css';

const Courses = ({ onSelectCourse = () => { } }) => {
  const tlRef = useRef(null);
  const fillRef = useRef(null);
  const itemsRef = useRef([]);
  const labelsRef = useRef([]);

  const courseList = [
    {
      id: 1,
      theme: 'orange',
      label: 'Internship Included',
      badge: 'Internship Included',
      head: 'Tally Prime with GST Fundamentals',
      cert: 'Official Tally & Internship Certificates',
      title: 'Advanced Accounting & Taxation with Professional Practice',
      desc: 'Master GST Fundamentals with Tally Prime and gain 6-week hands-on industry internship experience with 3 live business client projects.',
      list: ['6-Week Industry Internship', '3 Live Business Client Projects', 'GST Portal Live E-Filing'],
      r: '4.9',
      rv: '3,200',
      n: '12,500+',
      h: '35 Hours',
      old: '₹9,999',
      p: '₹7,999',
      off: '20% OFF'
    },
    {
      id: 2,
      theme: 'green',
      label: 'Most Popular',
      badge: 'Most Popular',
      head: 'TallyPrime with GST Compliance',
      cert: 'Official Tally Certificate',
      title: 'Professional Accounting & GST',
      desc: 'Master Tally Prime with complete GST practical training. Learn from basics to advanced with real-world balance sheet finalization scenarios.',
      list: ['Complete GST Compliance & Returns', 'Audit & Balance Sheet Prep', 'Invoicing & Inventory Tracking'],
      r: '4.8',
      rv: '2,100',
      n: '10,800+',
      h: '25 Hours',
      old: '₹6,999',
      p: '₹4,999',
      off: '28% OFF'
    },
    {
      id: 3,
      theme: 'blue',
      label: 'Career Starter',
      badge: 'Career Starter',
      head: 'Tally Prime with GST Fundamentals',
      cert: 'Official Tally Certificate',
      title: 'Advanced Accounting & Tax Professional',
      desc: 'Learn Tally Prime from scratch with GST fundamentals. Perfect for beginners entering the accounting field with job-ready compliance skills.',
      list: ['Zero to Advanced Accounting', 'TDS, TCS & Payroll Management', 'Banking & Bank Reconciliation'],
      r: '4.7',
      rv: '1,850',
      n: '8,200+',
      h: '35 Hours',
      old: '₹7,999',
      p: '₹5,999',
      off: '25% OFF'
    }
  ];

  useEffect(() => {
    const tl = tlRef.current;
    const fill = fillRef.current;
    if (!tl || !fill) return;

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    let tick = false;

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

    const run = () => {
      tick = false;
      const items = itemsRef.current.filter(Boolean);
      if (items.length === 0) return;

      const y = window.innerHeight * 0.65;
      const r = tl.getBoundingClientRect();
      const maxFill = r.height;
      fill.style.height = Math.max(0, Math.min(y - r.top, maxFill)) + 'px';

      const isMobile = window.innerWidth < 820;

      items.forEach((it, idx) => {
        if (!it) return;
        const itTop = it.getBoundingClientRect().top + 40;
        if (rm.matches || itTop < y + window.innerHeight * 0.12) {
          it.classList.add('on');
        } else {
          it.classList.remove('on');
        }

        const label = labelsRef.current[idx];
        if (label) {
          if (isMobile) {
            label.style.transform = '';
          } else {
            const itRect = it.getBoundingClientRect();
            const labelHeight = label.offsetHeight;
            const itHeight = it.offsetHeight;
            const maxOffset = Math.max(0, itHeight - labelHeight);
            const targetOffset = window.innerHeight / 2 - itRect.top - labelHeight / 2;
            const offset = clamp(targetOffset, 0, maxOffset);
            label.style.transform = `translateY(${offset}px)`;
          }
        }
      });
    };

    const req = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(run);
      }
    };

    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    run();

    return () => {
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
    };
  }, []);

  return (
    <section className="courses-section" id="courses">
      <div className="courses-wrap">

        {/* Header Intro */}
        <header className="courses-intro">
          <span className="courses-tag">Popular Courses</span>
          <h1 className="courses-tl-h1">Build Skills for Your Career</h1>
          <p className="courses-tl-p">
            Master practical Tally Prime, GST compliance, and accounting fundamentals with live business scenarios.
          </p>
        </header>

        {/* Timeline */}
        <div className="courses-tl" id="tl" ref={tlRef}>
          <div className="courses-tl-fill" id="fill" ref={fillRef} />

          {courseList.map((course, idx) => (
            <div
              key={course.id}
              className={`courses-tl-item ${idx === 1 ? 'reverse' : ''}`}
              ref={(el) => (itemsRef.current[idx] = el)}
            >
              <i className="courses-tl-dot" />

              {/* Left Column: Sticky Label */}
              <div
                className="courses-tl-label"
                ref={(el) => (labelsRef.current[idx] = el)}
              >
                {course.label}
              </div>

              {/* Right Column: Course Card */}
              <div className="courses-tl-cardcol">
                <article className={`courses-tl-card t-${course.theme}`}>

                  {/* Card Header */}
                  <div className="courses-tl-hd">
                    <div className="courses-tl-hd-row">
                      <span className="courses-tl-pill">{course.badge}</span>
                      <span className="courses-tl-tepl">
                        TEPL<span>Tally</span>
                      </span>
                    </div>
                    <h3>{course.head}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="courses-tl-bd">
                    <span className="courses-tl-cert">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
                      </svg>
                      {course.cert}
                    </span>

                    <h4>{course.title}</h4>

                    <div className="courses-tl-by">
                      By <b>Finanzo</b>
                      <i>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12l5 5L20 6" />
                        </svg>
                      </i>
                    </div>

                    <p className="courses-tl-desc">{course.desc}</p>

                    <ul className="courses-tl-checks">
                      {course.list.map((item, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12l5 5L20 6" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="courses-tl-stats">
                      <span>
                        <span className="star">★</span>
                        <b>{course.r}</b>({course.rv})
                      </span>
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <circle cx="9" cy="8" r="3.5" />
                          <path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6M16 4.5a3.5 3.5 0 010 7M18 14.5c2.2.6 3.5 2.4 3.5 5.5" />
                        </svg>
                        {course.n}
                      </span>
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        {course.h}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="courses-tl-foot">
                      <div className="courses-tl-fee">
                        <small>FEE</small>
                        <div>
                          <s>{course.old}</s>
                          <strong>{course.p}</strong>
                          <em>{course.off}</em>
                        </div>
                      </div>

                      <a
                        className="courses-tl-go"
                        href={course.id === 1 ? '#course-accounting' : course.id === 2 ? '#course-gst' : '#course-tax'}
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectCourse(course.id);
                        }}
                      >
                        Explore
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </a>
                    </div>

                  </div>
                </article>
              </div>

            </div>
          ))}
        </div>

        {/* Complimentary 30-day Tally Software Access Ribbon (Gradient Banner UI) */}
        <div className="courses-tl-ribbon">
          <div className="courses-tl-ribbon-left">
            <div className="courses-tl-ribbon-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>

            <div className="courses-tl-ribbon-text">
              <span className="courses-tl-ribbon-title">
                Free Complimentary access to Tally Prime Software for 30 days
              </span>
              <span className="courses-tl-ribbon-desc">
                Included with all course enrollments for uninterrupted practice & assignment preparation
              </span>
            </div>
          </div>

          <a
            href="#courses"
            className="courses-tl-ribbon-btn"
            onClick={(e) => {
              e.preventDefault();
              onSelectCourse(1);
            }}
          >
            Claim Access
          </a>
        </div>

        {/* Closing CTA */}
        <section className="courses-tl-end">
          <h2>Start learning today</h2>
          <p>Pick the course that fits your goal and begin with an official Tally certificate.</p>
          <a
            href="#courses"
            onClick={(e) => {
              e.preventDefault();
              const firstItem = document.querySelector('.courses-tl-item');
              if (firstItem) {
                firstItem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Courses
          </a>
        </section>

      </div>
    </section>
  );
};

export default Courses;
