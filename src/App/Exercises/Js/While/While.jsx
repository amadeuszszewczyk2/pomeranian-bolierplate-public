import React, { useState } from 'react';

export const Exercise35 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const renderCountList = () => {
    const countItems = [];
    let i = 0;
    while (i < count) {
      countItems.push(<li key={i}>Element {i + 1}</li>);
      i++;
    }
    return countItems;
  };

  const snippetCode = `
    import React, { useState } from 'react';

    export const Exercise35 = () => {
      const [count, setCount] = useState(0);

      const handleIncrement = () => {
        setCount(count + 1);
      };

      const handleReset = () => {
        setCount(0);
      };

      const renderCountList = () => {
        const countItems = [];
        let i = 0;
        while (i < count) {
          countItems.push(<li key={i}>Element {i + 1}</li>);
          i++;
        }
        return countItems;
      };

      return (
        <div>
          <h2>Liczba elementów: {count}</h2>
          <button onClick={handleIncrement}>Zwiększ liczbę</button>
          <button onClick={handleReset}>Resetuj</button>
          <ul>
            {renderCountList()}
          </ul>
        </div>
      );
    };
  `;

  return (
    <div>
      <h2>Liczba elementów: {count}</h2>
      <button onClick={handleIncrement}>Zwiększ liczbę</button>
      <button onClick={handleReset}>Resetuj</button>
      <ul>
        {renderCountList()}
      </ul>
      <pre>
        <code>{snippetCode}</code>
      </pre>
    </div>
  );
};

  

  









