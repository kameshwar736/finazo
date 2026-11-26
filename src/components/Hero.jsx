import React from 'react';
import './Hero.css';

const Hero = () => {
  const featurePills = [
    'Hands-on GST Filing',
    'TallyPrime Mastery',
    'Corporate Accounting'
  ];

  const trustPoints = [
    'Official certification & curriculum standard',
    'Govt & Industry Recognized Certificates',
    'Direct Placement Support'
  ];

  return (
    <section className="finanzo-hero" id="home">
      {/* Dynamic Perspective Divergence Rays Background */}
      <div className="hero-rays-container" aria-hidden="true">
        <svg
          className="hero-rays-svg"
          viewBox="0 0 1600 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="rayFade1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="rayFade2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.03" />
            </linearGradient>
            <radialGradient id="centerGlow" cx="50%" cy="38%" r="45%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#eff6ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center ambient glow */}
          <ellipse cx="800" cy="270" rx="480" ry="220" fill="url(#centerGlow)" />

          {/* Radiating perspective rays mimicking the reference */}
          {/* Top Left Quadrant Rays */}
          <line x1="710" y1="210" x2="120" y2="40" stroke="url(#rayFade1)" strokeWidth="1.2" strokeDasharray="12 18" />
          <line x1="730" y1="200" x2="260" y2="20" stroke="url(#rayFade1)" strokeWidth="1" strokeDasharray="8 14" />
          <line x1="760" y1="190" x2="420" y2="10" stroke="url(#rayFade2)" strokeWidth="1.2" />
          <line x1="785" y1="185" x2="620" y2="5" stroke="url(#rayFade1)" strokeWidth="0.8" strokeDasharray="14 16" />

          {/* Top Right Quadrant Rays */}
          <line x1="815" y1="185" x2="980" y2="5" stroke="url(#rayFade1)" strokeWidth="0.8" strokeDasharray="14 16" />
          <line x1="840" y1="190" x2="1180" y2="10" stroke="url(#rayFade2)" strokeWidth="1.2" />
          <line x1="870" y1="200" x2="1340" y2="20" stroke="url(#rayFade1)" strokeWidth="1" strokeDasharray="8 14" />
          <line x1="890" y1="210" x2="1480" y2="40" stroke="url(#rayFade1)" strokeWidth="1.2" strokeDasharray="12 18" />

          {/* Mid Left Quadrant Rays */}
          <line x1="680" y1="240" x2="40" y2="140" stroke="url(#rayFade1)" strokeWidth="1.4" strokeDasharray="16 20" />
          <line x1="660" y1="260" x2="20" y2="230" stroke="url(#rayFade2)" strokeWidth="1.1" />
          <line x1="650" y1="280" x2="10" y2="330" stroke="url(#rayFade1)" strokeWidth="1.3" strokeDasharray="10 14" />
          <line x1="660" y1="300" x2="30" y2="440" stroke="url(#rayFade1)" strokeWidth="1" strokeDasharray="18 22" />
          <line x1="680" y1="320" x2="80" y2="550" stroke="url(#rayFade2)" strokeWidth="1.2" />

          {/* Mid Right Quadrant Rays */}
          <line x1="920" y1="240" x2="1560" y2="140" stroke="url(#rayFade1)" strokeWidth="1.4" strokeDasharray="16 20" />
          <line x1="940" y1="260" x2="1580" y2="230" stroke="url(#rayFade2)" strokeWidth="1.1" />
          <line x1="950" y1="280" x2="1590" y2="330" stroke="url(#rayFade1)" strokeWidth="1.3" strokeDasharray="10 14" />
          <line x1="940" y1="300" x2="1570" y2="440" stroke="url(#rayFade1)" strokeWidth="18 22" />
          <line x1="920" y1="320" x2="1520" y2="550" stroke="url(#rayFade2)" strokeWidth="1.2" />

          {/* Bottom Left & Right Rays */}
          <line x1="710" y1="340" x2="200" y2="670" stroke="url(#rayFade1)" strokeWidth="1.1" strokeDasharray="14 18" />
          <line x1="750" y1="360" x2="380" y2="720" stroke="url(#rayFade2)" strokeWidth="0.9" />
          <line x1="850" y1="360" x2="1220" y2="720" stroke="url(#rayFade2)" strokeWidth="0.9" />
          <line x1="890" y1="340" x2="1400" y2="670" stroke="url(#rayFade1)" strokeWidth="1.1" strokeDasharray="14 18" />
        </svg>
      </div>

      <div className="finanzo-hero-container">
        <div className="finanzo-hero-content">

          {/* Eyebrow: Official Collaboration & Authorised Tally Partner */}
          <div className="hero-eyebrow">
            <span className="eyebrow-bracket">&lsaquo;</span>
            <span className="eyebrow-text">OFFICIAL COLLABORATION &bull; AUTHORISED TALLY LEARNING PARTNER</span>
            <span className="eyebrow-bracket">&rsaquo;</span>
          </div>

          {/* Main Headline: Finance Skills for a Brighter Future */}
          <h1 className="hero-main-title">
            Finance Skills <span className="hero-built-highlight">Built</span>
            <br />
            for a <span className="hero-accent-text">Brighter Future.</span>
          </h1>

          {/* Subheading / Description from Image */}
          <p className="hero-subtext-detail">
            Learn Tally, GST, Accounting, Banking and more through practical, industry-relevant courses.
          </p>

          {/* Feature Pills from Image */}
          <div className="hero-feature-pills">
            {featurePills.map((pill, i) => (
              <div key={i} className="hero-pill-item">
                <span className="hero-pill-check">✓</span>
                <span>{pill}</span>
              </div>
            ))}
          </div>

          {/* Dual Action CTAs */}
          <div className="hero-cta-buttons">
            <a href="#courses" className="hero-btn-placement">
              Explore Courses &rarr;
            </a>
            <a href="#about" className="hero-btn-callback">
              Verified Partner
            </a>
          </div>

          {/* Partner & Trust Credentials from Image */}
          <div className="hero-trust-row">
            {trustPoints.map((point, i) => (
              <React.Fragment key={i}>
                <div className="hero-trust-item">
                  <span className="trust-dot" />
                  <span>{point}</span>
                </div>
                {i < trustPoints.length - 1 && <span className="trust-sep" aria-hidden="true">&bull;</span>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
