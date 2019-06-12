import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import IdeaCard from './IdeaCard';

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

const FeedGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;
  color: black;
`;

export default function IdeasFeed({ posts, activeUser, onContextClick }) {
  return (
    <>
      <MainGrid>
        <Header heading="Ideas Feed" activeUser={activeUser} />
        <FeedGrid>
          {posts.map(post => (
            <IdeaCard
              key={post.id}
              title={post.title}
              text={post.text}
              tags={post.tags}
              timestamp={post.timestamp}
              author={post.author}
              onContextClick={onContextClick}
            />
          ))}
        </FeedGrid>
      </MainGrid>
    </>
  );
}
