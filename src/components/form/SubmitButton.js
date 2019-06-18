import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  background: #008dff;
  color: white;
  border-radius: 3px;
  border: 1px solid #008dff;
  font-size: 1rem;
  font-weight: 500;
  font-family: Rubik, Roboto, open, sans-serif;
  text-transform: uppercase;
  text-align: center;

  a {
    text-decoration: none;
  }
`;

export default function SubmitButton({ value }) {
  return <StyledButton>{value}</StyledButton>;
}
