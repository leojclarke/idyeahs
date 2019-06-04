import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-bottom: 5px;
  padding: 5px;
  background: rgba(218, 204, 62, 1);
  color: white;
  border: 1px solid rgba(218, 204, 62, 1);
  font-size: 20px;
`;

export default function SubmitButton({ value }) {
  return <StyledButton>{value}</StyledButton>;
}
