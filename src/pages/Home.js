import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HomeGrid } from '../components/Grids.elements';
import { ButtonFilled, ButtonTransparent } from '../components/Buttons.elements';
import { Logo } from '../components/Logos.elements';

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  justify-content:center;
  text-decoration: none;
  padding: 10px 0;
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
