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
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-items: center;
`;

const Logo = styled(animated.img)`
  width: 200px;
`;

const SignUpButton = styled(SubmitButton)`
  background: transparent;
  border: 1px solid #008dff;
  color: #008dff;
`;

const LoginButton = styled(SubmitButton)`
  background: white;
  border: white;
  color: #008dff;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
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
              <LoginButton value="Log in" />
            </StyledNavLink>
            <StyledNavLink to="/signup">
              <SignUpButton value="Sign up" />
            </StyledNavLink>
          </>
        )}
        {isLoggedIn && (
          <div onClick={() => onLogOut(history)}>
            <SignUpButton value="Log out" />
          </div>
        )}
      </ButtonContainer>
    </HomeGrid>
  );
}
