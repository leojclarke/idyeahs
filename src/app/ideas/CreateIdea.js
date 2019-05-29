import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: grid;
  padding-bottom: 5px;
  font-size: 0.6em;
  color: rebeccapurple;
`;

const StyledInput = styled.input`
  margin: 0 0 5px 0;
  padding: 5px;
  border: 1px solid lightslategray;
  font-size: 1.3em;
  line-height: 1.6rem;
`;

const StyledTextArea = styled.textarea`
  margin: 0 0 5px 0;
  padding: 5px;
  height: 160px;
  font-size: 1.3em;
  border: 1px solid lightslategray;
`;
const StyledButton = styled.button`
  margin-bottom: 5px;
  padding: 5px;
  background: rgba(218, 204, 62, 1);
  color: white;
  border: 1px solid lightslategray;
  font-size: 1.3em;
`;
const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 60px 180px 60px 60px;
  padding: 10px;
`;

export default function IdeaForm({ onSubmit, history }) {
  return (
    <StyledForm onSubmit={event => onSubmit(event, history)}>
      <StyledLabel>
        title
        <StyledInput
          name="title"
          placeholder="My idea title is..."
          type="text"
        />
      </StyledLabel>
      <StyledLabel>
        idea
        <StyledTextArea
          name="text"
          placeholder="My idea title is..."
          type="textarea"
        />
      </StyledLabel>
      <StyledLabel>
        tags
        <StyledInput
          name="tags"
          placeholder="production, sales, logistics,..."
          type="text"
        />
      </StyledLabel>
      <StyledButton>SUBMIT IDEA</StyledButton>
    </StyledForm>
  );
}
