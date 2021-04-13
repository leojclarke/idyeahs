
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

export const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  overflow: scroll;
  color: darkslategray;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 10px;
  width: 100%;
  overflow: scroll;
  background: #008dff;
  color: white;
`;

export const UserInfo = styled.section`
  display: grid;
  grid-template-columns: 120px auto 30px;
  justify-items: center;
  align-items: start;
  border-bottom: 1px solid darkslategray;
  background: #008dff;
  color: white;

  div :nth-child(2) {
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: start;
    align-content: center;
  }
`;

export const CardStats = styled.span`
  margin: 0 10px;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const User = styled.h1`
  margin: 0;
  padding: 5px 0;
`;
export const MyIdeas = styled.div`
  margin: 0;
  padding: 15px 0;
  background: #efefef;
  font-family: Rubik;
  h2 {
    margin: 0;
    padding-left: 20px;
    color: darkslategray;
  }
`;

export const Role = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin: 0;
  padding: 5px 0;
`;

export const Department = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  margin: 0;
  padding: 5px 0;
`;

export const UserPosts = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: bold;

  div :first-child {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }

  div :last-child {
    border-bottom: 1px solid #efefef;
  }
`;

export const UserPost = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.4fr 0.4fr;
  grid-template-rows: 15px;
  padding: 10px;
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

export const ContextElipsis = styled.div`
  color: white;
  align-items: flex-start;
  justify-items: center;
`;

