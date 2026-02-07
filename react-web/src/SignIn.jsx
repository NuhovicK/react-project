import React, { useState } from 'react';
import './SignAuth.css';


const SignIn = ({ onSignIn, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const err = onSignIn(username, password);
    if (err) setError(err);
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="auth-error">{error}</div>}
        <button type="submit">Sign In</button>
        <button type="button" className="auth-btn" style={{marginTop:8}} onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default SignIn;
