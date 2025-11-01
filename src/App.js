import React, { useState, useEffect } from 'react';
import Leftcard from './views/leftcard/app';
import Rightcard from './views/rightcard/app';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavButtons(scrollTop > 100 && !isMobile);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='main-container'>
        <Leftcard 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isMobile={isMobile}
        />
        <Rightcard 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          showNavButtons={showNavButtons}
          isMobile={isMobile}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;