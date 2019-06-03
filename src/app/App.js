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

let mockIdeas = ideaEntries;

console.log(mockIdeas);
const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 70px;
  height: 100vh;
  color: white;
`;

export default function App() {
  const [ideas, setIdeas] = useState(getLocal('ideas') || mockIdeas);

  const [filteredTags, setFilteredTags] = useState('');

  useEffect(() => setLocal('ideas', ideas), [ideas]);

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
              <IdeaForm onSubmit={handleSubmit} history={props.history} />
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
        <Footer resetFilter={resetFilter} />
      </Grid>
    </Router>
  );
}
