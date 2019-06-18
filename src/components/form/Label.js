import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 2rem;
  color: darkslategray;
`;

export default function Label({ form, label, content }) {
  return (
    <StyledLabel form={form}>
      {label}
      {content}
    </StyledLabel>
  );
}
