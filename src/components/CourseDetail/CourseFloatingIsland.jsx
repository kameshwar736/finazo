import React, { useState, useEffect } from 'react';

const CourseFloatingIsland = ({ price = '₹7,999', onEnroll = () => {} }) => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'curriculum', 'eligibility', 'reviews', 'faqs'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <aside className="course-floating-island" aria-label="Course quick navigation">
      <div className="island-inner-dock">
        <a
          href="#overview"
          onClick={scrollTo('overview')}
          className={`island-nav-link ${activeSection === 'overview' ? 'active' : ''}`}
        >
          Overview
        </a>

        <a
          href="#curriculum"
          onClick={scrollTo('curriculum')}
          className={`island-nav-link ${activeSection === 'curriculum' ? 'active' : ''}`}
        >
          Curriculum
        </a>

        {/* Highlighted Middle CTA in Vibrant Brand Blue */}
        <button
          type="button"
          onClick={onEnroll}
          className="island-enroll-btn"
          title={`Enroll Now for ${price}`}
        >
          <span className="enroll-text">Enroll • {price}</span>
        </button>

        <a
          href="#eligibility"
          onClick={scrollTo('eligibility')}
          className={`island-nav-link hide-mobile ${activeSection === 'eligibility' ? 'active' : ''}`}
        >
          Eligibility
        </a>

        <a
          href="#reviews"
          onClick={scrollTo('reviews')}
          className={`island-nav-link hide-mobile ${activeSection === 'reviews' ? 'active' : ''}`}
        >
          Reviews
        </a>

        <a
          href="#faqs"
          onClick={scrollTo('faqs')}
          className={`island-nav-link ${activeSection === 'faqs' ? 'active' : ''}`}
        >
          FAQs
        </a>
      </div>
    </aside>
  );
};

export default CourseFloatingIsland;
