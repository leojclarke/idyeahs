import React from 'react';
import styled from 'styled-components';
// import {
//   Container,
//   Link,
//   lightColors,
//   darkColors,
// } from 'react-floating-action-button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import IdeaPost from '../ideas/IdeaPost';

library.add(faPlus);

const StyledSection = styled.div`
  position: relative;
`;

const GridArea = styled.div`
  display: grid;
`;

const StyledFloatingButton = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20%;
  right: 1%;
  border-radius: 50%;
  text-align: center;
  font-size: 1.2rem;
  vertical-align: middle;
  line-height: 60px;
  background: rgba(218, 204, 62, 1);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export default function IdeasFeed({ posts }) {
  return (
    <StyledSection>
      <StyledFloatingButton>
        <NavLink to="/ideas/add">
          <FontAwesomeIcon icon="plus" />
        </NavLink>
      </StyledFloatingButton>

      <GridArea>
        {posts.map(post => (
          <IdeaPost
            key={Math.random()}
            title={post.title}
            text={post.text}
            tags={post.tags}
          />
        ))}
      </GridArea>
    </StyledSection>
  );
}
