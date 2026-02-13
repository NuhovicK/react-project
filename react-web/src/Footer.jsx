import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate, user, t }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t.aboutUs}</h3>
          <p>{t.aboutUsDesc}</p>
        </div>
        
        <div className="footer-section">
          <h3>{t.quickLinks}</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>{t.home}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>{t.about}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>{t.contact}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}>{t.blog}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('community'); }}>{t.community}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Emina Redžepagića 47A, Novi Pazar</p>
          <p>📞 +381 65 500 1615</p>
          <p>✉️ kadirnuhovic8@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>{t.followUs}</h3>
          <div className="social-links">
            <a href="https://github.com/KadirNuhovic" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kadir Nuhovic. {t.rightsReserved}</p>
        {user === 'admin' && (
          <div className="admin-link-container">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('admin'); }} className="admin-footer-link">
              {t.adminRoom}
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
