import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: rebeccapurple;
`;

const StyledResponse = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: rebeccapurple;
  font-size: 0.6rem;
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
  padding: 10px;
`;

export default function FeedbackForm({ questions, onSubmit, history }) {
  return (
    <StyledForm onSubmit={event => onSubmit(event, history)}>
      <StyledQuestion>
        Q{questions[0].question_id + 1}. {questions[0].question_text_en}
      </StyledQuestion>
      <StyledResponse>
        <div>
          <label>
            <input type="radio" name="res" value="1" />
            strongly disagree
          </label>
        </div>

        <div>
          <label>
            <input type="radio" name="res" value="2" />
            disagree
          </label>
        </div>

        <div>
          <label>
            <input type="radio" name="res" value="3" defaultChecked={true} />
            neutral
          </label>
        </div>

        <div>
          <label>
            <input type="radio" name="res" value="4" />
            agree
          </label>
        </div>

        <div>
          <label>
            <input type="radio" name="res" value="5" />
            strongly agree
          </label>
        </div>
      </StyledResponse>
      <StyledButton>SUBMIT IDEA</StyledButton>
    </StyledForm>
  );
}
