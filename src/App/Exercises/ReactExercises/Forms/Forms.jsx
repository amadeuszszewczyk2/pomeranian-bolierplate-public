import React, { useState } from 'react';
import CheckMarks from './CheckMarks/CheckMarks';
import FieldSection from './FieldSection/FieldSection';
import MainSection from './MainSection/MainSection';
import RadioButtons from './RadioButtons/RadioButtons';
import OrderDetailsSection from './OrderDetailsSection/OrderDetailsSection';
import Account from './Account/Account';
import './styles.css';

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs back-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptions = [
  { value: 'środowisko', label: 'ustawienie środowiska' },
  { value: 'github', label: 'intro do GitHub' },
  { value: 'materiały', label: 'materiały dodatkowe' },
];

const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

export function Exercise42() {
  const [selectedProduct, setSelectedProduct] = useState('frontend');
  const [selectedPaymentType, setSelectedPaymentType] = useState('blik');
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState(
    []
  );

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  const [nameError, setNameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [shippingAddressError, setShippingAddressError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState('');

  const [accountConfirmPassword, setAccountConfirmPassword] = useState('');
  const [accountPasswordError, setAccountPasswordError] = useState('');
  const [accountConfirmPasswordError, setAccountConfirmPasswordError] =
    useState('');

  const updateFormData = (field, value) => {
    if (field === 'product') {
      setSelectedProduct(value);
    } else if (field === 'paymentType') {
      setSelectedPaymentType(value);
    } else if (field === 'additionalOptions') {
      setSelectedAdditionalOptions(value);
    } else if (field === 'name') {
      setName(value);
      setNameError(value ? '' : 'To pole jest wymagane.');
    } else if (field === 'nickname') {
      setNickname(value);
      setNicknameError(value ? '' : 'To pole jest wymagane.');
    } else if (field === 'shippingAddress') {
      setShippingAddress(value);
      setShippingAddressError(value ? '' : 'To pole jest wymagane.');
    } else if (field === 'email') {
      setEmail(value);
      setEmailError(
        value
          ? isValidEmail(value)
            ? ''
            : 'Podaj poprawny adres e-mail.'
          : 'To pole jest wymagane.'
      );
    } else if (field === 'phoneNumber') {
      setPhoneNumber(value);
      setPhoneNumberError(value ? '' : 'To pole jest wymagane.');
    } else if (field === 'additionalComments') {
      setAdditionalComments(value);
    } else if (field === 'createAccount') {
      setCreateAccount(value);
    } else if (field === 'accountPassword') {
      setAccountPassword(value);
      setAccountPasswordError(value.trim() === '' ? 'Hasło jest wymagane' : '');
    } else if (field === 'accountConfirmPassword') {
      setAccountConfirmPassword(value);
      setAccountConfirmPasswordError(
        value !== accountPassword ? 'Hasła nie pasują do siebie' : ''
      );
    }
  };

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log('product:', selectedProduct);
        console.log('paymentType:', selectedPaymentType);
        console.log('additionalOptions:', selectedAdditionalOptions);
        console.log('name:', name);
        console.log('nickname:', nickname);
        console.log('shippingAddress:', shippingAddress);
        console.log('email:', email);
        console.log('phoneNumber:', phoneNumber);
        console.log('additionalComments:', additionalComments);
        console.log('createAccount:', createAccount);
        console.log('accountPassword:', accountPassword);
      }}
    >
      <div>
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <br />
          <FieldSection title="Wybierz produkt*">
            <select
              name="product"
              value={selectedProduct}
              onChange={(event) =>
                updateFormData('product', event.target.value)
              }
            >
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldSection>
          <br />
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              options={paymentTypeOptions}
              value={selectedPaymentType}
              onChange={(value) => updateFormData('paymentType', value)}
            />
          </FieldSection>
          <br />
          <FieldSection title="Opcje dodatkowe do zamówienia">
            <CheckMarks
              name="additionalOptions"
              options={additionalOptions}
              selectedValues={selectedAdditionalOptions}
              onChange={(values) => updateFormData('additionalOptions', values)}
            />
          </FieldSection>
        </MainSection>
        <br />
        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <br />
          <OrderDetailsSection
            name={name}
            nameError={nameError}
            updateName={setName}
            nickname={nickname}
            nicknameError={nicknameError}
            updateNickname={setNickname}
            shippingAddress={shippingAddress}
            shippingAddressError={shippingAddressError}
            updateShippingAddress={setShippingAddress}
            email={email}
            emailError={emailError}
            updateEmail={setEmail}
            phoneNumber={phoneNumber}
            phoneNumberError={phoneNumberError}
            updatePhoneNumber={setPhoneNumber}
            additionalComments={additionalComments}
            updateAdditionalComments={setAdditionalComments}
          />
        </MainSection>
        <br />
        <MainSection>
          <Account
            createAccount={createAccount}
            setCreateAccount={setCreateAccount}
            accountPassword={accountPassword}
            setAccountPassword={setAccountPassword}
            accountConfirmPassword={accountConfirmPassword}
            setAccountConfirmPassword={setAccountConfirmPassword}
            accountPasswordError={accountPasswordError}
            setAccountPasswordError={setAccountPasswordError}
            accountConfirmPasswordError={accountConfirmPasswordError}
            setAccountConfirmPasswordError={setAccountConfirmPasswordError}
          />
        </MainSection>
        <br />
        <MainSection title="ZGODY I NEWSLETTER"></MainSection>
      </div>
      <button type="submit">WYŚLIJ</button>
    </form>
  );
}

export default Exercise42;
