import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const IdeaGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 100%;
`;

const IdeaContainer = styled.section`
  padding: 5px;
  margin: 5px 0px;
  background: rebeccapurple;
  color: white;
`;

const IdeaTags = styled.div`
  padding: 5px;
  margin: 0;
  font-size: 0.9rem;
`;

const IdeaTitle = styled.h2`
  padding: 5px;
  margin: 10px 0;
  font-size: 1.2rem;
`;
const IdeaText = styled.p`
  padding: 5px;
  line-height: 1.7rem;
  font-size: 0.8rem;
`;

const IdeaTimestamp = styled.div`
  padding: 5px;
  font-size: 0.7rem;
  color: hotpink;
`;

const IdeaUsername = styled.div`
  padding: 5px;
  font-size: 0.7rem;
  color: hotpink;
`;

const UserAvatar = styled.div`
  background: hotpink;
  align-self: center;
  grid-row: 1 / 3;
  width: 35px;
  height: 35px;
  line-height: 35px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  text-align: center;
  font-size: 0.8rem;
`;

const IdeaBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 1fr 1fr;
  padding: 5px;
  margin: 0;
`;

export default function IdeaPost({
  title,
  text,
  tags,
  timestamp,
  username,
  handleTagClick,
}) {
  console.log('timestamp:', timestamp);
  return (
    <IdeaGrid>
      <IdeaContainer>
        <IdeaTags>
          {tags &&
            tags.map(tag => (
              <Tag key={tag} tagName={tag} handleTagClick={handleTagClick} />
            ))}
        </IdeaTags>
        <IdeaTitle>{title}</IdeaTitle>
        <IdeaText>{text}</IdeaText>
        <IdeaBottom>
          <UserAvatar>{username && username.charAt(0)}</UserAvatar>
          <IdeaUsername>{username}</IdeaUsername>
          <IdeaTimestamp>{timestamp}</IdeaTimestamp>
        </IdeaBottom>
      </IdeaContainer>
    </IdeaGrid>
  );
}
