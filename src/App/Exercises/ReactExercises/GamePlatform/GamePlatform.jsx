import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import spaceSound from './space.mp3';
import failSound from './fail.mp3';
import startSound from './start.mp3';

const SHIP_SIZE = 30;
const playerMoveStep = 10;
let asteroidSpeed = 4;
const asteroidSpeedIncrement = 0.2;
const asteroidSpeedThreshold = 10;
const asteroidSpawnInterval = 1500;
const maxAsteroidsToSpawn = 5;
// eslint-disable-next-line
const asteroidSpeedIncreaseInterval = 20;

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
  const [gameRunning, setGameRunning] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const audioRef = useRef(null);
  const audioFailRef = useRef(null);
  const audioStartRef = useRef(null);

  const spawnAsteroid = () => {
    setAsteroids((prevAsteroids) => {
      if (prevAsteroids.length < maxAsteroidsToSpawn) {
        const newAsteroids = [];
        const numAsteroidsToSpawn = Math.min(
          maxAsteroidsToSpawn - prevAsteroids.length,
          maxAsteroidsToSpawn
        );
        for (let i = 0; i < numAsteroidsToSpawn; i++) {
          newAsteroids.push({
            id: Date.now() + i,
            x: Math.random() * (window.innerWidth / 2 - SHIP_SIZE),
            y: window.innerHeight / 2,
          });
        }
        return [...prevAsteroids, ...newAsteroids];
      }
      return prevAsteroids;
    });
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
    setTouchStartY(touch.clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX !== null && touchStartY !== null) {
      const touch = e.changedTouches[0];
      setTouchEndX(touch.clientX);
      setTouchEndY(touch.clientY);

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      setPlayerPos((pos) => ({
        x: Math.max(
          0,
          Math.min(window.innerWidth / 2.17 - SHIP_SIZE, pos.x + deltaX)
        ),
        y: Math.max(
          0,
          Math.min(window.innerHeight / 2.32 - SHIP_SIZE, pos.y + deltaY)
        ),
      }));
    }
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.match(/mobile/i) || userAgent.match(/android/i)) {
      setIsMobile(true);
    }
  }, []);

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

    if (score >= asteroidSpeedThreshold) {
      asteroidSpeed += asteroidSpeedIncrement;
    }
  }, [score, highScore]);

  const handleKeydown = (e) => {
    if (!gameRunning) return;
    switch (e.key) {
      case 'ArrowLeft':
        setPlayerPos((pos) => ({
          x: Math.max(0, pos.x - playerMoveStep),
          y: pos.y,
        }));
        break;
      case 'ArrowRight':
        setPlayerPos((pos) => ({
          x: Math.min(
            window.innerWidth / 2.17 - SHIP_SIZE,
            pos.x + playerMoveStep
          ),
          y: pos.y,
        }));
        break;
      case 'ArrowUp':
        setPlayerPos((pos) => ({
          x: pos.x,
          y: Math.min(
            window.innerHeight / 2.32 - SHIP_SIZE,
            pos.y + playerMoveStep
          ),
        }));
        break;
      case 'ArrowDown':
        setPlayerPos((pos) => ({
          x: pos.x,
          y: Math.max(0, pos.y - playerMoveStep),
        }));
        break;
      default:
        break;
    }
    spawnAsteroid();
  };

  useEffect(() => {
    if (!gameRunning) return;
    const moveAsteroids = () => {
      setAsteroids((prevAsteroids) =>
        prevAsteroids.map((ast) => ({
          ...ast,
          y: ast.y - asteroidSpeed,
        }))
      );
      setAsteroids((prevAsteroids) =>
        prevAsteroids.filter((ast) => {
          if (ast.y < 0) {
            setScore((prevScore) => prevScore + 0.5);
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
            setGameOver(true);
            return false;
          }
          return true;
        })
      );
    };

    const spawnInterval = setInterval(spawnAsteroid, asteroidSpawnInterval);
    const moveInterval = setInterval(moveAsteroids, 20);

    window.addEventListener('keydown', handleKeydown);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
      // eslint-disable-next-line
      window.removeEventListener('keydown', handleKeydown);
    };
    // eslint-disable-next-line
  }, [gameRunning, playerPos, score, isSoundOn]);

  const startGame = () => {
    if (isSoundOn) {
      audioStartRef.current.play();
    }
    setGameRunning(true);
    setScore(0);
    setAsteroids([]);
    setPlayerPos({ x: window.innerWidth / 5, y: window.innerHeight / 30 });
    spawnAsteroid();
    setGameOver(false);
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div className="game-container">
      <audio ref={audioRef}>
        <source src={spaceSound} type="audio/mp3" />
      </audio>
      <audio ref={audioFailRef}>
        <source src={failSound} type="audio/mp3" />
      </audio>
      <audio ref={audioStartRef}>
        <source src={startSound} type="audio/mp3" />
      </audio>
      <button onClick={toggleSound}>
        {isSoundOn ? 'Turn Off Sound' : 'Turn On Sound'}
      </button>
      <br></br>
      {gameOver && (
        <div className="game-over">
          <h1>Game Over</h1>
          <p>Your Score: {score}</p>
          <button onClick={startGame}>Restart</button>
        </div>
      )}
      <div
        className="game-platform"
        onKeyDown={!isMobile ? handleKeydown : null}
        tabIndex={isMobile ? undefined : 0}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
        {!gameRunning && !gameOver && (
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
          You are a pilot of a space ship in an uncharted part of the cosmos.
          Your mission is to avoid asteroids.
        </p>
      </div>
    </div>
  );
}
