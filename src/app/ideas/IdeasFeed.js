import React from 'react';
import styled from 'styled-components';
import IdeaPost from './IdeaPost';

const StyledSection = styled.div`
  display: grid;
  padding: 10px;
  overflow: scroll;
`;

export default function IdeasFeed({ posts }) {
  return (
    <StyledSection>
      {posts.map(post => (
        <IdeaPost
          key={Math.random()}
          title={post.title}
          text={post.text}
          tags={post.tags}
        />
      ))}
    </StyledSection>
  );
}
