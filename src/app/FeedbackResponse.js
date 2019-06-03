import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.section`
  padding: 20px;
  margin: 10px 0px;
  color: rebeccapurple;
  border: 1px solid rebeccapurple;
`;

const QuestionTitle = styled.h3`
  font-size: 1.1em;
`;
const Result = styled.p`
  font-size: 0.8em;
`;

export function FeedbackQuestion({ questionNumber, question, result }) {
  return (
    <FeedbackContainer>
      <QuestionTitle>
        Q{questionNumber}. {question}
      </QuestionTitle>
      <Result>{result}</Result>
    </FeedbackContainer>
  );
}
