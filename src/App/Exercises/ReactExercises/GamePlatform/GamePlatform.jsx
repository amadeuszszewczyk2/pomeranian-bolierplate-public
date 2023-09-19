import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import spaceSound from './space.mp3';
import failSound from './fail.mp3';
import startSound from './start.mp3';

const SHIP_SIZE = 30;

export function GamePlatform() {
  const [playerPos, setPlayerPos] = useState({
    x: window.innerWidth / 5,
    y: window.innerHeight / 30,
  });
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('highScore') || 0
  );
  const [speed, setSpeed] = useState(10);
  const [gameRunning, setGameRunning] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const audioRef = useRef(null);
  const audioFailRef = useRef(null);
  const audioStartRef = useRef(null);

  useEffect(() => {
    if (gameRunning && isSoundOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [gameRunning, isSoundOn]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
  }, [score, highScore]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (!gameRunning) return;

      switch (e.key) {
        case 'ArrowLeft':
          setPlayerPos((pos) => ({ x: Math.max(0, pos.x - 20), y: pos.y }));
          break;
        case 'ArrowRight':
          setPlayerPos((pos) => ({
            x: Math.min(window.innerWidth / 2.17 - SHIP_SIZE, pos.x + 20),
            y: pos.y,
          }));
          break;
        case 'ArrowUp':
          setPlayerPos((pos) => ({
            x: pos.x,
            y: Math.min(window.innerHeight / 2.32 - SHIP_SIZE, pos.y + 20),
          }));
          break;
        case 'ArrowDown':
          setPlayerPos((pos) => ({ x: pos.x, y: Math.max(0, pos.y - 20) }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [gameRunning]);

  useEffect(() => {
    if (!gameRunning) return;

    const spawnAsteroid = () => {
      setAsteroids((prevAsteroids) => {
        const newAsteroids = [];
        const numAsteroidsToSpawn = Math.floor(score / 10) + 1;

        for (let i = 0; i < numAsteroidsToSpawn; i++) {
          newAsteroids.push({
            id: Date.now() + i,
            x: Math.random() * (window.innerWidth / 2 - SHIP_SIZE),
            y: window.innerHeight / 2,
          });
        }

        return [...prevAsteroids, ...newAsteroids];
      });
    };

    const moveAsteroids = () => {
      setAsteroids((prevAsteroids) =>
        prevAsteroids.map((ast) => ({
          ...ast,
          y: ast.y - speed,
        }))
      );

      setAsteroids((prevAsteroids) =>
        prevAsteroids.filter((ast) => {
          if (ast.y < 0) {
            setScore((prevScore) => prevScore + 1);
            return false;
          }
          if (
            playerPos.x < ast.x + SHIP_SIZE &&
            playerPos.x + SHIP_SIZE > ast.x &&
            playerPos.y < ast.y + SHIP_SIZE &&
            playerPos.y + SHIP_SIZE > ast.y
          ) {
            if (isSoundOn) {
              audioFailRef.current.play();
            }
            setGameRunning(false);
            return false;
          }
          return true;
        })
      );
    };

    const spawnInterval = setInterval(spawnAsteroid, 1000);
    const moveInterval = setInterval(moveAsteroids, 40);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
    };
  }, [gameRunning, speed, playerPos]);

  const startGame = () => {
    if (isSoundOn) {
      audioStartRef.current.play();
    }
    setGameRunning(true);
    setScore(0);
    setAsteroids([]);
    setPlayerPos({ x: window.innerWidth / 5, y: window.innerHeight / 30 });
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div className="game-container">
      <audio ref={audioRef} loop>
        <source src={spaceSound} type="audio/mp3" />
      </audio>
      <audio ref={audioFailRef} preload="auto">
        <source src={failSound} type="audio/mp3" />
      </audio>
      <audio ref={audioStartRef} preload="auto">
        <source src={startSound} type="audio/mp3" />
      </audio>
      <button onClick={toggleSound}>
        {isSoundOn ? 'Turn Off Sound' : 'Turn On Sound'}
      </button>
      <div className="game-platform">
        <div
          className="game-platform__player"
          style={{ left: playerPos.x, bottom: playerPos.y }}
        ></div>
        {asteroids.map((ast) => (
          <div
            key={ast.id}
            className="game-platform__obstacle"
            style={{ left: ast.x, bottom: ast.y }}
          ></div>
        ))}
        {!gameRunning && (
          <button
            onClick={startGame}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {score === 0 ? 'Start' : 'Restart'}
          </button>
        )}
      </div>
      <div className="game-info">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <div className="game-story">
        <p>
          Jesteś pilotem kosmicznego statku w niezbadanej części kosmosu. Twoim
          zadaniem jest unikać asteroid.
        </p>
      </div>
    </div>
  );
}
