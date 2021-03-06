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

library.add(faTimes, faArrowRight, faArrowLeft);

const Grid = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  padding: 20px;
  align-items: start;
  justify-items: center;
  color: darkslategray;
`;

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

    const loginEmail = login.email.value;
    const loginPassword = login.password.value;

    const loggedInUser = users.find(user => user.email === loginEmail);

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
    <Grid>
      <Header>
        <Icon icon={faArrowLeft} onClick={() => history.goBack()} />
        <h1>LOG IN</h1>
      </Header>
      <StyledForm id="login" onSubmit={event => handleLogin(event)}>
        <Label
          form="login"
          content={<Input name="email" placeholder="Email..." type="email" />}
          label="Enter your email"
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
