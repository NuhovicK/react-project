import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Pretraga: ${search}`);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="nav-link">Home</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#community" className="nav-link">Community</a>
        <a href="#blog" className="nav-link">Blog</a>
      </div>
      <div className="header-center">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-bar">
            <span className="search-icon" role="img" aria-label="search">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="header-right">
        <a href="/signin" className="auth-btn">Sign In</a>
        <a href="/signup" className="auth-btn signup">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
