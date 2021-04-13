import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import SubmitButton from '../components/form/SubmitButton';
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import { FormGrid } from '../components/Grids.elements';

library.add(faTimes, faArrowRight, faArrowLeft);

const Header = styled.header`
  display: grid;
  grid-template-rows: 50px 70px;
  width: 100%;
  align-items: left;
  justify-items: left;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function UserLogin({ users, onLogin, history }) {
  function handleLogin(event) {
    event.preventDefault();
    const login = event.target;

    const loginName = login.name.value;
    const loginPassword = login.password.value;

    const loggedInUser = users.find(
      user => user.email === loginName || user.username === loginName
    );

    try {
      if (loggedInUser.pwd === loginPassword) {
        onLogin(loggedInUser, history);
      } else {
        console.log('Error, wrong password');
      }
    } catch {
      console.log('Error, wrong Email');
    }
  }

  return (
    <FormGrid>
      <Header>
        <Icon icon={faArrowLeft} onClick={() => history.goBack()} />
        <h1>LOG IN</h1>
      </Header>
      <StyledForm id="login" onSubmit={event => handleLogin(event)}>
        <Label
          form="login"
          content={
            <Input name="name" placeholder="Email or username..." type="text" />
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
    </FormGrid>
  );
}
