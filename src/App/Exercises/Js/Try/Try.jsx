import React, { useState } from 'react';

export function ExerciseTry() {
  const [name, setName] = useState('');
  const [id, setId] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setName(value);
    setError('');
  };

  const getLengthAsId = (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const length = name.length;
        resolve(length);
      }, 2000);
    });
  };

  const handleGetId = () => {
    if (name.trim().length === 0) {
      setError('Wprowadź imię!');
      return;
    }

    setIsLoading(true);

    getLengthAsId(name)
      .then((length) => {
        setId(length);
        setError('');
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Błąd:', error);
        setError('Wystąpił błąd');
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>Wpisz imię</div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleGetId}>Pobierz ID</button>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {id && <p>Twoje ID: {id}</p>}
    </div>
  );
}














