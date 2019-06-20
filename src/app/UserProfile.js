import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faComment,
  faStar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { ProfileAvatar } from '../components/Avatar';
import ContextMenuUserProfile from './ContextMenuUserProfile';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  overflow: scroll;
  color: darkslategray;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 10px;
  width: 100%;
  overflow: scroll;
  background: #008dff;
  color: white;
`;

const UserInfo = styled.section`
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

const CardStats = styled.span`
  margin: 0 10px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const User = styled.h1`
  margin: 0;
  padding: 5px 0;
`;
const MyIdeas = styled.div`
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

const Role = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin: 0;
  padding: 5px 0;
`;

const Department = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  margin: 0;
  padding: 5px 0;
`;

const UserPosts = styled.section`
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

const UserPost = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.4fr 0.4fr;
  grid-template-rows: 15px;
  padding: 10px;
`;

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: Rubik, 'Open Sans', 'sans serif';
  padding-left: 10px;
`;

const ContextElipsis = styled.div`
  color: white;
  align-items: flex-start;
  justify-items: center;
`;

export default function UserPage({
  users,
  userID,
  activeUser,
  posts,
  onLogOut,
  history,
}) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);

  const user = users.find(user => user.username === userID);
  console.log(userID, user.username);

  function getFilteredPosts() {
    return posts.filter(post => post.author.username === userID);
  }

  const userPosts = getFilteredPosts();

  function handleContextMenuVisible() {
    setContextMenuVisible(!isContextMenuVisible);
  }

  return (
    <Grid>
      <Header>
        <Icon icon={faArrowLeft} onClick={() => history.goBack()} />
        <PageTitle>Profile</PageTitle>
      </Header>
      <OutsideClickHandler onOutsideClick={() => setContextMenuVisible(false)}>
        <FeedGrid>
          {isContextMenuVisible && (
            <ContextMenuUserProfile
              onContextClose={handleContextMenuVisible}
              onLogOut={onLogOut}
              history={history}
            />
          )}
          <UserInfo>
            <div>
              <ProfileAvatar src={user.avatar.src} alt={user.avatar.alt} />
            </div>
            <div>
              <User>
                {user.firstname} {user.lastname}
              </User>
              <Role>{user.role}</Role>
              <Department>{user.department}</Department>
            </div>
            <ContextElipsis>
              {userID === activeUser.username && (
                <Icon icon={faEllipsisH} onClick={handleContextMenuVisible} />
              )}
            </ContextElipsis>
          </UserInfo>
          <MyIdeas>
            <h2>My Ideas</h2>
          </MyIdeas>
          <UserPosts>
            {userPosts.map(post => (
              <UserPost
                onClick={() => history.push(`/ideas/${post.id}/details`)}
                key={post.id}
              >
                {post.title}
                <span>
                  <Icon icon={faStar} />
                  <CardStats>{post.stars.length}</CardStats>
                </span>
                <span>
                  <Icon icon={faComment} />
                  <CardStats>{post.comments.length}</CardStats>
                </span>
              </UserPost>
            ))}
          </UserPosts>
        </FeedGrid>
      </OutsideClickHandler>
    </Grid>
  );
}
