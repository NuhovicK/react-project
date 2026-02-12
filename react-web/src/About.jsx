import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h1>O Meni</h1>
        
        <div className="about-content">
          {/* Osnovne informacije */}
          <div className="about-card profile-card">
            <h2>Kadir Nuhovic</h2>
            <p className="job-title">Frontend Developer</p>
            <p className="profile-desc">
              Programer fokusiran na moderne web tehnologije. 
              Pogledajte moj rad i doprinose na GitHub-u.
            </p>
            <a href="https://github.com/KadirNuhovic" target="_blank" rel="noopener noreferrer" className="github-link-btn">
              Poseti moj GitHub
            </a>
          </div>
          
          {/* Iskustvo */}
          <div className="cv-section">
            <h3>Radno Iskustvo</h3>
            <div className="cv-item">
              <p>Kopiraj tekst svog CV-ja ovde u chat da bih popunio ovaj deo podacima.</p>
            </div>
          </div>

          {/* Veštine */}
          <div className="cv-section">
            <h3>Veštine</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS/HTML</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Frontend</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;