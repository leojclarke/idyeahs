import React from 'react';
import styled from 'styled-components';
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
  margin: 0px 5px 0px 0px;
  background: rgba(127, 183, 190, 1);
  color: white;
  border-radius: 2px;
  font-size: 0.7em;
`;

export default function IdeasFeed({
  posts,
  tagFilter,
  handleTagClick,
  resetFilter,
}) {
  console.log(tagFilter);
  return (
    <StyledSection>
      {tagFilter && (
        <FilterTitle>
          {tagFilter.map(tag => (
            <StyledTag>{tag}</StyledTag>
          ))}
          <FontAwesomeIcon icon="times" onClick={resetFilter} />
        </FilterTitle>
      )}
      {posts
        .filter(post => post.tags.toString().includes(tagFilter))
        .map(post => (
          <IdeaPost
            key={post.id}
            title={post.title}
            text={post.text}
            tags={post.tags}
            handleTagClick={handleTagClick}
          />
        ))}
    </StyledSection>
  );
}
