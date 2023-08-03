import React, { useState } from 'react';
import './TodoItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { formatDate } from '../utils';

const BASE_API_URL = 'http://localhost:3333/api';

export function TodoItem(props) {
  const { id, title, author, createdAt, note } = props.todo;
  const [isDone, setIsDone] = useState(props.todo.isDone || false);
  const [doneDate, setDoneDate] = useState(props.todo.doneDate || null);

  const itemClasses = `todo-container__list__item ${
    isDone ? 'todo-container__list__item--darker' : ''
  }`;

  function handleRemoveClick() {
    console.log('USUN id: ', id);
    axios
      .delete(BASE_API_URL + '/todo/' + id)
      .then((response) => {
        console.log('Usunięto zadanie');
        props.getTodoList();
      })
      .catch((error) => {
        console.error('Błąd podczas usuwania zadania:', error);
      });
  }

  function handleDoneClick() {
    if (!isDone) {
      setIsDone(true);
      setDoneDate(new Date().toISOString());
      axios
        .put(BASE_API_URL + '/todo/' + id, {
          isDone: true,
          doneDate: new Date().toISOString(),
        })
        .then((response) => {
          console.log('Oznaczono zadanie jako wykonane');
        })
        .catch((error) => {
          console.error('Błąd podczas oznaczania zadania jako wykonane:', error);
        });
    }
  }

  return (
    <div className={itemClasses}>
      <div className="todo-container__list__item__wrapper">
        <h3 className="todo-container__list__item__wrapper__title">{title}</h3>
        <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
          {author}
        </div>
        <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-container__list__item__wrapper__text">{note}</p>
      </div>

      <div className="todo-container__list__item__side">
        <button className="todo-container__list__item__side__bin" onClick={handleRemoveClick}>
          <DeleteIcon />
        </button>

        {!isDone && (
          <button
            className="todo-container__list__item__side__done"
            onClick={handleDoneClick}
          >
            Wykonane
          </button>
        )}

        {isDone && (
          <>
            <div className="todo-container__list__item__side__checkmark">&#10003;</div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
