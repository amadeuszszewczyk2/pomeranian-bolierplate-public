import React, { useState, useEffect } from 'react';
import './App.css';

export const App2 = () => {
  const [library, setLibrary] = useState(() => {
    const storedLibrary = localStorage.getItem('library');
    return storedLibrary ? JSON.parse(storedLibrary) : [];
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: '',
    isRead: false,
  });
  const [isAddBookModalOpen, setAddBookModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  const addBook = (e) => {
    e.preventDefault();
    const newBook = { ...formData };

    if (library.some((book) => book.title === newBook.title)) {
      alert('This book already exists in your library');
      return;
    }

    setLibrary((prevLibrary) => [...prevLibrary, newBook]);

    setFormData({
      title: '',
      author: '',
      pages: '',
      isRead: false,
    });
    setAddBookModalOpen(false);
  };

  const removeBook = (title) => {
    setLibrary((prevLibrary) => prevLibrary.filter((book) => book.title !== title));
  };

  const toggleRead = (title) => {
    setLibrary((prevLibrary) =>
      prevLibrary.map((book) =>
        book.title === title ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const toggleAddBookModal = () => {
    setAddBookModalOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  return (
    <div className="library-app">
      <header className="library-app-header">
        <h1>Library</h1>
        <nav>
          <button className="library-app-btn" onClick={toggleAddBookModal}>
            + Add book
          </button>
        </nav>
      </header>
      <main className="library-app-main container">
        {library.length > 0 ? (
          <div className="library-app-books-grid">
            {library.map((book, index) => (
              <div className="library-app-book-card" key={index}>
                <p>{`${index + 1}. "${book.title}"`}</p>
                <p>{book.author}</p>
                <p>{book.pages} pages</p>
                <div className="library-app-button-group">
                  <button
                    className={`library-app-btn ${
                      book.isRead ? 'library-app-btn-light-green' : 'library-app-btn-light-red'
                    }`}
                    onClick={() => toggleRead(book.title)}
                  >
                    {book.isRead ? 'Read' : 'Not read'}
                  </button>
                  <button
                    className="library-app-btn library-app-btn-red"
                    onClick={() => removeBook(book.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="library-app-empty-library-message">Your library is empty. Add some books!</p>
        )}
      </main>
      {isAddBookModalOpen && (
        <div className="library-app-modal">
          <form className="library-app-modal-content" onSubmit={addBook}>
            <h2>Add Book</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="pages">Pages:</label>
            <input
              type="number"
              id="pages"
              name="pages"
              value={formData.pages}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="isRead">Read:</label>
            <input
              type="checkbox"
              id="isRead"
              name="isRead"
              checked={formData.isRead}
              onChange={handleInputChange}
            />

            <div className="library-app-button-group">
              <button
                type="button"
                className="library-app-btn library-app-btn-red"
                onClick={toggleAddBookModal}
              >
                Cancel
              </button>
              <button type="submit" className="library-app-btn">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};









