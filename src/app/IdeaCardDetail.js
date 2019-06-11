import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faStar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { CardAvatar } from '../components/Avatar';
import Tag from './IdeaTag';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(12, 2, 1, 0.8);
  &:active,
  :visited,
  :focus-within {
    text-decoration: none;
    color: rgba(12, 2, 1, 0.8);
  }
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(4, auto);
  background: white;
  width: 100%;
  border-bottom: 0.5px solid lightslategray;
  color: rgba(12, 2, 1, 0.8);
  margin-top: 10px;
`;

const CardContainerDetail = styled.section`
  display: grid;
  grid-template-rows: 60px auto 40px 40px 50px auto auto;
  background: white;
  width: 100%;
  color: rgba(12, 2, 1, 0.8);
  margin-top: 10px;
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 50px auto 30px;
  width: 100%;
`;

const CardInfo = styled.div`
  display: grid;
  margin-left: 20px;
  padding: 10px 0;
  align-items: stretch;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;

const ContextElipsis = styled.div`
  color: lightslategray;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-right: 20px;
`;

const CardBody = styled.div`
  padding: 0 20px;
  line-height: 1.6rem;
  font-size: 0.9rem;
`;

const CardTagsContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  color: white;
  padding: 15px 20px;
`;

const CardTag = styled(Tag)``;

const CardStatsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 10px 10px 10px;
  margin: 0 0;
`;

const CardStatsContainerDetail = styled(CardStatsContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px 10px 10px;
  margin: 0 0;
  background: #efefef;
  border-top: 1px solid lightslategray;
  border-bottom: 1px solid lightslategray;
`;

const CardCommentsContainer = styled.section`
  display: grid;
  margin: 0;
  border-top: 1px solid lightslategray;
  font-size: 0.8rem;
  line-height: 1rem;

  div :first-child {
    border-top: none;
  }
`;

const Comment = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: auto;
  background: plum;
  border-top: 1px solid lightslategray;
`;

const CommentAuthor = styled.div`
  display: grid;
  align-self: center;
`;

const CommentText = styled.span`
  display: flex;
  padding: 0 2px;
  align-items: flex-start;
`;

const CardStats = styled.span`
  margin: 0 8px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const DateDetail = {
  fontSize: '0.7rem',
  color: 'lightslategrey',
  paddingLeft: '20px',
};
export function CardDetail() {
  return (
    <CardContainerDetail>
      <CardHeader>
        <StyledLink to="/user" className="card-header">
          <CardAvatar src={macready} />
        </StyledLink>
        <CardInfo>
          <StyledLink to="/user">
            <Author>R.J. MacReady</Author>
          </StyledLink>
          <AuthorInfo>role | department</AuthorInfo>
        </CardInfo>

        <ContextElipsis>
          <Link to="/">
            <Icon icon={faEllipsisH} />
          </Link>
        </ContextElipsis>
      </CardHeader>
      <CardBody>
        <h2> Very DetailedCard Title</h2>
        <p>
          The primary task of a Spring is to move data from one state to
          another. The optional from-prop only plays a role when the component
          renders first, use the to-prop to update the spring with new values.
        </p>

        <br />
      </CardBody>
      <CardTagsContainer>
        <CardTag>sales</CardTag>
        <CardTag>production</CardTag>
        <CardTag>logistics</CardTag>
      </CardTagsContainer>
      <Date style={DateDetail}>12 June 2019 • 13:56</Date>
      <CardStatsContainerDetail>
        <CardStats>2 Stars</CardStats>
        <CardStats>0 Comments</CardStats>
      </CardStatsContainerDetail>

      <CardCommentsContainer>
        <Comment>
          <CommentAuthor>
            <CommentAvatar src={macready} />
          </CommentAuthor>
          <CommentText>My comment about this idea</CommentText>
        </Comment>

        <Comment>
          <CommentAuthor>
            <CommentAvatar src={macready} />
          </CommentAuthor>
          <CommentText>I also have a comment about this idea</CommentText>
        </Comment>
      </CardCommentsContainer>
    </CardContainerDetail>
  );
}
