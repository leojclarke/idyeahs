import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  CardStats,
  ContextElipsis,
  Department,
  FeedGrid,
  Grid,
  Header,
  MyIdeas,
  PageTitle,
  Role,
  User,
  UserInfo,
  UserPost,
  UserPosts,
} from '../components/UserProfile.elements';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faComment,
  faStar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { ProfileAvatar } from '../components/Avatar';
import ContextMenuUserProfile from '../components/ContextMenuUserProfile';

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
