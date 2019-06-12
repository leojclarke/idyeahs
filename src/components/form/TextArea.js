import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  margin: 0 0 5px 0;
  padding: 5px;
  height: 160px;
  font-size: 1.3em;
  border: 1px solid rebeccapurple;
  border-radius: 3px;
  color: rebeccapurple;
`;

export default function TextArea({ name, placeholder, value }) {
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
}
