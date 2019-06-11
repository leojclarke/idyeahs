import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import uid from 'uid';
import { getLocal, setLocal } from '../utils/services';
import GlobalStyles from '../misc/GlobalStyles';
import mockIdeas from '../data/MockIdeasData';
import usersList from '../data/Users';
import Home from './Home';
import IdeasFeed from './IdeasFeedNew';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
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
  const [activeUser, setActiveUser] = useState(getLocal('activeUser') || null);
  const [users, setUsers] = useState(getLocal('users') || usersList);

  useEffect(() => setLocal('ideas', ideas), [ideas]);
  useEffect(() => setLocal('responses', responses), [responses]);
  useEffect(() => setLocal('counter', counter), [counter]);

  useEffect(() => setLocal('activeUser', activeUser), [activeUser]);
  useEffect(() => setLocal('users', users), [users]);

  function splitToArray(tagString) {
    return tagString.split(',').map(tag => tag.trim());
  }

  function handleIdeaSubmit(event, date, username, history) {
    event.preventDefault();
    console.log('activeUser:', username);
    const form = event.target;
    const newIdea = {
      id: uid(),
      title: form.title.value,
      text: form.text.value,
      tags: splitToArray(form.tags.value),
      timestamp: date,
      username: username,
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

  function handleLogin(event, history) {
    event.preventDefault();
    console.log('Users: ', users);
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
        <Route exact path="/ideas" component={IdeasFeed} />
      </Grid>
    </Router>
  );
}
