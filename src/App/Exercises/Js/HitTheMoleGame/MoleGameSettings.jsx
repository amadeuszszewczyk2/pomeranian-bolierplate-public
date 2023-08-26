import React, { useState, useEffect } from 'react';

export const MoleGameSettings = ({ moleArray, onStartGame, onRestart }) => {
  const defaultGameTime = 1 * 60 * 1000;
  const defaultMoleCount = 1;

  const [selectedGameTime, setSelectedGameTime] = useState(defaultGameTime);
  const [score, setScore] = useState(0);
  const [clickedGameTimeIndex, setClickedGameTimeIndex] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];

  const handleGameTimeSelection = (timeValue, index) => {
    setSelectedGameTime(timeValue);
    setClickedGameTimeIndex(index);
  };

  const handleRestartGame = () => {
    setSelectedGameTime(defaultGameTime);
    setScore(0);
    setIsGameStarted(false);
    onRestart();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (selectedGameTime === 0 || score === 5) {
      setIsGameStarted(false);
    }
  }, [selectedGameTime, score]);

  useEffect(() => {
    let interval;

    if (isGameStarted) {
      interval = setInterval(() => {
        setSelectedGameTime((prevTime) => {
          if (prevTime === 0 || score === 5) {
            clearInterval(interval);
            setIsGameStarted(false);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isGameStarted, score]);

  return (
    <div className="container">
      <div className="mole-game-settings">
        <div className="strings1">
          <p>
            Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
            którym się pojawił.
          </p>
        </div>

        <div className="settings-row">
          <div className="settings-label">CZAS GRY</div>
          <div className="settings-buttons">
            {gameTimeOption.map(({ label, timeValue }, index) => (
              <button
                key={index}
                onClick={() => handleGameTimeSelection(timeValue, index)}
                className={clickedGameTimeIndex === index ? 'clicked' : ''}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="settings-value">{formatTime(selectedGameTime)}</div>
        </div>

        {isGameStarted ? (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              <button className="stop-button" onClick={handleRestartGame}>
                STOP
              </button>
            </div>
          </div>
        ) : (
          <div className="settings-row">
            <div className="settings-label">PRZYCISKI STERUJĄCE</div>
            <div className="settings-buttons">
              {selectedGameTime !== 0 && (
                <button
                  className="start-button"
                  onClick={() => {
                    setIsGameStarted(true);
                    onStartGame(selectedGameTime, defaultMoleCount);
                  }}
                >
                  START
                </button>
              )}
            </div>
          </div>
        )}

        {!isGameStarted && selectedGameTime === 0 && (
          <div className="settings-row">
            <div className="game-time-up-message">
              Koniec gry! Zagraj ponownie!
            </div>
            <button className="restart-button" onClick={handleRestartGame}>
              RESTART
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
