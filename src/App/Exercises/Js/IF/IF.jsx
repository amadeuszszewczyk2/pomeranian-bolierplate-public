import React, { useState } from 'react';
import './styles.css';

export function IF() {
  const [age, setAge] = useState(18);
  const [hasDriverLicense, setHasDriverLicense] = useState(true);
  const [hasCar, setHasCar] = useState(true);
  const [result, setResult] = useState('');

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return "Jesteś za młody, żeby prowadzić.";
    } else if (!hasDriverLicense) {
      return "Nie możesz prowadzić bez prawa jazdy.";
    } else if (!hasCar) {
      return "Możesz prowadzić wynajęty samochód.";
    } else {
      return "Możesz prowadzić swój samochód!";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const drivingResult = canDrive(age, hasDriverLicense, hasCar);
    setResult(drivingResult);
  }

  const codeSnippet = `
    export function IF() {
      const [age, setAge] = useState(18);
      const [hasDriverLicense, setHasDriverLicense] = useState(true);
      const [hasCar, setHasCar] = useState(true);
      const [result, setResult] = useState('');

      function canDrive(age, hasDriverLicense, hasCar) {
        if (age < 18) {
          return "Jesteś za młody, żeby prowadzić.";
        } else if (!hasDriverLicense) {
          return "Nie możesz prowadzić bez prawa jazdy.";
        } else if (!hasCar) {
          return "Możesz prowadzić wynajęty samochód.";
        } else {
          return "Możesz prowadzić swój samochód!";
        }
      }

      function handleSubmit(event) {
        event.preventDefault();
        const drivingResult = canDrive(age, hasDriverLicense, hasCar);
        setResult(drivingResult);
      }

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <p className='no1'>Twój Wiek:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              /></p>
            </label>
            <br />
            <label>
              <p className='no1'>Czy posiadasz prawo jazdy?
              <input
                type="checkbox"
                checked={hasDriverLicense}
                onChange={(e) => setHasDriverLicense(e.target.checked)}
              /></p>
            </label>
            <br />
            <label>
              <p className='no1'>Czy posiadasz samochód?
              <input
                type="checkbox"
                checked={hasCar}
                onChange={(e) => setHasCar(e.target.checked)}
              /></p>
            </label>
            <br />
            <button type="submit"><p className='no2'>Sprawdź, czy możesz prowadzić</p></button>
          </form>
          <p className='no1'>{result}</p>
        </div>
      );
    }
  `;

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p className='no1'>Twój Wiek:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            /></p>
          </label>
          <br />
          <label>
            <p className='no1'>Czy posiadasz prawo jazdy?
            <input
              type="checkbox"
              checked={hasDriverLicense}
              onChange={(e) => setHasDriverLicense(e.target.checked)}
            /></p>
          </label>
          <br />
          <label>
            <p className='no1'>Czy posiadasz samochód?
            <input
              type="checkbox"
              checked={hasCar}
              onChange={(e) => setHasCar(e.target.checked)}
            /></p>
          </label>
          <br />
          <button type="submit"><p className='no2'>Sprawdź, czy możesz prowadzić</p></button>
        </form>
        <p className='no1'>{result}</p>
      </div>

      <pre>
        <code>
          {codeSnippet}
        </code>
      </pre>
    </div>
  );
}

