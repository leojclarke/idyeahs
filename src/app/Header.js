import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faComment,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import defaultAvatar from '../img/defaultAvatar.png';
import { Avatar } from '../components/Avatar';
import { AddButton } from '../components/FAB';

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 80px auto;
  border-bottom: 1px solid lightslategray;
  overflow: hidden;
  background: #008dff;
  color: white;
`;

const Heading = styled.header`
  display: flex;
  color: white;
  font-family: Rubik;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
`;

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1 / span 3;
  align-items: center;
  justify-items: center;
  padding: 0 0 10px 0;
  font-size: 1.5rem;
  color: #ddd;
`;

const StyledNavLink = styled(NavLink)`
  a:link,
  :visited {
    color: #0769b4;
  }

  a:active {
    color: white;
  }
`;

export default function Header({ heading, activeUser }) {
  return (
    <>
      <StyledHeader>
        <StyledNavLink to="/">
          <Avatar src={activeUser.avatar.src || defaultAvatar} />
        </StyledNavLink>
        <Heading>{heading}</Heading>

        <Navigation>
          <StyledNavLink to="/">
            <Icon icon={faLightbulb} />
          </StyledNavLink>
          <StyledNavLink to="/">
            <Icon icon={faComment} />
          </StyledNavLink>

          <StyledNavLink to="/">
            <Icon icon={faStar} />
          </StyledNavLink>
        </Navigation>
      </StyledHeader>
      <AddButton />
    </>
  );
}
