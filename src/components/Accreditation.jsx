import React from 'react';
import './Accreditation.css';
import useReveal from '../hooks/useReveal';

const Accreditation = () => {
  const containerRef = useReveal();
  const partners = [
    {
      name: 'Tally Education',
      logo: '/Trusted by Learners and Professionals/TallyLogo.png',
      alt: 'Tally Authorised Learning Partner'
    },
    {
      name: 'Startup India',
      logo: '/Trusted by Learners and Professionals/StartupIndia.png',
      alt: 'Startup India DPIIT Recognized'
    },
    {
      name: 'Startup TN',
      logo: '/Trusted by Learners and Professionals/StartupTN.png',
      alt: 'Startup TN Govt of Tamil Nadu'
    },
    {
      name: 'CIIC',
      logo: '/Trusted by Learners and Professionals/CIIC.png',
      alt: 'Crescent Innovation & Incubation Council'
    },
    {
      name: 'VELS University',
      logo: '/Trusted by Learners and Professionals/vels.jpg',
      alt: 'VELS Institute of Science, Technology & Advanced Studies'
    },
    {
      name: 'SRM Institute',
      logo: '/Trusted by Learners and Professionals/SRM%20Institute%20Emblem%20and%20Logo.png',
      alt: 'SRM Institute of Science and Technology',
      className: 'logo-reduced-srm'
    },
    {
      name: 'SAP',
      logo: '/Trusted by Learners and Professionals/SAP%20Blue%20Gradient%20Logo%20Mark.png',
      alt: 'SAP',
      className: 'logo-reduced-sap'
    }
  ];

  // Double the arrays for seamless infinite loops in both directions
  const marqueeList = [...partners, ...partners];
  const reversedPartners = [...partners].reverse();
  const marqueeListReverse = [...reversedPartners, ...reversedPartners];

  return (
    <section className="accreditation-white-section" id="accreditation" ref={containerRef}>
      <div className="accreditation-inner">

        {/* Clean Header on White */}
        <div className="accreditation-title-wrap">
          <h2 className="accreditation-heading reveal-up" style={{ '--delay': '0s' }}>
            Trusted by Learners and Professionals
          </h2>
          <p className="accreditation-subheading reveal-up" style={{ '--delay': '0.12s' }}>
            Proudly partnered with government initiatives, academic institutions, and industry leaders
          </p>
        </div>

        {/* Seamless Infinite 2-Row Carousel (Opposite Directions) */}
        <div className="logo-carousel-viewport reveal-zoom" style={{ '--delay': '0.24s' }}>
          {/* Gradient fade masks on sides */}
          <div className="carousel-fade-left" />
          <div className="carousel-fade-right" />

          <div className="logo-carousel-rows-container">
            {/* Row 1: Leftward Infinite Marquee */}
            <div className="logo-carousel-track">
              {marqueeList.map((partner, index) => (
                <div key={index} className="logo-carousel-item" title={partner.name}>
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className={`carousel-partner-logo ${partner.className || ''}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 2: Rightward Infinite Marquee (Opposite Direction) */}
            <div className="logo-carousel-track reverse-direction">
              {marqueeListReverse.map((partner, index) => (
                <div key={index} className="logo-carousel-item" title={partner.name}>
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className={`carousel-partner-logo ${partner.className || ''}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accreditation;
