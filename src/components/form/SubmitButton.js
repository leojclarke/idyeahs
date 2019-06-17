import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: grid;
  background: #008dff;
  color: white;
  border-radius: 3px;
  border: 1px solid #008dff;
  font-size: 1rem;
  font-weight: 500;
  font-family: Rubik, Roboto, open, sans-serif;
  text-decoration: none;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }
`;

export default function SubmitButton({ value, className }) {
  return <StyledButton className={className}>{value}</StyledButton>;
}
