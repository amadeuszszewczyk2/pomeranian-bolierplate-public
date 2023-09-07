import React, { useState, useEffect } from 'react';
import './styles.css';
import cookies from '../../Images/cookie.svg';

const Cookies = () => {
  const [showCookies, setShowCookies] = useState(false);
  const [rejectCookies, setIsHidden] = useState(false);

  useEffect(() => {
    // Sprawdzanie, czy zgoda na cookies została wcześniej wyrażona
    const consentGiven = localStorage.getItem('cookie-consent-given');
    if (!consentGiven) {
      setShowCookies(true);
    }
  }, []);

  const handleAgreement = () => {
    setIsHidden(true);
    setTimeout(() => {
      setShowCookies(false);
    }, 1000);
    localStorage.setItem('cookie-consent-given', 'true');
  };

  const handleAgreementCustomization = () => {
    // Tu możesz dodać logikę do dostosowywania zgód, jeśli to konieczne
  };

  return (
    <>
      {showCookies && (
        <div className={`cookies-agreements ${rejectCookies ? 'hidden' : ''}`}>
          <div className="text-cookie">
            <img src={cookies} alt="" />
            <div>
              <h3>Pozwól na pliki cookies </h3>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </div>
          </div>
          <div className="button-wrapper">
            <button className="agree" onClick={handleAgreement}>
              W porządku
            </button>
            <button
              className="customize"
              onClick={handleAgreementCustomization}
            >
              Dopasuj zgody
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
