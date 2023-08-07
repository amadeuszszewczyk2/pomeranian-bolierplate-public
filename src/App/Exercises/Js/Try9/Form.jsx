import React, { useState, useEffect } from 'react';
import './styles.css';

const Form = ({ onFormSubmit, onCancel, initialData, isEditMode }) => {
  const [formData, setFormData] = useState({
    title: '',
    note: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title.trim() === '' || formData.note.trim() === '') {
      alert('Proszę uzupełnić wszystkie pola.');
    } else {
      onFormSubmit(formData);
      if (isEditMode) {
        alert('Zadanie zaktualizowane.');
      } else {
        setFormData({ title: '', note: '' });
        onCancel();
      }
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tytuł:</label>
        <input
          className="todo-form-input"
          type="text"
          id="title"
          name="title"
          placeholder="Dodaj tytuł"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      {!isEditMode && (
        <div>
          <label htmlFor="author">Autor:</label>
          <input
            className="todo-form-input"
            type="text"
            id="author"
            name="author"
            placeholder="Dodaj autora"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
      )}
      <div>
        <label htmlFor="note">Treść:</label>
        <input
          className="todo-form-input"
          type="text"
          id="note"
          name="note"
          placeholder="Dodaj treść"
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <div className="todo-form-button-group">
        <button className="big-button" type="button" onClick={onCancel}>
          COFNIJ
        </button>
        <button className="big-button" type="submit">
          {isEditMode ? 'ZAPISZ' : 'DODAJ'}
        </button>
      </div>
    </form>
  );
};

export default Form;
