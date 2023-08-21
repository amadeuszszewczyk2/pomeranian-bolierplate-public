import { useState } from 'react';
import { FieldSection } from './FieldSection/FieldSection';
import './Forms2.css';
import { MainSection } from './MainSection/MainSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBhZd9lXssklp5u_9IRa6s9YmboVJMdSo8',
  authDomain: 'pomeranian-firebase-dbas.firebaseapp.com',
  projectId: 'pomeranian-firebase-dbas',
  storageBucket: 'pomeranian-firebase-dbas.appspot.com',
  messagingSenderId: '1072802343954',
  appId: '1:1072802343954:web:1533639ecca583036d3ccb',
  measurementId: 'G-6CD9QHD0VT',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(value);
};

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs backend-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptionList = [
  { fieldName: 'github', label: 'Intro do GitHub' },
  { fieldName: 'environment', label: 'Ustawienia środowiska' },
  { fieldName: 'extraDocuments', label: 'Materiały dodatkowe' },
];

const requiredFields = [
  'nameAndSurname',
  'email',
  'product',
  'paymentType',
  'consents',
];

export function Exercise43() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionalOptions: {
      github: true,
      environment: false,
      extraDocuments: true,
    },
    nameAndSurname: '',
    email: '',
    details: '',
    consents: false,
  });
  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);

  const [isEmailValid, setIsEmailValid] = useState();

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes(' ')
      : true;

  const isFieldsValid =
    isEmailValid && isNameAndSurnameValid && isAllRequiredFieldsFilled;

  function updateAdditionalOptions(fieldName, newValue) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [fieldName]: newValue,
      },
    });
  }

  function updateFormData(onChangeEvent) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  async function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;

    if (nameAndSurname && email && product && paymentType && consents) {
      try {
        const db = getFirestore(app);

        const docRef = await addDoc(collection(db, 'orders'), {
          nameAndSurname: nameAndSurname,
          paymentType: paymentType,
          consents: consents,
          email: email,
        });

        console.log('Document written with ID: ', docRef.id);
        setIsSubmissionSuccessful(true);
        setOrderId(docRef.id);

        const newOrderDoc = await getDoc(doc(db, 'orders', docRef.id));
        setOrderData(newOrderDoc.data());
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const [orderId, setOrderId] = useState('');

  const [orderData, setOrderData] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <FieldSection title="Wybierz produkt*">
            <select
              name="product"
              value={formData.product}
              onChange={(event) => {
                updateFormData(event);
              }}
            >
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldSection>
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              options={paymentTypeOptions}
              value={formData.paymentType}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Opcje dodatkowe do zamówienia">
            <Checkboxes
              list={additionalOptionList.map((item) => {
                return {
                  ...item,
                  isChecked: formData.additionalOptions[item.fieldName],
                };
              })}
              onChange={updateAdditionalOptions}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <FieldSection title="Imię i nazwisko">
            <input
              type="text"
              name="nameAndSurname"
              value={formData.nameAndSurname}
              onChange={updateFormData}
              className={!isNameAndSurnameValid ? 'input-field-error' : ''}
            />
            {!isNameAndSurnameValid && (
              <p className="input-field-error-message">
                Nie podałeś(-aś) nazwiska!
              </p>
            )}
          </FieldSection>
          <FieldSection title="Email">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={updateFormData}
              className={isEmailValid === false ? 'input-field-error' : ''}
              onBlur={() => {
                setIsEmailValid(validateEmail(formData.email));
              }}
            />
            {isEmailValid === false && (
              <p className="input-field-error-message">
                Email jest niepoprawny!
              </p>
            )}
          </FieldSection>

          <FieldSection title="Uwagi dodatkowe">
            <textarea
              name="details"
              cols="40"
              rows="10"
              style={{ resize: 'none' }}
              value={formData.details}
              onChange={updateFormData}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="ZGODY">
          <FieldSection title="Regulamin">
            <Checkboxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'akceptuję regulamin*',
                  isChecked: formData.consents,
                },
              ]}
              onChange={(_, newValue) => {
                setIsAllRequiredFieldsFilled(true);
                setFormData({
                  ...formData,
                  consents: newValue,
                });
              }}
            />
          </FieldSection>
        </MainSection>

        {!isAllRequiredFieldsFilled && (
          <p className="input-field-error-message">
            Wypełnij wszystkie pola wymagane!
          </p>
        )}

        <button type="submit" disabled={!isFieldsValid}>
          WYŚLIJ
        </button>
        <br />
        <br />
        {isSubmissionSuccessful && <p>Twoje zamówienie zostało wysłane!</p>}
      </form>

      {orderId && modalOpen && (
        <div className="formModalContainer">
          <div className="formModal">
            {orderData ? (
              <div>
                <h2>Szczegóły zamówienia</h2>
                <p>Numer zamówienia: {orderId}</p>
                <p>Rodzaj płatności: {orderData.paymentType}</p>
              </div>
            ) : (
              <p>Loading order details...</p>
            )}
          </div>
          <button
            className="modal-ok-button"
            onClick={() => setModalOpen(false)}
          >
            Zamknij
          </button>
        </div>
      )}

      {orderId && !modalOpen && (
        <button onClick={() => setModalOpen(true)}>
          Pokaż szczegóły zamówienia
        </button>
      )}
    </>
  );
}
