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
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 83vw 12vw;
  grid-template-rows: 50px;
  align-content: center;
  justify-content: center;
  padding: 5px 10px;
`;

const SendButton = styled.button`
  background: #008dff;
  margin-left: 2px;
  color: white;
  border: 2px solid #008dff;
  height: 42px;
  padding: 0;
  border-radius: 3px;
`;

const StyledComments = styled.section`
  width: 100vw;
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
    onCommentSubmit(ideaId, newComment, history);
  }

  return (
    <Grid>
      <Header>
        <Icon
          icon={faArrowLeft}
          onClick={() => history.push(`/ideas/${ideaId}/details`)}
        />
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
                comment={comment}
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
