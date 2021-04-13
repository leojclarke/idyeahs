import React from 'react';
import styled from 'styled-components';
import uid from 'uid';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Label from '../components/form/Label';
import Input from '../components/form/Input';
import TextArea from '../components/form/TextArea';
import SubmitButton from '../components/form/SubmitButton';
import { MainGrid } from './Grids.elements';
moment.locale('de');

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid lightslategray;
  overflow: scroll;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  overflow: scroll;
`;

const PageTitle = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

const StyledForm = styled.form`
  padding: 0 20px;
  align-items: center;
  p {
    font-size: 0.7rem;
    color: lightslategray;
    padding-bottom: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &:active,
  :visited,
  :focus-within {
    color: darkslategray;
  }
`;

export default function IdeaForm({ posts, onIdeaSubmit, history, activeUser }) {
  function splitToArray(tagString) {
    return tagString.split(',').map(tag => tag.trim());
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newIdeas = [
      {
        id: uid(),
        title: form.title.value,
        text: form.text.value,
        tags: splitToArray(form.tags.value),
        timestamp: moment()._d,
        author: activeUser,
        stars: [],
        comments: [],
      },
      ...posts,
    ];
    onIdeaSubmit(newIdeas, history);
  }

  return (
    <MainGrid>
      <Header>
        <StyledNavLink to="/ideas">
          <Icon icon={faArrowLeft} />
        </StyledNavLink>
        <PageTitle>ADD IDEA</PageTitle>
      </Header>
      <Main>
        <StyledForm
          id="createIdea"
          onSubmit={event => {
            handleFormSubmit(event);
          }}
        >
          <Label
            form={'createIdea'}
            content={
              <Input
                name="title"
                placeholder="My idea title is..."
                type="text"
              />
            }
            label="Idea title"
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
            label="My idea"
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
            label="Idea tags"
          />
          <p>Separate tags with a comma</p>

          <SubmitButton value="SUBMIT" />
        </StyledForm>
      </Main>
    </MainGrid>
  );
}
IdeaForm.propTypes = {
  onSubmit: PropTypes.func,
  history: PropTypes.object,
};
