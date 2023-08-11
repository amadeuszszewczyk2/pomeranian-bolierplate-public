import React, { useState } from 'react';
import FieldSection from '../FieldSection/FieldSection';
import './Account.css';

const Account = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState('');
  const [accountPasswordError, setAccountPasswordError] = useState('');
  const [accountConfirmPassword, setAccountConfirmPassword] = useState('');
  const [accountConfirmPasswordError, setAccountConfirmPasswordError] =
    useState('');

  const validateAccountPassword = (value) => {
    if (value.trim() === '') {
      setAccountPasswordError('Hasło jest wymagane');
    } else {
      setAccountPasswordError('');
    }
  };

  const validateAccountConfirmPassword = (value) => {
    if (value !== accountPassword) {
      setAccountConfirmPasswordError('Hasła nie pasują do siebie');
    } else {
      setAccountConfirmPasswordError('');
    }
  };

  return (
    <>
      <FieldSection title="ZAKŁADANIE KONTA">
        <br />
        <div className="input-container3">
          <input
            type="checkbox"
            id="createAccount"
            name="createAccount"
            checked={createAccount}
            onChange={() => setCreateAccount(!createAccount)}
          />
          <label htmlFor="createAccount">zakładam konto</label>
        </div>
        <br />
        {createAccount && (
          <>
            <FieldSection title="Hasło*">
              <div className="input-container2">
                <input
                  type="password"
                  name="accountPassword"
                  value={accountPassword}
                  onChange={(event) => setAccountPassword(event.target.value)}
                  onBlur={(event) =>
                    validateAccountPassword(event.target.value)
                  }
                  placeholder="Wpisz swoje hasło"
                  required
                />
                {accountPasswordError && (
                  <span className="error-message">{accountPasswordError}</span>
                )}
              </div>
            </FieldSection>
            <br />
            <FieldSection title="Powtórz hasło*">
              <div className="input-container2">
                <input
                  type="password"
                  name="accountConfirmPassword"
                  value={accountConfirmPassword}
                  onChange={(event) =>
                    setAccountConfirmPassword(event.target.value)
                  }
                  onBlur={(event) =>
                    validateAccountConfirmPassword(event.target.value)
                  }
                  placeholder="Powtórz swoje hasło"
                  required
                />
                {accountConfirmPasswordError && (
                  <span className="error-message">
                    {accountConfirmPasswordError}
                  </span>
                )}
              </div>
            </FieldSection>
          </>
        )}
      </FieldSection>
    </>
  );
};

export default Account;
