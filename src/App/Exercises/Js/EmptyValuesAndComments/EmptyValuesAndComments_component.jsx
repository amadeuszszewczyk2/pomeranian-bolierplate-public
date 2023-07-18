import React, { useState } from 'react';

export const EmptyValuesAndCommentsComponent = () => {
  const array1 = [{ name: "Łukasz" }, { name: "Adam" }, { name: "Amadeusz" }];

  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue.name],
    []
  );

  const [result, setResult] = useState(sumWithInitial);

  const codeSnippet = `
    import React, { useState } from 'react';

    export const EmptyValuesAndCommentsComponent = () => {
      const array1 = [{ name: "Łukasz" }, { name: "Adam" }, { name: "Amadeusz" }];

      const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => [...accumulator, currentValue.name],
        []
      );

      const [result, setResult] = useState(sumWithInitial);

      return (
        <div>
          <h1>Wynik:</h1>
          <ul>
            {result.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };
  `;

  return (
    <div>
      <div>
        <h1>Wynik:</h1>
        <ul>
          {result.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <pre>
        <code>
          {codeSnippet}
        </code>
      </pre>
    </div>
  );
};



