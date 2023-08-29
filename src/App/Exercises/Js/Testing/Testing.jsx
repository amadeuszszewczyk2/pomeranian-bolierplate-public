import { useState } from 'react';
import './styles.css';

export function sum(a, b) {
  return a + b;
}

export function Testing() {
  const [isVisible, setisVisible] = useState(true);

  const handleOnClick = () => {
    setisVisible(!isVisible);
  };

  return (
    <div className="">
      Testing JEST
      <p>{sum(2, 3)}</p>
      <button onClick={handleOnClick}>Kliknij</button>
      <p>{isVisible && <span>widać</span>}</p>
    </div>
  );
}
