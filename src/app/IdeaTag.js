import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  list-style: none;
  background: #008dff;
  padding: 3px 6px;
  margin: 0px 5px 0px 0px;
  border-radius: 2px;
  font-size: 0.7em;
  text-transform: uppercase;
`;

export default function Tag({ tagName }) {
  return <StyledTag key={tagName.id}>{tagName}</StyledTag>;
}
