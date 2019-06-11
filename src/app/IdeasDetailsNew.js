import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faStar,
  faArrowLeft,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
// import IdeaPost from './IdeaPost';
import style from './IdeasFeed.scss';
import leo from '../../img/leo.jpg';
import macready from '../../img/macready.jpg';
import AddButton, { CommentButton } from '../components/FAB';
import { Card, CardDetail } from './IdeaCard';
import { Avatar, CardAvatar } from './Avatar';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

const Header = styled.header`
  display: flex;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-items: left;
  border-bottom: 1px solid lightslategray;
  overflow: scroll;
`;

const Feed = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;
`;

const PageTitle = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

export default function IdeasDetails() {
  return (
    <Grid>
      <Header>
        <NavLink to="/ideas">
          <Icon icon={faArrowLeft} />
        </NavLink>
        <PageTitle>My Idea Details</PageTitle>
        <CommentButton />
      </Header>

      <Feed>
        <CardDetail />
      </Feed>
    </Grid>
  );
}
