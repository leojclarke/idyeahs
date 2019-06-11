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
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import SubmitButton from '../components/form/SubmitButton';

library.add(faTimes, faArrowRight, faArrowLeft);

const Grid = styled.div`
  display: grid;
  grid-template-rows: 130px auto;
  padding: 10px;
  align-items: start;
  justify-items: center;
  color: darkslategray;
`;

const Header = styled.header`
  display: flex;
  padding: 10px;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  color: #6558f5;
  h1 {
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
`;

const Greeting = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 100%;
  padding: 0px;
  margin: 0px;
  justify-self: start;
  align-self: start;
`;

const StyledForm = styled.form`
  display: grid;
  width: 100%;
  grid-template-rows: auto;
`;

const StyledNavLink = styled(NavLink)`
  align-items: baseline;
  text-decoration: none;
`;

export default function SignUpStepTwo() {
  return (
    <Grid>
      <Header>
        <StyledNavLink to="/signup">
          <Icon icon={faArrowLeft} />
        </StyledNavLink>
        <StyledNavLink to="/">
          <Icon icon={faTimes} />
        </StyledNavLink>
      </Header>
      <Greeting>
        <h1>First Last</h1>
        <p>role | department</p>
      </Greeting>
      <StyledForm id="login">
        <Label
          form="signup"
          content={<Input name="email" placeholder="Email..." type="text" />}
          label="Enter your email"
        />
        <Label
          form="signup"
          content={
            <Input name="username" placeholder="Username..." type="text" />
          }
          label="Enter a username"
        />
        <Label
          form="signup"
          content={
            <Input name="password" placeholder="Password..." type="password" />
          }
          label="Enter a password"
        />
        <StyledNavLink to="/signup-success">
          <SubmitButton value="Sign up" />
        </StyledNavLink>
      </StyledForm>
    </Grid>
  );
}
