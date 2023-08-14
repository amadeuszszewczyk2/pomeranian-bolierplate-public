import React from 'react';
import './MainSection.css';

function MainSection({ title, children }) {
  return (
    <div className="main-section">
      <div className="main-section__title">{title}</div>
      {children}
    </div>
  );
}

export default MainSection;
