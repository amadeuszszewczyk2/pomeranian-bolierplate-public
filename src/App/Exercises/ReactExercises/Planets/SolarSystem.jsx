import React, { useState } from 'react';
import Planet from './Planet.jsx';

const planets = [
  { name: 'Merkury', icon: '☿', period: 88 },
  { name: 'Wenus', icon: '♀', period: 225 },
  { name: 'Ziemia', icon: '🌍', period: 365 },
  { name: 'Mars', icon: '♂', period: 687 },
  { name: 'Jowisz', icon: '♃', period: 4333 },
  { name: 'Saturn', icon: '♄', period: 10759 },
  { name: 'Uran', icon: '⛢', period: 30687 },
  { name: 'Neptun', icon: '♆', period: 60190 },
];

const SolarSystem = () => {
  const [day, setDay] = useState(1); // Zakładamy dzień 1 jako początek obserwacji

  const isVisible = (period) => day % period < period / 2;

  return (
    <div>
      <h1>Układ Słoneczny - widoczność planet</h1>
      <button className="button-planet" onClick={() => setDay(day + 1)}>
        Następny dzień
      </button>
      <div>
        {planets.map((planet) => (
          <Planet
            key={planet.name}
            name={planet.name}
            icon={planet.icon}
            isVisible={isVisible(planet.period)}
          />
        ))}
      </div>
    </div>
  );
};

export default SolarSystem;
