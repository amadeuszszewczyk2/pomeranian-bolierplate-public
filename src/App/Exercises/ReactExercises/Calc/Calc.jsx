import React, { useState } from 'react';
import './styles.css';

export function Calc() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(display);
      setDisplay(calculatedResult.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div>
      <div className="calculator">
        <div className="calculator_display">{display}</div>
        <div className="calculator_buttons">
          <div className="calculator_row">
            <button
              className="calculator_button operator"
              onClick={clearDisplay}
            >
              C
            </button>
            <button onClick={() => handleButtonClick('/')}>/</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
          </div>
          <div className="calculator_row">
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className="calculator_row">
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
          </div>
          <div className="calculator_row">
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
