import React from 'react';
import './styles.css';

export function Exercise() {
  const string1 = 'Amadeusz Szewczyk';
  const string2 = '1234';
  const uppercaseString = string1.toUpperCase();
  const reversedString = string1.split('').reverse().join('');

  const codeSnippet = `
  export function Exercise() {
    const string1 = 'Amadeusz Szewczyk';
    const string2 = '1234';
    const uppercaseString = string1.toUpperCase();
    const reversedString = string1.split('').reverse().join('');

      return (
        <div>
          <section>
            <h2>Operacje na stringach</h2>  
            <p>Witaj {string1}! Jesteś {string2} użytkownikiem na tej stronie!</p>
            <p>Uppercase: {uppercaseString}</p>
            <p>Reversed: {reversedString}</p>
          </section>
        </div>
      );
    }
  `;

  return (
    <div>
      <div>
        <section>
          <h2>Operacje na stringach</h2>  
          <p>Witaj {string1}! Jesteś {string2} użytkownikiem na tej stronie!</p>
          <p>Uppercase: {uppercaseString}</p>
          <p>Reversed: {reversedString}</p>
        </section>
      </div>

      <pre>
        <code>
          {codeSnippet}
        </code>
      </pre>
    </div>
  );
}

