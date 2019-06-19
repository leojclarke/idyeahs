import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import logo from '../img/idyeahsLogoWhite.png';
import SubmitButton from '../components/form/SubmitButton';

const HomeGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 180px;
  padding: 10px;
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(to right bottom, #008dff, #34cae2, #a3ded8);
`;

const ButtonContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  align-items: center;
  justify-items: center;
  padding: 10px;
`;

const Logo = styled(animated.img)`
  width: 200px;
`;

const ButtonTransparent = styled(SubmitButton)`
  background: transparent;
  border: 1px solid #008dff;
  color: #008dff;
`;

const ButtonFilled = styled(SubmitButton)`
  background: white;
  color: #008dff;
  border: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
`;

const LogOut = styled.div`
  width: 100%;
`;

export default function Home({ isLoggedIn, onLogOut, onProceed, history }) {
  const logoFadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <HomeGrid>
      <Logo src={logo} style={logoFadeIn} onClick={() => onProceed(history)} />
      <ButtonContainer>
        {!isLoggedIn && (
          <>
            <StyledNavLink to="/login">
              <ButtonFilled value="Log in" />
            </StyledNavLink>
            <StyledNavLink to="/signup">
              <ButtonTransparent value="Sign up" />
            </StyledNavLink>
          </>
        )}
        {isLoggedIn && (
          <LogOut onClick={() => onLogOut(history)}>
            <ButtonTransparent value="Log out" />
          </LogOut>
        )}
      </ButtonContainer>
    </HomeGrid>
  );
}
