import React, { useState } from 'react';
import './Header.css';


const Header = ({ user, onSignOut, onShowSignIn, onShowSignUp, onNavigate }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const term = search.toLowerCase().trim();
    const routes = {
      'home': 'home',
      'about': 'about',
      'about me': 'about',
      'contact': 'contact',
      'community': 'community',
      'blog': 'blog'
    };

    if (routes[term]) {
      onNavigate(routes[term]);
      setSearch('');
    } else {
      alert(`Search: ${search}`);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="nav-link">Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="nav-link">About Me</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="nav-link">Contact</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('community'); }} className="nav-link">Community</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} className="nav-link">Blog</a>
      </div>
      <div className="header-center">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-bar">
            <button type="submit" className="search-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
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
