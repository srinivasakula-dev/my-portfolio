import React, { useState, useEffect } from 'react';

function Leftcard({ activeSection, setActiveSection, darkMode, setDarkMode, isMobile }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setShowMobileNav(false);
    }
  }, [isMobile]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (isMobile) {
      setShowMobileNav(false);
    }
  };

  return (
    <div className="left-section">
      <div className="theme-toggle">
        {/* <button 
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM6.34 5.16l-1.42 1.42c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.42-1.42c.39-.39.39-1.02 0-1.41-.38-.39-1.02-.39-1.41 0zm0 13.66l-1.42-1.42c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41zM19.08 4.92c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.42-1.42zm0 13.66c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.42-1.42z"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
            </svg>
          )}
        </button> */}
      </div>

      <div className="portfolio">
        <img src="/images/IMG_20211212_120848.jpg" alt="Srinivas Akula" className="profile-pic"/>
        <h1 className="name">Srinivas Akula</h1>
        <p className="bio">
          {/* Software Engineer at Ideateq Digital Pvt. Ltd. working in Hyderabad, Telangana. */}
          Software Engineer at Ideateq Digital Pvt. Ltd. Hyderabad, Telangana.
        </p>
        
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/akula-srinivas/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/srinivasakula-dev" className="contact-link" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="mailto:srinivasakula.dev@gmail.com" className="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email
          </a>
        </div>
        
        {false && (
          <button 
            className="mobile-nav-toggle"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? 'Close' : 'Menu'}
          </button>
        )}
        
        <div className={`mobile-nav ${showMobileNav ? 'show' : ''}`}>
          <button 
            className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleSectionClick('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleSectionClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-btn ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => handleSectionClick('resume')}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leftcard;