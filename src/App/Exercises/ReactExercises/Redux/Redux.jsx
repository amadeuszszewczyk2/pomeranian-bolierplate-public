import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { First } from './First';
import { Second } from './Second';

export function Redux2() {
  return (
    <Provider store={store}>
      <div>
        <h1>Opis działania komponentów</h1>
        <h2>Komponent First:</h2>
        <p>
          W komponencie "First" użytkownik ma możliwość wprowadzenia dwóch
          liczb, które są następnie sumowane po naciśnięciu przycisku "Oblicz".
          Wynik tej operacji jest przekazywany do globalnego stanu Redux.
        </p>
        <h2>Komponent Second:</h2>
        <p>
          Komponent "Second" wykorzystuje stan Redux do wyświetlenia wyniku
          obliczeń przeprowadzonych w komponencie "First". Nie posiada on
          bezpośredniej interakcji z komponentem "First", ale oba korzystają z
          tego samego globalnego stanu.
        </p>
        <h2>Reducer:</h2>
        <p>
          Reducer obsługuje akcję SET_SUM, która zapisuje wynik obliczeń do
          stanu Redux. Stan składa się z jednej wartości "sum", która
          przechowuje wynik dodawania z komponentu "First".
        </p>
        Komponent First:
        <First />
        <br></br>
        Komponent Second:
        <br></br>
        <br></br>
        <Second />
      </div>
    </Provider>
  );
}
