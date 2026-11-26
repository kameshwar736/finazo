import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accreditation from './components/Accreditation';
import Courses from './components/Courses';
import WhyFinanzo from './components/WhyFinanzo';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About/About';
import CourseAccounting from './components/CourseDetail/CourseAccounting';
import CourseProfessionalGST from './components/CourseDetail/CourseProfessionalGST';
import CourseTaxProfessional from './components/CourseDetail/CourseTaxProfessional';
import CourseFloatingIsland from './components/CourseDetail/CourseFloatingIsland';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // Listen for hash changes to sync navigation state
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#about')) {
        setActivePage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#course-accounting') || hash.startsWith('#course-1')) {
        setActivePage('course-accounting');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#course-gst') || hash.startsWith('#course-professional-gst') || hash.startsWith('#course-2')) {
        setActivePage('course-gst');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#course-tax') || hash.startsWith('#course-tax-professional') || hash.startsWith('#course-3')) {
        setActivePage('course-tax');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '' || hash.startsWith('#courses')) {
        setActivePage('home');
        if (hash.startsWith('#courses')) {
          setTimeout(() => {
            const el = document.getElementById('courses');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    // Universal smooth scroll observer for reveal animations
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    const elementsToAnimate = document.querySelectorAll(
      '.animate-on-scroll, .animate-scale-up, .arch-content-section, .arch-stat-block, .strip-card, .arch-pillar-box, .offering-bento-card, .arch-why-card, .arch-drawer-item, .arch-elig-box, .arch-review-card, .about-section, .about-grid-card, .pillar-card, .course-card'
    );
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activePage]);

  const handleNavigateToCourse = (courseId = 1) => {
    if (courseId === 1) {
      window.location.hash = '#course-accounting';
      setActivePage('course-accounting');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (courseId === 2) {
      window.location.hash = '#course-gst';
      setActivePage('course-gst');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (courseId === 3) {
      window.location.hash = '#course-tax';
      setActivePage('course-tax');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    window.location.hash = '#home';
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="main-content">
        <div key={activePage} className="page-transition-wrapper">
          {activePage === 'about' ? (
            <About />
          ) : activePage === 'course-accounting' ? (
            <CourseAccounting onBackToHome={handleBackToHome} onSelectCourse={handleNavigateToCourse} />
          ) : activePage === 'course-gst' ? (
            <CourseProfessionalGST onBackToHome={handleBackToHome} onSelectCourse={handleNavigateToCourse} />
          ) : activePage === 'course-tax' ? (
            <CourseTaxProfessional onBackToHome={handleBackToHome} onSelectCourse={handleNavigateToCourse} />
          ) : (
            <>
              <Hero />
              <Accreditation />
              <Courses onSelectCourse={handleNavigateToCourse} />
              <WhyFinanzo />
              <Certifications />
              <Stats />
              <Testimonials />
              <CTA />
            </>
          )}
        </div>
      </main>

      {/* Floating Island Dock for Course Detail Pages */}
      {['course-tax'].includes(activePage) && (
        <CourseFloatingIsland
          price={
            activePage === 'course-gst'
              ? '₹4,999'
              : activePage === 'course-tax'
              ? '₹5,999'
              : '₹7,999'
          }
          onEnroll={() => {
            const coursePrice =
              activePage === 'course-gst'
                ? '₹4,999'
                : activePage === 'course-tax'
                ? '₹5,999'
                : '₹7,999';
            alert(`Redirecting to Finanzo Secure Checkout for ${coursePrice}...`);
          }}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
