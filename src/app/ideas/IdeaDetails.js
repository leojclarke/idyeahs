import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag';

library.add(faTimes);

const IdeaContainer = styled.section`
  display: grid;
  grid-template-rows: 30px auto;
  padding: 20px;
  margin: 10px;
  overflow: scroll;
  background: lightslategray;
`;
const IdeaTitle = styled.h2`
  font-size: 1.2rem;
`;
const IdeaText = styled.p`
  font-size: 1rem;
  line-height: 1.8rem;
`;

const StyledNavLink = styled(NavLink)`
  display: grid;
  justify-items: end;
  color: white;
  font-size: 1.4rem;
  text-decoration: none;
  &.active:focus,
  .:visited {
    color: white;
  }
`;

export default function IdeaDetails({ match, posts }) {
  function findIdeaByIndex(id, posts) {
    const ideaIndex = posts.map(idea => idea.id).indexOf(id);
    return ideaIndex;
  }

  const ideaId = findIdeaByIndex(match.params.id, posts);

  const { title, text, tags } = posts[ideaId];

  return (
    <IdeaContainer>
      <StyledNavLink to="/ideas">
        <FontAwesomeIcon icon="times" />
      </StyledNavLink>
      <div>
        {tags && tags.map(tag => <Tag key={tag} tag={tag} />)}
        <IdeaTitle>{title}</IdeaTitle>
        <IdeaText>{text}</IdeaText>
      </div>
    </IdeaContainer>
  );
}
