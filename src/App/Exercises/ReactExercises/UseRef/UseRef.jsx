import React, { useRef, useEffect, useState } from 'react';
import './styles.css';

export function Exercise41() {
  const quantityRef = useRef(null);
  const colorRef = useRef(null);
  const sizeRef = useRef(null);

  useEffect(() => {
    quantityRef.current.focus();
  }, []);

  function handleButtonClick() {
    const quantityValue = quantityRef.current.value;
    const colorValue = colorRef.current.value;
    const sizeValue = sizeRef.current.value;

    const summaryText = `Summary:
      - Quantity: ${quantityValue}
      - Color: ${colorValue}
      - Size: ${sizeValue}`;

    alert(summaryText);
  }

  return (
    <div className="exercise41-container">
      Configure your product
      <hr></hr>
      <div>
        <label>Quantity:</label>
        <select ref={quantityRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select ref={colorRef}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
      </div>
      <div>
        <label>Size:</label>
        <select ref={sizeRef}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <button onClick={handleButtonClick}>Show Summary</button>
    </div>
  );
}
