import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faComment,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../components/Avatar';

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 80px auto;
  border-bottom: 1px solid lightslategray;
  background: #008dff;
  color: white;
`;

const Heading = styled.h1`
  display: flex;
  color: white;
  font-family: Rubik;
  font-size: 1.5rem;
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  margin: 0;
`;

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1 / span 3;
  align-items: center;
  justify-items: center;
  padding: 0 0 10px;
  font-size: 1.5rem;
  color: #ddd;
  transition: all 0.2s ease-in-out;
`;

const StyledNavLink = styled(NavLink)`
  a:link,
  :visited {
    color: #0769b4;
  }
  &.active {
    color: white;
  }
`;

export default function Header({ heading, activeUser, fab, history }) {
  return (
    <>
      <StyledHeader>
        <Avatar src={activeUser.avatar.src} onClick={() => history.push(`/`)} />
        <Heading>{heading}</Heading>

        <Navigation>
          <StyledNavLink to="/ideas">
            <Icon icon={faLightbulb} />
          </StyledNavLink>
          <StyledNavLink to="/feedback">
            <Icon icon={faComment} />
          </StyledNavLink>

          <StyledNavLink to="/starred">
            <Icon icon={faStar} />
          </StyledNavLink>
        </Navigation>
      </StyledHeader>
      {fab}
    </>
  );
}
