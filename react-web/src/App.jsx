import React, { useState } from 'react';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './SignAuth.css';

function App() {
  // const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([{ username: 'admin', password: 'admin' }]);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser(username);
      setShowSignIn(false);
      return true;
    }
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(username);
      setShowSignIn(false);
      return true;
    }
    return false;
  };

  const handleSignUp = (username, password) => {
    if (users.find(u => u.username === username)) {
      return false;
    }
    setUsers([...users, { username, password }]);
    setShowSignUp(false);
    setShowSignIn(true);
    return true;
  };


  if (!user) {
    return (
      <div className="modern-bg">
        {(!showSignIn && !showSignUp) && (
          <div className="modern-center">
            <div className="modern-auth-btns">
              <button className="auth-btn" onClick={() => { setShowSignIn(true); setShowSignUp(false); }}>Sign In</button>
              <button className="auth-btn signup" onClick={() => { setShowSignUp(true); setShowSignIn(false); }}>Sign Up</button>
            </div>
          </div>
        )}
        {showSignIn && (
          <SignIn onSignIn={(username, password) => {
            if (!handleSignIn(username, password)) {
              return 'Pogrešno korisničko ime ili lozinka!';
            }
            return null;
          }} onClose={() => setShowSignIn(false)} />
        )}
        {showSignUp && (
          <SignUp onSignUp={(username, password) => {
            if (!handleSignUp(username, password)) {
              return 'Korisničko ime već postoji!';
            }
            return null;
          }} onClose={() => setShowSignUp(false)} />
        )}
      </div>
    );
  }
  return (
    <div className="modern-bg">
      <Header
        user={user}
        onSignOut={() => setUser(null)}
        onShowSignIn={() => { setShowSignIn(true); setShowSignUp(false); }}
        onShowSignUp={() => { setShowSignUp(true); setShowSignIn(false); }}
      />
      <div className="modern-content">
        <h1>Welcome, {user}!</h1>
      </div>
    </div>
  );
}

export default App;
