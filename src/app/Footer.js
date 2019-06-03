import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb, faComment);

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  background: #7fb7be;
  color: white;
  font-size: 1.3rem;
`;

const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: rebeccapurple;
  font-size: 1.4rem;
  &.active:focus {
    color: white;
  }
`;

export default function Footer({ resetFilter }) {
  return (
    <StyledFooter>
      <StyledNavLink to="/ideas" onClick={resetFilter}>
        <FontAwesomeIcon icon="lightbulb" />
      </StyledNavLink>
      <StyledNavLink to="/feedback" onClick={resetFilter}>
        <FontAwesomeIcon icon="comment" />
      </StyledNavLink>
    </StyledFooter>
  );
}
