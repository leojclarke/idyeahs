import React from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FeedbackQuestion } from './FeedbackResponse';
// library.add(faLightbulb);

const FeedbackResponses = styled.section`
  display: grid;
  padding: 10px;
  overflow: scroll;
`;

export default function FeedbackResultsPage({ responses, questions }) {
  return (
    <FeedbackResponses>
      {questions.map(question => (
        <FeedbackQuestion
          key={question.id}
          questionNumber={question.question_id + 1}
          question={question.question_text_en}
          result={responses[question.question_id]}
        />
      ))}
    </FeedbackResponses>
  );
}
