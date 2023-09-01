import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: 'Jakie języki programowania i technologie znam?',
    answer:
      'Znam w stopniu podstawowym kilka języków programowania: JavaScript, Java, PHP. Dodatkowo, mam doświadczenie z pracy z różnymi narzędziami, frameworkami i biliotekami takimi jak React, GIT, Firebase, Trelo, Asana.',
  },
  {
    question: 'Czy jestem otwarty na nowe technologie i jak szybko się uczę?',
    answer:
      'Tak, zawsze jestem otwarty na naukę nowych technologii i staram się być na bieżąco z najnowszymi trendami i narzędziami w branży IT. Uważam, że moja zdolność do szybkiego przyswajania nowych umiejętności jest jednym z moich atutów.',
  },
  {
    question: 'Jakie są moje doświadczenia w zarządzaniu projektami?',
    answer:
      'Posiadam duże doświadczenie w przygotowywaniu i zarządzaniu projektami IT zarówno jako pomysłodawca, lider jak i członek zespołu. Potrafię planować i priorytetyzować zadania, zarządzać czasem, monitorować postęp i dostosowywać plany. Używam różnych narzędzi do zarządzania projektami, takich jak Trello czy Asana.',
  },
  {
    question: 'W jaki sposób dbam o rozwój swoich umiejętności?',
    answer:
      'Dbam o rozwój swoich umiejętności przez regularne uczestnictwo w kursach stacjonarnych i online. Pracuję również nad własnymi projektami aby zdobywać doświadczenie i poznawać nowe technologie.',
  },
  {
    question:
      'Jakie są moje doświadczenia z pracą w zespole i korzystaniem z systemów kontroli wersji?',
    answer:
      'Pracowałem w zespołach o różnych wielkościach i strukturach. Potrafię zarządzać ludźmi, efektywnie komunikować się z innymi członkami zespołu i współpracować nad wspólnymi celami. Mam też doświadczenie w korzystaniu z systemów kontroli wersji, takich jak Git.',
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
