import React from 'react';
import './Accreditation.css';

const Accreditation = () => {
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
    }
  ];

  // Double the array for a seamless infinite loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="accreditation-white-section" id="about">
      <div className="accreditation-inner">
        
        {/* Clean Header on White */}
        <div className="accreditation-title-wrap">
          <h2 className="accreditation-heading">
            Trusted by Learners and Professionals
          </h2>
          <p className="accreditation-subheading">
            Proudly partnered with government initiatives, academic institutions, and industry leaders
          </p>
        </div>

        {/* Seamless Infinite Carousel (No boxes, no cards!) */}
        <div className="logo-carousel-viewport">
          {/* Gradient fade masks on sides */}
          <div className="carousel-fade-left" />
          <div className="carousel-fade-right" />

          <div className="logo-carousel-track">
            {marqueeList.map((partner, index) => (
              <div key={index} className="logo-carousel-item" title={partner.name}>
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="carousel-partner-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accreditation;
