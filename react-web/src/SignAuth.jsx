import React, { useState } from 'react';
import './SignAuth.css';

const SignAuth = ({ onSignIn, onSignUp, onGuest }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      const err = onSignIn(username, password);
      if (err) setError(err);
    } else {
      if (password !== confirm) {
        setError('Lozinke se ne poklapaju!');
        return;
      }
      const err = onSignUp(username, password);
      if (err) setError(err);
    }
  };

  return (
    <div className="modern-bg modern-center">
      <div className="auth-container">
        
        {/* Dugmad za izbor (Toggle) */}
        <div className="modern-auth-btns">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(true); setError(''); }}
          >
            Prijavi se
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(false); setError(''); }}
          >
            Registruj se
          </button>
        </div>

        <div className="auth-form-wrapper fade-in" key={isLogin ? 'login' : 'register'}>
          <h2>{isLogin ? 'Dobrodošli nazad!' : 'Pridruži nam se'}</h2>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Korisničko ime" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="password" placeholder="Lozinka" value={password} onChange={e => setPassword(e.target.value)} required />
            {!isLogin && <input type="password" placeholder="Potvrdi lozinku" value={confirm} onChange={e => setConfirm(e.target.value)} required />}
            
            {error && <div className="auth-error">{error}</div>}
            <button type="submit">{isLogin ? 'Prijavi se' : 'Registruj se'}</button>
          </form>

          <div className="guest-section">
            <div className="divider">
              <span>ili</span>
            </div>
            <button type="button" className="guest-btn" onClick={onGuest}>
              Nastavi kao gost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignAuth;