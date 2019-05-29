import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const IdeaContainer = styled.section`
  padding: 20px;
  margin: 10px 0px;
  background: rebeccapurple;
`;
const IdeaTitle = styled.h2`
  font-size: 1.2em;
`;
const IdeaText = styled.p`
  font-size: 0.8em;
`;

export default function IdeaPost({ title, text, tags }) {
  return (
    <IdeaContainer>
      <IdeaTitle>{title}</IdeaTitle>
      <IdeaText>{text}</IdeaText>
      {tags && tags.map(tag => <Tag key={tag} tag={tag} />)}
    </IdeaContainer>
  );
}
