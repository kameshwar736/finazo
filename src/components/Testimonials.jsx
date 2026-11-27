import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      headline: 'From college theory to confident accounting professional',
      quote:
        'If you want practical, industry-grade finance knowledge rather than just textbook memorization, Finanzo is the absolute gold standard.',
      name: 'Sivakumar M.',
      role: 'Senior Accountant at PKF India',
      initials: 'SM',
      avatarBg: '#e0e7ff',
      avatarColor: '#3730a3'
    },
    {
      id: 2,
      rating: 5,
      headline: 'Secured an Accountant role within 3 weeks of completion!',
      quote:
        'The hands-on practical Tally Prime and live GST portal reconciliation helped me pass the technical interview effortlessly. I am now handling company books with complete confidence.',
      name: 'Arun K.',
      role: 'Junior Accountant at Sundaram Finance',
      initials: 'AK',
      avatarBg: '#dbeafe',
      avatarColor: '#1e40af'
    },
    {
      id: 3,
      rating: 5,
      headline: 'Saving tons of time and making GST filing practical in real life',
      quote:
        'College taught me the definitions, but Finanzo taught me how to file GSTR-1, GSTR-3B, and reconcile ITC on actual government portal simulation without fear.',
      name: 'Caroline P.',
      role: 'Regional Tax Associate at Nestlé',
      initials: 'CP',
      avatarBg: '#fee2e2',
      avatarColor: '#991b1b'
    },
    {
      id: 4,
      rating: 5,
      headline: 'The internship credentials gave my resume an unfair advantage',
      quote:
        'Having an official Tally certification combined with a verified 6-week client ledger internship helped me stand out from hundreds of regular commerce applicants.',
      name: 'Priya R.',
      role: 'Audit Associate at BDO India',
      initials: 'PR',
      avatarBg: '#fef3c7',
      avatarColor: '#92400e'
    },
    {
      id: 5,
      rating: 5,
      headline: 'Zero accounting background to managing 50+ client GST filings',
      quote:
        'Coming from an engineering background, I was intimidated by debit/credit rules. Finanzo made Tally and taxation intuitive with zero jargon.',
      name: 'Karthik V.',
      role: 'Senior Tax Consultant at Ernst & Young',
      initials: 'KV',
      avatarBg: '#dcfce7',
      avatarColor: '#166534'
    }
  ];

  // Double list for a seamless, continuous infinite auto-carousel
  const infiniteCards = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* Centered Clean Header (No buttons!) */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            See why people like you choose Finanzo
          </h2>

          <p className="testimonials-subtitle">
            Join over 10,000+ ambitious commerce students, career switchers, and finance professionals who transformed their careers.
          </p>

          <div className="google-rating-summary">
            <div className="google-icon-circle">
              <svg viewBox="0 0 24 24" className="g-svg">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 22.3 12 23z"
                />
              </svg>
            </div>
            <div className="google-stars">★★★★★</div>
            <span className="google-score"><strong>4.9 / 5</strong> based on 830+ reviews</span>
          </div>
        </div>

        {/* CONTINUOUS AUTO-CAROUSEL VIEWPORT */}
        <div className="testimonials-auto-viewport">
          {/* Subtle edge fade masks for soft entry & exit */}
          <div className="auto-carousel-fade-left" />
          <div className="auto-carousel-fade-right" />

          <div className="testimonials-auto-track">
            {infiniteCards.map((item, index) => (
              <div key={index} className="testimonial-card-slide">
                <div className="testimonial-card">

                  {/* Card Top: Google Red Badge & Blue Stars */}
                  <div className="card-rating-row">
                    <div className="google-badge-circle">
                      <span className="g-letter">G</span>
                    </div>
                    <div className="card-blue-stars">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="card-review-headline">{item.headline}</h3>

                  {/* Quote */}
                  <p className="card-quote-text">"{item.quote}"</p>

                  {/* Author Footer */}
                  <div className="card-author-footer">
                    <div
                      className="author-avatar-pill"
                      style={{ backgroundColor: item.avatarBg, color: item.avatarColor }}
                    >
                      {item.initials}
                    </div>
                    <div className="author-details">
                      <h4 className="author-name">{item.name}</h4>
                      <span className="author-role">{item.role}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
