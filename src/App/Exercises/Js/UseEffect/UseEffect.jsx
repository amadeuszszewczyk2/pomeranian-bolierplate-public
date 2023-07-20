import React, { useState, useEffect } from 'react';

export const Exercise31 = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  // useEffect hook to display an alert when the click count reaches 5
  useEffect(() => {
    if (clickCount === 5) {
      alert('Kliknąłeś przycisk 5 razy!');
    }
  }, [clickCount]);

  // Snippet code to be displayed
  const snippetCode = `
    import React, { useState, useEffect } from 'react';

    export const Exercise30 = () => {
      const [clickCount, setClickCount] = useState(0);

      const handleButtonClick = () => {
        setClickCount(clickCount + 1);
      };

      useEffect(() => {
        if (clickCount === 5) {
          alert('You have clicked 5 times!');
        }
      }, [clickCount]);

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










