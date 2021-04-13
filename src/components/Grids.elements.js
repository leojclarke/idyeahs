import styled from 'styled-components';

export const HomeGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 180px;
  padding: 10px;
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(to right bottom, #008dff, #34cae2, #a3ded8);
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 18vh 82vh;
`;

export const FeedGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: white;
  overflow: scroll;
  color: black;
`;

export const FeedGridIdeas = styled.div`
  display: flex;
  flex-direction: column;
  background: #efefef;
  overflow: scroll;
  color: black;
  padding: 0 5px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  padding: 20px;
  align-items: start;
  justify-items: center;
  color: darkslategray;
`;