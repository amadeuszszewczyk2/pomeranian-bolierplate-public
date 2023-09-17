import React, { useState, useEffect } from 'react';
import {
  FaCloud,
  FaBitcoin,
  FaDollarSign,
  FaQuoteRight,
  FaMapMarker, // Importing the location icon here
} from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

import './styles.css';

export function Widgets() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [btcRate, setBtcRate] = useState('');
  const [usdToPlnRate, setUsdToPlnRate] = useState('');
  const [quote, setQuote] = useState('');
  const [stockData, setStockData] = useState({});

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  useEffect(() => {
    // Fetch user's location and then fetch weather data
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4337d7a7ff16a8cd3f7a172692569cb8`
        );
        const weatherData = await weatherResponse.json();
        const city = weatherData.name;
        const country = weatherData.sys.country;
        setLocation(`${city}, ${country}`);
        const temperatureInCelsius = Math.round(weatherData.main.temp - 273.15);
        setWeather(`${temperatureInCelsius}°C`);
      } catch {
        setWeather('Unable to fetch weather data');
      }

      try {
        const btcResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const btcData = await btcResponse.json();
        setBtcRate(`$${btcData.bitcoin.usd}`);
      } catch {
        setBtcRate('Unable to fetch Bitcoin rate');
      }

      try {
        const stockResponse = await fetch(
          'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo'
        );
        const stockDataJson = await stockResponse.json();
        const latestDate = stockDataJson['Meta Data']['3. Last Refreshed'];
        const dailyData = stockDataJson['Time Series (Daily)'][latestDate];
        setStockData({
          date: latestDate,
          open: dailyData['1. open'],
          high: dailyData['2. high'],
          low: dailyData['3. low'],
          close: dailyData['4. close'],
          volume: dailyData['6. volume'],
        });
      } catch {
        setStockData({ date: '', close: 'Unable to fetch stock data' });
      }
    });

    // Fetch USD to PLN rate
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.rates && data.rates.length) {
          setUsdToPlnRate(`1 USD = ${data.rates[0].mid.toFixed(4)} PLN`); // changed from toFixed(2) to toFixed(4)
        }
      })
      .catch(() => {
        setUsdToPlnRate('Unable to fetch USD to PLN rate');
      });

    // Fetch random quote
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`"${data.content}" - ${data.author}`);
      })
      .catch(() => {
        setQuote('Unable to fetch quote');
      });
  }, []);

  return (
    <div
      className="widgets-dashboard-container"
      style={{ textAlign: 'center' }}
    >
      <animated.h1 style={fadeIn}>Widgets</animated.h1>
      <div className="widgets-dashboard-items">
        <div className="widgets-dashboard-item">
          <FaMapMarker size={32} /> {/* Updated icon for location here */}
          <h3>Location:</h3>
          <p>{location}</p>
        </div>
        <div className="widgets-dashboard-item">
          <FaCloud size={32} />
          <h3>Weather:</h3>
          <p>{weather}</p>
        </div>
        <div className="widgets-dashboard-item">
          <FaBitcoin size={32} />
          <h3>Bitcoin Rate:</h3>
          <p>{btcRate}</p>
        </div>
        <div className="widgets-dashboard-item">
          <FaDollarSign size={32} />
          <h3>(USD to PLN):</h3>
          <p>{usdToPlnRate}</p>
        </div>
        <div className="widgets-dashboard-item">
          <FaQuoteRight size={32} />
          <h3>Quote of the day:</h3>
          <p>{quote}</p>
        </div>
        {/* Removed the LineChart visualization here */}
        <div className="widgets-dashboard-item">
          <h3>IBM ({stockData.date}):</h3>
          <p>Open: ${stockData.open}</p>
          <p>High: ${stockData.high}</p>
          <p>Low: ${stockData.low}</p>
          <p>Close: ${stockData.close}</p>
          <p>Volume: {stockData.volume}</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
