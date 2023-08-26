import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel purus sem. Sed dictum ligula in libero suscipit, in porta erat ornare. Mauris vel nunc vitae justo aliquet posuere.',
  },
  {
    question: 'Curabitur laoreet metus?',
    answer:
      'Curabitur laoreet metus eu libero semper, at semper orci fringilla. Vivamus sit amet tincidunt nunc. Pellentesque volutpat, felis et suscipit sollicitudin, nunc turpis tempor neque, ut convallis ligula arcu ac urna.',
  },
  {
    question: 'Nullam non ullamcorper magna?',
    answer:
      'Nullam non ullamcorper magna. Quisque porttitor semper massa, at tincidunt ligula ullamcorper id. Ut id sem et urna laoreet tincidunt. Sed vestibulum, lectus in volutpat bibendum, nisl libero iaculis dui, ut fermentum ligula erat a justo.',
  },
];

export function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="faq-main-container">
      <h1>FAQ</h1>
      <h5>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</h5>
      <div className="border-box">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3
              className="question"
              onClick={() =>
                setSelectedQuestion(selectedQuestion === index ? null : index)
              }
            >
              <FontAwesomeIcon
                icon={selectedQuestion === index ? faMinusSquare : faPlusSquare}
              />
              {item.question}
            </h3>
            {selectedQuestion === index && (
              <p className="answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
