import React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'react-bootstrap';

const Grid = styled.div`
  display: grid;
  padding: 10px;
  overflow: scroll;
`;

const StyledForm = styled.form`
  display: grid;
`;

const StyledQuestionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
  justify-self: center;
  align-self: center;
  padding: 5px;
  margin-bottom: 10px;
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
  background: papayawhip;
  display: inline-flex;
  vertical-align: middle;
  flex-grow: 1;
  justify-content: space-between;
  height: 90%;
  color: rebeccapurple;
  justify-content: center;

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    border: 0;
  }

  label {
    background-color: #efefef;
    display: inline-block;
    flex: 1 1 auto;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 8px 16px;
    margin-right: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease-in-out;
  }

  label:hover {
    cursor: pointer;
  }

  input:checked + label {
    background-color: #a5dc86;
  }

  label:first-of-type {
    border-radius: 4px 0 0 4px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }

  label:last-of-type {
    border-radius: 0 4px 4px 0;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
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

const space_between = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '10px',
  margin: '0',
};

export default function FeedbackForm({ questions, handleSubmit, history }) {
  function handleFormSubmit(event, questions, history) {
    event.preventDefault();
    const form = event.target;
    const answers = questions.map(
      question => form[`q-${question.id + 1}`].value
    );
    console.log('Answers:', answers);
    handleSubmit(answers, history);
  }

  return (
    <Grid>
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
                defaultChecked={true}
              />
              <label htmlFor={`radio-${question.id + 'b'}`}>2</label>
              <input
                type="radio"
                name={`q-${question.id + 1}`}
                id={`radio-${question.id + 'c'}`}
                value="3"
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
            </StyledResponse>
            <div style={space_between}>
              <div>strongly disagree</div>
              <div>neutral</div>
              <div>strongly agree</div>
            </div>
          </StyledQuestionContainer>
        ))}

        <StyledButton>Add Feedback</StyledButton>
      </StyledForm>
    </Grid>
  );
}
