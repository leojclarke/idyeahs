import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import uid from 'uid';
import { getLocal, setLocal } from './services';
import GlobalStyles from '../misc/GlobalStyles';
import ideaEntries from './MockIdeasData';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import IdeasFeed from './ideas/IdeasFeed';
import IdeaDetails from './ideas/IdeaDetails';
import IdeaForm from './ideas/CreateIdea';
import GallupTwelveQuestions from './Gallup12Questions';

import FeedbackResultsPage from './FeedbackResults';
import FeedbackForm from './FeedbackForm';

let mockIdeas = ideaEntries;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 70px;
  height: 100vh;
  color: white;
`;

export default function App() {
  const [ideas, setIdeas] = useState(getLocal('ideas') || mockIdeas);
  const [filteredTags, setFilteredTags] = useState('');
  const [responses, setResponses] = useState(
    getLocal('responses') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );
  const [counter, setCounter] = useState(getLocal('counter') || 0);

  useEffect(() => setLocal('ideas', ideas), [ideas]);
  useEffect(() => setLocal('responses', responses), [responses]);
  useEffect(() => setLocal('counter', counter), [counter]);

  function splitToArray(tagString) {
    return tagString.split(',').map(tag => tag.trim());
  }

  function handleIdeaSubmit(event, history) {
    event.preventDefault();
    const form = event.target;
    const newIdea = {
      id: uid(),
      title: form.title.value,
      text: form.text.value,
      tags: splitToArray(form.tags.value),
    };
    setIdeas([newIdea, ...ideas]);
    history.push('/ideas');
  }

  function handleFeedbackSubmit(event, history) {
    event.preventDefault();
    const { target } = event;
    const form = [target.res.value, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const newCounter = counter + 1;
    setCounter(newCounter);
    const responsesSum = responses.map((num, idx) =>
      ((Number(num) + Number(form[idx])) / newCounter).toFixed(2)
    );

    // const newValue = Number(responses[0]) + Number(form.res.value);
    // const newResponses = [newValue, ...responses];
    setResponses(responsesSum);
    history.push('/feedback');
  }

  function handleTagClick(tag) {
    setFilteredTags([...filteredTags, tag]);
  }

  function resetFilter() {
    setFilteredTags('');
  }

  return (
    <Router>
      <Grid>
        <GlobalStyles />

        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header title={'IDYEAHS'} />
              <Home />
            </>
          )}
        />
        <Route
          exact
          path="/ideas"
          render={() => (
            <>
              <Header title={'Ideas'} />
              <IdeasFeed
                posts={ideas}
                tagFilter={filteredTags}
                handleTagClick={handleTagClick}
                resetFilter={resetFilter}
              />
            </>
          )}
        />
        <Route
          exact
          path="/ideas/add"
          render={props => (
            <>
              <Header title={'Add Idea'} />
              <IdeaForm onSubmit={handleIdeaSubmit} history={props.history} />
            </>
          )}
        />
        <Route
          exact
          path="/ideas/details/:id"
          render={props => (
            <>
              <Header title={'IdeasDetails'} />
              <IdeaDetails posts={ideas} {...props} />
            </>
          )}
        />
        <Route
          exact
          path="/feedback"
          render={() => (
            <>
              <Header title={'Feedback'} />
              <FeedbackResultsPage
                responses={responses}
                questions={GallupTwelveQuestions}
              />
            </>
          )}
        />
        <Route
          exact
          path="/feedback/add"
          render={props => (
            <>
              <Header title={'AddFeedback'} />
              <FeedbackForm
                questions={GallupTwelveQuestions}
                onSubmit={handleFeedbackSubmit}
                history={props.history}
              />
            </>
          )}
        />
        <Footer resetFilter={resetFilter} />
      </Grid>
    </Router>
  );
}
