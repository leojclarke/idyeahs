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

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 50px auto 40px;
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
  line-height: 1.4rem;
  font-size: 0.9rem;
`;

const CardTagsContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  color: white;
  padding: 15px 20px;
`;

const CardStatsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 10px 10px 10px;
  margin: 0 0;
`;

const CardStats = styled.span`
  margin: 0 8px;
  font-size: 0.9rem;
  font-weight: bold;
`;

export default function Card({ title, text, tags, timestamp, author }) {
  return (
    <CardContainer>
      <CardHeader>
        <StyledLink to="/user" className="card-header">
          <CardAvatar src={author.avatar.src} alt={author.avatar.alt} />
        </StyledLink>
        <CardInfo>
          <StyledLink to="/user">
            <Author>
              {author.firstname} {author.lastname}
            </Author>
          </StyledLink>
          <Date>{timestamp}</Date>
        </CardInfo>

        <ContextElipsis>
          <Link to="/">
            <Icon icon={faEllipsisH} />
          </Link>
        </ContextElipsis>
      </CardHeader>
      <StyledLink to="ideas/details">
        <CardBody>
          <h3>{title}</h3>
          <p>{text}</p>
        </CardBody>
      </StyledLink>
      <CardTagsContainer>
        {tags && tags.map(tag => <Tag key={tag} tagName={tag} />)}
      </CardTagsContainer>
      <CardStatsContainer>
        <Icon icon={faStar} className="card-stats" />
        <CardStats>2</CardStats>
        <Icon icon={faComment} className="card-stats" />
        <CardStats>0</CardStats>
      </CardStatsContainer>
    </CardContainer>
  );
}
