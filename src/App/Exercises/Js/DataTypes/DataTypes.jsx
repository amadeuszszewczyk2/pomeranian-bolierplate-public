import React from 'react';
import './styles.css';

export function Exercise20() {
    const stringExample = `
  const message = "Hello, World!";
  `;

    const numberExample = `
  const count = 42;
  const pi = 3.14;
  `;
  
    const booleanExample = `
  const isTrue = true;
  const isFalse = false;
  `;
  
    const undefinedExample = `
  let undefinedValue;
  `;
  
    const nullExample = `
  const nullValue = null;
  `;
  
    const objectExample = `
  const person = {
    name: "John",
    age: 30
  };
  `;
  
    const symbolExample = `
  const key = Symbol("key");
  `;
  
    return (
      <div>
        <h2>Podstawowe typy danych w JavaScript</h2>
        
        <h3>String</h3>
        <pre>
          <code>{stringExample}</code>
        </pre>
  
        <h3>Number</h3>
        <pre>
          <code>{numberExample}</code>
        </pre>
  
        <h3>Boolean</h3>
        <pre>
          <code>{booleanExample}</code>
        </pre>
  
        <h3>Undefined</h3>
        <pre>
          <code>{undefinedExample}</code>
        </pre>
  
        <h3>Null</h3>
        <pre>
          <code>{nullExample}</code>
        </pre>
  
        <h3>Object</h3>
        <pre>
          <code>{objectExample}</code>
        </pre>
  
        <h3>Symbol</h3>
        <pre>
          <code>{symbolExample}</code>
        </pre>
      </div>
    );
  }
  


