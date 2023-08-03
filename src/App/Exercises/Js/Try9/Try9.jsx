import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { TodoItem } from './ToDoItem/TodoItem';
import TodoForm from './TodoForm';

const BASE_API_URL = 'http://localhost:3333/api';

export function ExerciseTry99() {
  const [isAddingMode, setAddingMode] = useState(false);
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    note: '',
  });
  
  useEffect(() => {
    handleFetchTodoData();
  }, []);

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000;
  
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Response Timeout')), timeOutDuration);
      });
  
      const response = await Promise.race([fetchDataPromise, timeOutPromise]);
  
      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError('Wystąpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  const handleToggleAddingMode = () => {
    if (isAddingMode) {
      setFormData({ title: '', author: '', note: '' });
    }
    setAddingMode(!isAddingMode);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/todo`, formData);
      console.log(response.data);
      setAddingMode(false);
      setFormData({ title: '', author: '', note: '' });
      handleFetchTodoData();
    } catch (error) {
      setError('Wystąpił błąd podczas dodawania zadania ' + error?.message);
    }
  };

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List</h2>

      {getError && <p>{getError}</p>}

      {isAddingMode ? (
        <TodoForm onFormSubmit={handleFormSubmit} onCancel={handleToggleAddingMode} />
      ) : (
        <>
          <div className="todo-container__list">
            {getTodoList.length > 0 &&
              getTodoList.map((todo) => (
                <TodoItem todo={todo} key={todo.id} getTodoList={handleFetchTodoData} />
              ))}
          </div>
          <div>
            <button className="big-button" onClick={handleToggleAddingMode}>
              DODAJ
            </button>
          </div>
        </>
      )}
    </div>
  );
}