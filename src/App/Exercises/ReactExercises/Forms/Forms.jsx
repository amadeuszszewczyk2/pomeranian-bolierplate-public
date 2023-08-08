import React, { useState } from 'react';
import './styles.css';
import MainSection from './MainSection/MainSection';
import FieldSection from './FieldSection/FieldSection';
import RadioButtons from './RadioButtons/RadioButtons';
import CheckMarks from './CheckMarks/CheckMarks';

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

export function Exercise42() {
  const [selectedProduct, setSelectedProduct] = useState('frontend');
  const [selectedPaymentType, setSelectedPaymentType] = useState('blik');
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState(
    []
  );

  const updateFormData = (field, value) => {
    if (field === 'product') {
      setSelectedProduct(value);
    } else if (field === 'paymentType') {
      setSelectedPaymentType(value);
    } else if (field === 'additionalOptions') {
      setSelectedAdditionalOptions(value);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('product:', selectedProduct);
        console.log('paymentType:', selectedPaymentType);
        console.log('additionalOptions:', selectedAdditionalOptions);
      }}
    >
      <div>
        <MainSection title="ZAMÓWIENIE PRODUKTU">
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
        </MainSection>
        <br />
        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
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
        <MainSection title="INFORMACJE O PŁATNOŚCI"></MainSection>
      </div>
      <button type="submit">WYŚLIJ</button>
    </form>
  );
}

export default Exercise42;
