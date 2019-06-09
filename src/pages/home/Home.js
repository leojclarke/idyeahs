import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import logo from '../../img/idyeahsLogoWhite.png';
import SubmitButton from '../../components/form/SubmitButton';

const HomeGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 180px;
  padding: 10px;
  overflow: none;
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(
    to right bottom,
    #6558f5,
    #008dff,
    #00b0fb,
    #34cae2,
    #a3ded8
  );
`;

const ButtonContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  align-items: center;
  justify-items: center;
`;

const Logo = styled(animated.img)`
  width: 200px;
`;

const SignUpButton = styled(SubmitButton)`
  background: transparent;
  border: 1px solid #6558f5;
  color: #6558f5;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export default function Home() {
  const logoFadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <HomeGrid>
      <StyledNavLink to="/ideas">
        <Logo src={logo} style={logoFadeIn} />
      </StyledNavLink>
      <ButtonContainer>
        <StyledNavLink to="/login">
          <SubmitButton value="Log in" />
        </StyledNavLink>
        <StyledNavLink to="/signup">
          <SignUpButton value="Sign up" />
        </StyledNavLink>
      </ButtonContainer>
    </HomeGrid>
  );
}
