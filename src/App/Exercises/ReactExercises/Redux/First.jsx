import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSum } from './actions/counterActions';

export const First = () => {
  const dispatch = useDispatch();

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleCalculation = () => {
    const result = Number(num1) + Number(num2);
    console.log('Calculating sum in First component:', result);
    dispatch(setSum(result));
  };

  return (
    <div>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      +
      <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleCalculation}>Oblicz</button>
    </div>
  );
};
