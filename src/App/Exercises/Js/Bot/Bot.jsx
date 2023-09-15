import React, { useState } from 'react';
import { botResponse, clickableQuestions } from './botResponses';
import botImage from './bot.png';
import './styles.css';

export function Bot() {
  const [messages, setMessages] = useState([
    {
      text: 'Cześć! Jak mogę pomóc?',
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuestionClick = (question) => {
    setMessages([...messages, { text: question, sender: 'user' }]);
    setMessages((prev) => [
      ...prev,
      { text: botResponse(question.toLowerCase()), sender: 'bot' },
    ]);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputValue.trim().toLowerCase();

    if (userMessage !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setMessages((prev) => [
        ...prev,
        { text: botResponse(userMessage), sender: 'bot' },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="chatbot">
      <img src={botImage} alt="Bot Icon" className="chatbot__icon" />
      <div className="chatbot__messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot__message chatbot__message--${message.sender}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbot__input-area">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="chatbot__input"
          placeholder="Wpisz wiadomość..."
        />
        <button type="submit" className="chatbot__send-btn">
          Wyślij
        </button>
      </form>
      <div className="chatbot__clickable-questions">
        <p>Możesz także wybrać z poniższych pytań:</p>
        {clickableQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(question)}
            className="chatbot__question-btn"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
