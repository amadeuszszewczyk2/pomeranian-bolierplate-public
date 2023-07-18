import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

export const Exercise5 = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [initialTime, setInitialTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [results, setResults] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const updateTimer = () => {
      if (isRunning) {
        setElapsedTime(Date.now() - initialTime);
      }

      animationFrameId = requestAnimationFrame(updateTimer);
    };

    if (isRunning) {
      animationFrameId = requestAnimationFrame(updateTimer);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, initialTime]);

  const toggleTimer = () => {
    if (isRunning) {
      setInitialTime(Date.now() - elapsedTime);
      setIsRunning(false);
    } else {
      setInitialTime(Date.now());
      setIsRunning(true);
    }
  };

  const saveResult = () => {
    const formattedTime = formatTime(elapsedTime);
    setResults([...results, formattedTime]);
  };

  const formatTime = (timestamp) => {
    const minutes = Math.floor(timestamp / 1000 / 60);
    const seconds = Math.floor(timestamp / 1000) % 60;
    const ms = timestamp % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">{formatTime(elapsedTime)}</div>
      <button className="timer-button" onClick={toggleTimer}>
        {isRunning ? 'Zatrzymaj' : 'Wznów'}
      </button>
      {!isRunning && (
        <div>
          <button onClick={saveResult}>Zapisz wynik</button>
        </div>
      )}
      <table className="results-table">
        <thead>
          <tr>
            <th>Zatrzymany Czas</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise5;







