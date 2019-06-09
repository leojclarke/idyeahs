import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #6558f5;
  font-size: 0.8em;
  line-height: 1.6rem;
  color: darkslategrey;

  ::placeholder {
    color: lightslategrey;
    font-size: 0.8rem;
  }
`;

export default function Select({ name, placeholder, options }) {
  return (
    <StyledSelect
      name={name}
      placeholder={placeholder}
      type={type}
      options={options}
    />
  );
}
