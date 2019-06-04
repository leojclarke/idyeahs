import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: grid;
  padding-bottom: 5px;
  font-size: 0.6em;
  color: rebeccapurple;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  padding: 10px;
`;

const StyledInput = styled.input`
  margin: 0 0 5px 0;
  padding: 5px;
  border: 1px solid rebeccapurple;
  font-size: 1.3em;
  line-height: 1.6rem;
`;

const StyledButton = styled.button`
  margin-bottom: 5px;
  padding: 5px;
  background: rgba(218, 204, 62, 1);
  color: white;
  border: 1px solid rgba(218, 204, 62, 1);
  font-size: 1.3em;
`;
const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 60px 60px;
`;

const StyledLoginStatus = styled.div`
  display: grid;
  align-content: top;
  padding-bottom: 5px;
  font-size: 1em;
  color: rebeccapurple;
`;

export default function UserLogin({ onSubmit, history, username }) {
  console.log(username);
  return (
    <Grid>
      <StyledForm onSubmit={event => onSubmit(event, history)}>
        <StyledLabel>
          user login
          <StyledInput
            name="username"
            placeholder="Enter username here..."
            type="text"
          />
        </StyledLabel>
        <StyledButton>LOGIN</StyledButton>
      </StyledForm>
      <StyledLoginStatus>logged in as: {username}</StyledLoginStatus>
    </Grid>
  );
}
