import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb, faComment);

const Home = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 50px;
  padding: 10px;
  overflow: none;
  align-items: center;
  justify-items: center;
`;
const StyledNavLink = styled(NavLink)`
  color: rgb(218, 204, 62);
  justify-items: center;
  text-decoration: none;
`;

const StyledLoginStatus = styled.div`
  display: grid;
  justify-items: center;
  padding: 10px;
  font-size: 1rem;
  color: rebeccapurple;
  line-height: 1rem;
`;

export default function HomePage({ user }) {
  return (
    <Home>
      <StyledNavLink to="/ideas/add">
        <FontAwesomeIcon icon="lightbulb" size="8x" />
      </StyledNavLink>
      <StyledNavLink to="/feedback/add">
        <FontAwesomeIcon icon="comment" size="8x" />
      </StyledNavLink>
      <StyledNavLink to="/login">
        {user && (
          <StyledLoginStatus>
            logged in as:
            <h2>{user}</h2>
          </StyledLoginStatus>
        )}
      </StyledNavLink>
    </Home>
  );
}
