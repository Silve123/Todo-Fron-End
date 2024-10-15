// File: src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { auth, provider, signInWithPopup, signOut } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  // Handle user sign-in
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);  // Set the logged-in user
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  // Handle user sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))  // Clear the user on sign-out
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };

  // Persist user authentication state on page refresh
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);  // User is signed in
      } else {
        setUser(null);  // User is signed out
      }
    });

    return () => unsubscribe();  // Clean up the listener on unmount
  }, []);

  return (
    <div className="App">
      {!user ? (
        <div className="auth-container">
          <h2>Welcome to the Todo App</h2>
          <button onClick={handleSignIn} className="auth-button">
            Sign in with Google
          </button>
        </div>
      ) : (
        <div>
          <header className="app-header">
            <h2>{`Hello, ${user.displayName}`}</h2>
            <button onClick={handleSignOut} className="auth-button sign-out">
              Sign Out
            </button>
          </header>
          <TodoList user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
