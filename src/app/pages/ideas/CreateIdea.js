import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import SubmitButton from '../../components/SubmitButton';

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 65px 185px 65px 60px;
  padding: 10px;
`;

export default function IdeaForm({ onSubmit, history }) {
  return (
    <StyledForm id="createIdea" onSubmit={event => onSubmit(event, history)}>
      <Label
        form={'createIdea'}
        content={
          <Input name="title" placeholder="My idea title is..." type="text" />
        }
        label="title"
      />

      <Label
        form="createIdea"
        content={
          <TextArea
            name="text"
            placeholder="My idea title is..."
            type="textarea"
          />
        }
        label="idea"
      />
      <Label
        form="createIdea"
        content={
          <Input
            name="tags"
            placeholder="production, sales, logistics,..."
            type="text"
          />
        }
        label="tags"
      />
      <SubmitButton value="SUBMIT" />
    </StyledForm>
  );
}
IdeaForm.propTypes = {
  onSubmit: PropTypes.func,
  history: PropTypes.object,
};
