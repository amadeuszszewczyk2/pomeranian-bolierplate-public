import React, { useState } from 'react';
import './styles.css';

export function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Początkowy motyw

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    light: {
      backgroundColor: 'white',
      textColor: 'black',
    },
    dark: {
      backgroundColor: 'black',
      textColor: 'white',
    },
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Zmień motyw</h1>
      <p>
        To jest przykładowy tekst, który zmienia kolor w zależności od wybranego
        motywu.
      </p>
      <button className="settingsButton" onClick={toggleTheme}>
        Przełącz motyw
      </button>
    </div>
  );
}
