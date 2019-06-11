import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import Label from './components/form/Label';
import Input from './components/form/Input';
import TextArea from './components/form/TextArea';
import SubmitButton from './components/form/SubmitButton';

moment.locale('de');

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 65px 185px 65px 60px;
  padding: 10px;
`;

export default function IdeaForm({ onSubmit, history, username }) {
  const [date, setDate] = useState(moment().format('Do MMM YYYY, HH:MM a'));

  return (
    <StyledForm
      id="createIdea"
      onSubmit={event => {
        setDate(date);
        onSubmit(event, date, username, history);
      }}
    >
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
