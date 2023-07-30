import './styles.css';
import { useEffect, useState } from 'react';

export function ExerciseTry8() {
  const [users, setUsers] = useState([]);
  const [databaseRunning, setDatabaseRunning] = useState(true); // Dodajemy stan, który informuje o uruchomionej bazie danych

  useEffect(() => {
    const getPosts = () => {
      return fetch('http://localhost:3001/users')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setDatabaseRunning(true); // Po poprawnym pobraniu danych ustawiamy, że baza jest uruchomiona
        })
        .catch((e) => {
          console.error(e);
          setDatabaseRunning(false); // W przypadku błędu ustawiamy, że baza nie jest uruchomiona
        });
    };

    getPosts();

    return () => getPosts;
  }, []);

  if (!databaseRunning) {
    return (
      <div className="database-error">
        Uruchom bazę danych w terminalu: json-server --watch ./index.cjs --port 3001
      </div>
    );
  }

  return users.map((user) => (
    <div key={user.id} className="user-card">
      <img width={64} height={64} src={user.avatar} alt="" />
      <a href={'http://localhost:3001/user?id=' + user.id}>
        <b>
          {user.name} {user.surname}
        </b>
      </a>
      <a href={`tel:${user.phone}`}>{user.phone}</a>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </div>
  ));
}








