import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import uid from 'uid';
import { getLocal, setLocal } from '../utils/services';
import GlobalStyles from '../misc/GlobalStyles';
import mockIdeas from '../data/MockIdeasData';
import Home from './pages/home/Home';
import UserProfile from './pages/user/UserProfile';
import IdeasFeed from './pages/ideas/IdeasFeedNew';
import IdeasDetails from './pages/ideas/IdeasDetailsNew';
// import IdeaForm from './pages/ideas/SubmitIdea';
// import IdeaDetails from './pages/ideas/IdeaDetails';
// import FeedbackResultsPage from './pages/feedback/FeedbackResults';
// import FeedbackForm from './pages/feedback/FeedbackForm';
import UserLogin from './pages/login/UserLogin';
import SignUp from './pages/signup/SignUp';
import SignUpStepTwo from './pages/signup/SignUpStepTwo';
import SignUpSuccess from './pages/signup/SignUpSuccess';
import usersList from '../data/Users';
import FeedbackQuestions from '../data/FeedbackQuestions';

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
        <Route
          exact
          path="/login"
          render={props => (
            <UserLogin onLogin={handleLogin} history={props.history} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <SignUp onSubmit={handleSignUp} history={props.history} />
          )}
        />
        <Route exact path="/signup-step-two" component={SignUpStepTwo} />
        <Route exact path="/signup-success" component={SignUpSuccess} />
        <Route exact path="/ideas" component={IdeasFeed} />
        <Route exact path="/ideas/details" component={IdeasDetails} />
        <Route exact path="/user" component={UserProfile} />

        {/* <Route
          exact
          path="/ideas/add"
          render={props => (
            <IdeaForm
              onSubmit={handleIdeaSubmit}
              username={activeUser}
              history={props.history}
            />
          )}
        />
        <Route
          exact
          path="/ideas/details/:id"
          render={props => <IdeaDetails posts={ideas} {...props} />}
        />
        <Route
          exact
          path="/feedback"
          render={() => (
            <>
              <FeedbackResultsPage
                responses={responses}
                counter={counter}
                questions={FeedbackQuestions}
              />
            </>
          )}
        />
        <Route
          exact
          path="/feedback/add"
          render={props => (
            <FeedbackForm
              questions={FeedbackQuestions}
              handleFeedbackSubmit={handleFeedbackSubmit}
              history={props.history}
            />
          )}
        /> */}
      </Grid>
    </Router>
  );
}
