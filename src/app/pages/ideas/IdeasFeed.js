import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import IdeaPost from './IdeaPost';

library.add(faTimes);

const StyledSection = styled.div`
  padding: 10px;
  overflow: scroll;
`;

const FilterTitle = styled.div`
  color: rebeccapurple;
`;

const StyledTag = styled.span`
  padding: 3px 6px;
  margin-right: 5px;
  background: #7fb7be;
  color: white;
  border-radius: 2px;
  font-size: 0.7em;
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

export default function IdeasFeed({
  posts,
  tagFilter,
  onTagClick,
  resetFilter,
}) {
  return (
    <StyledSection>
      {tagFilter && (
        <FilterTitle>
          {tagFilter.map(tagName => (
            <StyledTag key={tagName.id}>{tagName}</StyledTag>
          ))}
          <FontAwesomeIcon icon="times" onClick={resetFilter} />
        </FilterTitle>
      )}
      {posts
        .filter(post => post.tags.toString().includes(tagFilter))
        .map(post => (
          <IdeaDetailsLink to={`/ideas/details/${post.id}`} key={post.id}>
            <IdeaPost
              key={post.id}
              title={post.title}
              text={post.text}
              tags={post.tags}
              timestamp={post.timestamp}
              username={post.username}
              onTagClick={onTagClick}
            />
          </IdeaDetailsLink>
        ))}
    </StyledSection>
  );
}
