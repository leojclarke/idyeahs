import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import SubmitButton from '../../components/form/SubmitButton';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';

library.add(faTimes, faArrowRight, faArrowLeft);

const Grid = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  padding: 10px;
  align-items: start;
  justify-items: center;
  color: darkslategray;
`;

const Header = styled.header`
  display: grid;
  grid-template-rows: 50px 70px;
  padding: 10px;
  width: 100%;
  align-items: left;
  justify-items: left;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &:active,
  :visited,
  :focus-within {
    color: red;
  }
`;

export default function UserLogin({ onLogin: handleLogin, history }) {
  return (
    <Grid>
      <Header>
        <StyledNavLink to="/">
          <Icon icon={faArrowLeft} />
        </StyledNavLink>
        <h1>LOG IN</h1>
      </Header>
      <StyledForm id="login" onSubmit={event => handleLogin(event, history)}>
        <Label
          form="login"
          content={
            <Input name="username" placeholder="Username..." type="text" />
          }
          label="Enter your email or username"
        />
        <Label
          form="login"
          content={
            <Input name="password" placeholder="Password..." type="password" />
          }
          label="Enter your password"
        />
        <SubmitButton value="Log in" />
      </StyledForm>
    </Grid>
  );
}
