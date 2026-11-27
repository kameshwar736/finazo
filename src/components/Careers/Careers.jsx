import React, { useState, useEffect } from 'react';
import './Careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalHeight)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim()) {
      setStatus({
        type: 'error',
        text: 'Please provide your first name and a valid email address.'
      });
      return;
    }

    const emailBody = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Resume: ${resumeFile ? resumeFile.name : 'Attached with email'}

Message:
${formData.message}`;

    const subject = encodeURIComponent(`Career Application: ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(emailBody);
    window.location.href = `mailto:contact@finanzo.co.in?subject=${subject}&body=${body}`;

    setStatus({
      type: 'success',
      text: 'Thank you! Your application is opening in your email client to send.'
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setResumeFile(null);
  };

  return (
    <div className="career-page">
      {/* Scroll indicator bar on left viewport */}
      <div className="career-prog" aria-hidden="true">
        <i style={{ transform: `scaleY(${scrollProgress})` }} />
      </div>

      {/* Hero Section */}
      <header className="career-hero">
        <span className="career-eyebrow">Careers at Finanzo</span>
        <h1 className="career-hero-title">Build your career with us</h1>
        <p className="career-hero-desc">
          Help learners master accounting, Tally Prime and GST, and grow your own career while you do it.
        </p>
      </header>

      {/* Main Application Card */}
      <section className="career-card" id="apply">
        <p className="career-eyebrow career-card-eyebrow">Fill out the form below</p>

        <div className="career-grid">
          {/* Form Left Panel */}
          <form className="career-panel" onSubmit={handleSubmit} noValidate>
            <div className="career-field">
              <label htmlFor="career-fn">Name</label>
              <div className="career-row">
                <input
                  id="career-fn"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                />
                <input
                  id="career-ln"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="career-field">
              <label htmlFor="career-em">Email</label>
              <input
                id="career-em"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="career-field">
              <label htmlFor="career-ph">Phone</label>
              <input
                id="career-ph"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                autoComplete="tel"
              />
            </div>

            <div className="career-field">
              <label htmlFor="career-resume">Upload your resume</label>
              <div className="career-upload-box">
                <input
                  id="career-resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="career-file-input"
                />
                <label htmlFor="career-resume" className="career-upload-label">
                  <svg className="career-upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  {resumeFile ? (
                    <div className="career-file-info">
                      <span className="career-file-name">{resumeFile.name}</span>
                      <span className="career-file-hint">Click to replace (PDF, DOC, DOCX up to 10MB)</span>
                    </div>
                  ) : (
                    <div className="career-file-info">
                      <span className="career-file-prompt">Choose file or drag &amp; drop here</span>
                      <span className="career-file-hint">Supported formats: PDF, DOC, DOCX (Max 10MB)</span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="career-field">
              <label htmlFor="career-ms">Message</label>
              <textarea
                id="career-ms"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your experience"
              />
            </div>

            <button className="career-submit-btn" type="submit">
              Submit
            </button>

            {status.text && (
              <p
                className={`career-status ${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.text}
              </p>
            )}
          </form>

          {/* Aside: Quick Links */}
          <aside className="career-aside">
            <h2 className="career-aside-title">Quick links</h2>
            <a className="career-role-btn" href="mailto:contact@finanzo.co.in">
              contact@finanzo.co.in <span>→</span>
            </a>
            <a className="career-role-btn" href="tel:+917358570881">
              +91 73585 70881 <span>→</span>
            </a>
            <a
              className="career-role-btn"
              href="https://wa.me/917358570881"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <span>→</span>
            </a>
          </aside>
        </div>
      </section>

      {/* Culture Banner Section */}
      <section className="career-banner">
        <span className="career-eyebrow">Life at Finanzo</span>
        <h2 className="career-banner-title">Grow with a team that teaches</h2>
        <p className="career-banner-desc">
          We help people build real accounting skills. Join us and learn alongside mentors who care about your progress.
        </p>
      </section>

      {/* Perks Cards */}
      <section className="career-perks">
        <div className="career-perk">
          <div className="career-ph ph-1">
            <img src="/career/learn.jpg" alt="Learn every day" className="career-ph-img" />
          </div>
          <h3 className="career-perk-title">Learn every day</h3>
          <p className="career-perk-desc">Pick up new skills with hands-on work.</p>
        </div>

        <div className="career-perk">
          <div className="career-ph ph-2">
            <img src="/career/work.avif" alt="Practical work" className="career-ph-img" />
          </div>
          <h3 className="career-perk-title">Practical work</h3>
          <p className="career-perk-desc">Real accounting, GST and Tally Prime tasks.</p>
        </div>

        <div className="career-perk">
          <div className="career-ph ph-3">
            <img src="/career/mentor.jpg" alt="Mentor support" className="career-ph-img" />
          </div>
          <h3 className="career-perk-title">Mentor support</h3>
          <p className="career-perk-desc">Guidance from experienced professionals.</p>
        </div>

        <div className="career-perk">
          <div className="career-ph ph-4">
            <img src="/career/grow.jpg" alt="Room to grow" className="career-ph-img" />
          </div>
          <h3 className="career-perk-title">Room to grow</h3>
          <p className="career-perk-desc">Build a career with a learning-first team.</p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
