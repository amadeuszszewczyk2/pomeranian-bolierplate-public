import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import './styles.css';

export function Blockchain2() {
  const [votes, setVotes] = useState([]);
  const [candidate, setCandidate] = useState('');
  const [error, setError] = useState(null);

  const calculateHash = (data, prevHash) => {
    return SHA256(data + prevHash).toString();
  };

  const castVote = () => {
    if (!candidate) {
      setError('Wybierz kandydata przed oddaniem głosu');
      return;
    }

    const prevHash = votes.length ? votes[votes.length - 1].hash : '0';
    const hash = calculateHash(candidate, prevHash);
    const newVote = { candidate, hash, prevHash };

    const updatedVotes = [...votes, newVote];
    setVotes(updatedVotes);
    setCandidate('');
    setError(null);
  };

  return (
    <div className="voting-app">
      <h1 className="voting-app__header">Głosowanie oparte o łańcuch bloków</h1>

      <p className="voting-app__description">
        Witaj w systemie głosowania opartym na technologii blockchain! Każdy
        oddany głos jest rejestrowany jako unikalny blok w łańcuchu bloków
        (blockchain). Kluczowym celem blockchain w tym kontekście jest
        zapewnienie transparentności i niezmienności zapisanych danych. Gdy głos
        jest oddawany, jest on "łączony" z poprzednim głosem poprzez specjalny
        kod, nazywany hashem. Dzięki temu niemożliwe jest zmienienie oddanego
        głosu bez zmiany wszystkich następujących po nim głosów.
      </p>

      <select
        value={candidate}
        onChange={(e) => setCandidate(e.target.value)}
        className="voting-app__control"
      >
        <option value="">-- Wybierz kandydata --</option>
        <option value="Anna Nowak">Anna Nowak</option>
        <option value="Jan Kowalski">Jan Kowalski</option>
        <option value="Piotr Zieliński">Piotr Zieliński</option>
      </select>

      <button onClick={castVote} className="voting-app__button">
        Głosuj
      </button>

      {error && <p className="voting-app__error">{error}</p>}

      <h2 className="voting-app__results-title">Wyniki:</h2>
      {votes.map((vote, index) => (
        <div key={index} className="vote">
          <div className="vote__data">Głos na: {vote.candidate}</div>
          <div className="vote__data">Hash: {vote.hash}</div>
          <div className="vote__data">Poprzedni hash: {vote.prevHash}</div>
        </div>
      ))}
    </div>
  );
}
