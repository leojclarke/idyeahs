import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import uid from 'uid';
import { getLocal, setLocal } from './services';
import GlobalStyles from '../misc/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import IdeasFeed from './ideas/IdeasFeed';
import IdeaForm from './ideas/CreateIdea';

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto 70px;
`;

const GridArea = styled.div`
  display: grid;
  padding: 10px 10px;
  color: white;
  overflow-y: scroll;
`;

export default function App() {
  const [ideas, setIdeas] = useState(
    getLocal('ideas') || [
      {
        id: uid(),
        title: 'My Great Idea',
        text: 'Everything Begins With An Idea',
        tags: ['sales'],
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

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Header />
        <GridArea>
          <Route
            exact
            path="/ideas"
            render={() => <IdeasFeed posts={ideas} />}
          />
          <Route
            exact
            path="/ideas/add"
            render={props => (
              <IdeaForm onSubmit={handleSubmit} history={props.history} />
            )}
          />
        </GridArea>
        <Footer />
      </Grid>
    </Router>
  );
}
