import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  background: #008dff;
  padding: 3px 6px;
  margin: 0 5px 0 0;
  border-radius: 2px;
  font-size: 0.7em;
  text-transform: uppercase;
`;

export default function Tag({ tagName }) {
  return <StyledTag>{tagName}</StyledTag>;
}
