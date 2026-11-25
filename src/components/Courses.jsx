import React, { useState } from 'react';
import './Courses.css';

const Courses = ({ onSelectCourse = () => {} }) => {
  const [activeTab, setActiveTab] = useState('All');

  const courseList = [
    {
      id: 1,
      badge: 'INTERNSHIP INCLUDED',
      tagType: 'internship',
      bannerTag: 'Tally Prime with GST Fundamentals',
      title: 'Advanced Accounting & Taxation with Professional Practice',
      provider: 'Finanzo',
      certificate: 'Official Tally & Internship Certificates',
      desc: 'Master GST Fundamentals with Tally Prime and gain 6-week hands-on industry internship experience with 3 live business client projects.',
      highlights: ['6-Week Industry Internship', '3 Live Business Client Projects', 'GST Portal Live E-Filing'],
      rating: '4.9',
      reviewCount: '3,200',
      enrolled: '12,500+',
      duration: '35 Hours',
      level: 'Advanced',
      originalPrice: '₹9,999',
      discountPrice: '₹7,999',
      discountBadge: '20% OFF',
      gradientClass: 'gradient-blue-violet'
    },
    {
      id: 2,
      badge: 'MOST POPULAR',
      tagType: 'popular',
      bannerTag: 'TallyPrime with GST Compliance',
      title: 'Professional Accounting & GST',
      provider: 'Finanzo',
      certificate: 'Official Tally Certificate',
      desc: 'Master Tally Prime with complete GST practical training. Learn from basics to advanced with real-world balance sheet finalization scenarios.',
      highlights: ['Complete GST Compliance & Returns', 'Audit & Balance Sheet Prep', 'Invoicing & Inventory Tracking'],
      rating: '4.8',
      reviewCount: '2,100',
      enrolled: '10,800+',
      duration: '25 Hours',
      level: 'Intermediate',
      originalPrice: '₹6,999',
      discountPrice: '₹4,999',
      discountBadge: '28% OFF',
      gradientClass: 'gradient-emerald'
    },
    {
      id: 3,
      badge: 'CAREER STARTER',
      tagType: 'starter',
      bannerTag: 'Tally Prime with GST Fundamentals',
      title: 'Advanced Accounting & Tax Professional',
      provider: 'Finanzo',
      certificate: 'Official Tally Certificate',
      desc: 'Learn Tally Prime from scratch with GST fundamentals. Perfect for beginners entering the accounting field with job-ready compliance skills.',
      highlights: ['Zero to Advanced Accounting', 'TDS, TCS & Payroll Management', 'Banking & Bank Reconciliation'],
      rating: '4.7',
      reviewCount: '1,850',
      enrolled: '8,200+',
      duration: '35 Hours',
      level: 'Beginner to Pro',
      originalPrice: '₹7,999',
      discountPrice: '₹5,999',
      discountBadge: '25% OFF',
      gradientClass: 'gradient-indigo'
    }
  ];

  const categories = ['All', 'GST & Taxation', 'TallyPrime Mastery', 'Internship Programs'];

  return (
    <section className="courses-section" id="courses">
      <div className="courses-container">
        
        {/* Section Header */}
        <div className="courses-header">
          <h2 className="courses-title">
            Build Skills for Your Career
          </h2>

          <p className="courses-subtitle">
            Master practical Tally Prime, GST compliance, and accounting fundamentals with live business scenarios.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="courses-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="courses-grid">
          {courseList.map((course) => (
            <div key={course.id} className={`course-card animate-on-scroll stagger-${course.id}`}>
              
              {/* Top Banner Box with Visual Branding */}
              <div className={`course-card-top ${course.gradientClass}`}>
                <div className="course-banner-badges">
                  <span className={`course-badge ${course.tagType}`}>{course.badge}</span>
                  <div className="tally-tepl-brand">
                    <span className="tally-text-mark">TEPL</span>
                    <span className="tally-auth-pill">Tally</span>
                  </div>
                </div>

                <div className="course-banner-content">
                  <span className="banner-tagline">{course.bannerTag}</span>
                  <div className="banner-watermark-overlay" />
                </div>
              </div>

              {/* Course Card Body */}
              <div className="course-card-body">
                {/* Certificate Badge */}
                <div className="certificate-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 15l-2 5l2 -2l2 2l-2 -5" />
                    <circle cx="12" cy="9" r="6" />
                  </svg>
                  <span>{course.certificate}</span>
                </div>

                {/* Course Title */}
                <h3 className="course-name">{course.title}</h3>

                {/* Provider Byline */}
                <div className="course-provider">
                  <span>By</span>
                  <strong className="provider-brand">{course.provider}</strong>
                  <span className="verified-check">✓</span>
                </div>

                {/* Description */}
                <p className="course-desc">{course.desc}</p>

                {/* Key Highlights */}
                <div className="course-highlights-list">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <span className="check-bullet">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Meta Bar: Rating, Students, Duration */}
                <div className="course-stats-bar">
                  <div className="stat-meta rating">
                    <span className="star-icon">★</span>
                    <strong>{course.rating}</strong>
                    <span className="count">({course.reviewCount})</span>
                  </div>

                  <div className="stat-meta students">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>{course.enrolled}</span>
                  </div>

                  <div className="stat-meta duration">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Bottom Footer: Price & CTA */}
                <div className="course-card-footer">
                  <div className="price-group">
                    <span className="fee-label">FEE</span>
                    <div className="prices-row">
                      <span className="original-price">{course.originalPrice}</span>
                      <span className="discounted-price">{course.discountPrice}</span>
                      <span className="discount-tag">{course.discountBadge}</span>
                    </div>
                  </div>

                  <a
                    href={course.id === 1 ? '#course-accounting' : course.id === 2 ? '#course-gst' : '#course-tax'}
                    className="explore-course-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCourse(course.id);
                    }}
                  >
                    <span>Explore</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Feature Ribbon: Free Tally Prime Software Access */}
        <div className="tally-software-ribbon animate-scale-up">
          <div className="ribbon-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M20 7h-7L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="13" r="2" />
            </svg>
          </div>

          <div className="ribbon-text-group">
            <span className="ribbon-main-text">
              Free Complimentary access to Tally Prime Software for 30 days
            </span>
            <span className="ribbon-subtext">
              Included with all course enrollments for uninterrupted practice & assignment preparation
            </span>
          </div>

          <a href="#enroll" className="ribbon-cta-link">
            <span>Claim Access</span>
            <span className="arrow-sym">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Courses;
