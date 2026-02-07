import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [addressOpen, setAddressOpen] = useState(false);

  const openMap = () => {
    window.open('/map', '_blank');
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="dropdown">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-btn">Startup Menu ▼</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="/">Home</a>
            </div>
          )}
        </div>
        <div className="contact-menu">
          <span
            className="contact-btn"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >Contact</span>
          {contactOpen && (
            <div className="contact-dropdown">
              <div
                className="contact-item"
                onMouseEnter={() => setEmailOpen(true)}
                onMouseLeave={() => setEmailOpen(false)}
              >
                Phone
                {emailOpen && <div className="contact-info">+123 456 789</div>}
              </div>
              <div
                className="contact-item"
                onMouseEnter={() => setAddressOpen(true)}
                onMouseLeave={() => setAddressOpen(false)}
              >
                Email
                {addressOpen && <div className="contact-info">mail@example.com</div>}
              </div>
              <div className="contact-item">Address<div className="contact-info">Random Address 123, City</div></div>
            </div>
          )}
        </div>
        <button className="map-btn" onClick={openMap}>Open Map</button>
      </div>
    </header>
  );
};

export default Header;
