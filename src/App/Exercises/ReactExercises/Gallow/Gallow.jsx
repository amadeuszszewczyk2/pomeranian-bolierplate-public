// Gallow.jsx

import React, { useState } from 'react';
import { Hangman } from './Hangman';
import { pilkarzeHaslo, druzynyHaslo } from './proverbs'; // Import pilkarzeHaslo and druzynyHaslo from proverbs.js

export function Gallow() {
  const [proverbIndex, setProverbIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('piłkarze'); // Set the default category to "piłkarze"

  const restartGame = (category) => {
    // Generate a new random index for a different proverb based on the selected category
    const availablePhrases =
      category === 'drużyny' ? druzynyHaslo : pilkarzeHaslo; // Adjust for the categories
    const newIndex = Math.floor(Math.random() * availablePhrases.length);
    setProverbIndex(newIndex);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    restartGame(category);
  };

  return (
    <div>
      <div>
        {' '}
        Wybierz kategorię:
        <label>
          <input
            type="radio"
            value="piłkarze"
            checked={selectedCategory === 'piłkarze'}
            onChange={() => handleCategoryChange('piłkarze')}
          />
          piłkarze
        </label>
        <label>
          <input
            type="radio"
            value="drużyny"
            checked={selectedCategory === 'drużyny'}
            onChange={() => handleCategoryChange('drużyny')}
          />
          drużyny
        </label>
      </div>
      <Hangman selectedProverbIndex={proverbIndex} key={proverbIndex} />
      <button onClick={() => restartGame(selectedCategory)}>Restart</button>
    </div>
  );
}
