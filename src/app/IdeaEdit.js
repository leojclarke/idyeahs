import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { findIdeaByIndex } from '../utils/utils';
import Label from '../components/form/Label';
import Input from '../components/form/Input';
import TextArea from '../components/form/TextArea';
import SubmitButton from '../components/form/SubmitButton';
moment.locale('de');

const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

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
  width: 100%;

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
    color: hotpink;
  }
`;

export default function IdeaEdit({ posts, id, onIdeaEdit, history }) {
  const ideaId = findIdeaByIndex(id, posts);

  const { title, text, tags } = posts[ideaId];

  function splitToArray(tagString) {
    return tagString.split(',').map(tag => tag.trim());
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const editedIdea = {
      ...posts[ideaId],
      title: form.title.value,
      text: form.text.value,
      tags: splitToArray(form.tags.value),
      timestamp: moment()._d,
    };
    const newIdeas = [
      ...posts.slice(0, ideaId),
      editedIdea,
      ...posts.slice(ideaId + 1),
    ];
    onIdeaEdit(newIdeas, history);
  }

  return (
    <Grid>
      <Header>
        <StyledNavLink to="/ideas">
          <Icon icon={faArrowLeft} />
        </StyledNavLink>
        <PageTitle>Edit "{title}"</PageTitle>
      </Header>
      <Main>
        <StyledForm
          id="editIdea"
          onSubmit={event => {
            handleFormSubmit(event);
          }}
        >
          <Label
            form="editIdea"
            content={
              <Input
                name="title"
                placeholder="My idea title is..."
                type="text"
                value={title}
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
                value={text}
              />
            }
            label="My idea"
          />

          <Label
            form="editIdea"
            content={
              <Input
                name="tags"
                placeholder="production, sales, logistics,..."
                type="text"
                value={tags.join()}
              />
            }
            label="Idea tags"
          />
          <p>Separate tags with a comma</p>
          <SubmitButton value="SUBMIT" />
        </StyledForm>
      </Main>
    </Grid>
  );
}
IdeaEdit.propTypes = {
  onSubmit: PropTypes.func,
  history: PropTypes.object,
};
