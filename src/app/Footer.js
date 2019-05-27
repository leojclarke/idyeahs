import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledFooter = styled.footer`
  background: rgba(127, 183, 190, 1);
  color: white;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Link to="/">IDEAS</Link>
      <Link to="/add-idea">ADD IDEA</Link>
    </StyledFooter>
  );
}
