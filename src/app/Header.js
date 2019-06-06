import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Heading = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: rgba(127, 183, 190, 0.8);
`;

const Title = styled.h1`
  display: grid;

  color: white;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export default function Header({ title }) {
  return (
    <Heading>
      <StyledNavLink to="/">
        <Title>{title}</Title>
      </StyledNavLink>
    </Heading>
  );
}
