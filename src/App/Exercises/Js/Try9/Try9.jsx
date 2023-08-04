import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { TodoItem } from './TodoItem';
import Form from './Form';

const BASE_API_URL = 'http://localhost:3333/api';

export function ExerciseTry99() {
  const [isAddingMode, setAddingMode] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState('');
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    handleFetchTodoData();
  }, []);

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

      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError(
        'Wystąpił błąd podczas komunikacji z serwerem ' + error?.message
      );
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editTask) {
        const { id } = editTask;
        const response = await axios.put(
          `${BASE_API_URL}/todo/${id}`,
          formData
        );
        console.log('Zaktualizowano zadanie');

        setTodoList((prevTodoList) => {
          const updatedList = prevTodoList.map((todo) =>
            todo.id === id ? response.data : todo
          );
          return updatedList;
        });

        setEditTask(null);
      } else {
        const response = await axios.post(`${BASE_API_URL}/todo`, formData);
        window.alert('Dodałeś nowe zadanie');

        setTodoList((prevTodoList) => [...prevTodoList, response.data]);
      }

      setAddingMode(false);
      setEditTask(null);
    } catch (error) {
      setError('Wystąpił błąd podczas zapisywania zadania ' + error?.message);
    }
  };

  const handleCancelButtonClick = () => {
    setAddingMode(false);
    setEditTask(null);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Lista zadań</h2>

      {error && <p>{error}</p>}

      {(isAddingMode || !!editTask) && (
        <Form
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancelButtonClick}
          initialData={editTask}
          isEditMode={!!editTask}
        />
      )}

      {!isAddingMode && !editTask && (
        <>
          {todoList.length === 0 ? (
            <div className="todo-container__empty">
              <div>
                <p>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania</p>
              </div>
              <div>
                <button
                  className="big-button"
                  onClick={() => setAddingMode(true)}
                >
                  DODAJ ZADANIE
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="todo-container__list">
                {todoList.map((todo) => (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    getTodoList={handleFetchTodoData}
                    onEdit={() => setEditTask(todo)}
                  />
                ))}
              </div>
              <div>
                <button
                  className="big-button"
                  onClick={() => setAddingMode(true)}
                >
                  DODAJ
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
