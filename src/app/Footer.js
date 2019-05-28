import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
      <NavLink to="/ideas">IDEAS</NavLink>
      <NavLink to="/ideas/add">ADD IDEA</NavLink>
    </StyledFooter>
  );
}
