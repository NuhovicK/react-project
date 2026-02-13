import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate, user }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Modern platform for all your tech needs. Quality, reliability, and innovation in one place.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Me</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}>Blog</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('community'); }}>Community</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Emina Redžepagića 47A, Novi Pazar</p>
          <p>📞 +381 65 500 1615</p>
          <p>✉️ kadirnuhovic8@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://github.com/KadirNuhovic" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kadir Nuhovic. All rights reserved.</p>
        {user === 'admin' && (
          <div className="admin-link-container">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('admin'); }} className="admin-footer-link">
              Admin Room 🛡️
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
