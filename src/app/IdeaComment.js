import React from 'react';
import styled from 'styled-components';
import uid from 'uid';
import moment from 'moment';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { findIdeaByIndex } from '../utils/utils';
import Comment from './Comment';
import Input from '../components/form/Input';

moment.locale('de');

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
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 83vw 12vw;
  grid-template-rows: 50px;
  align-content: center;
  justify-content: center;
  padding: 5px 10px;
  border-top: 1px solid darkslategray;
  box-shadow: 5px 14px 28px rgba(19, 22, 52, 0.25);
`;

const SendButton = styled.button`
  background: hotpink;
  padding: 1px;
  margin: 1px;
  color: white;
  border: 2px solid blue;
  border-radius: 3px;
`;

const StyledComments = styled.section`
  width: 100vw;
  color: black;
  overflow: scroll;
`;

export default function IdeaComment({
  posts,
  ideaId,
  history,
  author,
  onCommentSubmit,
  onCommentEdit,
  onCommentDelete,
}) {
  const index = findIdeaByIndex(ideaId, posts);
  const { title, comments } = posts[index];

  function handleCommentSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newComment = {
      id: uid(),
      author: author,
      comment: form.comment.value,
      timestamp: moment()._d,
    };
    form.comment.value = '';
    onCommentSubmit(ideaId, newComment);
  }

  return (
    <Grid>
      <Header>
        <Icon icon={faArrowLeft} onClick={() => history.goBack()} />
        <PageTitle>Comment on {title}</PageTitle>
      </Header>

      <Main>
        <StyledComments>
          {comments &&
            comments.map(comment => (
              <Comment
                id={comment.id}
                ideaId={ideaId}
                key={uid()}
                author={comment.author}
                comment={comment.comment}
                timestamp={comment.timestamp}
                onCommentEdit={onCommentEdit}
                onCommentDelete={onCommentDelete}
                history={history}
              />
            ))}
        </StyledComments>

        <StyledForm
          id="comment"
          onSubmit={event => {
            handleCommentSubmit(event);
          }}
        >
          <Input name="comment" type="text" />

          <SendButton>
            <Icon icon={faPaperPlane} />
          </SendButton>
        </StyledForm>
      </Main>
    </Grid>
  );
}
