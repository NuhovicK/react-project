import React, { useState } from 'react';
import './Header.css';


const Header = ({ user, onSignOut, onShowSignIn, onShowSignUp, onNavigate }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Pretraga: ${search}`);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="nav-link">Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="nav-link">O Meni</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="nav-link">Contact</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('community'); }} className="nav-link">Community</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} className="nav-link">Blog</a>
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
        {user ? (
          <>
            <span style={{color:'#fff', marginRight:12}}>Hi, {user}</span>
            <button className="auth-btn" onClick={onSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <button className="auth-btn" onClick={onShowSignIn}>Sign In</button>
            <button className="auth-btn signup" onClick={onShowSignUp}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
