import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import style from '../../pages/ideas/IdeasFeed.scss';
import macready from '../../img/macready.jpg';
import { Avatar } from '../ideas/Avatar';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 17vh 83vh;
`;

const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-bottom: 0.5px solid lightslategray;
  overflow: hidden;
  background: white;
`;

const PageTitle = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
`;

export default function UserPage() {
  return (
    <Grid>
      <Header>
        <div className="heading">
          <NavLink to="/">
            <Avatar src={macready} />
          </NavLink>
          <PageTitle>Leo Clarke</PageTitle>
        </div>
      </Header>
      <div>This is the user profile page</div>
    </Grid>
  );
}
