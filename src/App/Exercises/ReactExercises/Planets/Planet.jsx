import React from 'react';

const Planet = ({ name, icon, isVisible }) => {
  return (
    <div className={`planet ${isVisible ? 'visible' : 'hidden'}`}>
      <span className="planet-icon">{icon}</span>
      <span className="planet-name">{name}</span>
    </div>
  );
};

export default Planet;
