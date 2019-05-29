import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb);

const Home = styled.div`
  display: grid;
  padding: 10px;
  overflow: none;
  align-content: center;
  justify-items: center;
`;

export default function HomePage() {
  return (
    <Home>
      <NavLink to="/ideas/add">
        <FontAwesomeIcon icon="lightbulb" size="10x" />
      </NavLink>
    </Home>
  );
}
