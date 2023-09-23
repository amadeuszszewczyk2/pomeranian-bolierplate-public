import React from 'react';
import './styles.css';
import signup from './signup.png';

export function Exercise1() {
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="dm-App">
      <div className="dm-left-side">
        <img src={signup} alt="" className="dm-img" />
      </div>
      <div className="dm-right-side">
        {isMobileDevice ? (
          <div className="dm-mobile-message">
            <p>This program is not available on mobile devices.</p>
          </div>
        ) : (
          <>
            <div className="dm-description">
              <p>Random online service.</p>
              <p>Sign up now to get started.</p>
            </div>

            <form action="#" className="dm-form">
              <div className="dm-inputs">
                <label htmlFor="first-name" className="dm-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="dm-input"
                  required
                />
              </div>
              <div className="dm-inputs">
                <label htmlFor="last-name" className="dm-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="dm-input"
                  required
                />
              </div>

              <div className="dm-inputs">
                <label htmlFor="email" className="dm-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="dm-input"
                  required
                />
              </div>

              <div className="dm-inputs">
                <label htmlFor="phoneNumber" className="dm-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="dm-input"
                />
              </div>

              <div className="dm-inputs">
                <label htmlFor="password" className="dm-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="dm-input"
                  required
                />
              </div>

              <div className="dm-inputs">
                <label htmlFor="confirmPassword" className="dm-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="dm-input"
                  required
                />
              </div>

              <div>
                <button type="submit" className="dm-button">
                  Create Account
                </button>
              </div>
            </form>

            <footer className="dm-down">
              <p className="dm-down2">
                Already have an account?
                <a className="dm-down2" href="#">
                  Log in
                </a>
              </p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
