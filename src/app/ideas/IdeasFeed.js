import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IdeaPost from './IdeaPost';

const StyledSection = styled.div`
  padding: 10px;
  overflow: scroll;
`;

const IdeaDetailsLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.link,
  .visited,
  .hover,
  .active {
  }
`;

export default function IdeasFeed({ posts }) {
  return (
    <StyledSection>
      {posts.map(post => (
        <IdeaDetailsLink to={`/ideas/details/${post.id}`} key={Math.random()}>
          <IdeaPost
            key={post.id}
            title={post.title}
            text={post.text}
            tags={post.tags}
          />
        </IdeaDetailsLink>
      ))}
    </StyledSection>
  );
}
