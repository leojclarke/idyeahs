import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ContextMenuContainer = styled.div`
  display: grid;
  border-top: 1px solid lightslategray;
  box-shadow: 0 0 18px rgba(12, 22, 33, 0.25);
  grid-template-rows: 60px 60px;
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
  align-self: center;
  justify-self: start;
  font-size: 1rem;

  div :nth-child(2) {
    grid-colum: 1 / span 2;
  }
`;

const MenuIcon = styled(Icon)`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1.2rem;
`;

const CloseIcon = styled(Icon)`
  display: grid;
  align-self: start;
  justify-self: end;
  margin: 10px 10px 0 0;
`;

export default function ContextMenu({ onContextClose }) {
  return (
    <ContextMenuContainer>
      <MenuIcon icon={faPen} />
      <MenuOption>Edit post</MenuOption>
      <CloseIcon icon={faTimes} onClick={onContextClose} />
      <MenuIcon icon={faTrashAlt} />
      <MenuOption>Delete post</MenuOption>
    </ContextMenuContainer>
  );
}
