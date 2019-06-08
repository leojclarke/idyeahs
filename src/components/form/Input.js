import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0 0 5px 0;
  padding: 5px;
  border: 1px solid rebeccapurple;
  font-size: 1.3em;
  line-height: 1.6rem;
  color: rebeccapurple;
`;

export default function Input({ name, placeholder, type }) {
  return <StyledInput name={name} placeholder={placeholder} type={type} />;
}
