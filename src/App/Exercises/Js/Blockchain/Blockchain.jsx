import React, { useState, useEffect } from 'react';
import './styles.css';
import SHA256 from 'crypto-js/sha256';
import blockchainImage from './blockchain.png';

export function Blockchain() {
  const savedBlocks = localStorage.getItem('blocks');
  const initialBlocks = savedBlocks ? JSON.parse(savedBlocks) : [];

  const [data, setData] = useState('');
  const [blocks, setBlocks] = useState(initialBlocks);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks]);

  const calculateHash = (data, prevHash) => {
    return SHA256(data + prevHash).toString();
  };

  const isValidNewBlock = (newBlock, previousBlock) => {
    if (previousBlock.hash !== newBlock.prevHash) {
      return false;
    }
    if (calculateHash(newBlock.data, newBlock.prevHash) !== newBlock.hash) {
      return false;
    }
    return true;
  };

  const addBlock = () => {
    const prevHash = blocks.length ? blocks[blocks.length - 1].hash : '0';
    const hash = calculateHash(data, prevHash);
    const newBlock = { data, hash, prevHash };

    if (
      blocks.length === 0 ||
      isValidNewBlock(newBlock, blocks[blocks.length - 1])
    ) {
      setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
      setData('');
      setError(null);
    } else {
      setError('Invalid block');
    }
  };

  return (
    <div className="blockchain">
      <img
        src={blockchainImage}
        alt="Blockchain"
        className="blockchain__image"
      />
      <div className="blockchain__input-area">
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Wprowadź dane do bloku"
          className="blockchain__input"
        />
        <button onClick={addBlock} className="blockchain__btn">
          Dodaj blok
        </button>
      </div>
      {error && <p className="blockchain__error">{error}</p>}
      <div>
        {blocks.map((block, index) => (
          <div key={index} className="blockchain__block">
            <h4 className="blockchain__block-title">Blok {index + 1}</h4>
            <div>Dane: {block.data}</div>
            <div>Hash: {block.hash}</div>
            <div>Poprzedni hash: {block.prevHash}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
