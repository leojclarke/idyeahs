import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const FeedbackContainer = styled.section`
  display: grid;
  grid-template-columns: 70vw 15vw 15vw;
  color: darkslategray;
  border-top: 1px solid lightslategray;
  border-left: 4px solid green;

  section :first-child {
    border-top: none;
    box-shadow: 0 14px 28px rgba(19, 22, 52, 0.25);
  }
`;

const QuestionTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  padding: 10px 5px;
`;
const Stats = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  padding: 5px;

  p {
    padding-left: 7px;
  }
`;

export function FeedbackQuestion({
  questionNumber,
  question,
  index,
  counter,
  results,
}) {
  const calcResult =
    counter !== 0 ? (results[index] / counter).toFixed(2) : '0';

  return (
    <FeedbackContainer>
      <QuestionTitle>
        Q{questionNumber} {question}
      </QuestionTitle>
      <Stats>
        <Icon icon={faTachometerAlt} />
        <p>{calcResult}</p>
      </Stats>
      <Stats>
        <Icon icon={faUser} />
        <p>{counter}</p>
      </Stats>
    </FeedbackContainer>
  );
}
