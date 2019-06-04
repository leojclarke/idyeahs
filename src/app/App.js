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

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 70px;
  height: 100vh;
  color: white;
`;

export default function App() {
  const [ideas, setIdeas] = useState(
    getLocal('ideas') || [
      {
        id: uid(),
        title: 'My Great Idea',
        text: 'Everything Begins With An Idea',
        tags: ['sales', 'boom'],
      },
      {
        id: uid(),
        title: 'My Other Great Idea',
        text:
          'No Matter What People Tell You, Words And Ideas Can Change The World',
        tags: ['events', 'logistics', 'boom'],
      },
    ]
  );

  const [filteredTags, setFilteredTags] = useState('');
  const [user, setUser] = useState(getLocal('user') || null);

  useEffect(() => setLocal('ideas', ideas), [ideas]);

  useEffect(() => setLocal('user', user), [user]);

  function splitToArray(tagString) {
    return tagString.split(',').map(tag => tag.trim());
  }

  function handleSubmit(event, history) {
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
      <Grid>
        <GlobalStyles />

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
              <IdeaForm onSubmit={handleSubmit} history={props.history} />
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
          path="/login"
          render={props => (
            <>
              <Header title={'User Login'} />
              <UserLogin
                onSubmit={handleUserLogin}
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
