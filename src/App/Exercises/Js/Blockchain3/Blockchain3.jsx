import React, { useState, useEffect } from 'react';
import './styles.css';

export function Blockchain3() {
  const savedNFTs = localStorage.getItem('nfts');
  const initialNFTs = savedNFTs ? JSON.parse(savedNFTs) : [];

  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [nftCollection, setNftCollection] = useState(initialNFTs);

  useEffect(() => {
    localStorage.setItem('nfts', JSON.stringify(nftCollection));
  }, [nftCollection]);

  const createNFT = () => {
    if (description && imageURL) {
      const newNFT = { description, imageURL, id: Date.now() };
      setNftCollection([...nftCollection, newNFT]);
      setDescription('');
      setImageURL('');
    }
  };

  return (
    <div className="nft-app">
      <h1 className="nft-app__header">Symulator NFT</h1>
      <p className="nft-app__description">
        Ten symulator pozwala na tworzenie wirtualnych NFT. Każdy NFT, który
        stworzysz, zostanie przechowany lokalnie w Twojej przeglądarce.
        Pamiętaj, że nie jest to prawdziwy token NFT na blockchainie, a jedynie
        jego uproszczona symulacja.
      </p>

      <div className="nft-app__creator">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Opis NFT"
          className="nft-app__input"
        />
        <input
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="URL obrazu NFT"
          className="nft-app__input"
        />
        <button onClick={createNFT} className="nft-app__button">
          Stwórz NFT
        </button>
      </div>

      <div className="nft-app__collection">
        {nftCollection.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img
              src={nft.imageURL}
              alt={nft.description}
              className="nft-card__image"
            />
            <p className="nft-card__description">{nft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
