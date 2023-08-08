import React from 'react';
import './FieldSection.css';

function FieldSection({ title, children }) {
  return (
    <div className="field-section">
      <div className="field-section__title">{title}</div>
      {children}
    </div>
  );
}

export default FieldSection;
