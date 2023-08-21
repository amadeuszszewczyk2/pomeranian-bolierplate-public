import React, { useState } from 'react';
import './styles.css';

const planets = [
  { name: 'Merkury', icon: 'brightness_5', period: 88, distance: 57.9 },
  { name: 'Wenus', icon: 'brightness_6', period: 225, distance: 108.2 },
  { name: 'Mars', icon: 'brightness_7', period: 687, distance: 227.9 },
  { name: 'Jowisz', icon: 'brightness_3', period: 4333, distance: 778.5 },
  { name: 'Saturn', icon: 'brightness_4', period: 10759, distance: 1433.5 },
  { name: 'Uran', icon: 'brightness_1', period: 30687, distance: 2872.5 },
  { name: 'Neptun', icon: 'brightness_2', period: 60190, distance: 4495.1 },
];

const PlanetsApp = () => {
  const [view, setView] = useState('visibility');

  const currentDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff =
      now -
      start +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const day = currentDayOfYear();

  const isVisible = (period) => day % period < period / 2;

  const calculateDistanceFromEarth = (planetDistance) => {
    const earthDistance = 149.6;
    return Math.abs(planetDistance - earthDistance);
  };

  const closestPlanet = () => {
    return planets.reduce((closest, planet) =>
      calculateDistanceFromEarth(planet.distance) <
      calculateDistanceFromEarth(closest.distance)
        ? planet
        : closest
    );
  };

  const farthestPlanet = () => {
    return planets.reduce((farthest, planet) =>
      calculateDistanceFromEarth(planet.distance) >
      calculateDistanceFromEarth(farthest.distance)
        ? planet
        : farthest
    );
  };

  return (
    <div>
      <h1>Układ Słoneczny</h1>
      <div>
        <button className="big-button2" onClick={() => setView('visibility')}>
          Widoczność planet
        </button>
        <button className="big-button2" onClick={() => setView('distance')}>
          Odległość od Ziemi
        </button>
        <button className="big-button2" onClick={() => setView('closest')}>
          Planeta najbliżej Ziemi
        </button>
        <button className="big-button2" onClick={() => setView('farthest')}>
          Planeta najdalej od Ziemi
        </button>
      </div>
      {view === 'visibility' && (
        <div>
          {planets.map((planet) => (
            <div key={planet.name}>
              <span className="material-icons">{planet.icon}</span>
              <span
                style={{ color: isVisible(planet.period) ? 'green' : 'red' }}
              >
                {planet.name}:{' '}
                {isVisible(planet.period) ? 'Widoczna' : 'Niewidoczna'}
              </span>
            </div>
          ))}
        </div>
      )}
      {view === 'distance' && (
        <div>
          {planets.map((planet) => (
            <div key={planet.name}>
              <span className="material-icons">{planet.icon}</span>
              <span>
                {planet.name}: {calculateDistanceFromEarth(planet.distance)} mln
                km
              </span>
            </div>
          ))}
        </div>
      )}
      {view === 'closest' && (
        <div>
          Najbliższą planetą jest <strong>{closestPlanet().name}</strong> z
          odległością {calculateDistanceFromEarth(closestPlanet().distance)} mln
          km.
        </div>
      )}
      {view === 'farthest' && (
        <div>
          Najdalszą planetą jest <strong>{farthestPlanet().name}</strong> z
          odległością {calculateDistanceFromEarth(farthestPlanet().distance)}{' '}
          mln km.
        </div>
      )}
    </div>
  );
};

export default PlanetsApp;
