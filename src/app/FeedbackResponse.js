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

export function FeedbackQuestion({
  questionNumber,
  question,
  index,
  result,
  counter,
}) {
  return (
    <FeedbackContainer>
      <QuestionTitle>
        Q{questionNumber}. {question}
      </QuestionTitle>
      <Result>
        {counter !== 0
          ? 'Result:' + (result[index] / counter).toFixed(2)
          : 'No Result'}
      </Result>
    </FeedbackContainer>
  );
}
