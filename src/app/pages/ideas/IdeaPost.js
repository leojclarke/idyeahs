import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const IdeaContainer = styled.section`
  padding: 20px;
  margin: 10px 0px;
  background: rebeccapurple;
`;
const IdeaTitle = styled.h2`
  font-size: 1.2rem;
`;
const IdeaText = styled.p`
  font-size: 0.8rem;
`;

const IdeaTimestamp = styled.p`
  font-size: 0.7rem;
  color: hotpink;
`;

export default function IdeaPost({
  title,
  text,
  tags,
  timestamp,
  handleTagClick,
}) {
  console.log('timestamp:', timestamp);
  return (
    <IdeaContainer>
      {tags &&
        tags.map(tag => (
          <Tag key={tag} tagName={tag} handleTagClick={handleTagClick} />
        ))}
      <IdeaTitle>{title}</IdeaTitle>
      <IdeaText>{text}</IdeaText>
      <IdeaTimestamp>{timestamp}</IdeaTimestamp>
    </IdeaContainer>
  );
}
