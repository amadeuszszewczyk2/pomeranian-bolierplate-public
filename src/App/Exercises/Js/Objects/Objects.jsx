import React from 'react';
import './styles.css';

export function Exercise22() {
  const person = {
    name: "John",
    age: 30,
    occupation: "Developer",
    sayHello: function() {
      console.log("Hello, my name is " + this.name);
    }
  };

  const codeSnippet = `
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.sayHello();
`;

  return (
    <div>
      <h2>Przykładowy obiekt - właściwości i metody</h2>
      
      <p>Imię: {person.name}</p>
      <p>Wiek: {person.age}</p>
      <p>Zawód: {person.occupation}</p>

      <h3>Kod przykładu:</h3>
      <pre>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
}




