import { NavLink } from 'react-router-dom';
import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import BlogIcon from '../Components/Icons/BlogIcon.svg';
import FaqIcon from '../Components/Icons/FaqIcon.svg';
import ArrowsIcon from '../Components/Icons/ArrowsIcon.svg';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="CV">
              <PersonalCardIcon className="menu-icon" />
              My CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="projects">
              <img
                src={ArrowsIcon}
                className="menu-icon"
                alt="Projects"
                style={{ width: '23px', height: '23px' }}
              />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" />
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon className="menu-icon" />
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blog">
              <img
                src={BlogIcon}
                className="menu-icon"
                alt="Blog"
                style={{ width: '23px', height: '23px' }}
              />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <img
                src={FaqIcon}
                className="menu-icon"
                alt="FAQ"
                style={{ width: '23px', height: '23px' }}
              />
              FAQ
            </NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
    </aside>
  );
}
