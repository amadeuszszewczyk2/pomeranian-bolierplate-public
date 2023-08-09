import { useState } from 'react';
import { FieldSection } from './FieldSection/FieldSection';
import './Forms2.css';
import { MainSection } from './MainSection/MainSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';

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

  function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  return (
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
            <p className="input-field-error-message">Email jest niepoprawny!</p>
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
                label: 'apceptuję regulamin*',
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
    </form>
  );
}
