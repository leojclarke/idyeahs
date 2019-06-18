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
  heading,
  posts,
  activeUser,
  onContextClick,
  onIdeaDelete,
  onStarAdd,
  onStarRemove,
  history,
  showStarred,
}) {
  function getFilterdPosts() {
    return posts.filter(post => {
      return post.stars.find(
        star => star.author.username === activeUser.username
      );
    });
  }
  const displayPosts = showStarred ? getFilterdPosts() : posts;
  return (
    <MainGrid>
      <Header heading={heading} activeUser={activeUser} fab={<AddButton />} />
      <FeedGrid>
        {displayPosts.map(post => (
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
  );
}
