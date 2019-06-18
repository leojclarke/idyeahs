import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CommentButton } from '../components/FAB';
import { findIdeaByIndex } from '../utils/utils';

import IdeaCardDetail from './IdeaCardDetail';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid lightslategray;
  overflow: scroll;
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: auto 80px;
  background: white;
`;

const PageTitle = styled.h1`
  color: darkslategray;
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

export default function IdeaDetailsView({
  posts,
  id,
  onContextClick,
  onIdeaDelete,
  onCommentEdit,
  onCommentDelete,
  onStarClick,
  history,
}) {
  const index = findIdeaByIndex(id, posts);
  const post = posts[index];

  return (
    <Grid>
      <Header>
        <Icon icon={faArrowLeft} onClick={() => history.goBack()} />
        <PageTitle>{post.title}</PageTitle>
        <CommentButton history={history} id={id} />
      </Header>
      <Main>
        <IdeaCardDetail
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.text}
          tags={post.tags}
          timestamp={post.timestamp}
          author={post.author}
          stars={post.stars}
          comments={post.comments}
          onContextClick={onContextClick}
          onStarClick={onStarClick}
          onIdeaDelete={onIdeaDelete}
          onCommentEdit={onCommentEdit}
          onCommentDelete={onCommentDelete}
          history={history}
        />
      </Main>
    </Grid>
  );
}