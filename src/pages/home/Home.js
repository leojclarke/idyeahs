import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../misc/GlobalStyles';
import { useSpring, animated } from 'react-spring';
import logo from '../../img/logo.png';
import SubmitButton from '../../components/form/SubmitButton';

const HomeGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 180px;
  padding: 10px;
  overflow: none;
  align-items: center;
  justify-items: center;
  background: #a3ded8;
`;

const ButtonContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Logo = styled(animated.img)`
  width: 200px;gaa
`;

const SignUpButton = styled(SubmitButton)``;

export default function Home() {
  const logoFadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 700 },
  });
  const signup = {
    background: '#a3ded8',
    border: '1px solid #6558f5',
    color: '#6558f5',
  };
  return (
    <HomeGrid>
      <GlobalStyles />
      <Logo src={logo} style={logoFadeIn} />
      <ButtonContainer>
        <SubmitButton value="Log in" />
        <SignUpButton style={signup} value="Sign up" />
      </ButtonContainer>
    </HomeGrid>
  );
}
