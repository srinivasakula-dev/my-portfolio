import React, { useState, useEffect } from 'react';
import { FaJsSquare, FaReact, FaVuejs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
      <div className="theme-toggle"></div>

      <div className="portfolio">
        <img src="/images/IMG_20211212_120848.jpg" alt="Srinivas Akula" className="profile-pic"/>
        <h1 className="name">Srinivas Akula</h1>
        <p className="bio">
          Software Engineer at Ideateq Digital Pvt. Ltd. Hyderabad, Telangana.
        </p>
        
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/akula-srinivas/" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/srinivasakula-dev" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:srinivasakula.dev@gmail.com" className="contact-link">
            Email
          </a>
        </div>

        <div className="skills-section">
          <h2 className="skills-heading">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item"><FaJsSquare className="skill-icon js" /> JavaScript</div>
            <div className="skill-item"><FaReact className="skill-icon react" /> React.js</div>
            <div className="skill-item"><FaVuejs className="skill-icon vue" /> Vue.js</div>
            <div className="skill-item"><SiNextdotjs className="skill-icon next" /> Next.js</div>
            <div className="skill-item"><FaPython className="skill-icon python" /> Python</div>
            <div className="skill-item"><FaDatabase className="skill-icon sql" /> SQL</div>
            <div className="skill-item"><FaHtml5 className="skill-icon html" /> HTML</div>
            <div className="skill-item"><FaCss3Alt className="skill-icon css" /> CSS</div>
            <div className="skill-item"><SiTailwindcss className="skill-icon tailwind" /> Tailwind CSS</div>
            <div className="skill-item"><FaBootstrap className="skill-icon bootstrap" /> Bootstrap</div>
          </div>
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
