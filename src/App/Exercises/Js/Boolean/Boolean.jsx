import React from 'react';
import './styles.css';

export function Exercise21() {
  const isLogged = true;
  const isAdmin = false;

  const codeSnippet = `
const isLogged = true;
const isAdmin = false;

return (
  <div>
    <h2>Zastosowanie typu danych boolean</h2>
    
    <h3>Przykłady:</h3>
    <p>Czy użytkownik jest zalogowany? {isLogged ? 'Tak' : 'Nie'}</p>
    <p>Czy użytkownik ma uprawnienia administratora? {isAdmin ? 'Tak' : 'Nie'}</p>
  </div>
);
`;

  return (
    <div>
      <h2>Zastosowanie typu danych boolean</h2>
      
      <p>Czy użytkownik jest zalogowany? {isLogged ? 'Tak' : 'Nie'}</p>
      <p>Czy użytkownik ma uprawnienia administratora? {isAdmin ? 'Tak' : 'Nie'}</p>
    
      <pre>
        <code>{codeSnippet}</code>
      </pre>
  
    </div>
  );
}



