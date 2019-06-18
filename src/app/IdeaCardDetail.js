import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uid from 'uid';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { CardAvatar } from '../components/Avatar';
import Tag from './IdeaTag';
import ContextMenu from './ContextMenu';
import DeleteModal from './DeleteModal';
import Comment from './Comment';
moment.locale('de');

const CardHeader = styled.header`
  display: grid;
  grid-template-columns: 50px auto 30px;
  width: 100%;
  color: darkslategray;
`;

const CardInfo = styled.div`
  display: grid;
  margin-left: 20px;
  padding: 10px 0;
  align-items: stretch;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
`;

const ContextElipsis = styled.div`
  color: lightslategray;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-right: 20px;
`;

const CardBody = styled.div`
  padding: 0 20px;
  line-height: 1.6rem;
  font-size: 0.9rem;
  color: darkslategray;
`;

const CardTagsContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  color: darkslategray;
  padding: 15px 20px;
`;

const CardStatsContainerDetail = styled.footer`
  align-items: center;
  padding: 5px 10px 10px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  background: #efefef;
  color: darkslategray;
  border-top: 1px solid lightslategray;
  border-bottom: 1px solid lightslategray;
`;

const CardStats = styled.span`
  margin: 0 8px;
  font-size: 0.9rem;

  span :first-child {
    font-weight: bold;
  }
`;

const Date = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-bottom: 10px;
`;

const StyledIcon = styled(Icon)`
  color: #efc311;
`;

const StyledComments = styled.section`
  width: 100vw;
  color: black;
  overflow: scroll;
`;

const StarContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: end;
`;

export default function IdeaCardDetail({
  id,
  post,
  activeUser,
  onIdeaDelete,
  onStarAdd,
  onStarRemove,
  onCommentEdit,
  onCommentDelete,
  history,
}) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isStarred, setStarred] = useState(false);

  const { title, text, tags, timestamp, stars, comments, author } = post;

  useEffect(() => checkIfStarred(), []);

  function checkIfStarred() {
    const activeUserHasStarred = stars.find(
      star => star.author.username === activeUser.username
    );
    setStarred(activeUserHasStarred === undefined ? true : false);
  }

  function handleStarClick() {
    const activeUserHasStarred = stars.find(
      star => star.author.username === activeUser.username
    );
    const newStar = {
      timestamp: moment()._d,
      author: {
        username: activeUser.username,
        email: activeUser.email,
      },
    };
    if (activeUserHasStarred === undefined) {
      setStarred(!isStarred);
      onStarAdd(id, newStar, history);
    } else {
      setStarred(!isStarred);
      const userName = activeUser.username;
      onStarRemove(id, userName);
    }
  }

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
        <ContextMenu
          id={id}
          onContextClose={handleContextMenuVisible}
          onDeleteModalClick={handleDeleteModalVisible}
          history={history}
        />
      )}

      {isDeleteModalVisible && (
        <DeleteModal
          id={id}
          onClearScreen={handleClearScreen}
          onIdeaDelete={onIdeaDelete}
          history={history}
        />
      )}

      <CardHeader>
        <CardAvatar src={author.avatar.src} />
        <CardInfo>
          <Author>
            {author.firstname} {author.lastname}
          </Author>
          <div>
            {author.role} | {author.department}
          </div>
        </CardInfo>

        <ContextElipsis>
          <Icon icon={faEllipsisH} onClick={handleContextMenuVisible} />
        </ContextElipsis>
      </CardHeader>
      <CardBody>
        <StarContainer>
          {isStarred ? (
            <Icon icon={faStar} onClick={() => handleStarClick()} />
          ) : (
            <StyledIcon icon={faStar} onClick={() => handleStarClick()} />
          )}
        </StarContainer>
        <h2>{title}</h2>
        <p>{text}</p>

        <br />
      </CardBody>
      <CardTagsContainer>
        {tags && tags.map(tag => <Tag key={uid()} tagName={tag} />)}
      </CardTagsContainer>
      <Date>{moment(timestamp).format("D. MMM 'YY • HH:mm")}</Date>
      <CardStatsContainerDetail>
        <CardStats>
          <span>{stars.length}</span> <span>Stars</span>
        </CardStats>
        <CardStats>
          <span>{comments.length}</span> <span>Comments</span>
        </CardStats>
      </CardStatsContainerDetail>

      <StyledComments>
        {comments &&
          comments.map(comment => (
            <Comment
              id={comment.id}
              ideaId={id}
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
    </OutsideClickHandler>
  );
}
