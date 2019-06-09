import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: grid;
  width: 355px;
  height: 46px;
  background: #6558f5;
  color: white;
  border-radius: 3px;
  border: 1px solid #6558f5;
  font-size: 1rem;
  text-decoration: none;

  a {
    text-decoration: none;
  }
`;

export default function SubmitButton({ value, className }) {
  return <StyledButton className={className}>{value}</StyledButton>;
}
