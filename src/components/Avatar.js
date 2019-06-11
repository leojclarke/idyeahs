import React from 'react';
import styled from 'styled-components';

const MainAvatar = styled.img`
  clip-path: circle(30px at center);
  width: 60px;
  margin: 10px;
  border: 1px solid white;
  border-radius: 50%;
`;

const MediumAvatar = styled.img`
  clip-path: circle(25px at center);
  width: 50px;
  margin: 10px;
  border: 1px solid #008dff;
  border-radius: 50%;
`;

const SmallAvatar = styled.img`
  clip-path: circle(15px at center);
  width: 30px;
  margin: 10px;
  border: 1px solid #008dff;
  border-radius: 50%;
`;

export function Avatar({ src }) {
  return <MainAvatar src={src} />;
}

export function CardAvatar({ src }) {
  return <MediumAvatar src={src} />;
}

export function CommentAvatar({ src }) {
  return <SmallAvatar src={src} />;
}
