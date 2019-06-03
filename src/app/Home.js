import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb, faComment);

const Home = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
  overflow: none;
  align-items: center;
  justify-items: center;
`;
const StyledNavLink = styled(NavLink)`
  color: rgb(218, 204, 62);
`;

export default function HomePage() {
  return (
    <Home>
      <StyledNavLink to="/ideas/add">
        <FontAwesomeIcon icon="lightbulb" size="10x" />
      </StyledNavLink>
      <StyledNavLink to="/feedback/add">
        <FontAwesomeIcon icon="comment" size="10x" />
      </StyledNavLink>
    </Home>
  );
}
