import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import idyeahsLogoColor from '../images/idyeahsLogoColor.png';
import SubmitButton from '../components/form/SubmitButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faCheckCircle);

const Grid = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  padding: 20px;
  overflow: none;
  align-items: center;
  justify-items: center;
  background: white;
  color: black;

  p {
    align-self: start;
  }
`;

const Heading = styled.h1`
  align-self: end;
`;

const Logo = styled.img`
  width: 200px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
`;

const iconStyle = {
  color: 'green',
};

const ButtonFilled = styled(SubmitButton)`
  color: white;
  background: #008dff;
  border: none;
`;

export default function SignUpSuccess() {
  return (
    <Grid>
      <div>
        <Heading>Congratulations!</Heading>
        <p>You are now signed up for</p>
      </div>
      <Logo src={idyeahsLogoColor} />
      <Icon icon={faCheckCircle} size="4x" style={iconStyle} />

      <StyledNavLink to="/login">
        <ButtonFilled value="Log in" />
      </StyledNavLink>
    </Grid>
  );
}
