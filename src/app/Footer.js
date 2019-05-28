import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLightbulb } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faLightbulb);

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  background: rgba(127, 183, 190, 1);
  color: white;
  font-size: 1.3rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <NavLink to="/ideas">
        <FontAwesomeIcon icon="lightbulb" />
      </NavLink>
      <NavLink to="/ideas/add">
        <FontAwesomeIcon icon="plus" />
      </NavLink>
    </StyledFooter>
  );
}
