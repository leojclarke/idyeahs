import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HomeGrid } from '../components/Grids.elements';
import { ButtonFilled, ButtonTransparent } from '../components/Buttons.elements';
import { Logo } from '../components/Logos.elements';

const ButtonContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  align-items: center;
  justify-items: center;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  justify-content:center;
  text-decoration: none;
`;

const LogOut = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  
`;

export default function Home({ isLoggedIn, onLogOut, onProceed, history }) {
  
  return (
    <HomeGrid>
      <Logo onClick={() => onProceed(history)} />
      <ButtonContainer>
        {!isLoggedIn && (
          <>
            <StyledNavLink to="/login">
              <ButtonFilled value="Log in" />
            </StyledNavLink>
            <StyledNavLink to="/signup">
              <ButtonTransparent value="Sign up" />
            </StyledNavLink>
          </>
        )}
        {isLoggedIn && (
          <LogOut onClick={() => onLogOut(history)}>
            <ButtonTransparent value="Log out" />
          </LogOut>
        )}
      </ButtonContainer>
    </HomeGrid>
  );
}
