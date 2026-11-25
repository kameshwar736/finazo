import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const dynamicWords = ['Career', 'Future', 'Success'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIdx((prev) => (prev + 1) % dynamicWords.length);
        setIsFading(false);
      }, 300);
    }, 2600);

    return () => clearInterval(timer);
  }, [dynamicWords.length]);

  return (
    <section className="finanzo-hero" id="home">
      <div className="finanzo-hero-glow" />

      <div className="finanzo-hero-container">
        {/* Left Side: Headline & Course Details */}
        <div className="finanzo-hero-content">
          <h1 className="finanzo-hero-heading">
            Finance Skills <br />
            for a Brighter{' '}
            <span className="dynamic-word-container">
              <span className={`dynamic-word-text ${isFading ? 'fading-out' : 'fading-in'}`}>
                {dynamicWords[currentWordIdx]}
              </span>
            </span>
          </h1>

          <p className="finanzo-hero-subtext">
            Learn Tally, GST, Accounting, Banking and more through practical, industry-relevant courses.
          </p>

          <div className="finanzo-hero-actions">
            <a href="#courses" className="finanzo-explore-btn">
              <span>Explore Courses</span>
              <span className="btn-arrow-box">
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
              </span>
            </a>
          </div>

          <div className="finanzo-feature-pills">
            <div className="feature-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Hands-on GST Filing</span>
            </div>
            <div className="feature-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>TallyPrime Mastery</span>
            </div>
            <div className="feature-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Corporate Accounting</span>
            </div>
          </div>
        </div>

        {/* Right Side: Tally Partnership Card */}
        <div className="finanzo-hero-partner-col">
          <div className="partner-card-glow" />
          
          <div className="partner-card">
            <div className="partner-card-header">
              <img
                src="/LOGO.png"
                alt="Finanzo Logo"
                className="partner-finanzo-logo"
              />
              <span className="partner-verified-tag">Verified Partner</span>
            </div>

            <div className="partner-card-body">
              <span className="partner-eyebrow">OFFICIAL COLLABORATION</span>
              <h2 className="partner-heading">
                We are proud <br />
                Partner of
              </h2>

              <div className="tally-box">
                <div className="tally-logo-wrap">
                  <span className="tally-logo-text">Tally</span>
                </div>
                <div className="tally-details">
                  <span className="tally-title">AUTHORISED LEARNING PARTNER</span>
                  <span className="tally-desc">Official certification & curriculum standard</span>
                </div>
              </div>
            </div>

            <div className="partner-card-footer">
              <div className="footer-bullet">
                <span className="bullet-dot" />
                <span>Govt & Industry Recognized Certificates</span>
              </div>
              <div className="footer-bullet">
                <span className="bullet-dot" />
                <span>Direct Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
