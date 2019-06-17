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

export default function IdeasFeed({
  posts,
  activeUser,
  onContextClick,
  onIdeaDelete,
  onStarAdd,
  onStarRemove,
  history,
}) {
  return (
    <>
      <MainGrid>
        <Header heading="Ideas Feed" activeUser={activeUser} />
        <FeedGrid>
          {posts.map(post => (
            <IdeaCard
              key={post.id}
              post={post}
              activeUser={activeUser}
              onContextClick={onContextClick}
              onStarAdd={onStarAdd}
              onStarRemove={onStarRemove}
              onIdeaDelete={onIdeaDelete}
              history={history}
            />
          ))}
        </FeedGrid>
      </MainGrid>
    </>
  );
}
