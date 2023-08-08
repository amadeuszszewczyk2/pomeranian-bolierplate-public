import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

export function Exercise41() {
  const quantityRef = useRef(null);
  const colorRef = useRef(null);
  const sizeRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [summaryText, setSummaryText] = useState('');

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

    setSummaryText(summaryText);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleConfirm() {
    alert('Confirmed!');
    closeModal();
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
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
        <h2>Summary</h2>
        <p>{summaryText}</p>
        <div className="modal-buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
}
