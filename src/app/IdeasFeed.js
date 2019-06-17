import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import IdeaCard from './IdeaCard';
import { AddButton } from '../components/FAB';

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

export default function IdeasFeed({
  posts,
  activeUser,
  onContextClick,
  onIdeaDelete,
  onStarClick,
  history,
}) {
  return (
    <>
      <MainGrid>
        <Header heading="Ideas" activeUser={activeUser} fab={<AddButton />} />
        <FeedGrid>
          {posts.map(post => (
            <IdeaCard
              key={post.id}
              id={post.id}
              title={post.title}
              text={post.text}
              tags={post.tags}
              timestamp={post.timestamp}
              author={post.author}
              stars={post.stars}
              comments={post.comments}
              onContextClick={onContextClick}
              onStarClick={onStarClick}
              onIdeaDelete={onIdeaDelete}
              history={history}
            />
          ))}
        </FeedGrid>
      </MainGrid>
    </>
  );
}
