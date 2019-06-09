import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: grid;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 2rem;
  color: #6558f5;
`;

export default function Label({ form, label, content }) {
  return (
    <StyledLabel form={form}>
      {label}
      {content}
    </StyledLabel>
  );
}
