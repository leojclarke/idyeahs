import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import GlobalStyles from './misc/GlobalStyles';
import logo from '../img/logo.png';

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
      <Logo src={logo} />
    </Home>
  );
}
