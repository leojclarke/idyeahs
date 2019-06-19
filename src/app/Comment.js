import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import moment from 'moment';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContextMenuComment from './ContextMenuComment';
import DeleteCommentModal from './DeleteCommentModal';
import Input from '../components/form/Input';
import { CommentAvatar } from '../components/Avatar';
moment.locale('de');

const StyledCommentRow = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: auto;
  color: black;
  font-size: 0.8em;
  border-bottom: 1px solid #dedede;

  div :first-child {
    width: 50px;
  }

  div :nth-child(2) {
    width: auto;
    padding: 2px 5px;
  }
`;

const CommentBody = styled.div`
  align-self: center;
`;

const Author = styled.span`
  font-weight: bold;
  color: #008dff;
`;

const CommentText = styled.p`
  display: inline;
  padding-left: 3px;
  color: darkslategray;
`;

const TimeStamp = styled.span`
  color: lightslategray;
  font-size: 0.7rem;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 80% 20%;
  align-content: center;
  justify-content: center;
  padding: 2px;
`;

const SendButton = styled.button`
  background: hotpink;
  padding: 1px;
  margin: 1px;
  color: white;
  border: 2px solid blue;
  border-radius: 3px;
`;

export default function Comment({
  id,
  ideaId,
  comment,
  author,
  timestamp,
  onCommentEdit,
  onCommentDelete,
  history,
}) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isCommentEditable, setCommentIsEditable] = useState(false);

  function handleContextMenuVisible() {
    setContextMenuVisible(!isContextMenuVisible);
  }

  function handleClearScreen() {
    setContextMenuVisible(false);
    setDeleteModalVisible(false);
  }

  function handleDeleteModalVisible() {
    setDeleteModalVisible(!isDeleteModalVisible);
    setContextMenuVisible(false);
  }

  function handleEditComment() {
    setCommentIsEditable(!isCommentEditable);
    setContextMenuVisible(!isContextMenuVisible);
  }

  function handleEditedCommentSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const editedComment = {
      ...comment,
      comment: form.comment.value,
      timestamp: moment()._d,
    };
    onCommentEdit(ideaId, editedComment);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setContextMenuVisible(false)}>
      {isContextMenuVisible && (
        <ContextMenuComment
          id={id}
          onContextClose={handleContextMenuVisible}
          onDeleteModalClick={handleDeleteModalVisible}
          onCommentEdit={handleEditComment}
          history={history}
        />
      )}

      {isDeleteModalVisible && (
        <DeleteCommentModal
          id={id}
          ideaId={ideaId}
          onClearScreen={handleClearScreen}
          onCommentDelete={onCommentDelete}
          history={history}
        />
      )}

      <StyledCommentRow>
        <div>
          <CommentAvatar
            src={author.avatar.src}
            alt={author.avatar.alt}
            onClick={() => history.push(`/profile/${author.username}/`)}
          />
        </div>

        {!isCommentEditable ? (
          <CommentBody onClick={handleContextMenuVisible}>
            <Author>{author.username}</Author>

            <CommentText>{comment.comment}</CommentText>
            <br />
            <TimeStamp>{moment(timestamp).fromNow()}</TimeStamp>
          </CommentBody>
        ) : (
          <div>
            <StyledForm
              id="comment"
              onSubmit={event => {
                handleEditedCommentSubmit(event);
              }}
            >
              <Input name="comment" type="text" value={comment.comment} />

              <SendButton>
                <Icon icon={faPaperPlane} />
              </SendButton>
            </StyledForm>
          </div>
        )}
      </StyledCommentRow>
    </OutsideClickHandler>
  );
}
