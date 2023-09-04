import React from 'react';
import { useSelector } from 'react-redux';

export const Second = () => {
  const sum = useSelector((state) => state.sum);
  console.log('Rendering Second component with sum:', sum);

  return <div>Wynik obliczeń: {sum}</div>;
};
