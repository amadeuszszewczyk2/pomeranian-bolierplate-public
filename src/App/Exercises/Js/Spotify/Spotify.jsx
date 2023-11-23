import React, { useEffect, useState } from 'react';
import './styles.css';
import base from './base.json';

export function Spotify() {
  const [songs, setSongs] = useState([]);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const selectSong = (index) => {
    setSelectedSongIndex(index);
  };

  useEffect(() => {
    setSongs(base);
  }, []);

  return (
    <div className="spotify-container">
      <section className="spotify-container__songs">
        <h1 className="spotify-container__title">Songs:</h1>
        <ul className="spotify-container__list">
          {songs.map((song, index) => (
            <li
              key={song.id}
              className="spotify-container__item"
              onClick={() => selectSong(index)}
            >
              {song.title} by {song.author}
            </li>
          ))}
        </ul>
      </section>
      <section className="spotify-container__selected-song">
        {selectedSongIndex !== null && (
          <>
            <h1 className="spotify-container__title">Selected Song:</h1>
            <p>
              {songs[selectedSongIndex].title} by{' '}
              {songs[selectedSongIndex].author}
            </p>
            {songs[selectedSongIndex].audio && (
              <audio controls>
                <source
                  src={`./${songs[selectedSongIndex].audio}`}
                  type="audio/mp3"
                />
                Your browser does not support the audio tag.
              </audio>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default Spotify;
