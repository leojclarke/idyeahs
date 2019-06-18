import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { getLocal, setLocal } from '../utils/services';
import { findIdeaByIndex, findCommentByIndex } from '../utils/utils';
import GlobalStyles from '../misc/GlobalStyles';
import mockIdeas from '../data/MockIdeasData';
import feedback from '../data/Feedback';
import responsesData from '../data/Responses';
import usersList from '../data/Users';
import Home from './Home';
import IdeasFeed from './IdeasFeed';
import IdeaForm from './IdeaForm';
import IdeaEdit from './IdeaEdit';
import IdeaComment from './IdeaComment';
import IdeaDetailsView from './IdeaDetailsView';
import Login from './Login';
import FeedbackResultsPage from './FeedbackResults';
import FeedbackForm from './FeedbackForm';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  height: 100vh;
`;

export default function App() {
  const [ideas, setIdeas] = useState(getLocal('ideas') || mockIdeas);
  const [responses, setResponses] = useState(
    getLocal('responses') || responsesData
  );
  const [users, setUsers] = useState(getLocal('users') || usersList);
  const [isLoggedIn, setIsLoggedIn] = useState(getLocal('isLoggedIn') || false);
  const [activeUser, setActiveUser] = useState(getLocal('activeUser') || []);

  const [counter, setCounter] = useState(getLocal('counter') || 0);

  useEffect(() => setLocal('activeUser', activeUser), [activeUser]);
  useEffect(() => setLocal('users', users), [users]);
  useEffect(() => setLocal('isLoggedIn', isLoggedIn), [isLoggedIn]);
  useEffect(() => setLocal('ideas', ideas), [ideas]);
  useEffect(() => setLocal('responses', responses), [responses]);
  useEffect(() => setLocal('counter', counter), [counter]);

  function handleIdeaSubmit(newIdeas, history) {
    setIdeas(newIdeas);
    history.push('/ideas');
  }

  function handleIdeaDelete(id, history) {
    const index = findIdeaByIndex(id, ideas);
    setIdeas([...ideas.slice(0, index), ...ideas.slice(index + 1)]);
    history.push('/ideas');
  }

  function handleCommentSubmit(id, newComment, history) {
    const newIdeas = ideas.slice();
    const index = findIdeaByIndex(id, newIdeas);
    const comments = newIdeas[index].comments;
    const newComments = [...comments, newComment];
    newIdeas[index].comments = newComments;
    setIdeas(newIdeas);
    history.push(`/ideas/${id}/comment`);
  }

  function handleCommentDelete(id, ideaId) {
    const newIdeas = ideas.slice();
    const ideasIndex = findIdeaByIndex(ideaId, newIdeas);
    const comments = newIdeas[ideasIndex].comments;
    const commentsIndex = findCommentByIndex(id, comments);
    const newComments = [
      ...comments.slice(0, commentsIndex),
      ...comments.slice(commentsIndex + 1),
    ];
    newIdeas[ideasIndex].comments = newComments;
    setIdeas(newIdeas);
  }

  function handleCommentEdit(ideaId, editedComment) {
    const newIdeas = ideas.slice();
    const ideasIndex = findIdeaByIndex(ideaId, newIdeas);
    const commentsIndex = findCommentByIndex(
      editedComment.id,
      newIdeas[ideasIndex].comments
    );
    newIdeas[ideasIndex].comments[commentsIndex] = editedComment;
    setIdeas(newIdeas);
  }

  function handleStarClick(id, isStarred, history) {
    const index = findIdeaByIndex(id, ideas);
    isStarred ? ideas[index].stars-- : ideas[index].stars++;
    history.push('/ideas');
  }

  function handleStarClickDetails(id, isStarred, history) {
    const index = findIdeaByIndex(id, ideas);
    isStarred ? ideas[index].stars-- : ideas[index].stars++;
    history.push(`/ideas/${id}/details`);
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

  function handleLogin(loggedInUser, history) {
    setActiveUser(loggedInUser);
    setIsLoggedIn(true);
    history.push('/ideas');
  }

  function handleLogOut(history) {
    setActiveUser('');
    setIsLoggedIn(false);
    history.push('/');
  }

  function handleProceed(history) {
    isLoggedIn ? history.push('/ideas') : history.push('/');
  }

  function handleSignUp(event, history) {
    event.preventDefault();
    setUsers();
    setActiveUser(event.target.username.value);
    history.push('/');
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              isLoggedIn={isLoggedIn}
              onLogOut={handleLogOut}
              onProceed={handleProceed}
              history={props.history}
            />
          )}
        />
        <Route
          exact
          path="/ideas"
          render={props => (
            <IdeasFeed
              posts={ideas}
              activeUser={activeUser}
              onIdeaDelete={handleIdeaDelete}
              onStarClick={handleStarClick}
              history={props.history}
            />
          )}
        />

        <Route
          exact
          path="/ideas/add"
          render={props => (
            <IdeaForm
              onIdeaSubmit={handleIdeaSubmit}
              activeUser={activeUser}
              history={props.history}
              posts={ideas}
            />
          )}
        />
        <Route
          exact
          path="/ideas/:id/edit"
          render={props => (
            <IdeaEdit
              posts={ideas}
              id={props.match.params.id}
              history={props.history}
              onIdeaEdit={handleIdeaSubmit}
              editor={activeUser}
            />
          )}
        />
        <Route
          exact
          path="/ideas/:id/comment"
          render={props => (
            <IdeaComment
              posts={ideas}
              ideaId={props.match.params.id}
              history={props.history}
              author={activeUser}
              onCommentSubmit={handleCommentSubmit}
              onCommentEdit={handleCommentEdit}
              onCommentDelete={handleCommentDelete}
            />
          )}
        />
        <Route
          exact
          path="/ideas/:id/details"
          render={props => (
            <IdeaDetailsView
              posts={ideas}
              id={props.match.params.id}
              history={props.history}
              onCommentSubmit={handleCommentSubmit}
              onCommentEdit={handleCommentEdit}
              onCommentDelete={handleCommentDelete}
              onStarClick={handleStarClickDetails}
            />
          )}
        />

        <Route
          exact
          path="/feedback"
          render={props => (
            <FeedbackResultsPage
              responses={responses}
              questions={feedback}
              activeUser={activeUser}
            />
          )}
        />
        <Route
          exact
          path="/feedback/add"
          render={props => (
            <FeedbackForm
              questions={feedback}
              handleFeedbackSubmit={handleFeedbackSubmit}
              history={props.history}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login
              users={users}
              history={props.history}
              onLogin={handleLogin}
            />
          )}
        />
      </Grid>
    </Router>
  );
}
