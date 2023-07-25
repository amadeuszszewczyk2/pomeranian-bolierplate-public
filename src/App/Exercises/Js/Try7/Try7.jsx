import React, { useState } from 'react';
import './styles.css';

export function ExerciseTry8() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchDataFast = () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  };

  const fetchDataLong = () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  };

  const fetchDataError = () => {
    return new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );
  };

  const handleFetchDataFast = () => {
    fetchDataFast()
      .then(result => setData([result]))
      .catch(error => setError(error.message));
  };

  const handleFetchDataLong = () => {
    fetchDataLong()
      .then(result => setData([result]))
      .catch(error => setError(error.message));
  };

  const handleFetchDataError = () => {
    fetchDataError()
      .then(result => setData([result]))
      .catch(error => setError(error.message));
  };

  const handleGetAll = () => {
    Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
      .then(results => setData(results))
      .catch(error => setError(error.message));
  };

  const handleGetAllSettled = () => {
    Promise.allSettled([fetchDataFast(), fetchDataLong(), fetchDataError()])
      .then(results => {
        const fulfilledResults = results.filter(result => result.status === 'fulfilled');
        setData(fulfilledResults.map(result => result.value));
      })
      .catch(error => setError(error.message));
  };

  const handleGetAny = () => {
    Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
      .then(result => setData([result]))
      .catch(error => setError(error.message));
  };

  const handleGetRace = () => {
    Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()])
      .then(result => setData([result]))
      .catch(error => setError(error.message));
  };

  const handleReset = () => {
    setData(null);
    setError(null);
  };

  const handleJsonServerExample = () => {
    fetch('http://localhost:3000/comments')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error.message));
  };

  return (
    <div>
      <button onClick={handleJsonServerExample}>Json Server Example</button>
       <hr></hr>
      <button onClick={handleFetchDataFast}>fetchDataFast</button>
      <button onClick={handleFetchDataLong}>fetchDataLong</button>
      <button onClick={handleFetchDataError}>fetchDataError</button>

      <button onClick={handleGetAll}>Get All Promises</button>
      <button onClick={handleGetAllSettled}>Get All Settled</button>
      <button onClick={handleGetAny}>Get Any</button>
      <button onClick={handleGetRace}>Get Race</button>
      <hr></hr>
      <button onClick={handleReset} style={{ backgroundColor: 'red', color: 'white' }}>
        Reset
      </button>
      <hr></hr>
      {data && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>Author: {item.author}</p>
              <p>Body: {item.body}</p>
            </div>
          ))}
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}






