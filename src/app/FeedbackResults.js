import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FeedbackSummary } from './FeedbackSummary';
import Header from './Header';
import SubmitButton from '../components/form/SubmitButton';

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  overflow-y: scroll;
  overflow-x: hidden;
  color: black;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  justify-content: center;

  a :link,
  :active {
    text-decoration: none;
    color: white;
  }
`;

const AddFeedbackButton = styled(SubmitButton)`
  background: #efc311;
  border: none;
  padding: 10px;
  margin: 10px;
  width: 100%;
`;

export default function FeedbackResultsPage({
  activeUser,
  responses,
  questions,
}) {
  console.log(responses);
  return (
    <MainGrid>
      <Header heading="Feedback" activeUser={activeUser} />
      <FeedGrid>
        <StyledLink to="feedback/add">
          <AddFeedbackButton value="Add Feedback" />
        </StyledLink>

        {responses.map(summary => (
          <FeedbackSummary
            key={summary.id}
            date={summary.date}
            result={summary.results}
            counter={summary.counter}
            questions={questions}
          />
        ))}
      </FeedGrid>
    </MainGrid>
  );
}
