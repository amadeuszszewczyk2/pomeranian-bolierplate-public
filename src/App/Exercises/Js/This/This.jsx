import React, { useState, useEffect } from 'react';

export function ExerciseThis() {
  function Person(name) {
    this.name = name;
  }

  const [personName, setPersonName] = useState('');

  useEffect(() => {
    const john = new Person('John');
    setPersonName(john.name);
  }, []);

  const codeSnippet = `
  function Person(name) {
    this.name = name;
  }
  
  const [personName, setPersonName] = useState('');
  
  useEffect(() => {
    const john = new Person('John');
    setPersonName(john.name);
  }, []);
  `;

  return (
    <div>
      {personName}
      <pre>
      <code>
        {codeSnippet}
      </code>
    </pre>
    </div>
  );
}


