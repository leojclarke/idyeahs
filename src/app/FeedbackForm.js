import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  padding: 10px;
  overflow: scroll;
`;

const StyledQuestionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0px 5px;
  margin-bottom: 20px;
  color: rebeccapurple;
`;

const StyledQuestion = styled.div`
  background: peachpuff;
  color: rebeccapurple;
  border-bottom: 0.5px solid rebeccapurple;
`;

const StyledResponse = styled.div`
  background: aquamarine;
  display: flex;
  align-items: center;
  text-align: center;
  color: rebeccapurple;
  font-size: 0.6rem;
`;

const StyledButton = styled.button`
  display: grid;
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
    <StyledForm
      onSubmit={event => {
        onSubmit(event, history);
        event.persist();
        console.log('Form result: ', event.res);
      }}
    >
      {questions.map(question => (
        <StyledQuestionContainer key={question.question_id}>
          <StyledQuestion>
            Q{question.question_id + 1}. {question.question_text_en}
          </StyledQuestion>
          <StyledResponse>
            <div>
              <label>
                <input
                  type="radio"
                  name={'res'[question.question_id]}
                  value="1"
                />
                strongly disagree
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name={'res'[question.question_id]}
                  value="2"
                />
                disagree
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name={'res'[question.question_id]}
                  value="3"
                  defaultChecked={true}
                />
                neutral
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name={'res'[question.question_id]}
                  value="4"
                />
                agree
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name={'res'[question.question_id]}
                  value="5"
                />
                strongly agree
              </label>
            </div>
          </StyledResponse>
        </StyledQuestionContainer>
      ))}

      <StyledButton>Add Feedback</StyledButton>
    </StyledForm>
  );
}
