import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

export const GoBackLink = ({ label }) => {
  const navigate = useNavigate();

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault(); // zapobiega domyślnemu zachowaniu linku
        navigate(-1);
      }}
    >
      {label || 'Go Back'}
    </a>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>go back</button>;
};
