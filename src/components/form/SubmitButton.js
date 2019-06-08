import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: grid;
  width: 331px;
  height: 46px;
  background: #6558f5;
  color: white;
  border-radius: 3px;
  border: 1px solid #6558f5;
  font-size: 17px;
`;

export default function SubmitButton({ value, style }) {
  return <StyledButton style={style}>{value}</StyledButton>;
}
