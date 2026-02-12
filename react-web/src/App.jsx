import React, { useState, useEffect } from 'react';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './SignAuth.css';
import SignAuth from './SignAuth';

function App() {
  // const [page, setPage] = useState('home');
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('loggedUser');
    return saved ? JSON.parse(saved) : null;
  });
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [{ username: 'admin', password: 'admin' }];
  });
  const [SignIn, setShowSignIn] = useState(false);
  const [SignUp, setShowSignUp] = useState(false);

  const handleSignIn = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser(username);
      localStorage.setItem('loggedUser', JSON.stringify(username));
      setShowSignIn(false);
      return true;
    }
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(username);
      localStorage.setItem('loggedUser', JSON.stringify(username));
      setShowSignIn(false);
      return true;
    }
    return false;
  };

  const handleSignUp = (username, password) => {
    if (users.find(u => u.username === username)) {
      return false;
    }
    const newUsers = [...users, { username, password }];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setShowSignUp(false);
    setShowSignIn(true);
    return true;
  };

  const handleGuestLogin = () => {
    setUser('Guest');
    localStorage.setItem('loggedUser', JSON.stringify('Guest'));
  };


  useEffect(() => {
    if (user === null) {
      localStorage.removeItem('loggedUser');
    }
  }, [user]);

  if (!user) {
    return (
      <SignAuth 
        onSignIn={(u, p) => !handleSignIn(u, p) ? 'Pogrešno korisničko ime ili lozinka!' : null}
        onSignUp={(u, p) => !handleSignUp(u, p) ? 'Korisničko ime već postoji!' : null}
        onGuest={handleGuestLogin}
      />
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
