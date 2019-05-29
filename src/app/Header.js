import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Heading = styled.header`
  background: rgba(127, 183, 190, 0.8);
`;
const Title = styled.h1`
  color: white;
  text-align: center;
  }
`;

export default function Header({ title }) {
  return (
    <Heading>
      <NavLink to="/">
        <Title>{title}</Title>
      </NavLink>
    </Heading>
  );
}
