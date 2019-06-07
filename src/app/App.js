import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import uid from 'uid';
import { getLocal, setLocal } from './services';
import GlobalStyles from './misc/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import IdeasFeed from './pages/ideas/IdeasFeed';
import IdeaDetails from './pages/ideas/IdeaDetails';
import IdeaForm from './pages/ideas/CreateIdea';
import UserLogin from './UserLogin';
import mockIdeas from './MockIdeasData';
import GallupTwelveQuestions from './Gallup12Questions';
import FeedbackResultsPage from './FeedbackResults';
import FeedbackForm from './FeedbackForm';

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
    getLocal('responses') || Array(12).fill(0)
  );
  const [counter, setCounter] = useState(getLocal('counter') || 0);
  const [user, setUser] = useState(getLocal('user') || null);

  useEffect(() => setLocal('ideas', ideas), [ideas]);
  useEffect(() => setLocal('responses', responses), [responses]);
  useEffect(() => setLocal('counter', counter), [counter]);

  useEffect(() => setLocal('user', user), [user]);

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

  function handleFeedbackSubmit(answers, history) {
    const newCounter = counter + 1;
    setCounter(newCounter);
    const responsesSum = responses.map(
      (number, index) => Number(number) + Number(answers[index])
    );
    setResponses(responsesSum);
    history.push('/feedback');
  }

  function handleTagClick(tag) {
    setFilteredTags([...filteredTags, tag]);
  }

  function handleUserLogin(event, history) {
    event.preventDefault();
    setUser(event.target.username.value);
    history.push('/');
  }

  function resetFilter() {
    setFilteredTags('');
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header title={'IDYEAHS'} />
              <Home user={user} />
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
              <Header title={'Ideas Details'} />
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
                counter={counter}
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
              <Header title={'Add Feedback'} />
              <FeedbackForm
                questions={GallupTwelveQuestions}
                handleFeedbackSubmit={handleFeedbackSubmit}
                history={props.history}
              />
            </>
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <>
              <Header title={'User Login'} />
              <UserLogin
                handleLogin={handleUserLogin}
                history={props.history}
                username={user}
              />
            </>
          )}
        />
        <Footer resetFilter={resetFilter} />
      </Grid>
    </Router>
  );
}
