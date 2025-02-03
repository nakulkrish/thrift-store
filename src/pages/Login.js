import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setAuth({ loggedIn: true, username: result.user.username });
        navigate('/');
      } else {
        setError(result.message || 'Invalid username or password');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="bottom-link">
            Don't have an account? <button onClick={handleRegisterClick} className="link-button">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;