import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import style from './IdeasFeed.scss';
import { AddButton } from '../components/FAB';
import { Card } from './IdeaCard';
import { Avatar } from '../components/Avatar';
import Header from './Header';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

const Feed = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;
  color: black;
`;

export default function IdeasFeed() {
  return (
    <Grid>
      <Header heading="Ideas Feed" />
      <Feed />
    </Grid>
  );
}
