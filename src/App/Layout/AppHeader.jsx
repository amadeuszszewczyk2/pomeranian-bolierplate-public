import React from 'react';
import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import profilowe from '../Images/profilowe_prywatne_kolo.png';

export function AppHeader() {
  return (
    <header>
      <Link to="/dashboard">
        <Logo />
      </Link>
      <div className="menu">
        <div className="user-profile">
          <Link to="/CV">
            <img src={profilowe} className="profilowe" alt="" />
          </Link>

          <div className="user">
            <p className="user-name">Amadeusz</p>
            <p className="user-position">Szewczyk</p>
          </div>
        </div>
      </div>
    </header>
  );
}
