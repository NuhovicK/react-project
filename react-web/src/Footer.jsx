import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>O Web Sajtu</h2>
          <p>Ova web aplikacija je moderna platforma za online prodaju i informisanje, kreirana radi lakšeg pristupa korisnicima.</p>
        </div>
        <div className="footer-section company">
          <h2>Random Firma</h2>
          <p>Naziv: NovaTech Solutions<br/>Adresa: Ulica 1, Novi Pazar<br/>Telefon: +381 20 123 456<br/>Email: info@novatech.rs</p>
        </div>
        <div className="footer-section faq">
          <h2>Pitanja</h2>
          <ul>
            <li>Kako se registrujem?</li>
            <li>Kako mogu da kontaktiram podršku?</li>
            <li>Da li je kupovina sigurna?</li>
          </ul>
        </div>
        <div className="footer-section map-link">
          <a href="#map-section" className="map-btn">Mapa Novog Pazara</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 NovaTech Solutions | Sva prava zadržana
      </div>
    </footer>
  );
};

export default Footer;
