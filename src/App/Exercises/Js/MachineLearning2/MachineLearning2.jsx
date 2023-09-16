import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { historicalMatches, upcomingMatches } from './MatchData';
import './styles.css';

export function MachineLearning2() {
  const [predictedResults, setPredictedResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const normalizeScore = (score) => score / 10;

  const prepareData = () => {
    return historicalMatches.map((match) => {
      const { home, lechiaScore, opponentScore } = match;
      let outcome = 1; // remis
      if (lechiaScore > opponentScore) {
        outcome = 0; // zwyciestwo
      } else if (lechiaScore < opponentScore) {
        outcome = 2; // porazka
      }
      return {
        input: [
          home ? 1 : 0,
          normalizeScore(lechiaScore),
          normalizeScore(opponentScore),
        ],
        output: outcome,
      };
    });
  };

  const handlePredict = async () => {
    setLoading(true);

    const trainingData = prepareData();
    const trainingInputs = tf.tensor2d(trainingData.map((data) => data.input));
    const trainingOutputs = tf.tensor1d(
      trainingData.map((data) => data.output)
    );

    const localModel = tf.sequential();
    localModel.add(
      tf.layers.dense({ units: 8, activation: 'relu', inputShape: [3] })
    );
    localModel.add(tf.layers.dense({ units: 3, activation: 'softmax' }));
    localModel.compile({
      optimizer: 'adam',
      loss: 'sparseCategoricalCrossentropy',
      metrics: ['accuracy'],
    });

    await localModel.fit(trainingInputs, trainingOutputs, { epochs: 100 });

    const results = upcomingMatches.map((match) => {
      const input = tf.tensor2d([[match.home ? 1 : 0, 0, 0]]);
      const prediction = localModel.predict(input).dataSync();
      const predictedIndex = prediction.indexOf(Math.max(...prediction));
      const outcomes = [
        'zwycięstwo dla Lechia Gdańsk',
        'remis',
        'zwycięstwo dla ' + match.opponent,
      ];
      return {
        date: match.date,
        opponent: match.opponent,
        home: match.home,
        result: outcomes[predictedIndex],
      };
    });

    setPredictedResults(results);
    setLoading(false);
  };

  return (
    <div className="FootballPredictor">
      <h1 className="FootballPredictor__title">
        Prognozowanie wyników meczów Lechii Gdańsk w I lidze
      </h1>
      <button className="FootballPredictor__button" onClick={handlePredict}>
        Prognozuj rezultat kolejnych meczów
      </button>
      <div className="FootballPredictor__history">
        <h2>Dane historyczne:</h2>
        <ul>
          {historicalMatches.map((match) => (
            <li key={match.date + match.opponent}>
              {match.date} | {match.home ? 'Lechia Gdańsk' : match.opponent} vs.{' '}
              {match.home ? match.opponent : 'Lechia Gdańsk'} | Wynik:{' '}
              {match.lechiaScore} - {match.opponentScore}
            </li>
          ))}
        </ul>
      </div>
      {loading && (
        <p className="FootballPredictor__loading">Trwa wczytywanie modelu...</p>
      )}
      <div className="FootballPredictor__predictions">
        <h2>Prognozowane wyniki:</h2>
        <ul>
          {upcomingMatches.map((match) => (
            <li key={match.date + match.opponent}>
              {match.date} | {match.home ? 'Lechia Gdańsk' : match.opponent} vs.{' '}
              {match.home ? match.opponent : 'Lechia Gdańsk'} | Prognozowane
              wyniki:{' '}
              {predictedResults.length > 0 &&
                predictedResults.find(
                  (m) => m.date === match.date && m.opponent === match.opponent
                )?.result}
            </li>
          ))}
        </ul>
      </div>
      <div className="FootballPredictor__legend">
        <h3>Opis programu:</h3>
        <ul className="FootballPredictor__list">
          <li>
            <strong>Dane historyczne</strong> – przedstawiają wyniki poprzednich
            meczów, wskazując, czy Lechia Gdańsk grała w roli gospodarza, a
            także wynik meczu.
          </li>
          <li>
            <strong>Prognozowanie</strong> – po naciśnięciu przycisku "Prognozuj
            wyniki meczów", komponent rozpoczyna proces trenowania modelu na
            podstawie wcześniejszych danych. Następnie, na podstawie
            wytrenowanego modelu, dokonuje prognoz wyników nadchodzących meczów.
          </li>
          <li>
            <strong>Wyświetlanie wyników</strong> – po przeprowadzeniu prognoz,
            komponent prezentuje przewidywane wyniki dla nadchodzących meczów.
          </li>
        </ul>
      </div>
    </div>
  );
}
