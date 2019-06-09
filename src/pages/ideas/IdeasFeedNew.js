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
import IdeaPost from './IdeaPost';
import style from './IdeasFeed.scss';
import leo from '../../img/leo.jpg';
import macready from '../../img/macready.jpg';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 17vh 83vh;
`;

const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-bottom: 0.5px solid lightslategray;
  overflow: hidden;
  background-image: linear-gradient(to right bottom, #34cae2, #a3ded8);

  z-index: 2;
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

const Avatar = styled.img`
  clip-path: circle(25px at center);
  width: 50px;
  margin: 10px;
  border: 1.5px solid #6558f5;
  border-radius: 50%;
`;

const CardAvatar = styled(Avatar)`
  clip-path: circle(20px at center);
  width: 40px;
  margin-left: 20px;
`;

const Card = () => {
  return (
    <section class="card">
      <div class="card-header">
        <CardAvatar src={macready} />
        <div class="card-detail">
          <div class="author">RJ MacReady</div>
          <div class="time">12 June 2019 • 13:56</div>
        </div>
        <div className="context">
          <Icon icon={faEllipsisH} />
        </div>
      </div>
      <div class="card-body">
        <h3>Card Title</h3>
        <p>
          The primary task of a Spring is to move data from one state to
          another. The optional from-prop only plays a role when the component
          renders first, use the to-prop to update the spring with new values.
        </p>
      </div>
      <div className="card-tags-container">
        <span className="card--tag">sales</span>
        <span className="card--tag">production</span>
        <span className="card--tag">logistics</span>
      </div>
      <div className="card-stats-container">
        <Icon icon={faStar} className="card-stats" />
        <span className="card-stats">2</span>
        <Icon icon={faComment} className="card-stats" />
        <span className="card-stats">0</span>
      </div>
    </section>
  );
};

export default function IdeasFeed() {
  return (
    <Grid>
      <Header>
        <div class="heading">
          <NavLink to="/">
            <Avatar src={leo} />
          </NavLink>
          <div class="page-title">Heading</div>
        </div>

        <div class="nav">
          <div class="nav-item">
            <Icon icon={faLightbulb} />
          </div>
          <div class="nav-item">
            <Icon icon={faComment} />
          </div>
          <div class="nav-item">
            <Icon icon={faStar} />
          </div>
        </div>
      </Header>

      <Feed>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Feed>
    </Grid>
  );
}
