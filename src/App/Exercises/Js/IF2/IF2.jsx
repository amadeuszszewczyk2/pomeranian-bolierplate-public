import React, { useState } from 'react';
import './styles.css';

export function IF2() {
  const age = 18;

  const codeSnippet = `
const age = 18;

if (age >= 18) {
  console.log("Jesteś pełnoletni");
} else {
  console.log("Jesteś niepełnoletni");
}
`;

  let message;
  if (age >= 18) {
    message = "Jesteś pełnoletni";
  } else {
    message = "Jesteś niepełnoletni";
  }

  return (
    <div>
      <h2>Zastosowanie instrukcji warunkowej "if"</h2>
      <p>Wiek: {age}</p>
      <p>Wiadomość: {message}</p>

      <pre>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
}
