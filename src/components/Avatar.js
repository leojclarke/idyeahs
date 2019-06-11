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

export function Avatar({ src, alt }) {
  return <MainAvatar src={src} alt={alt} />;
}

export function CardAvatar({ src, alt }) {
  return <MediumAvatar src={src} alt={alt} />;
}

export function CommentAvatar({ src, alt }) {
  return <SmallAvatar src={src} alt={alt} />;
}
