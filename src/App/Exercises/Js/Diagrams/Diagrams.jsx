import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';

export function Diagrams() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,binancecoin&vs_currencies=usd'
    )
      .then((response) => response.json())
      .then((data) => {
        const preparedData = [
          { name: 'Bitcoin', value: data.bitcoin.usd },
          { name: 'Ethereum', value: data.ethereum.usd },
          { name: 'Ripple', value: data.ripple.usd },
          { name: 'Cardano', value: data.cardano.usd },
          { name: 'BinanceCoin', value: data.binancecoin.usd },
        ];
        setCryptoData(preparedData);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div>
      {cryptoData.length ? (
        <BarChart width={600} height={400} data={cryptoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Price']} />
          <Bar dataKey="value" fill="#8884d8">
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) => `$${value.toFixed(2)}`}
            />
          </Bar>
        </BarChart>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
