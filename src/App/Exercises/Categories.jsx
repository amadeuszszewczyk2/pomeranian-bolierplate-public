import React from 'react';
import { NavLink } from 'react-router-dom';

import jsIcon from './js.svg';
import htmlIcon from './html.svg';
import reactIcon from './react.svg';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <NavLink
          to="html-css"
          className="category-tile"
          activeClassName="active"
        >
          <img src={htmlIcon} alt="HTML icon" />
          HTML & CSS
        </NavLink>
        <NavLink to="js" className="category-tile" activeClassName="active">
          <img src={jsIcon} alt="JavaScript icon" />
          Java Script
        </NavLink>
        <NavLink to="react" className="category-tile" activeClassName="active">
          <img src={reactIcon} alt="React icon" />
          React
        </NavLink>
      </div>
    </>
  );
};
