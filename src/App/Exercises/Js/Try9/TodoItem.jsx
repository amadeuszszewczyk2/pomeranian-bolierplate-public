import React, { useState } from 'react';
import './TodoItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { formatDate } from './utils';

const BASE_API_URL = 'http://localhost:3333/api';

export function TodoItem(props) {
  const {
    id,
    title: initialTitle,
    author,
    createdAt,
    note: initialNote,
  } = props.todo;
  const [isDone, setIsDone] = useState(props.todo.isDone || false);
  const [doneDate, setDoneDate] = useState(props.todo.doneDate || null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [note, setNote] = useState(initialNote);

  function handleRemoveClick() {
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
        .put(`${BASE_API_URL}/todo/${id}/markAsDone`)
        .then((response) => {
          console.log('Zadanie zostało oznaczone jako wykonane na serwerze');
        })
        .catch((error) => {
          console.error(
            'Błąd podczas oznaczania zadania jako wykonane:',
            error
          );
        });
    }
  }

  function handleEditClick() {
    setIsEditing(true);
    const taskData = {
      id,
      title,
      author,
      createdAt,
      note,
    };
    props.onEdit(taskData);
  }

  function handleSaveClick() {
    axios
      .put(BASE_API_URL + '/todo/' + id, {
        title,
        note,
      })
      .then((response) => {
        console.log('Zapisano zmiany');
        setIsEditing(false);
        props.getTodoList();
      })
      .catch((error) => {
        console.error('Błąd podczas zapisywania zmian:', error);
      });
  }

  return (
    <div
      className={`todo-container__list__item ${
        isDone ? 'todo-container__list__item--darker' : ''
      }`}
    >
      {isEditing ? (
        <div className="todo-container__list__item__wrapper">
          <input
            className="todo-container__list__item__wrapper__title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      ) : (
        <div className="todo-container__list__item__wrapper">
          <h3 className="todo-container__list__item__wrapper__title">
            {title}
          </h3>
          <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
            {author}
          </div>
          <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
            {formatDate(createdAt)}
          </div>
          <p className="todo-container__list__item__wrapper__text">{note}</p>
        </div>
      )}

      <div className="todo-container__list__item__side">
        {isEditing ? (
          <button
            className="todo-container__list__item__side__done"
            onClick={handleSaveClick}
          >
            <DoneIcon />
          </button>
        ) : (
          <>
            <button
              className="todo-container__list__item__side__edit"
              onClick={handleEditClick}
            >
              <EditIcon />
            </button>

            <button
              className="todo-container__list__item__side__bin"
              onClick={handleRemoveClick}
            >
              <DeleteIcon />
            </button>

            {!isDone && (
              <button
                className="todo-container__list__item__side__done"
                onClick={handleDoneClick}
              >
                <DoneIcon />
              </button>
            )}
          </>
        )}

        {isDone && (
          <>
            <div className="todo-container__list__item__side__checkmark">
              &#10003;
            </div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
