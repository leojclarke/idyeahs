import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import moment from 'moment';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FeedbackQuestion } from './FeedbackQuestion';
moment.locale('de');

const Stats = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  padding: 5px;

  p {
    padding-left: 7px;
  }
`;

const SummaryContainer = styled.section`
  display: grid;
  padding: 10px;
  grid-template-columns: 60vw 20vw 20vw;
  color: darkslategray;
  border-bottom: 1px solid #dfdfdf;

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
    color: #008dff;
  }
`;

export function FeedbackSummary({
  date,
  result,
  counter,
  overallRating,
  questions,
}) {
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  function handleDetailsVisible() {
    setDetailsVisible(!isDetailsVisible);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setDetailsVisible(false)}>
      <SummaryContainer>
        <div>
          <h3>Feedback on {moment(date).format('DD.MM.YY')}</h3>
          <p onClick={handleDetailsVisible}>VIEW DETAILS</p>
        </div>
        <Stats>
          <Icon icon={faTachometerAlt} />
          <p>{overallRating.toFixed(2)}</p>
        </Stats>
        <Stats>
          <Icon icon={faUser} />
          <p>{counter}</p>
        </Stats>
      </SummaryContainer>

      {isDetailsVisible &&
        questions.map((question, index) => (
          <FeedbackQuestion
            key={question.id}
            questionNumber={question.id + 1}
            question={question.question_text_en}
            result={result[index]}
            index={question.id}
            counter={counter}
          />
        ))}
    </OutsideClickHandler>
  );
}
