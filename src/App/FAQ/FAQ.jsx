import React from 'react';
import './styles.css';

const faqData = [
  {
    question: "Pytanie 1",
    answer: "Odpowiedź na pytanie 1."
  },
  {
    question: "Pytanie 2",
    answer: "Odpowiedź na pytanie 2."
  },
  {
    question: "Pytanie 3",
    answer: "Odpowiedź na pytanie 3."
  }
];

export function FAQ() {
  return (
    <div className="faq-main-container">
      <h1>FAQ</h1>
      <h5>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</h5>
      <div className='border-box'>
        {faqData.map((item, index) => (
          <div key={index} className="blocktext">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
