import React from 'react';
import styled from 'styled-components';

const Blur = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: lightslategray;
  opacity: 0.5;
  z-index: 45;
`;

const DeleteModalContainer = styled.div`
  border: 1px solid #dedede;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 60;
  background: white;
  box-shadow: 0 0 18px rgba(12, 22, 33, 0.25);
  border-radius: 5px;
`;

const DeleteModalBody = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 300px;
`;

const DeleteModalHeading = styled.h2`
  display: grid;
  grid-column: 1 / span 2;
  padding: 0;
  margin: 5px;
  font-size: 1.4rem;
  align-self: center;
  justify-self: center;
`;

const DeleteModalText = styled.p`
  display: grid;
  grid-column: 1 / span 2;
  align-self: center;
  justify-self: center;
  text-align: center;
  line-height: 1.6rem;
`;

const CancelButton = styled.button`
  display: grid;
  width: 100px;
  height: 25px;
  background: grey;
  color: white;
  border: 1px solid grey;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: Rubik, Roboto, open, sans-serif;
  text-transform: uppercase;
  align-self: center;
  justify-self: center;

  a :link,
  :visited,
  :active {
    text-decoration: none;
    border: none;
    color: white;
  }
`;

const DeleteButton = styled(CancelButton)`
  background: red;
  border: 1px solid red;
`;

export default function DeleteCommentModal({
  id,
  ideaId,
  onCommentDelete,
  onClearScreen,
  history,
}) {
  function handleCommentDelete() {
    onCommentDelete(id, ideaId, history);
    onClearScreen();
  }

  return (
    <>
      <Blur onClick={onClearScreen} />
      <DeleteModalContainer>
        <DeleteModalBody>
          <DeleteModalHeading>Delete Comment?</DeleteModalHeading>
          <DeleteModalText>
            Are you sure?
            <br />
            Because, this can't be undone.
          </DeleteModalText>
          <CancelButton onClick={onClearScreen}>CANCEL</CancelButton>
          <DeleteButton onClick={() => handleCommentDelete()}>
            DELETE
          </DeleteButton>
        </DeleteModalBody>
      </DeleteModalContainer>
    </>
  );
}
