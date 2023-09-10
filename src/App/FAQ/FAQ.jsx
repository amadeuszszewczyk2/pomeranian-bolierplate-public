import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: 'What programming languages and technologies do I know?',
    answer:
      'I have a basic knowledge of several programming languages: JavaScript, Java, PHP. Additionally, I have experience working with various tools, frameworks, and libraries such as React, GIT, Firebase, Trello, Asana.',
  },
  {
    question: 'Am I open to new technologies and how quickly do I learn?',
    answer:
      "Yes, I'm always open to learning new technologies and try to stay up-to-date with the latest trends and tools in the IT industry. I believe that my ability to quickly acquire new skills is one of my strengths.",
  },
  {
    question: 'What are my experiences in project management?',
    answer:
      'I have extensive experience in preparing and managing IT projects both as an initiator, leader, and team member. I can plan and prioritize tasks, manage time, monitor progress, and adjust plans. I use various project management tools such as Trello and Asana.',
  },
  {
    question: 'How do I take care of the development of my skills?',
    answer:
      'I take care of the development of my skills by regularly participating in onsite and online courses. I also work on my projects to gain experience and learn about new technologies.',
  },
  {
    question:
      'What is my experience with team collaboration and using version control systems?',
    answer:
      'I have worked in teams of various sizes and structures. I can manage people, effectively communicate with other team members, and collaborate towards common goals. I also have experience using version control systems, such as Git.',
  },
];

export function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="faq-main-container">
      <h1>FAQ</h1>
      <h5>
        Here you will find answers to the most frequently asked questions.
      </h5>
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
