import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faComment,
  faStar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
// import IdeaPost from './IdeaPost';
import style from './IdeasFeed.scss';
import leo from '../../img/leo.jpg';
import macready from '../../img/macready.jpg';
import { AddButton } from '../components/FAB';
import { Card } from '../IdeaCard';
import { Card2 } from './IdeaCard2';
import { Avatar, CardAvatar } from './Avatar';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-bottom: 1px solid lightslategray;
  overflow: hidden;
  background: #008dff;
`;

const Feed = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;

  h3 {
    margin: 0;
  }
`;

export default function IdeasFeed() {
  return (
    <Grid>
      <Header>
        <div className="heading">
          <NavLink to="/">
            <Avatar src={leo} />
          </NavLink>
          <AddButton />
          <div className="page-title">Ideas Feed</div>
        </div>

        <div className="nav">
          <div className="nav-item-active">
            <Icon icon={faLightbulb} />
          </div>
          <div className="nav-item">
            <Icon icon={faComment} />
          </div>
          <div className="nav-item">
            <Icon icon={faStar} />
          </div>
        </div>
      </Header>

      <Feed>
        <Card2 />
        <Card />
        <Card />
        <Card />
        <Card />
      </Feed>
    </Grid>
  );
}
