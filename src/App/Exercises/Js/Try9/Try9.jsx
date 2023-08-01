import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333/';

export function ExerciseTry99() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString(undefined, options);
  };

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000;

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Response Timeout')), timeOutDuration);
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      } else {
        setError('');
        setTodoList(response.data);
      }
    } catch (error) {
      setError('Wystąpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List</h2>

      {getError && <p>{getError}</p>}

      <div className="todo-container__list">
        {getTodoList.length > 0 &&
          getTodoList.map((todo) => (
            <div className="todo-container__list__item" key={todo.id}>
              <h3 className="todo-container__list__item__title">{todo.title}</h3>
              <div className="todo-container__list__item__author">{todo.author}</div>
              <div className="todo-container__list__item__date">{formatDate(todo.createdAt)}</div>
              <div className="todo-container__list__item__note">
                <span>{todo.note}</span>
                <span className="todo-container__list__item__donedate">{formatDate(todo.createdAt)}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
