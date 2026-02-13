import React from 'react';
import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <div className="home-container">
      {/* Hero Sekcija - Glavni uvod */}
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Digital World</span>
        </h1>
        <p className="hero-subtitle">
          Explore the latest technologies, connect with the community, and discover amazing stories in one place.
        </p>
        <div className="hero-buttons">
          <button className="cta-btn primary" onClick={() => onNavigate('community')}>
            Join Us
          </button>
          <button className="cta-btn secondary" onClick={() => onNavigate('about')}>
            Learn More
          </button>
        </div>
      </section>

      {/* Kartice sa prečicama */}
      <section className="features-section">
        <div className="feature-card" onClick={() => onNavigate('blog')}>
          <div className="card-icon">🚀</div>
          <h3>Latest Blog</h3>
          <p>Follow trends and read the latest news from the tech world.</p>
        </div>

        <div className="feature-card" onClick={() => onNavigate('community')}>
          <div className="card-icon">🤝</div>
          <h3>Our Community</h3>
          <p>Meet people with similar interests, share knowledge, and grow together.</p>
        </div>

        <div className="feature-card" onClick={() => onNavigate('contact')}>
          <div className="card-icon">💡</div>
          <h3>Have an Idea?</h3>
          <p>We are here to listen. Contact us for collaboration or questions.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;