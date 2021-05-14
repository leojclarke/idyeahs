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

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  text-decoration: none;
`;

const StyledSelect = styled.select`
  color: lightslategray;
  background: white;
  display: flex;
  flex-direction: column;
  height: 40px;
  padding: 0 5px;
  border-radius: 3px;
  border: 1px solid #008dff;
  font-size: 0.8em;
  line-height: 1.3rem;
  text-align: center;
  font-family: Roboto, Arial, Helvetica, sans-serif;
‚`;

export default function Signup({ users, onSignUp, history }) {
  function handleSignUp(event) {
    event.preventDefault();
    const form = event.target;
    const newUsers = [
      {
        username: form.username.value,
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        role: form.role.value,
        department: form.department.value,
        avatar: {
          src: '/images/defaultAvatar.png',
          alt: 'default Avatar',
        },
        pwd: form.password.value,
      },
      ...users,
    ];
    onSignUp(newUsers, history);
  }

  return (
    <FormGrid>
      <Header>
        <StyledNavLink to="/">
          <Icon icon={faArrowLeft} />
        </StyledNavLink>
        <h1>SIGN UP</h1>
      </Header>
      <StyledForm id="login" onSubmit={event => handleSignUp(event)}>
        <Label
          form="login"
          content={
            <Input name="firstname" placeholder="First name..." type="text" />
          }
          label="Enter your first name"
        />
        <Label
          form="login"
          content={
            <Input name="lastname" placeholder="Last name..." type="text" />
          }
          label="Enter your last name"
        />
        <Label
          form="login"
          content={<Input name="email" placeholder="Email..." type="email" />}
          label="Enter your @idyeahs.com email"
        />
        <Label
          form="login"
          content={
            <Input name="username" placeholder="Username..." type="text" />
          }
          label="Enter a username"
        />
        <Label
          form="login"
          content={
            <Input name="password" placeholder="Password..." type="password" />
          }
          label="Enter a password"
        />

        <Label
          form="login"
          content={
            <StyledSelect name="role">
              <option value="developer">frontend developer</option>
              <option value="helpdesk agent">helpdesk agent</option>
              <option value="logistics operative">logistics operative</option>
              <option value="project manager">project manager</option>
            </StyledSelect>
          }
          label="Choose your role"
        />
        <Label
          form="login"
          content={
            <StyledSelect name="department">
              <option value="development">development</option>
              <option value="logistics">logistics</option>
              <option value="production">production</option>
              <option value="service">service</option>
              <option value="sales">sales</option>
            </StyledSelect>
          }
          label="Choose your department"
        />
        <SubmitButton value="Sign up" />
      </StyledForm>
    </FormGrid>
  );
}
