import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 150px 60px;
  padding: 10px;
`;

const StyledQuestionContainer = styled.div`
  display: grid;
  grid-template-rows: 90px 40px;
  padding: 0px 5px;
  margin-bottom: 20px;
  color: rebeccapurple;
  border: 0.5px dashed rebeccapurple;
`;

const StyledQuestion = styled.h3`
  color: rebeccapurple;
  border-bottom: 0.5px solid rebeccapurple;
`;

const StyledResponse = styled.div`
  display: flex;
  color: rebeccapurple;
  font-size: 0.6rem;
`;

const StyledButton = styled.button`
  display: flex;
  margin-bottom: 5px;
  padding: 5px;
  background: #dacc3e;
  justify-content: center;
  color: white;
  border: 1px solid #dacc3e;
  font-size: 1.3em;
`;

export default function FeedbackForm({ questions, onSubmit, history }) {
  return (
    <StyledForm onSubmit={event => onSubmit(event, history)}>
      <StyledQuestionContainer>
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
      </StyledQuestionContainer>
      <StyledButton>Add Feedback</StyledButton>
    </StyledForm>
  );
}
