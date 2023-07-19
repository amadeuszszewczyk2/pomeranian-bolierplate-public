import React from 'react';
import './styles.css';

export function Exercise23() {
  const fruits = ['apple', 'banana', 'orange'];

  const codeSnippet = `
// Tworzenie tablicy
const fruits = ['apple', 'banana', 'orange'];

// Wyświetlanie elementów tablicy
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"

// Modyfikowanie elementów tablicy
fruits[1] = 'grape';
console.log(fruits); // ["apple", "grape", "orange"]

// Dodawanie nowych elementów do tablicy
fruits.push('strawberry');
console.log(fruits); // ["apple", "grape", "orange", "strawberry"]

// Iterowanie po elementach tablicy
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Metody dostępne dla tablic
console.log(fruits.length); // 4
console.log(fruits.indexOf('orange')); // 2
console.log(fruits.includes('banana')); // false
console.log(fruits.join(', ')); // "apple, grape, orange, strawberry"
`;

  // Wywołanie kodu i zbieranie wyników
  const result = [];

  const consoleLog = (output) => {
    result.push(output);
    console.log(output);
  };

  const evalCode = new Function('console', codeSnippet);
  evalCode({ log: consoleLog });

  return (
    <div>
      <h2>Zastosowanie tablicy</h2>
      
      {result.map((output, index) => (
        <p key={index}>{output}</p>
      ))}

      <pre>
        <code>{codeSnippet}</code>
      </pre>

    </div>
  );
}







