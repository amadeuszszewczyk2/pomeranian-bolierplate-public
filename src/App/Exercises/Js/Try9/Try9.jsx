import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './ToDoItem/TodoItem';

const BASE_API_URL = 'http://localhost:3333/api';

export function ExerciseTry99() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState([]);

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000;

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeOutDuration
        );
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError('Wystąpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List 2</h2>

      {getError && <p>{getError}</p>}

      <div className="todo-container__list">
        {getTodoList.length > 0 &&
          getTodoList.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
      </div>
    </div>
  );
}
