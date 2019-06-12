import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Blur = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: lightslategray;
  opacity: 0.3;
  z-index: 40;
`;

const ContextMenuContainer = styled.div`
  display: grid;
  border-top: 1px solid lightslategray;
  box-shadow: 0 0 18px rgba(12, 22, 33, 0.25);
  grid-template-rows: 70px 70px;
  grid-template-columns: 80px auto 30px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  background: white;
`;

const MenuOption = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: start;
  font-size: 1.2rem;
`;

const MenuIcon = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const CloseIcon = styled(Icon)`
  display: grid;
  align-self: start;
  justify-self: end;
  font-size: 1rem;
  margin: 10px 10px 0 0;
`;

export default function ContextMenu({
  id,
  onContextClose,
  onDeleteModalClick,
  history,
}) {
  return (
    <>
      <Blur onClick={onContextClose} />
      <ContextMenuContainer>
        <MenuIcon onClick={() => history.push(`/ideas/${id}/edit`)}>
          <Icon icon={faPen} />
        </MenuIcon>
        <MenuOption onClick={() => history.push(`/ideas/${id}/edit`)}>
          Edit post
        </MenuOption>
        <CloseIcon icon={faTimes} onClick={onContextClose} />

        <MenuIcon onClick={onDeleteModalClick}>
          <Icon icon={faTrashAlt} />
        </MenuIcon>

        <MenuOption onClick={onDeleteModalClick}>Delete post</MenuOption>
      </ContextMenuContainer>
    </>
  );
}
