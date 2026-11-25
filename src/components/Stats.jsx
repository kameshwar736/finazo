import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

// Animated Counter component that counts up smoothly from 0 to target
const AnimatedNumber = ({ target, unit, useComma, startAnimation }) => {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTimestamp = null;
    const duration = 2200; // 2.2 seconds smooth ease-out

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Cubic ease-out curve for a natural deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easeOut * target);

      setCurrentVal(currentNumber);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentVal(target);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [startAnimation, target]);

  const formattedNumber = useComma ? currentVal.toLocaleString() : currentVal;

  return (
    <span>
      {formattedNumber}
      {unit || ''}
    </span>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const allStats = [
    { target: 10, unit: 'K', suffix: '+', label: 'TRUSTED STUDENTS' },
    { target: 2800, useComma: true, suffix: '+', label: 'CERTIFICATIONS' },
    { target: 729, suffix: '+', label: 'PLACED CANDIDATES' },
    { target: 830, suffix: '+', label: '5-STAR REVIEWS' },
    { target: 5, suffix: '+', label: 'YEARS EXPERIENCE' },
    { target: 140, suffix: '+', label: 'INDUSTRY MENTORS' },
    { target: 25, suffix: '+', label: 'PROJECT CHALLENGES' },
    { target: 4, suffix: '+', label: 'LEARNING HUBS' }
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        
        {/* Section Header */}
        <div className="stats-header">
          <h2 className="stats-heading">
            Milestones of Educational Excellence
          </h2>
          <p className="stats-subtext">
            Empowering ambitious learners into verified accounting & finance professionals through real-world mentorship.
          </p>
        </div>

        {/* Uniform Clean Stats Grid with Count-up Transitions */}
        <div className="stats-uniform-grid">
          {allStats.map((item, index) => (
            <div
              key={index}
              className={`stat-uniform-item animate-on-scroll stagger-${(index % 4) + 1}`}
            >
              <div className="stat-figure-wrap">
                <span className="stat-huge-number">
                  <AnimatedNumber
                    target={item.target}
                    unit={item.unit}
                    useComma={item.useComma}
                    startAnimation={isInView}
                  />
                </span>
                <span className="stat-plus-sym">{item.suffix}</span>
              </div>
              <span className="stat-clean-label">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
