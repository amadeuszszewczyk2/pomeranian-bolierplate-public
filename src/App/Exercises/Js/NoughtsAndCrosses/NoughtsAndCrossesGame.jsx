import React, { useState, useEffect } from 'react';
import './styles2.css';

export const Exercise11 = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'pvc');
  const [selectedMode, setSelectedMode] = useState(mode);
  const [player1, setPlayer1] = useState('gracz 1');
  const [player2, setPlayer2] = useState('gracz 2');

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const getPlayerName = (isXNext) => {
    if (mode === 'pvc' && !isXNext) {
      return 'Komputer';
    }
    return isXNext ? player1 : player2;
  };

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[index]) {
      return;
    }
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const getComputerMove = (currentBoard) => {
    const emptySquares = currentBoard.reduce((acc, square, index) => {
      if (!square) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (emptySquares.length > 0) {
      for (let i = 0; i < emptySquares.length; i++) {
        const testBoard = [...currentBoard];
        testBoard[emptySquares[i]] = 'O';
        if (calculateWinner(testBoard) === 'O') {
          return emptySquares[i];
        }
      }

      for (let i = 0; i < emptySquares.length; i++) {
        const testBoard = [...currentBoard];
        testBoard[emptySquares[i]] = 'X';
        if (calculateWinner(testBoard) === 'X') {
          return emptySquares[i];
        }
      }

      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      return emptySquares[randomIndex];
    }

    return null;
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setMode(localStorage.getItem('mode') || 'pvp');
    setSelectedMode(localStorage.getItem('mode') || 'pvp');
  };

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('mode', selectedMode);
  }, [selectedMode]);

  useEffect(() => {
    if (mode === 'pvc' && !xIsNext) {
      const computerMove = getComputerMove(board);
      if (computerMove !== null) {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[computerMove] = 'O';
          setBoard(newBoard);
          setXIsNext(true);
        }, 1000);
      }
    }
  }, [mode, xIsNext, board]);

  let status;
  const winner = calculateWinner(board);
  if (winner) {
    if (winner === 'O' && mode === 'pvc') {
      status = 'Zwycięzca: Komputer';
    } else {
      status = `Zwycięzca: ${getPlayerName(winner === 'X' ? true : false)}`;
    }
  } else if (board.every((square) => square !== null)) {
    status = 'Remis!';
  } else {
    status = `Następny gracz: ${getPlayerName(xIsNext)}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>
          Gracz 1:{' '}
          <input
            type="text"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
        </div>
        {mode === 'pvp' && (
          <div>
            Gracz 2:{' '}
            <input
              type="text"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
        )}
        <div>
          Tryb:
          <select value={selectedMode} onChange={handleModeChange}>
            <option value="pvp">Gracz vs. Gracz</option>
            <option value="pvc">Gracz vs. Komputer</option>
          </select>
          <button onClick={() => setMode(selectedMode)}>Zatwierdź</button>
        </div>
        <button onClick={resetGame}>Restart</button>
      </div>
    </div>
  );
};
