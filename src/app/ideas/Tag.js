import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  padding: 3px 6px;
  margin: 0px 5px 0px 0px;
  background: rgba(127, 183, 190, 1);
  border-radius: 2px;
  font-size: 0.7em;
`;
export default function Tag({ tagName }) {
  return <StyledTag>{tagName}</StyledTag>;
}
