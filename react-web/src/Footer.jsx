import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>O Nama</h3>
          <p>Moderna platforma za sve vaše tehnološke potrebe. Kvalitet, pouzdanost i inovacija na jednom mestu.</p>
        </div>
        
        <div className="footer-section">
          <h3>Brzi Linkovi</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Početna</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Kontakt</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}>Blog</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('community'); }}>Zajednica</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>📍 Emina Redžepagića 47A, Novi Pazar</p>
          <p>📞 +381 65 500 1615</p>
          <p>✉️ kadirnuhovic8@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Pratite nas</h3>
          <div className="social-links">
            <a href="https://github.com/KadirNuhovic" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kadir Nuhovic. Sva prava zadržana.</p>
      </div>
    </footer>
  );
};

export default Footer;
