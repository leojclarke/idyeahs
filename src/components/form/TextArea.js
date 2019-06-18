import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  height: 40px;
  padding: 5px 5px;
  border-radius: 3px;
  border: 1px solid #008dff;
  font-size: 0.8em;
  line-height: 1.3rem;
  color: darkslategrey;
  box-sizing: content-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  margin: 0 0 5px;
  height: 160px;
  ::placeholder {
    color: lightslategrey;
    font-size: 0.8rem;
  }
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
