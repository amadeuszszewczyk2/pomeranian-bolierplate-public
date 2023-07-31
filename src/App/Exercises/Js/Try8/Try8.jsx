import './styles.css';
import { useState } from 'react';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333/';

export function ExerciseTry88() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState(null);
  const [getNewTodo, setNewTodo] = useState('');

  const handleFetchTodoData = async () => {
    const timeoutDuration = 5000;

    try {
      const handleFetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Response Timeout')), timeoutDuration);
      });

      const response = await Promise.race([handleFetchDataPromise, timeoutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }

      if (response) {
        setTodoList(response.data);
        setError(null);
      }
    } catch (error) {
      setError("Wystąpił błąd podczas komunikacji z serwerem" + error.message);
    }
  };

  return (
<div className='container--swagger'>
      <button onClick={handleFetchTodoData}>Pobierz To Do</button>
      {getError && <p>{getError}</p>}
      {getTodoList.length > 0 ? (
        <ul>
          {getTodoList.map((todo) => (
            <li key={todo.id}>
              <strong>Title:</strong> {todo.title}<br />
              <strong>Author:</strong> {todo.author}<br />
              <strong>Note:</strong> {todo.note}
            </li>
          ))}
        </ul>
      ) : (
        <p>Uruchom serwer lokalny na adresie {BASE_API_URL} przed próbą pobrania danych.</p>
      )}
    </div>
  );
}
