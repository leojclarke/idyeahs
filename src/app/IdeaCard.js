import React, { useState } from 'react';
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
  border-bottom: 0.5px solid lightslategray;
  color: rgba(12, 2, 1, 0.8);
  margin-top: 10px;
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 50px auto 40px;
  width: 100%;
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

const Date = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
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
  padding: 5px 10px 10px 10px;
  margin: 0 0;
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
  id,
  title,
  text,
  tags,
  timestamp,
  author,
  stars,
  comments,
  onIdeaDelete,
  onStarClick,
  history,
}) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isStarred, setStarred] = useState(false);

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
    setStarred(!isStarred);
    onStarClick(id, isStarred, history);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setContextMenuVisible(false)}>
      {isContextMenuVisible && (
        <ContextMenu
          id={id}
          onContextClose={handleContextMenuVisible}
          onDeleteModalClick={handleDeleteModalVisible}
          onIdeaDelete={onIdeaDelete}
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
          />
          <CardInfo>
            <Author>
              {author.firstname} {author.lastname}
            </Author>
            <Date>{timestamp}</Date>
          </CardInfo>

          <ContextElipsis>
            <Icon icon={faEllipsisH} onClick={handleContextMenuVisible} />
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
          {!isStarred ? (
            <Icon icon={faStar} onClick={() => handleStarClick()} />
          ) : (
            <StyledIcon icon={faStar} onClick={() => handleStarClick()} />
          )}

          <CardStats>{stars}</CardStats>

          <Icon
            icon={faComment}
            onClick={() => history.push(`/ideas/${id}/comment`)}
          />

          <CardStats>
            {comments.length !== undefined ? comments.length : 0}
          </CardStats>
        </CardStatsContainer>
      </CardContainer>
    </OutsideClickHandler>
  );
}
