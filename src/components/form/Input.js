import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid blue;
  font-size: 0.8em;
  line-height: 16px;
  color: darkslategrey;
  box-sizing: content-box;

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
