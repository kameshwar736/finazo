import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activePage = 'home', setActivePage = () => { } }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '#home', page: 'home' },
    {
      name: 'About',
      href: '#about',
      page: 'about',
      hasDropdown: true,
      subItems: [
        { title: 'Who We Are', desc: 'Our mission and founding story' },
        { title: 'Why Choose Finanzo', desc: 'Practical lab & internship advantages' },
        { title: 'Team & Mentors', desc: 'Learn from practicing CAs & ERP experts' },
        { title: 'Our Partners', desc: 'Official Authorised Tally collaboration' }
      ]
    },
    {
      name: 'Courses',
      href: '#courses',
      page: 'home',
      hasDropdown: true,
      subItems: [
        { title: 'Advanced Accounting & Taxation', desc: 'Includes 6-week industry internship', page: 'course-accounting', href: '#course-accounting' },
        { title: 'Professional Accounting & GST', desc: 'Full practical return filing mastery', page: 'course-gst', href: '#course-gst' },
        { title: 'TallyPrime Certification', desc: 'Zero to pro compliance training', page: 'course-tax', href: '#course-tax' }
      ]
    },
    {
      name: 'Webinar',
      href: '#webinar',
      page: 'home',
      isLive: true,
      hasDropdown: true,
      subItems: [
        { title: 'Live Masterclasses', desc: 'Interactive weekend workshops' },
        { title: 'Upcoming Webinars', desc: 'Free sessions with financial analysts' }
      ]
    },
    { name: 'Career', href: '#career', page: 'home' },
    { name: 'Contact', href: '#contact', page: 'contact' },
  ];

  const accountSubItems = [
    { title: 'My Dashboard', desc: 'Continue your active courses' },
    { title: 'Certificates', desc: 'View and share verified credentials' },
    { title: 'Account Settings', desc: 'Manage your profile and subscriptions' }
  ];

  const handleNavClick = (item) => {
    if (item.page) {
      setActivePage(item.page);
      if (item.page === 'about' || item.page === 'contact' || item.name === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="prime-navbar-wrapper">
      <div className="prime-navbar-bar">
        {/* Brand Block - Solid Electric Blue Block on Far Left */}
        <a
          href="#home"
          className="prime-brand-block"
          title="Finanzo Home"
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/LOGO.png"
            alt="Finanzo Logo"
            className="prime-brand-logo"
          />
        </a>

        {/* Center Navigation Links */}
        <nav className="prime-nav-links">
          {navItems.map((item) => {
            const isItemActive = item.name.toLowerCase() === activePage.toLowerCase();

            return (
              <div
                key={item.name}
                className={`prime-nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={item.href}
                  className={`prime-link ${isItemActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  <span>{item.name}</span>
                  {item.isLive && <span className="live-pill">Live</span>}
                  {item.hasDropdown && (
                    <svg
                      className={`chevron-icon ${activeDropdown === item.name ? 'rotate' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="prime-dropdown-menu">
                    {item.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href || item.href}
                        className="prime-dropdown-item"
                        onClick={(e) => {
                          if (sub.page) {
                            e.preventDefault();
                            setActivePage(sub.page);
                            window.location.hash = sub.href;
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            handleNavClick(item);
                          }
                          setActiveDropdown(null);
                        }}
                      >
                        <span className="dropdown-title">{sub.title}</span>
                        <span className="dropdown-desc">{sub.desc}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Action Area */}
        <div className="prime-nav-actions">
          {/* Account placed to the left of Login */}
          <div
            className="prime-account-wrapper"
            onMouseEnter={() => handleDropdownEnter('Account')}
            onMouseLeave={handleDropdownLeave}
          >
            <a href="#account" className="prime-account-btn">
              <svg
                className="prime-account-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Account</span>
              <svg
                className={`chevron-icon ${activeDropdown === 'Account' ? 'rotate' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>

            {/* Account Dropdown */}
            {activeDropdown === 'Account' && (
              <div className="prime-dropdown-menu prime-account-dropdown">
                {accountSubItems.map((sub, idx) => (
                  <a
                    key={idx}
                    href={`#account-${idx}`}
                    className="prime-dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="dropdown-title">{sub.title}</span>
                    <span className="dropdown-desc">{sub.desc}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature Login Button matching template */}
          <a href="#login" className="prime-cta-btn">
            <span className="prime-cta-text">Login</span>
            <span className="prime-cta-arrow-box">
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

          {/* Mobile Menu Hamburger */}
          <button
            className={`prime-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`prime-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="prime-mobile-drawer-inner">
          {navItems.map((item) => (
            <div key={item.name} className="prime-mobile-item">
              <a
                href={item.href}
                className="prime-mobile-link"
                onClick={() => {
                  handleNavClick(item);
                  setMobileMenuOpen(false);
                }}
              >
                <span>{item.name}</span>
                {item.isLive && <span className="live-pill">Live</span>}
              </a>
            </div>
          ))}

          {/* Mobile Account Link */}
          <div className="prime-mobile-item">
            <a
              href="#account"
              className="prime-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Account / Profile</span>
            </a>
          </div>

          <div className="prime-mobile-action">
            <a
              href="#login"
              className="prime-mobile-login-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Login to Finanzo</span>
              <span className="prime-cta-arrow-box">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
