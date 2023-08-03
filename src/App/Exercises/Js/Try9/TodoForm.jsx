import React, { useState } from 'react';
import './styles.css';

const TodoForm = ({ onFormSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === '' || formData.author.trim() === '' || formData.note.trim() === '') {
      alert('Proszę uzupełnić wszystkie pola.');
    } else {
      onFormSubmit(formData);
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tytuł:</label>
        <input
          className='todo-form-input'
          type="text"
          id="title"
          name="title"
          placeholder="Dodaj tytuł"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="author">Autor:</label>
        <input
          className='todo-form-input'
          type="text"
          id="author"
          name="author"
          placeholder="Dodaj autora"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="note">Treść:</label>
        <input
          className='todo-form-input'
          type="text"
          id="note"
          name="note"
          placeholder="Dodaj treść"
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <div className="todo-form-button-group">
        <button className='big-button' type="button" onClick={onCancel}>
          COFNIJ
        </button>
        <button className='big-button' type="submit">
          DODAJ
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

