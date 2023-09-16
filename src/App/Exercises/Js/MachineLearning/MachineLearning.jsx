import React, { useState, useEffect } from 'react';
import './styles.css';
import * as tf from '@tensorflow/tfjs';

export function MachineLearning() {
  const [data, setData] = useState([
    { area: 40, price: 480000, year: 2018 },
    { area: 50, price: 500000, year: 2018 },
    { area: 60, price: 600000, year: 2018 },
    { area: 70, price: 650000, year: 2018 },
    { area: 80, price: 800000, year: 2018 },
    { area: 90, price: 900000, year: 2019 },
    { area: 100, price: 1000000, year: 2019 },
    { area: 110, price: 1100000, year: 2019 },
    { area: 40, price: 500000, year: 2019 },
    { area: 60, price: 650000, year: 2019 },
    { area: 80, price: 850000, year: 2020 },
    { area: 90, price: 950000, year: 2020 },
    { area: 100, price: 1050000, year: 2020 },
    { area: 70, price: 700000, year: 2020 },
    { area: 40, price: 520000, year: 2021 },
    { area: 60, price: 680000, year: 2021 },
    { area: 80, price: 880000, year: 2021 },
    { area: 50, price: 550000, year: 2022 },
    { area: 70, price: 750000, year: 2022 },
    { area: 90, price: 990000, year: 2022 },
    { area: 110, price: 1200000, year: 2022 },
  ]);

  const [predictedPrice, setPredictedPrice] = useState(null);
  const [userArea, setUserArea] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');
  const [model, setModel] = useState(null);
  const [modelTrained, setModelTrained] = useState(false);

  useEffect(() => {
    const m = tf.sequential();
    m.add(tf.layers.dense({ units: 128, inputShape: [2], activation: 'relu' }));
    m.add(tf.layers.dense({ units: 64, activation: 'relu' }));
    m.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    m.add(tf.layers.dense({ units: 1 }));

    m.compile({
      optimizer: tf.train.adam(0.005), // Zmniejszenie współczynnika uczenia
      loss: 'meanSquaredError',
    });

    setModel(m);
  }, []);

  const normalizeData = (values, min, max) => {
    return values.map((value) => (value - min) / (max - min));
  };

  const trainModel = async () => {
    if (!model) return;

    setStatus('Trenowanie modelu...');
    setLoading(true);

    const areas = data.map((d) => d.area);
    const years = data.map((d) => d.year);
    const prices = data.map((d) => d.price);

    const normalizedAreas = normalizeData(
      areas,
      Math.min(...areas),
      Math.max(...areas)
    );
    const normalizedYears = normalizeData(
      years,
      Math.min(...years),
      Math.max(...years)
    );

    const inputs = [];
    for (let i = 0; i < normalizedAreas.length; i++) {
      inputs.push([normalizedAreas[i], normalizedYears[i]]);
    }

    await model.fit(tf.tensor2d(inputs), tf.tensor(prices), {
      epochs: 500,
      shuffle: true,
    });

    setStatus('Model został wytrenowany!');
    setLoading(false);
    setModelTrained(true);
  };

  const predictPrice = () => {
    if (!model) return;

    if (isNaN(parseFloat(userArea))) {
      setStatus('Proszę wprowadzić prawidłową wartość powierzchni.');
      return;
    }

    const areas = data.map((d) => d.area);
    const years = data.map((d) => d.year);

    const normUserArea = normalizeData(
      [parseFloat(userArea)],
      Math.min(...areas),
      Math.max(...areas)
    )[0];
    const normYear = normalizeData(
      [2024],
      Math.min(...years),
      Math.max(...years)
    )[0];

    const output = model
      .predict(tf.tensor2d([[normUserArea, normYear]]))
      .dataSync()[0];
    setPredictedPrice(output);
  };

  const addData = () => {
    if (
      isNaN(parseFloat(area)) ||
      isNaN(parseFloat(price)) ||
      isNaN(parseInt(year))
    ) {
      setStatus(
        'Proszę wprowadzić prawidłowe wartości powierzchni, ceny i roku.'
      );
      return;
    }
    setData([
      ...data,
      {
        area: parseFloat(area),
        price: parseFloat(price),
        year: parseInt(year),
      },
    ]);
    setArea('');
    setPrice('');
    setYear('');
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <div className="predictor-loading-spinner"></div>}

      <div className="predictor">
        <h1>Prognozowanie średnich cen mieszkań w Gdańsku na 2024 rok</h1>
        {status && (
          <p
            style={{
              color: status === 'Model został wytrenowany!' ? 'green' : 'red',
            }}
          >
            {status}
          </p>
        )}

        <p>
          Wprowadź powierzchnię mieszkania, cenę i rok, aby wzbogacić bazę
          danych:
        </p>
        <input
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Powierzchnia w m²"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Cena"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Rok"
        />
        <button onClick={addData}>Dodaj dane</button>
        <button onClick={trainModel}>Trenuj model</button>
        {!modelTrained && (
          <p style={{ color: 'red' }}>
            Musisz najpierw wytrenować model, aby użyć przycisku prognozowania.
          </p>
        )}

        <h2>Prognozuj cenę na 2024 rok:</h2>
        <input
          value={userArea}
          onChange={(e) => setUserArea(e.target.value)}
          placeholder="Powierzchnia w m²"
        />
        <button onClick={predictPrice} disabled={!modelTrained}>
          Prognozuj cenę
        </button>

        {predictedPrice && (
          <p>
            Przewidywana cena mieszkania w Gdańsku na 2024 rok dla {userArea}{' '}
            m²: {predictedPrice.toLocaleString('pl-PL')} zł
          </p>
        )}

        <h2>Dane:</h2>
        <ul>
          {data.map((entry, idx) => (
            <li key={idx}>
              Rok: {entry.year}, Powierzchnia: {entry.area} m², Cena:{' '}
              {entry.price.toLocaleString('pl-PL')} zł
            </li>
          ))}
        </ul>
      </div>
      <div className="neural-network-description">
        <h2>Opis działania sieci neuronowej:</h2>
        <p>
          <strong>1. Dane:</strong> Dane są zestawem wprowadzonych wartości
          powierzchni mieszkania, ceny mieszkania i roku. Są one używane do
          "nauczenia" modelu, jak prognozować ceny mieszkań na podstawie podanej
          powierzchni i roku.
        </p>
        <p>
          <strong>2. Sieć neuronowa:</strong> To matematyczny model inspirowany
          działaniem ludzkiego mózgu. Składa się z wielu połączonych "neuronów",
          które uczą się rozpoznawania wzorców w danych.
        </p>
        <p>
          <strong>3. Trenowanie:</strong> Proces, w którym sieć neuronowa "uczy
          się" na podstawie dostarczonych danych. Im więcej danych i epok
          trenowania, tym dokładniejsze prognozy może dostarczyć model.
        </p>
        <p>
          <strong>4. Prognozowanie:</strong> Po wytrenowaniu modelu, można go
          użyć do prognozowania cen mieszkań na podstawie podanej powierzchni i
          roku.
        </p>
        * Powyższy model jest uproszczony i służy głównie do prezentacji
        podstawowych zasad działania sieci neuronowych. Realne modele
        prognozujące ceny nieruchomości mogą uwzględniać znacznie więcej
        zmiennych i czynników, takich jak lokalizacja, jakość wykończenia,
        dostęp do komunikacji czy obecność miejsc parkingowych. W praktyce
        stosowanie sieci neuronowych do prognozowania cen nieruchomości wymaga
        zaawansowanej wiedzy i ekspertyzy w dziedzinie analizy danych oraz
        znajomości rynku nieruchomości.
      </div>
    </>
  );
}
