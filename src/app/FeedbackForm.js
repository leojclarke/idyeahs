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
  padding: 10px;
  margin-bottom: 20px;
  line-height: 1.4rem;
  color: rebeccapurple;
  background: #efefef;
`;

const StyledQuestion = styled.div`
  color: rebeccapurple;
  font-size: 1rem;
  padding-bottom: 10px;
`;

const StyledResponse = styled.div`
  display: flex;
  height: 35px;
  align-content: center;
  color: rebeccapurple;
`;

const StyledSubmitButton = styled.button`
  display: grid;
  margin-bottom: 5px;
  padding: 5px;
  background: #dacc3e;
  justify-content: center;
  color: white;
  border: 1px solid #dacc3e;
  font-size: 1.3em;
`;

export default function FeedbackForm({ questions, handleSubmit, history }) {
  function handleFormSubmit(event, questions, history) {
    event.preventDefault();
    const form = event.target;
    const answers = questions.map(question => form[`q-${question.id}`].value);
    console.log('Answers:', answers);
    handleSubmit(answers, history);
  }

  return (
    <StyledForm
      id="addFeedback"
      onSubmit={event => handleFormSubmit(event, questions, history)}
    >
      {questions.map(question => (
        <StyledQuestionContainer key={question.id}>
          <StyledQuestion>
            <strong>Q{question.id + 1}.</strong> {question.question_text_en}
          </StyledQuestion>
          <StyledResponse>
            <input
              type="radio"
              name={`q-${question.id}`}
              id="radio-1"
              value="1"
            />
            <label htmlFor="radio-1">strongly disagree</label>
            <input
              type="radio"
              name={`q-${question.id}`}
              id="radio-2"
              value="2"
              defaultChecked={true}
            />
            <label htmlFor="radio-2">disagree</label>
            <input
              type="radio"
              name={`q-${question.id}`}
              id="radio-3"
              value="3"
            />
            <label htmlFor="radio-3">neutral</label>
            <input
              type="radio"
              name={`q-${question.id}`}
              id="radio-4"
              value="4"
            />
            <label htmlFor="radio-4">agree</label>
            <input
              type="radio"
              name={`q-${question.id}`}
              id="radio-5"
              value="5"
            />
            <label htmlFor="radio-5">strongly agree</label>
          </StyledResponse>
        </StyledQuestionContainer>
      ))}

      <StyledSubmitButton>Add Feedback</StyledSubmitButton>
    </StyledForm>
  );
}
