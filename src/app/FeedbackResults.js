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
    const { results } = response;
    const overallRating =
      results.reduce((prev, a) => prev + parseInt(a), 0) / 12;

    const submissionCount = existing.submissionCount + 1;

    return {
      submissionCount,
      overallRating: (existing.overallRating + overallRating) / submissionCount,
      responsesOverall: existing.responsesOverall.map(
        (entry, index) => (Number(entry) + Number(response.results[index])) / 2
      ),
    };
  }

  const groupedResponses = responses.reduce((prev, response) => {
    const date = moment(response.date).format('YYYY-MM-DD');
    const existing = prev[date] || {
      date,
      submissionCount: 0,
      overallRating: 0,
      responsesOverall: response.results,
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

  console.log(sortedGroupRespones);

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
            result={summary.responsesOverall}
            counter={summary.submissionCount}
            overallRating={summary.overallRating}
            questions={questions}
          />
        ))}
      </FeedGrid>
    </MainGrid>
  );
}
