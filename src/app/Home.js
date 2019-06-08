import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import GlobalStyles from './misc/GlobalStyles';
import logo from '../img/logo.png';

const props = useSpring({ opacity: 1, from: { opacity: 0 } });

const Home = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 50px;
  padding: 10px;
  overflow: none;
  align-items: center;
  justify-items: center;
  background: #a3ded8;
`;

const Logo = styled.img`
  width: 200px;
`;

export default function HomePage() {
  return (
    <Home>
      <GlobalStyles />
      <animated.div style={props}>
        <Logo src={logo} />
      </animated.div>
    </Home>
  );
}
