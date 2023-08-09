import React, { useState } from 'react';
import FieldSection from '../FieldSection/FieldSection';
import './OrderDetailsSection.css';

const OrderDetailsSection = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingAddressError, setShippingAddressError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  const validateName = (value) => {
    if (value.trim() === '') {
      setNameError('Imię i nazwisko są wymagane');
    } else {
      setNameError('');
    }
  };

  const validateNickname = (value) => {
    if (value.trim() === '') {
      setNicknameError('Pseudonim jest wymagany');
    } else {
      setNicknameError('');
    }
  };

  const validateShippingAddress = (value) => {
    if (value.trim() === '') {
      setShippingAddressError('Adres do wysyłki jest wymagany');
    } else {
      setShippingAddressError('');
    }
  };

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError('Nieprawidłowy adres e-mail');
    } else {
      setEmailError('');
    }
  };

  const validatePhoneNumber = (value) => {
    const phonePattern = /^\d{9}$/;
    if (!phonePattern.test(value)) {
      setPhoneNumberError('Nieprawidłowy numer telefonu');
    } else {
      setPhoneNumberError('');
    }
  };

  return (
    <>
      <FieldSection title="Imię i nazwisko*">
        <div className="input-container2">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={(event) => validateName(event.target.value)}
            placeholder="Wpisz swoje imię i nazwisko"
            required
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>
      </FieldSection>
      <br />
      <FieldSection title="Twój pseudonim*">
        <div className="input-container2">
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            onBlur={(event) => validateNickname(event.target.value)}
            placeholder="Wpisz swój pseudonim"
            required
          />
          {nicknameError && (
            <span className="error-message">{nicknameError}</span>
          )}
        </div>
      </FieldSection>
      <br />
      <FieldSection title="Adres do wysyłki*">
        <div className="input-container2">
          <input
            type="text"
            name="shippingAddress"
            value={shippingAddress}
            onChange={(event) => setShippingAddress(event.target.value)}
            onBlur={(event) => validateShippingAddress(event.target.value)}
            placeholder="Wpisz adres do wysyłki"
            required
          />
          {shippingAddressError && (
            <span className="error-message">{shippingAddressError}</span>
          )}
        </div>
      </FieldSection>
      <br />
      <FieldSection title="Adres e-mail*">
        <div className="input-container2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              validateEmail(event.target.value);
            }}
            onBlur={(event) => validateEmail(event.target.value)}
            placeholder="Wpisz swój adres e-mail"
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
      </FieldSection>
      <br />
      <FieldSection title="Numer kontaktowy*">
        <div className="input-container2">
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            onBlur={(event) => validatePhoneNumber(event.target.value)}
            placeholder="Wpisz swój numer kontaktowy"
            required
          />
          {phoneNumberError && (
            <span className="error-message">{phoneNumberError}</span>
          )}
        </div>
      </FieldSection>
      <br />
      <FieldSection title="Dodatkowe uwagi do zamówienia">
        <div className="input-container2">
          <textarea
            name="additionalComments"
            value={additionalComments}
            onChange={(event) => setAdditionalComments(event.target.value)}
            placeholder="Wpisz dodatkowe uwagi do zamówienia"
            required
          />
        </div>
      </FieldSection>
    </>
  );
};

export default OrderDetailsSection;
