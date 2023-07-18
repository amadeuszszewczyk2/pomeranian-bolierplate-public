import React from 'react';
import './styles.css';

export function Exercise() {
  const regularFunctionCode = `
function addNumbers(a, b) {
  return a + b;
}

// Zastosowanie funkcji
console.log('Wynik 1:', addNumbers(2, 3));
console.log('Wynik 2:', addNumbers(5, 7));
console.log('Wynik 3:', addNumbers(10, 20));
`;

  const arrowFunctionCode = `
const addNumbers2 = (a, b) => a + b;

// Zastosowanie funkcji
console.log('Wynik 1:', addNumbers2(2, 3));
console.log('Wynik 2:', addNumbers2(5, 7));
console.log('Wynik 3:', addNumbers2(10, 20));
`;

  const anonymousFunctionCode = `
const addNumbers3 = function(a, b) {
  return a + b;
};

// Zastosowanie funkcji
console.log('Wynik 1:', addNumbers3(2, 3));
console.log('Wynik 2:', addNumbers3(5, 7));
console.log('Wynik 3:', addNumbers3(10, 20));
`;

  return (
    <div>
      <div className="code-container">
        <h3 className="code-title">Przykład funkcji:</h3>
        <pre className="code-block"><code className="code">{regularFunctionCode}</code></pre>
      </div>

      <div className="code-container">
        <h3 className="code-title">Przykład funkcji strzałkowej:</h3>
        <pre className="code-block"><code className="code">{arrowFunctionCode}</code></pre>
      </div>

      <div className="code-container">
        <h3 className="code-title">Przykład funkcji anonimowej:</h3>
        <pre className="code-block"><code className="code">{anonymousFunctionCode}</code></pre>
      </div>
    </div>
  );
}


