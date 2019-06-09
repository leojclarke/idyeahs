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
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import Select from 'react-select';

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
  color: #6558f5;
`;

const Footer = styled.footer`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: flex-end;
  color: #6558f5;
  div {
    padding-right: 10px;
  }
`;

const Greeting = styled.div`
  padding: 10px;
`;

const StyledForm = styled.form`
  display: grid;
  width: 100%;
  grid-template-rows: auto;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  text-decoration: none;
`;

const InlineLogo = styled.span`
  font-family: Rubik;
  letter-spacing: 0.1em;
`;

const roles = [
  { value: 'helpdesk-agent', label: 'helpdesk-agent' },
  { value: 'manager', label: 'manager' },
  { value: 'service-technician', label: 'service technician' },
];

const departments = [
  { value: 'helpdesk', label: 'helpdesk' },
  { value: 'sales', label: 'sales' },
  { value: 'projects', label: 'projects' },
];

const customStyle = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  container: styles => ({
    ...styles,
    marginBottom: '10px',
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #6558f5',
    fontSize: '0.8em',
    lineHeight: '1.6rem',
    color: 'darkslategrey',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'lightslategray',
    fontSize: '0.8rem',
  }),
};

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
        <Select
          options={roles}
          styles={customStyle}
          name="role"
          placeholder="role"
          label="role"
        />
        <Select
          options={departments}
          styles={customStyle}
          name="department"
          placeholder="department"
          label="department"
        />
      </StyledForm>
      <Footer>
        <StyledNavLink to="/signup-2">
          <div>NEXT</div>
          <Icon icon={faArrowRight} />
        </StyledNavLink>
      </Footer>
    </Grid>
  );
}
