import React from 'react';
import styled from 'styled-components';
import { FeedbackQuestion } from './FeedbackResponse';

const FeedbackResponses = styled.section`
  display: grid;
  padding: 10px;
  overflow: scroll;
`;

export default function FeedbackResultsPage({ responses, questions, counter }) {
  return (
    <FeedbackResponses>
      {questions.map(question => (
        <FeedbackQuestion
          key={question.question_id}
          questionNumber={question.question_id + 1}
          question={question.question_text_en}
          result={responses}
          index={question.question_id}
          counter={counter}
        />
      ))}
    </FeedbackResponses>
  );
}
