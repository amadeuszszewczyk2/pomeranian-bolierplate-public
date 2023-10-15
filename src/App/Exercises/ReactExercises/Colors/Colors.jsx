import React, { useEffect, useState } from 'react';
import ok from './assets/ok.png';
import elsewhere from './assets/elsewhere.png';
import none from './assets/none.png';

export function Colors() {
  const [activePill, setActivePill] = useState(0);
  const [roundNo, setRoundNo] = useState(1);
  const [state, setState] = useState(Array(5).fill('empty'));
  const [feedback, setFeedback] = useState(Array(5).fill(null));
  const [colors] = useState([
    'red',
    'green',
    'blue',
    'orange',
    'yellow',
    'brown',
    'pink',
    'gray',
  ]);
  const [solution] = useState(['yellow', 'blue', 'red', 'green', 'pink']);
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const instructionsText = (
    <div>
      <h2>Instrukcja:</h2>
      <p>Twoim celem jest odgadnięcie sekwencji kolorów.</p>
      <p>
        Klikaj na przyciski, aby wybrać kolory, aż wypełnisz wszystkie 5 miejsc.
      </p>
      <p>
        Ocena pojawia się na dole planszy: "uśmiechnięta buźka" oznacza
        prawidłowy kolor na właściwym miejscu, "niebieska buźka" oznacza
        prawidłowy kolor w niewłaściwym miejscu, a "czerwona" oznacza błędny
        kolor.
      </p>
      <p>Staraj się odgadnąć sekwencję w jak najmniejszej liczbie rund!</p>
    </div>
  );

  const guess = (color) => {
    if (activePill >= 0 && activePill <= 4) {
      let pillColor = color;
      drawPill(100 + activePill * 100, 50, pillColor);
      state[activePill] = pillColor;
      if (activePill < 4) setActivePill((prevActivePill) => prevActivePill + 1);
      else checkBoard();
      drawArrow();
    }
  };

  const checkBoard = () => {
    setActivePill(0);
    startBoard();

    const newFeedback = Array(5).fill(null);

    for (let i = 0; i < 5; i++) {
      drawPill(100 + i * 100, 250, state[i]);

      if (state[i] === solution[i]) {
        newFeedback[i] = 'ok';
      } else if (solution.includes(state[i])) {
        newFeedback[i] = 'elsewhere';
      } else {
        newFeedback[i] = 'none';
      }
    }

    setFeedback(newFeedback);

    let win = true;
    for (let i = 0; i < 5; i++) {
      if (state[i] !== solution[i]) win = false;
    }

    if (win) {
      alert('Gratulacje! Wygrałeś');
    } else {
      setRoundNo((prevRoundNo) => prevRoundNo + 1);
      drawScore();
      if (roundNo >= 10) {
        alert('Przegrałeś! Osiągnąłeś maksymalną liczbę rund!');
      }
    }
  };

  const resetPill = () => {
    if (activePill > 0) {
      drawPill(100 + (activePill - 1) * 100, 50, 'empty');
      state[activePill - 1] = 'empty';
      setActivePill((prevActivePill) => prevActivePill - 1);
      drawArrow();
    }
  };

  const canvasRef = React.useRef();

  const PILL_WIDTH = 80;
  const PILL_HEIGHT = 80;

  const drawPill = (x, y, type) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(x - 5, y - 5, PILL_WIDTH + 10, PILL_HEIGHT + 10);

    if (type === 'empty') {
      ctx.strokeStyle = 'white';
      ctx.strokeRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    } else {
      ctx.fillStyle = type;
      ctx.fillRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    }
  };

  const drawArrow = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 140, 480, 60);

    ctx.fillStyle = 'black';
    ctx.font = '32px Arial';
    ctx.fillText('↑', 135 + activePill * 100, 180);
  };

  const startBoard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.fillRect(90, 40, 500, 100);

    for (let i = 0; i < 5; i++) {
      drawPill(100 + i * 100, 50, 'empty');
    }

    drawArrow();
  };

  const drawScore = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(640, 40, 110, 130);

    ctx.strokeStyle = 'orange';
    ctx.beginPath();
    ctx.arc(692, 90, 45, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = 'orange';
    ctx.font = '44px Arial';
    if (roundNo < 8) ctx.fillText(roundNo, 680, 105);
    else ctx.fillText(roundNo, 670, 105);

    ctx.font = '20px Arial';
    ctx.fillText('RUNDA', 660, 165);
  };

  return (
    <div className="colors_body">
      <h1 className="colors_h1">Mastermind</h1>
      <div className="colors_board">
        <canvas
          id="game_canvas"
          ref={canvasRef}
          width="800"
          height="480"
        ></canvas>
        <div className="comment">
          {feedback.map((fb, index) => (
            <img
              key={index}
              src={fb === 'ok' ? ok : fb === 'elsewhere' ? elsewhere : none}
              alt="feedback"
            />
          ))}
        </div>
        <div className="controls">
          {colors.map((color, index) => (
            <button key={index} onClick={() => guess(color)}>
              {color}
            </button>
          ))}
          <button id="delete" onClick={resetPill}>
            RESET
          </button>
          <button id="instructions" onClick={toggleInstructions}>
            Instrukcja
          </button>
        </div>
        {showInstructions && instructionsText}
      </div>
    </div>
  );
}
