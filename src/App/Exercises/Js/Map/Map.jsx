import React from 'react';
import './styles.css';

export function Exercise24() {
  // Tworzenie mapy
  const myMap = new Map();

  // Dodawanie elementów do mapy
  myMap.set('key1', 'value1');
  myMap.set('key2', 'value2');
  myMap.set('key3', 'value3');

const codeSnippet = `
// Tworzenie mapy
const myMap = new Map();

// Dodawanie elementów do mapy
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Pobieranie wartości na podstawie klucza
console.log(myMap.get('key1')); // "value1"

// Sprawdzanie istnienia klucza w mapie
console.log(myMap.has('key2')); // true

// Usuwanie elementu z mapy
myMap.delete('key3');

// Iterowanie po elementach mapy
myMap.forEach((value, key) => {
  console.log(\`Klucz: \${key}, Wartość: \${value}\`);
});

// Rozmiar mapy
console.log(myMap.size); // 2
`;

  return (
    <div>
      <h2>Zastosowanie mapy</h2>

      <pre>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
}







