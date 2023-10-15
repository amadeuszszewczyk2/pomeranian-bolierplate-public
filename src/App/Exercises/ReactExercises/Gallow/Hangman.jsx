import React, { useState, useEffect } from 'react';
import './styles.css';
import s0 from './img/s0.jpg';
import s1 from './img/s1.jpg';
import s2 from './img/s2.jpg';
import s3 from './img/s3.jpg';
import s4 from './img/s4.jpg';
import s5 from './img/s5.jpg';
import s6 from './img/s6.jpg';
import s7 from './img/s7.jpg';
import s8 from './img/s8.jpg';
import s9 from './img/s9.jpg';
import Confetti from 'react-confetti'; // Import Confetti

import { pilkarzeHaslo, druzynyHaslo } from './proverbs';
import yesSound from './yes2.mp3';
import noSound from './no2.mp3';

export function Hangman({ selectedProverbIndex }) {
  const [haslo, setHaslo] = useState(
    selectedProverbIndex < 5
      ? pilkarzeHaslo[selectedProverbIndex]
      : druzynyHaslo[selectedProverbIndex - 5]
  );
  const [haslo1, setHaslo1] = useState('');
  const [displayedWord, setDisplayedWord] = useState(haslo1);
  const [ile_skuch, setIleSkuch] = useState(0);
  const [imageSrc, setImageSrc] = useState(s0);
  const [gameMessage, setGameMessage] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false); // New state for winner

  const litery = [
    'A',
    'Ą',
    'B',
    'C',
    'Ć',
    'D',
    'E',
    'Ę',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'Ł',
    'M',
    'N',
    'Ń',
    'O',
    'Ó',
    'P',
    'Q',
    'R',
    'S',
    'Ś',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Ż',
    'Ź',
  ];

  const imageSources = [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9];

  const yesAudio = new Audio(yesSound); // Create an Audio element for 'yes.wav'
  const noAudio = new Audio(noSound); // Create an Audio element for 'no.wav'

  function playYesSound() {
    yesAudio.play();
  }

  function playNoSound() {
    noAudio.play();
  }

  function sprawdz(nr) {
    if (!isGameOver) {
      let trafiona = false;
      let updatedHaslo1 = haslo1;

      for (let i = 0; i < haslo.length; i++) {
        if (haslo.charAt(i) === litery[nr]) {
          updatedHaslo1 =
            updatedHaslo1.substring(0, i) +
            litery[nr] +
            updatedHaslo1.substring(i + 1);
          trafiona = true;
        }
      }

      if (trafiona) {
        setHaslo1(updatedHaslo1);
        wypisz_haslo(updatedHaslo1);

        // Check for a win
        if (updatedHaslo1 === haslo) {
          setGameMessage('Wygrałeś! Gratulacje!');
          setIsGameOver(true);
          setIsWinner(true); // Set isWinner to true
        } else {
          playYesSound(); // Play 'yes.wav' when guessed correctly
        }
      } else {
        setIleSkuch(ile_skuch + 1);

        // Check for a loss
        if (ile_skuch + 1 >= 9) {
          setImageSrc(s9);
          setGameMessage('Przegrałeś. Spróbuj ponownie.');
          setIsGameOver(true);
        } else {
          setImageSrc(imageSources[ile_skuch + 1]);
        }

        playNoSound(); // Play 'no.wav' when guessed incorrectly
      }
    }
  }

  function wypisz_haslo(updatedHaslo1) {
    setDisplayedWord(updatedHaslo1);
  }

  useEffect(() => {
    function start() {
      let haslo1 = '';
      for (let i = 0; i < haslo.length; i++) {
        if (haslo.charAt(i) === ' ') haslo1 = haslo1 + ' ';
        else haslo1 = haslo1 + '-';
      }
      setHaslo1(haslo1);
      setDisplayedWord(haslo1);
    }

    start();
  }, [haslo]);

  return (
    <div className="hangman">
      {isWinner && <Confetti />} {/* Render Confetti when the player wins */}
      <div className="hangman__word">{displayedWord}</div>
      <div className="hangman__alphabet">
        {litery.map((litera, index) => (
          <div
            key={index}
            className="hangman__letter"
            onClick={() => sprawdz(index)}
          >
            {litera}
          </div>
        ))}
      </div>
      <div className="hangman__image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="hangman__message">
        {gameMessage && <p>{gameMessage}</p>}
        {isGameOver}
      </div>
    </div>
  );
}
