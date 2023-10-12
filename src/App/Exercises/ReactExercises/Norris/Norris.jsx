import React, { useState, useEffect } from 'react';
import './style.css';

export function Norris() {
  const [joke, setJoke] = useState('');
  const [date, setDate] = useState('');

  const fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch((error) => console.error(error));

    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card custom-card">
            <div className="card-body">
              <h2 className="card-title">Chuck Norris Joke</h2>
              <p className="card-text">Current Date: {date}</p>
              <div className="fixed-width-container">
                <p className="card-text">{joke}</p>
              </div>
              <button onClick={fetchJoke} className="button">
                Get New Joke
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
