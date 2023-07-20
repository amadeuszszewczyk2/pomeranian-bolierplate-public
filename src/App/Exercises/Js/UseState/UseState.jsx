import React, { useState } from 'react';

export const Exercise30 = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  // Snippet code to be displayed
  const snippetCode = `
    import React, { useState } from 'react';

    export const Exercise30 = () => {
      const [clickCount, setClickCount] = useState(0);

      const handleButtonClick = () => {
        setClickCount(clickCount + 1);
      };

      return (
        <div>
          <h2>Licznik kliknięć</h2>
          <p>Liczba kliknięć: {clickCount}</p>
          <button onClick={handleButtonClick}>Kliknij mnie</button>
        </div>
      );
    };
  `;

  return (
    <div>
      <h2>Licznik kliknięć</h2>
      <p>Liczba kliknięć: {clickCount}</p>
      <button onClick={handleButtonClick}>Kliknij mnie</button>
      <pre>
        <code>{snippetCode}</code>
      </pre>
    </div>
  );
};









