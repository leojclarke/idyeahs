import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { getLocal, setLocal } from '../utils/services';
import GlobalStyles from '../misc/GlobalStyles';
import aUser from '../data/ActiveUser';
import mockIdeas from '../data/MockIdeasData';
import usersList from '../data/Users';
import Home from './Home';
import IdeasFeed from './IdeasFeed';
import IdeaForm from './IdeaForm';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  height: 100vh;
  color: white;
`;

export default function App() {
  const [ideas, setIdeas] = useState(getLocal('ideas') || mockIdeas);
  const [users, setUsers] = useState(getLocal('users') || usersList);
  const [activeUser, setActiveUser] = useState(getLocal('activeUser') || aUser);
  const [filteredTags, setFilteredTags] = useState('');
  const [responses, setResponses] = useState(
    getLocal('responses') || Array(12).fill(0)
  );
  const [counter, setCounter] = useState(getLocal('counter') || 0);

  useEffect(() => setLocal('activeUser', activeUser), [activeUser]);
  useEffect(() => setLocal('users', users), [users]);
  useEffect(() => setLocal('ideas', ideas), [ideas]);
  useEffect(() => setLocal('responses', responses), [responses]);
  useEffect(() => setLocal('counter', counter), [counter]);

  function handleIdeaSubmit(newIdea, history) {
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

  function handleLogin(event, history) {
    event.preventDefault();
    const { username } = event.target;
    setActiveUser(username.value);
    history.push('/ideas');
  }

  function handleSignUp(event, history) {
    event.preventDefault();
    setUsers();
    setActiveUser(event.target.username.value);
    history.push('/');
  }

  function resetFilter() {
    setFilteredTags('');
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/ideas"
          render={() => <IdeasFeed posts={ideas} activeUser={activeUser} />}
        />
        <Route
          exact
          path="/ideas/add"
          render={props => (
            <IdeaForm
              onIdeaSubmit={handleIdeaSubmit}
              activeUser={activeUser}
              history={props.history}
            />
          )}
        />
      </Grid>
    </Router>
  );
}
