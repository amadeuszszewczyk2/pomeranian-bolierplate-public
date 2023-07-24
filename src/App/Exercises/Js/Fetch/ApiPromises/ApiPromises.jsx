import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export function ExerciseTry8() {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  useEffect(() => {
    axios
      .get(POKEMON_LIST_URL)
      .then(response => {
        const pokemonList = response.data.results;
        const pokemonPromises = pokemonList.map(pokemon => axios.get(pokemon.url));

        Promise.all(pokemonPromises)
          .then(responses => {
            const pokemonsData = responses.map(response => {
              return { ...response.data, flipped: false }; // Add 'flipped' property
            });
            setPokemons(pokemonsData);
            setIsLoading(false);
          })
          .catch(error => {
            setError(error?.message);
            setIsLoading(false);
          });
      })
      .catch(error => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = async (index) => {
    setPokemons(prevPokemons => {
      const newPokemons = [...prevPokemons];
      newPokemons[index] = { ...newPokemons[index], flipped: !newPokemons[index].flipped };
      return newPokemons;
    });
  };

  const getBackgroundColor = (baseExperience) => {
    if (baseExperience >= 100) {
      return 'lightgreen'; // Pastel green
    } else if (baseExperience >= 50) {
      return 'lightblue'; // Pastel blue
    } else {
      return 'lightpink'; // Pastel pink
    }
  };

  const renderFrontContent = (pokemon, index) => {
    return (
      <div className="front" onClick={() => handleCardClick(index)}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Name: {pokemon.name}</p>
        <p>Type: {pokemon.types[0]?.type?.name || 'N/A'}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
      </div>
    );
  };

  const renderBackContent = (pokemon, index) => {
    // Determine the background color based on the base experience
    const backgroundColor = getBackgroundColor(pokemon.base_experience);

    return (
      <div
        className="back"
        onClick={() => handleCardClick(index)}
        style={{ backgroundColor }} // Set the background color dynamically
      >
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>Ability: {pokemon.abilities[0]?.ability?.name || 'N/A'}</p>
        <p>HP: {pokemon.stats.find(stat => stat.stat.name === "hp").base_stat}</p>
      </div>
    );
  };

  return (
    <div className="pokemon-grid-container">
      {getIsLoading ? (
        <p>Loading...</p>
      ) : getPokemons.length > 0 ? (
        getPokemons.map((pokemon, index) => (
          <div
            key={index}
            className={`pokemon-grid-item ${pokemon.flipped ? 'flipped' : ''}`}
          >
            {pokemon.flipped ? renderBackContent(pokemon, index) : renderFrontContent(pokemon, index)}
          </div>
        ))
      ) : (
        <p>No Pokemon found.</p>
      )}

      {getError && <p>Error: {getError}</p>}
    </div>
  );
}








