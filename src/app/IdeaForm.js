import React from 'react';
import styled from 'styled-components';
import uid from 'uid';

const StyledLabel = styled.label`
  display: grid;
  margin: 0 0 5px 0;
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
  height: 80px;
  font-size: 1.3em;
  border: 1px solid lightslategray;
`;
const StyledButton = styled.button`
  margin: 0 0 5px 0;
  padding: 5px;
  background: rgba(218, 204, 62, 1);
  color: white;
  border: 1px solid lightslategray;
  font-size: 1.3em;
`;
const StyledForm = styled.form`
  display: grid;
`;

export default function IdeaForm({ onSubmitIdea }) {
  function splitToArray(tagString) {
    return tagString.split(',').map(tag => tag.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onSubmitIdea({
      id: uid(),
      title: form.title.value,
      text: form.text.value,
      tags: splitToArray(form.tags.value),
    });
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
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
