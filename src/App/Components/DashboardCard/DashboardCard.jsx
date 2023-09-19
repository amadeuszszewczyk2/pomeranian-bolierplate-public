import './styles.css';

import React from 'react';

const DashboardCard = ({
  className,
  sectionTitle,
  description,
  icon,
  link,
}) => {
  return (
    <a href={link} className={`dashboard-card ${className ? className : ''}`}>
      <h3 className="card-title">{sectionTitle}</h3>
      <div className="icon-wrapper">{icon}</div>
      <p className="card-description">{description}</p>
    </a>
  );
};

export default DashboardCard;
