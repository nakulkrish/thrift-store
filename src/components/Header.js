import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Header.css';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header>
      <div className="logo">
        <h1>Thrift Treasure</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
      </nav>
      <nav className="auth-section">
        {auth.loggedIn ? (
          <>
            <span className="username">Welcome, {auth.username}</span>
            <button className="logout-button" onClick={logout}>Logout</button>
          </>
        ) : (
          location.pathname === '/' && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;