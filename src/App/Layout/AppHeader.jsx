import React from 'react';
import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import profilowe from '../Images/profilowe_prywatne_kolo.png';
import menuIcon from './menu.svg';
import logoMobile from './logoMobile.svg';

export function AppHeader() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header>
      {isMobile && <div className="mobile-text">Pomeranian start IT</div>}
      {isMobile && (
        <Link to="/dashboard" className="menu-icon-link">
          <img src={menuIcon} alt="Menu" className="menu-icon-img" />
        </Link>
      )}
      <Link to="/dashboard" className="headerlogo">
        {isMobile ? (
          <img src={logoMobile} alt="Mobile Logo" className="mobilelogo" />
        ) : (
          <Logo />
        )}
      </Link>
      <div className="menu">
        <div className="user-profile">
          <Link to="/CV">
            <img src={profilowe} className="profilowe" alt="Profile" />
          </Link>
          {!isMobile && (
            <div className="user">
              <p className="user-name">Amadeusz</p>
              <p className="user-position">Szewczyk</p>
            </div>
          )}
        </div>
        {!isMobile && (
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
