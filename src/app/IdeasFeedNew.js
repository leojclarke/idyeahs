import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import IdeaCard from './IdeaCard';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

const Feed = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;
  color: black;
`;

export default function IdeasFeed({ posts }) {
  return (
    <Grid>
      <Header heading="Ideas Feed" />
      <Feed>
        {posts.map(post => (
          <IdeaCard
            key={post.id}
            title={post.title}
            text={post.text}
            tags={post.tags}
            timestamp={post.timestamp}
            author={post.author}
          />
        ))}
      </Feed>
    </Grid>
  );
}
