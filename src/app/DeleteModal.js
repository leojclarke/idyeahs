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
  background: yellow;
  opacity: 0.3;
  z-index: 45;
`;

const DeleteModalContainer = styled.div`
  display: grid;
  border: 1px solid lightslategray;
  width: 150px;
  height: 100px;
  position: fixed;
  bottom: 50vh;
  left: 50vw;
  z-index: 60;
  background: hotpink;
`;

const CancelButton = styled.button`
  background: papayawhip;
  width: 50px;
  height: 20px;
`;

const DeleteButton = styled.button`
  background: red;
  width: 50px;
  height: 20px;
`;

export default function DeleteModal({
  id,
  onIdeaDelete,
  onClearScreen,
  history,
}) {
  function handleIdeaDelete() {
    onIdeaDelete(id, history);
    onClearScreen();
  }

  return (
    <>
      <Blur onClick={onClearScreen} />
      <DeleteModalContainer>
        <CancelButton onClick={onClearScreen}>CANCEL</CancelButton>
        <DeleteButton onClick={() => handleIdeaDelete()}>DELETE</DeleteButton>
      </DeleteModalContainer>
    </>
  );
}
