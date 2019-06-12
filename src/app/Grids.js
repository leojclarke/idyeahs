import React from 'react';
import styled from 'styled-components';

const StandardMainGrid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

const StandardFeedGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;
  color: black;
`;

export function MainGrid() {
  return <StandardMainGrid />;
}

export function FeedGrid() {
  return <StandardFeedGrid />;
}
