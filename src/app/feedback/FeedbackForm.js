import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  justify-items: stretch;
  align-items: stretch;
  padding: 10px;
  overflow: scroll;
`;

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
`;

const StyledQuestionContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  padding: 10px;
  color: rebeccapurple;
  background: #efefef;
`;

const StyledQuestion = styled.div`
  display: grid;
  align-items: stretch;
  color: rebeccapurple;
  font-size: 1rem;
  line-height: 1.4rem;
  padding-bottom: 5px;
`;

const StyledRadioButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  vertical-align: middle;
  justify-content: center;
  color: rebeccapurple;

  input {
    display: none;
  }

  label {
    background-color: #efefef;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 8px 16px;
    margin-right: 0px;
    border-top: 1px solid rebeccapurple;
    border-bottom: 1px solid rebeccapurple;
    border-right: 1px solid rebeccapurple;
    transition: all 0.2s ease-in-out;
  }

  label:hover {
    cursor: pointer;
  }

  input:checked + label {
    background-color: rebeccapurple;
    color: white;
  }

  label:first-of-type {
    border-radius: 4px 0 0 4px;
    border-left: 1px solid rebeccapurple;
  }

  label:last-of-type {
    border-radius: 0 4px 4px 0;
    border-right: 1px solid rebeccapurple;
  }
`;

const StyledLegend = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  font-size: 0.7rem;
  margin: 0;
  padding: 5px 0;
  color: #a2a2a2;

  div:first-child {
    display: grid;
    justify-items: start;
  }

  div:nth-child(2) {
    display: grid;
    justify-items: center;
  }

  div:last-child {
    display: grid;
    justify-items: end;
  }
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

export default function FeedbackForm({
  questions,
  handleFeedbackSubmit,
  history,
}) {
  function handleFormSubmit(event, questions, history) {
    event.preventDefault();
    const form = event.target;
    const answers = questions.map(
      question => form[`q-${question.id + 1}`].value
    );
    handleFeedbackSubmit(answers, history);
  }

  return (
    <Grid>
      <StyledForm
        onSubmit={event => handleFormSubmit(event, questions, history)}
      >
        {questions.map(question => (
          <StyledQuestionContainer key={question.id}>
            <StyledQuestion>
              Q{question.id + 1}. {question.question_text_en}
            </StyledQuestion>

            <StyledRadioButtons>
              <input
                type="radio"
                name={`q-${question.id + 1}`}
                id={`radio-${question.id + 'a'}`}
                value="1"
              />
              <label htmlFor={`radio-${question.id + 'a'}`}>1</label>
              <input
                type="radio"
                name={`q-${question.id + 1}`}
                id={`radio-${question.id + 'b'}`}
                value="2"
              />
              <label htmlFor={`radio-${question.id + 'b'}`}>2</label>
              <input
                type="radio"
                name={`q-${question.id + 1}`}
                id={`radio-${question.id + 'c'}`}
                value="3"
                defaultChecked={true}
              />
              <label htmlFor={`radio-${question.id + 'c'}`}>3</label>
              <input
                type="radio"
                name={`q-${question.id + 1}`}
                id={`radio-${question.id + 'd'}`}
                value="4"
              />
              <label htmlFor={`radio-${question.id + 'd'}`}>4</label>
              <input
                type="radio"
                name={`q-${question.id + 1}`}
                id={`radio-${question.id + 'e'}`}
                value="5"
              />
              <label htmlFor={`radio-${question.id + 'e'}`}>5</label>
            </StyledRadioButtons>
            <StyledLegend>
              <div>strongly disagree</div>
              <div>neutral</div>
              <div>strongly agree</div>
            </StyledLegend>
          </StyledQuestionContainer>
        ))}

        <StyledButton>Add Feedback</StyledButton>
      </StyledForm>
    </Grid>
  );
}
