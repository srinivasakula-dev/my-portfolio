import React, { useRef, useEffect } from 'react';

function Rightcard({ activeSection, setActiveSection, showNavButtons, isMobile, darkMode }) {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const scrollToSection = (section) => {
      const refs = {
        about: aboutRef,
        experience: experienceRef,
        projects: projectsRef,
        resume: resumeRef
      };
      
      if (refs[section] && refs[section].current) {
        refs[section].current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    scrollToSection(activeSection);
  }, [activeSection]);

  const projects = [
    {
      id: 1,
      name: "Json Ease",
      
      description: "A lightweight web application designed to simplify JSON formatting, validation, and visualization. Features include syntax highlighting, tree view, and real-time error detection — helping developers debug and format JSON effortlessly.",
      technologies: ["JavaScript", "Code Mirror", "Next.js", 'Tailwind CSS'],
      githubLink: "https://github.com/srinivasakula-dev",
      liveLink: "https://jsonease.com",
      icon: "images/icon_blue.svg"
    },
    {
      id: 2,
      name: "The Daily Tool Box",
      description: "A comprehensive utility platform offering everyday tools such as stopwatch, timer, calculators, converters, and productivity utilities — all in one place. Built with performance and simplicity in mind to deliver quick, accessible solutions for users. (Not Deployed Yet)",
      technologies: ["JavaScript", "React.js", 'Tailwind CSS', "Web Api's"],
      githubLink: "https://github.com/srinivasakula-dev",
      // liveLink: "https://example.com",
      icon: "images/network.svg"
    },
    // {
    //   id: 3,
    //   name: "Graphics Illustrations",
    //   description: "Graphical animations of algorithms and mathematical concepts using the Canvas API.",
    //   technologies: ["JavaScript", "Canvas API", "Algorithms"],
    //   githubLink: "https://github.com",
    //   liveLink: "https://example.com"
    // }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'images/Srinivas Resume.pdf';
    link.download = 'srinivas resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="right-section">
      {!isMobile && (
        <div className={`floating-nav ${showNavButtons ? 'visible' : ''}`}>
          <button 
            className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button 
            className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-btn ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveSection('resume')}
          >
            Resume
          </button>
        </div>
      )}

      <div className="content-container">
        <section ref={aboutRef} className="section" id="about">
          <div className="intro">
            <p className="greeting">Hi, my name is</p>
            <h1 className="name-large">Srinivas Akula.</h1>
            <h2 className="tagline">I design and develop impactful digital experiences.</h2>
            <p className="description">
              I'm a Software Engineer passionate about building intuitive, high-quality digital experiences and developer-focused tools. I specialize in creating reliable, user-friendly solutions that combine clean design with strong technical foundations.
            </p>
          </div>

          <div className="section-content">
            <div className="section-header">
              <span className="section-number">01.</span>
                <h2>About me</h2>
              <div className="section-line"></div>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Hi, I’m Srinivas Akula — a software developer passionate about building clean, interactive, and user-friendly web applications. I started my career outside software development but transitioned into tech after discovering my love for coding and problem-solving.
                  I specialize in <b>Vue.js, React.js, Next.js JavaScript, and HTML, CSS</b>, and I enjoy creating projects that simplify everyday tasks — from productivity tools to dynamic web utilities. I’m always learning, experimenting, and working toward building products that make technology simpler and more useful for everyone.
                </p>
                <p>
                  
                </p>
              </div>
              <div className="tech-section">
                <p>Here are a few technologies I have been working with recently:</p>
                <ul className="tech-list">
                  <li>
                    <span className="tech-icon">▹</span>
                    JavaScript language
                  </li>
                  <li>
                    <span className="tech-icon">▹</span>
                    TypeScript language
                  </li>
                  <li>
                    <span className="tech-icon">▹</span>
                    Vue.js
                  </li>
                  <li>
                    <span className="tech-icon">▹</span>
                    React.js
                  </li>
                  <li>
                    <span className="tech-icon">▹</span>
                    Next.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section ref={experienceRef} className="section" id="experience">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">02.</span>
              <h2>Where I have worked</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="company-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="experience-content">
                  <div className="company-header">
                    <h3 className="company-name">@Ideateq Digital Pvt. Ltd.</h3>
                    <span className="duration">Full time · 2023 - Present</span>
                  </div>
                   
                  <div className="role">
                    <h4 className="role-title">Software Engineer</h4>
                    <span className="role-duration">Dec 2023 - Present</span>
                    <ul className="role-description">
                      <li> Developed and optimized scalable frontend applications using modern JavaScriptframeworks, delivering responsive and high-performance user experiences.</li>
                      <li>Handled secure data exchange for sensitive employee and compliance information using token-based authentication.</li>
                      <li>Contributed to consistent code structure and modular integration strategies for easier maintenance and future scaling. </li>
                      <li>Contributed to product reliability and user trust by implementing authentication, authorization, and secure communication mechanisms.  </li>
                      <li>Translated Figma designs and UI wireframes into fully responsive, production ready web interfaces. </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="experience-item">
                <div className="company-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="experience-content">
                  <div className="company-header">
                    <h3 className="company-name">@Wipro</h3>
                    <span className="duration">Full time · 3 yrs 2 mos</span>
                  </div>
                  
                  <div className="role">
                    <h4 className="role-title">Senior Associate</h4>
                    <span className="role-duration">Mar 2019 - May 2022 · 3 yrs 2 mos</span>
                    <ul className="role-description">
                      <li> Review user added data on maps as per internal moderation policies. </li>
                      <li> Editing Maps data using available GIS, GPS, internal and external resources for better Navigation</li>
                      <li> Hands-on working experience on Road Segments, having good knowledge of Restrictions, Lane Mapping , Street names, addressing, POI’ Highway Signs and Priorities</li>
                      <li> Educate end team members how to add and edit data on maps as per policies.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="experience-item">
                <div className="company-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="experience-content">
                  <div className="company-header">
                    <h3 className="company-name">@GlobalLogic Technologies Private Limited</h3>
                    <span className="duration">Full time · 1 yr 1 mos</span>
                  </div>
                  
                  <div className="role">
                    <h4 className="role-title">Associate Analyst</h4>
                    <span className="role-duration">Nov 2017 - Dec 2018</span>
                    <ul className="role-description">
                      <li>Working as a Content Engineer for renowned clients(Google)</li>
                      <li>Develop technical documentation for all projects. Performance analysis on data for errors and maintaining daily & monthly reports. </li>
                      <li>Maintained production and quality of my work.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section ref={projectsRef} className="" id="projects">
          <div className="section-content">
            <div className="section-header">
              <span className="section-number">03.</span>
              <h2>Projects</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="projects-grid project-header">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">
                      
                      <img src={project.icon} alt="Your Image Description" width="24" height="24" />

                      {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3v18h18V3H3zm9 15h-2v-2h2v2zm0-4h-2V7h2v7z"/>
                      </svg> */}
                    </div>
                    <div className="project-links">
                      <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      {project.liveLink && <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
                        </svg>
                      </a>}
                    </div>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


       <section ref={resumeRef} className="section" id="resume">
          <div className="section-content">
            <div className="section-header">
              <h2>Resume</h2>
              <div className="section-line"></div>
            </div>
            <div className="resume-content">
              <div className="resume-preview">
                <div className="resume-image-container">
                  <img 
                    src="images/resume.png" 
                    alt="Srinivas Akula Resume" 
                    style={{ width: '100%', height: 'auto', maxWidth: '800px', maxHeight: '1200px' }} 
                  />
                </div>
                <button className="download-btn" onClick={downloadResume}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Rightcard;