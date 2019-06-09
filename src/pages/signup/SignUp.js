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
  grid-template-rows: 120px 140px auto;
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

const Greeting = styled.div`
  padding: 10px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const InlineLogo = styled.span`
  font-family: Rubik;
  letter-spacing: 0.1em;
`;

export default function Signup({ onLogin: handleLogin, history }) {
  return (
    <Grid>
      <Header>
        <StyledNavLink to="/">
          <Icon icon={faArrowLeft} />
        </StyledNavLink>
        <h1>SIGN UP</h1>
      </Header>
      <Greeting>
        <p>
          Hey, thank you for joining the <InlineLogo>IDYEAHS</InlineLogo>{' '}
          community!
        </p>
        <p>Please fill out the details below to register your account.</p>
      </Greeting>
      <StyledForm id="login" onSubmit={event => handleLogin(event, history)}>
        <Label
          form="login"
          content={
            <Input
              name="username"
              placeholder="Email or username..."
              type="text"
            />
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
        <Input name="password" placeholder="Password..." type="option" />
        <Input name="password" placeholder="Password..." type="option" />

        <SubmitButton value="Log in" />
      </StyledForm>
    </Grid>
  );
}
