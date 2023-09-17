import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useEffect, useState } from 'react';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import BlogIcon from '../Components/Icons/BlogIcon.svg';
import WidgetsIcon from '../Components/Icons/WidgetsIcon.svg';
import ArrowsIcon from '../Components/Icons/ArrowsIcon.svg';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'My CV',
      icon: <PersonalCardIcon alt="business card resume" />,
      description: 'curriculum vitae',
      link: '/cv',
    },
    {
      sectionTitle: 'Projects',
      icon: <img src={ArrowsIcon} alt="business card resume" />,
      description: 'my projects',
      link: '/projects',
    },
    {
      sectionTitle: ' Exercises',
      icon: <EditIcon alt="business card resume" />,
      description: 'exercises',
      link: '/exercises',
    },
    {
      sectionTitle: 'Calendar',
      icon: <CalendarIcon alt="business card resume" />,
      description: 'calendar',
      link: '/calendar',
    },

    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcon} alt="business card resume" />,
      description: 'blog about front-end technology',
      link: '/blog',
    },
    {
      sectionTitle: 'Widgets',
      icon: <img src={WidgetsIcon} alt="business card resume" />,
      description: 'Loading widgets...',
      link: '/widgets',
    },
  ]);

  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [btcRate, setBtcRate] = useState('');

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(async (position) => {
      // Fetch weather for the location
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4337d7a7ff16a8cd3f7a172692569cb8`
      );
      const weatherData = await weatherResponse.json();
      const city = weatherData.name;
      const country = weatherData.sys.country;
      setLocation(`${country}, ${city}`);

      // Convert Kelvin to Celsius and round to the nearest whole number
      const temperatureInCelsius = Math.round(weatherData.main.temp - 273.15);
      setWeather(`${temperatureInCelsius}°C`);

      // Fetch BTC rate
      const btcResponse = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
      );
      const btcData = await btcResponse.json();
      setBtcRate(`$${btcData.bitcoin.usd}`);
    });
  }, []);

  useEffect(() => {
    setAvailableCards((prevCards) => {
      const updatedCards = [...prevCards];
      const widgetCard = updatedCards.find(
        (card) => card.sectionTitle === 'Widgets'
      );
      if (widgetCard) {
        widgetCard.description = `${location}, ${weather}, BTC: ${btcRate}`;
      }
      return updatedCards;
    });
  }, [location, weather, btcRate]);

  return (
    <div className="dashboard">
      <div className="dashboard-hello">
        <h1 className="dashboard-title">Hi!</h1>
      </div>
      <p className="dashboard-description">
        Here you will find information about my knowledge and skills
      </p>
      <div className="dashboard-content">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              className="card-shadow"
              sectionTitle={card.sectionTitle}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
