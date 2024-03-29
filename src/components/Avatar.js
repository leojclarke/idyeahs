import React from 'react';
import styled from 'styled-components';

const MainAvatar = styled.img`
  clip-path: circle(30px at center);
  width: 60px;
  margin: 10px;
  border-radius: 50%;
  background: #008dff;
`;

const LargeAvatar = styled(MainAvatar)`
  clip-path: circle(50px at center);
  width: 100px;
`;

const MediumAvatar = styled(MainAvatar)`
  clip-path: circle(25px at center);
  width: 50px;
  margin: 10px;
  border-radius: 50%;
  background: #008dff;
`;

const SmallAvatar = styled(MainAvatar)`
  clip-path: circle(15px at center);
  width: 30px;
  margin: 10px;
`;

export function Avatar({ src, alt, onClick }) {
  return <MainAvatar src={src} alt={alt} onClick={onClick} />;
}

export function ProfileAvatar({ src, alt, onClick }) {
  return <LargeAvatar src={src} alt={alt} onClick={onClick} />;
}

export function CardAvatar({ src, alt, onClick }) {
  return <MediumAvatar src={src} alt={alt} onClick={onClick} />;
}

export function CommentAvatar({ src, alt, onClick }) {
  return <SmallAvatar src={src} alt={alt} onClick={onClick} />;
}
