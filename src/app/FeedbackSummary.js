import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import moment from 'moment';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FeedbackQuestion } from './FeedbackQuestion';
moment.locale('de');

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

const SummaryContainer = styled.section`
  display: grid;
  padding: 10px;
  grid-template-columns: 60vw 20vw 20vw;
  color: darkslategray;
  border-top: 1px solid lightslategray;
  background: ${props => props.color};
  border-bottom: 1px solid lightslategray;

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
    color: #008dff;
  }
`;

export function FeedbackSummary({ date, result, counter, questions }) {
  console.log('Summary: ', result);
  const calcResultSummary =
    counter !== 0 ? (result[0] / counter).toFixed(2) : '0';

  function getColorRating() {
    const color = calcResultSummary >= 3 ? 'red' : 'hotpink';
    console.log(color);

    return color;
  }

  getColorRating();

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
          <p>{calcResultSummary}</p>
        </Stats>
        <Stats>
          <Icon icon={faUser} />
          <p>{counter}</p>
        </Stats>
      </SummaryContainer>

      <FeedbackQuestion>
        {questions.map(question => (
          <FeedbackQuestion
            key={question.id}
            questionNumber={question.id + 1}
            question={question.question_text_en}
            results={result}
            index={question.id}
            counter={counter}
          />
        ))}
      </FeedbackQuestion>
    </OutsideClickHandler>
  );
}
