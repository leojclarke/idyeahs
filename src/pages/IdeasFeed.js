import React from 'react';
import Header from '../components/Header';
import IdeaCard from '../components/IdeaCard';
import { AddButton } from '../components/FAB';
import { MainGrid, FeedGridIdeas } from '../components/Grids.elements';

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
  function getFilteredPosts() {
    return posts.filter(post => {
      return post.stars.find(
        star => star.author.username === activeUser.username
      );
    });
  }
  const displayPosts = showStarred ? getFilteredPosts() : posts;
  return (
    <MainGrid>
      <Header
        heading={heading}
        history={history}
        activeUser={activeUser}
        fab={!showStarred && <AddButton />}
      />
      <FeedGridIdeas>
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
      </FeedGridIdeas>
    </MainGrid>
  );
}
