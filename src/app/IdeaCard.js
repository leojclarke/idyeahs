import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uid from 'uid';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faStar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { CardAvatar } from '../components/Avatar';
import defaultAvatar from '../img/defaultAvatar.png';
import Tag from './IdeaTag';
import ContextMenu from './ContextMenu';
import DeleteModal from './DeleteModal';
import moment from 'moment';
moment.locale('de');

const CardContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(4, auto);
  background: white;
  width: 100%;
  color: rgba(12, 2, 1, 0.8);
  margin-top: 10px;
  border-radius: 3px;
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 70px auto 30px;
  width: 100%;
  border-bottom: 1px solid #efefef;
`;

const CardInfo = styled.div`
  display: grid;
  padding: 10px 0;
  align-items: stretch;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;

const ContextElipsis = styled.div`
  color: lightslategray;
  align-items: flex-start;
  justify-items: center;
`;

const CardBody = styled.div`
  padding: 0 20px;
  line-height: 1.4rem;
  font-size: 0.9rem;
`;

const CardTagsContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  color: white;
  padding: 15px 20px;
`;

const CardStatsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 10px 10px;
  margin: 0;
`;

const CardStats = styled.span`
  margin: 0 20px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const StyledIcon = styled(Icon)`
  color: #efc311;
`;

export default function Card({
  post,
  activeUser,
  onIdeaDelete,
  onStarAdd,
  onStarRemove,
  history,
}) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isStarred, setStarred] = useState(false);

  useEffect(() => checkIfStarred());
  const { id, title, text, tags, timestamp, author, stars, comments } = post;

  function checkIfStarred() {
    const activeUserHasStarred = stars.find(
      star => star.author.username === activeUser.username
    );
    setStarred(activeUserHasStarred === undefined ? true : false);
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

      <CardContainer>
        <CardHeader>
          <CardAvatar
            src={author.avatar.src || defaultAvatar}
            alt={author.avatar.alt}
            onClick={() => history.push(`/profile/${author.username}/`)}
          />
          <CardInfo>
            <Author
              onClick={() => history.push(`/profile/${author.username}/`)}
            >
              {author.firstname} {author.lastname}
            </Author>
            <Date>{moment(timestamp).format('DD. MMMM YY • HH:mm')}</Date>
          </CardInfo>

          <ContextElipsis>
            {author.username === activeUser.username && (
              <Icon icon={faEllipsisH} onClick={handleContextMenuVisible} />
            )}
          </ContextElipsis>
        </CardHeader>
        <CardBody onClick={() => history.push(`/ideas/${id}/details`)}>
          <h3>{title}</h3>
          <p>{text}</p>
        </CardBody>
        <CardTagsContainer>
          {tags && tags.map(tag => <Tag key={uid()} tagName={tag} />)}
        </CardTagsContainer>
        <CardStatsContainer>
          {isStarred ? (
            <Icon icon={faStar} onClick={() => handleStarClick()} />
          ) : (
            <StyledIcon icon={faStar} onClick={() => handleStarClick()} />
          )}

          <CardStats>{stars.length}</CardStats>

          <Icon
            icon={faComment}
            onClick={() => history.push(`/ideas/${id}/comment`)}
          />

          <CardStats>{comments.length}</CardStats>
        </CardStatsContainer>
      </CardContainer>
    </OutsideClickHandler>
  );
}
