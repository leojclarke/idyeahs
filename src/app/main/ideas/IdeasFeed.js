import React from 'react';
import IdeaPost from '../ideas/IdeaPost';

export default function IdeasFeed({ posts }) {
  return (
    <section>
      {posts.map(post => (
        <IdeaPost
          key={Math.random()}
          title={post.title}
          text={post.text}
          tags={post.tags}
        />
      ))}
    </section>
  );
}
