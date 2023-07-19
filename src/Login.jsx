import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginLogo from './LoginLogo.svg';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        navigate('/dashboard');
      } else {
        setIsLoading(false);
        alert('Błędna nazwa użytkownika lub hasło!');
      }
    }, 3000);
  };

  return (
    <>
      <img className="login-logo" src={LoginLogo} alt="Obrazek logowania" />

      <div className="login-container">
        <h2 className="login-heading">Logowanie</h2>
        <div>
          <label className="login-label">Nazwa użytkownika:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div>
          <label className="login-label">Hasło:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button onClick={handleLogin} className="login-button">
          Zaloguj się
        </button>
      </div>

      <div className={`loading-container ${isLoading ? 'show' : ''}`}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={`loading-bar delay-${index + 1}`}></div>
        ))}
      </div>
    </>
  );
};









