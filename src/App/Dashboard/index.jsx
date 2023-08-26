import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import setting from '../Images/setting.svg';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import BlogIcon from '../Components/Icons/BlogIcon.svg';
import FaqIcon from '../Components/Icons/FaqIcon.svg';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'My CV',
      icon: <PersonalCardIcon alt="business card resume" />,
      description: 'curriculum vitae',
      link: '/cv',
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
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'questions and answers',
      link: '/faq',
    },
  ]);

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
