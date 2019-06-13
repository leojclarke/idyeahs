import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';
import ContextMenuComment from './ContextMenuComment';
import DeleteCommentModal from './DeleteCommentModal';

import { CommentAvatar } from '../components/Avatar';
moment.locale('de');

const StyledCommentRow = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: auto;
  background: lightslategray;
  color: black;
  font-size: 0.8em;

  div :first-child {
    width: 50px;
    background: white;
  }

  div :nth-child(2) {
    width: auto;
    padding: 2px 5px;
    background: white;
    justify-content: start;
    align-content: center;
  }
`;

const Author = styled.span`
  font-weight: bold;
`;

const CommentText = styled.span`
  padding-left: 3px;
  color: blue;
`;

const TimeStamp = styled.span`
  color: lightslategray;
  font-size: 0.7rem;
`;

export default function Comment({
  id,
  ideaId,
  comment,
  author,
  timestamp,
  onCommentDelete,
  history,
}) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

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

  return (
    <OutsideClickHandler onOutsideClick={() => setContextMenuVisible(false)}>
      {isContextMenuVisible && (
        <ContextMenuComment
          id={id}
          onContextClose={handleContextMenuVisible}
          onDeleteModalClick={handleDeleteModalVisible}
          onCommentDelete={onCommentDelete}
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
          <CommentAvatar src={author.avatar.src} />
        </div>
        <div onClick={handleContextMenuVisible}>
          <Author>{author.firstname}</Author>

          <CommentText>{comment}</CommentText>
          <br />
          <TimeStamp>{moment(timestamp).fromNow()}</TimeStamp>
        </div>
      </StyledCommentRow>
    </OutsideClickHandler>
  );
}
