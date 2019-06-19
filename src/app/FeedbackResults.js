import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FeedbackSummary } from './FeedbackSummary';
import Header from './Header';
import SubmitButton from '../components/form/SubmitButton';
import moment from 'moment';

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
  border-bottom: 1px solid #efefef;

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
  heading,
  activeUser,
  responses,
  questions,
  history,
}) {
  function getUpdate(existing, response) {
    const resultSums = response.results.map(
      (result, index) => Number(existing.resultSums[index]) + Number(result)
    );
    const overallSum =
      resultSums.reduce((prev, a) => prev + parseInt(a), 0) / 12;
    const submissionCount = existing.submissionCount + 1;

    return {
      submissionCount,
      overallSum,
      resultSums,
    };
  }

  const groupedResponses = responses.reduce((prev, response) => {
    const date = moment(response.date).format('YYYY-MM-DD');
    const existing = prev[date] || {
      date,
      submissionCount: 0,
      overallSum: 0,
      resultSums: new Array(12).fill(0),
    };

    return {
      ...prev,
      [date]: getUpdate(existing, response),
    };
  }, {});

  const sortedGroupRespones = Object.keys(groupedResponses)
    .map(date => ({
      date,
      ...groupedResponses[date],
    }))
    .sort((a, b) => (moment(a.date).isBefore(moment(b.date)) ? 1 : -1));

  return (
    <MainGrid>
      <Header heading={heading} activeUser={activeUser} history={history} />
      <FeedGrid>
        <StyledLink to="feedback/add">
          <AddFeedbackButton value="Add Feedback" />
        </StyledLink>

        {sortedGroupRespones.map(summary => (
          <FeedbackSummary
            key={summary.date}
            date={summary.date}
            submissionCount={summary.submissionCount}
            overallSum={summary.overallSum}
            resultSums={summary.resultSums}
            questions={questions}
          />
        ))}
      </FeedGrid>
    </MainGrid>
  );
}
