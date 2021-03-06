import React from 'react';
import styled from 'styled-components';
import uid from 'uid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SubmitButton from '../components/form/SubmitButton';
import moment from 'moment';
moment.locale('de');

const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid lightslategray;
  overflow: scroll;
`;

const Main = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  background: #efefef;
  overflow: scroll;
`;

const PageTitle = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  color: black;
  padding: 0 10px;
  grid-gap: 5px;
`;

const StyledQuestionContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  color: darkslategray;
  padding: 0 10px;
  background: white;
  border: 1px solid #dedede;
  border-radius: 3px;
`;

const StyledQuestion = styled.div`
  display: grid;
  font-size: 1rem;
  line-height: 1.4rem;
  padding-bottom: 5px;
  border-bottom: 1px solid #efefef;

  div :first-child {
    background: green;
  }

  div :last-child {
    background: yellow;
  }
`;

const StyledRadioButtons = styled.div`
  display: flex;
  grid-template-columns: repeat(5, 1fr);
  vertical-align: middle;
  justify-content: space-between;

  input {
    display: none;
  }

  label {
    background-color: #fefefe;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 12px 24px;
    margin-right: 0px;
    border: 1px solid #008dff;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
  }

  input:checked + label {
    background-color: #008dff;
    color: white;
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

const AddFeedbackButton = styled(SubmitButton)`
  background: #efc311;
  border: none;
  margin: 15px 0;
`;

export default function FeedbackForm({
  questions,
  handleFeedbackSubmit,
  history,
}) {
  function handleFormSubmit(event, questions, history) {
    event.preventDefault();
    const form = event.target;
    const results = questions.map(
      question => form[`q-${question.id + 1}`].value
    );
    const response = {
      id: uid(),
      date: moment()._d,
      counter: 1,
      results: results,
    };
    handleFeedbackSubmit(response, history);
  }

  return (
    <Grid>
      <Header>
        <Icon icon={faArrowLeft} onClick={() => history.goBack()} />
        <PageTitle>ADD FEEDBACK</PageTitle>
      </Header>
      <Main>
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

          <AddFeedbackButton value="SUBMIT FEEDBACK" />
        </StyledForm>
      </Main>
    </Grid>
  );
}
