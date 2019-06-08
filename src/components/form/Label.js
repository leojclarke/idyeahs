import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: grid;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 0.7em;
  color: rebeccapurple;
`;

export default function Label({ form, label, content }) {
  return (
    <StyledLabel form={form}>
      {label}
      {content}
    </StyledLabel>
  );
}
