import React from 'react';
import './Home.css';

const Home = ({ onNavigate, t }) => {
  return (
    <div className="home-container">
      {/* Hero Sekcija - Glavni uvod */}
      <section className="hero-section">
        <h1 className="hero-title">
          {t.welcome} <span className="highlight">{t.digitalWorld}</span>
        </h1>
        <p className="hero-subtitle">
          {t.heroSubtitle}
        </p>
        <div className="hero-buttons">
          <button className="cta-btn primary" onClick={() => onNavigate('community')}>
            {t.joinUs}
          </button>
          <button className="cta-btn secondary" onClick={() => onNavigate('about')}>
            {t.learnMore}
          </button>
        </div>
      </section>

      {/* Kartice sa prečicama */}
      <section className="features-section">
        <div className="feature-card" onClick={() => onNavigate('blog')}>
          <div className="card-icon">🚀</div>
          <h3>{t.latestBlog}</h3>
          <p>{t.latestBlogDesc}</p>
        </div>

        <div className="feature-card" onClick={() => onNavigate('community')}>
          <div className="card-icon">🤝</div>
          <h3>{t.ourCommunity}</h3>
          <p>{t.ourCommunityDesc}</p>
        </div>

        <div className="feature-card" onClick={() => onNavigate('contact')}>
          <div className="card-icon">💡</div>
          <h3>{t.haveIdea}</h3>
          <p>{t.haveIdeaDesc}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;