import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  height: 40px;
  padding: 0 5px;
  border-radius: 3px;
  border: 1px solid #008dff;
  font-size: 0.8em;
  line-height: 1.3rem;
  color: darkslategrey;
  box-sizing: content-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;

  ::placeholder {
    color: lightslategrey;
    font-size: 0.8rem;
  }
`;

export default function Input({ name, placeholder, type, value }) {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      type={type}
      defaultValue={value}
    />
  );
}
